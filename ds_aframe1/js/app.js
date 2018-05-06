(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("js/clouds.js", function(exports, require, module) {

const fragmentCloudShader = `
uniform sampler2D map;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

varying vec2 vUv;

void main() {

  float depth = gl_FragCoord.z / gl_FragCoord.w;
  float fogFactor = smoothstep( fogNear, fogFar, depth );

  gl_FragColor = texture2D( map, vUv );
  gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
  gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );

}
`
const vertexCloudShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}
`

window.AFRAME.registerComponent('clouds', {
  schema: {
    start_time: {default: new Date()},
    totalClouds: {default: 800},
    activeCamera: {default: null},
    id: {default: null},
    width: {default: 512},
    height: {default: 512}
  },
  buildClouds: function (scene) {
    let object = this.el.object3D
    var loader = new window.THREE.TextureLoader()
    var texture = loader.load('./images/cloud10.png', scene.render)

    texture.magFilter = window.THREE.LinearMipMapLinearFilter
    texture.minFilter = window.THREE.LinearMipMapLinearFilter
    var fog = new window.THREE.Fog(0xc6dff4, 0, 800)
    let material = new window.THREE.ShaderMaterial({
      uniforms: {
        'map': { type: 't', value: texture },
        'fogColor': { type: 'c', value: fog.color },
        'fogNear': { type: 'f', value: fog.near },
        'fogFar': { type: 'f', value: fog.far }
      },
      vertexShader: vertexCloudShader,
      fragmentShader: fragmentCloudShader,
      depthWrite: false,
      depthTest: false,
      transparent: true
    })
    let geometry = new window.THREE.Geometry()
    var plane = new window.THREE.Mesh(new window.THREE.PlaneGeometry(64, 64))

    for (var i = 0; i < this.data.totalClouds; i++) {
      plane.position.x = Math.random() * 1000 - 500
      plane.position.y = -Math.random() * Math.random() * 200 - 15
      plane.position.z = i
      plane.rotation.z = Math.random() * Math.PI
      plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5
      window.THREE.GeometryUtils.merge(geometry, plane)
    }

    let mesh = new window.THREE.Mesh(geometry, material)
    object.add(mesh)
    mesh = new window.THREE.Mesh(geometry, material)
    mesh.position.z = -this.data.totalClouds
    object.add(mesh)
  },

  init: function () {
    this.buildClouds(this.el.sceneEl)
    this.data.activeCamera = this.el.sceneEl.camera
  },
  tick: function () {
    if (this.data.activeCamera) {
      let position = ((Date.now() - this.data.start_time) * 0.03) % this.data.totalClouds
      this.data.activeCamera.position.x += (this.data.activeCamera.position.x) * 0.01
      this.data.activeCamera.position.y += (this.data.activeCamera.position.y) * 0.01
      this.data.activeCamera.position.z = -position + this.data.totalClouds
    }
  }
})

});

;require.register("js/index.js", function(exports, require, module) {
require('aframe')
require('./initialize')
});

;require.register("js/initialize.js", function(exports, require, module) {
require('aframe-animation-component')
require('aframe-effects')
require('aframe-text-geometry-component')
require('aframe-environment-component')
require('aframe-preloader-component')
var extras = require('aframe-extras')
require('./clouds')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialized app')
})

});

;require.alias("node-browser-modules/node_modules/buffer/index.js", "buffer");
require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  

// Auto-loaded modules from config.npm.globals.
window.AFRAME = require("aframe");


});})();require('___globals___');

require('js/initialize.js');
//# sourceMappingURL=app.js.map