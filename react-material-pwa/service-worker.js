// Set this to true for production
var doCache = true;

// Name our cache
var CACHE_NAMES = {
  app: 'react-material-pwa-v1',
  vendor: 'react-material-pwa-v1'
};

var URLS = {
  app: [
    '/react-material-pwa/',
    '/react-material-pwa/js/app.js',
    '/react-material-pwa/index.html',
    '/react-material-pwa/manifest.json',
    "/react-material-pwa/Images/icon/icon-96x96.png",
    "/react-material-pwa/Images/icon/icon-128x128.png",
    "/react-material-pwa/Images/icon/icon-144x144.png",
    "/react-material-pwa/Images/icon/icon-152x152.png",
    "/react-material-pwa/Images/icon/icon-192x192.png",
    "/react-material-pwa/Images/icon/icon-384x384.png",
    "/react-material-pwa/Images/icon/icon-512x512.png"
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
