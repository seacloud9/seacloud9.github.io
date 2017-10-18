// Set this to true for production
var doCache = false;

// Name our cache
var CACHE_NAMES = {
  app: 'ethereal-v1',
  vendor: 'vendor-ethereal-v1'
};

var URLS = {
  app: [
    './',
    './js/app.js',
    './index.html',
    './manifest.json',
    "./images/icon/launcher-icon-0-75x.png",
    "./images/icon/launcher-icon-1x.png",
    "./images/icon/launcher-icon-1-5x.png",
    "./images/icon/launcher-icon-2x.png",
    "./images/icon/launcher-icon-3x.png",
    "./images/icon/launcher-icon-4x.png",
    "./images/icon/launcher-icon-512px.png"
  ],
  vendor: [

  ]
}


self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
})

function cacheAll(cacheName, urls) {
  return caches.open(cacheName).then((cache) => cache.addAll(urls));
}

function addToCache(cacheName, request, response) {
  if (response.ok) {
    var clone = response.clone()
    caches.open(cacheName).then((cache) => cache.put(request, clone));
  }
  return response;
}

function lookupCache(request) {
  return caches.match(request).then(function(cachedResponse) {
    if (!cachedResponse) {
      throw Error(`${request.url} not found in cache`);
    }
    return cachedResponse;
  });
}

function fetchThenCache(request, cacheName) {
  var fetchRequest = fetch(request);
  // add to cache, but don't block resolve of this promise on caching
  fetchRequest.then((response) => addToCache(cacheName, request, response));
  return fetchRequest;
}

function raceRequest(request, cacheName) {
  var attempts = [
    fetchThenCache(request, cacheName),
    lookupCache(request)
  ];
  return new Promise(function(resolve, reject) {
    // resolve this promise once one resolves
    attempts.forEach((attempt) => attempt.then(resolve));
    // reject if all promises reject
    attempts.reduce((verdict, attempt) => verdict.catch(() => attempt))
      .catch(() => reject(Error('Unable to resolve request from network or cache.')));
  })
}

function cleanupCache() {
  var validKeys = Object.keys(CACHE_NAMES).map((key) => CACHE_NAMES[key]);
  return caches.keys().then((localKeys) => Promise.all(
    localKeys.map((key) => {
      if (validKeys.indexOf(key) === -1) { // key no longer in our list
        return caches.delete(key);
      }
    })
  ));
}

self.addEventListener('install', function(evt) {
  var cachingCompleted = Promise.all([
    cacheAll(CACHE_NAMES.app, URLS.app),
    cacheAll(CACHE_NAMES.vendor, URLS.vendor)
  ]).then(() => self.skipWaiting())

  evt.waitUntil(cachingCompleted);
});

self.addEventListener('activate', function(evt) {
  evt.waitUntil(Promise.all([
    cleanupCache(),
    self.clients.claim() // claim immediately so the page can be controlled by the sw immediately
  ]));
});
