const CACHE_NAME = "agenda-unhas-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./sw.js",
    "./icon-192.png"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(ARQUIVOS);
            })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});
