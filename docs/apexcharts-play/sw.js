// Service Worker for Analytics Dashboard
const CACHE_NAME = 'analytics-dashboard-v1';
const STATIC_CACHE = 'static-v1';

// Files to cache
const STATIC_FILES = [
  '/ai-frontend/apexcharts-play/',
  '/ai-frontend/apexcharts-play/index.html',
  '/ai-frontend/apexcharts-play/assets/index.css',
  '/ai-frontend/apexcharts-play/assets/index.js'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_FILES);
      })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Handle API requests (don't cache)
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((fetchResponse) => {
            // Cache successful responses for static assets
            if (fetchResponse.status === 200 && 
                (event.request.destination === 'script' || 
                 event.request.destination === 'style' ||
                 event.request.destination === 'image')) {
              const responseToCache = fetchResponse.clone();
              caches.open(STATIC_CACHE)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }
            return fetchResponse;
          });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});
