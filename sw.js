/* Service Worker · Localizaciones PWA */
const CACHE = 'localizaciones-v25';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icono-fincas.svg',
  './exceljs.min.js',
  // SDKs de Firebase (cacheo para login offline tras la primera carga)
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
];

self.addEventListener('install', function(event){
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function(cache){
      return cache.addAll(ASSETS).catch(function(err){
        console.warn('Precache parcial:', err);
      });
    })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.matchAll({ type: 'window' });
    }).then(function(clients){
      clients.forEach(function(client){
        if(client.navigate) client.navigate(client.url);
      });
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event){
  const req = event.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);

  const isFirebase = url.hostname === 'www.gstatic.com' && url.pathname.indexOf('/firebasejs/') === 0;
  const isOwn = url.origin === location.origin;

  if(!isFirebase && !isOwn) return;

  if(req.mode === 'navigate'){
    event.respondWith(
      fetch(req).then(function(res){
        const copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); });
        return res;
      }).catch(function(){
        return caches.match(req).then(function(r){
          return r || caches.match('./index.html');
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(res){
        if(res && (res.status === 200 || res.type === 'opaque')){
          const copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){
        return caches.match('./index.html');
      });
    })
  );
});
