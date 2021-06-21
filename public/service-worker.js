const STATIC = 'static';
const DYNAMIC = 'dynamic';
const RATES_CACHE_REGEX = /exchange_rates/;
const STATIC_PATH = ['/', '/bundle.js', '/main.css', '/404', '/offline.html']

function isMatch(regex, input){
  return regex.test(input);
}

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(STATIC)
    .then(function(cache){
      cache.addAll(STATIC_PATH)
    })  
  ); 
});

self.addEventListener('fetch', function(event){
  if (!(event.request.url.indexOf('http') === 0)) return;
  event.respondWith(
    caches
      .match(event.request)
      .then(
        cacheRes =>
          cacheRes ||
          fetch(event.request).then(fetchRes =>
            caches.open(DYNAMIC).then(cache => {
              cache.put(event.request.url, fetchRes.clone());
              return fetchRes;
            })
          )
      )
      .catch(() => caches.match('/offline.html'))
  );
});