import { precacheAndRoute, PrecacheStrategy } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(PrecacheStrategy.cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting();
});