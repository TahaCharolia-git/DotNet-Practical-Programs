const CACHE_NAME = "shop-cache-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/style.css",
    "/cart.js",
    "/manifest.json",
    "/icons/icon-192.png",
    "/icons/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);

    // Ignore Visual Studio development resources
    if (
        url.pathname.startsWith("/_framework/") ||
        url.pathname.startsWith("/_vs/")
    ) {
        return;
    }

    // Handle only GET requests
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match("/index.html");
            })
    );
});