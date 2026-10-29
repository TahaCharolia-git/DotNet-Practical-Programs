const CACHE_NAME = "traveldiary-v3";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/places.html",
    "/style.css",
    "/app.js",
    "/manifest.json",
    "/icon-192.png",
    "/icon-512.png",
    "/images/hills.jpg",
    "/images/beach.jpg",
    "/images/fort.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(response => {
                const copy = response.clone();
                caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, copy))
                    .catch(() => { });

                return response;
            })
            .catch(() =>
                caches.match(event.request).then(cached => {
                    if (cached) {
                        return cached;
                    }

                    if (event.request.mode === "navigate") {
                        return caches.match("/index.html");
                    }

                    return new Response("", {
                        status: 503,
                        statusText: "Offline"
                    });
                })
            )
    );
});
