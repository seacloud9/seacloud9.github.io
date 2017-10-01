/**
 * Created by brsmith on 4/9/17.
 */
require('aframe');
//require('aframe-extras');
require('aframe-soundscape-component');
require('aframe-boids-component');
require('aframe-canvas');
require('./vendor/processing');

//require('aframe-orbit-controls-component');


window.scaleSound = 0.5;

//document.querySelector('#boidCam192').setAttribute('camera', 'active', true);

window._initProcessing = function(){
    $(function(){
        window.component = document.querySelector("#soundScape").components["canvas-material"];
        $('#soundScape')[0].components['canvas-material'].canvas.id = 'hypeProcessingSketch';
        $('#glamProcessing').append($('#soundScape')[0].components['canvas-material'].canvas);
        var p1 = new Processing.loadSketchFromSources($('#soundScape')[0].components['canvas-material'].canvas, ['/vendor/grid.pde']);
        setTimeout(function(){
            this.__proto__.initSoundScape.apply(this);
            this.hasInit = true;
        }.bind(this), 500)
    }.bind(this))

    //soundScapeNM
    /*
    window.componentNM = document.querySelector("#soundScapeNM").components["canvas-material"];
    $('#soundScapeNM')[0].components['canvas-material'].canvas.id = 'hypeProcessingSketchNM';
    $('#glamProcessing').append($('#soundScapeNM')[0].components['canvas-material'].canvas);
    var p2 = new Processing.loadSketchFromSources($('#soundScapeNM')[0].components['canvas-material'].canvas, ['/vendor/grid.pde']);
    */

}

