const CACHE_NAME = 'love-story-cache-v11'
const URLS_TO_CACHE = ['/', '/index.html', '/manifest.json', '/images/icon-heart.svg', '/maze.html', '/images/photo-1.jpeg', '/images/photo-2.jpeg', '/images/photo-3.jpeg', '/images/photo-4.jpeg', '/images/photo-5.jpeg', '/images/photo-6.jpeg', '/images/photo-7.jpeg', '/images/photo-8.jpeg', '/images/photo-9.jpeg', '/images/photo-10.jpeg', '/images/photo-11.jpeg', '/images/photo-12.jpeg', '/images/photo-13.jpeg', '/assets/index-new.js', '/08._Kol_Hayaty.mp3']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('video.mp4')) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    fetch(event.request).then((resp) => {
      if (resp.status === 200) {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
      }
      return resp;
    }).catch(() => caches.match(event.request))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => {
      if (k !== CACHE_NAME) return caches.delete(k)
      return null
    })))
  )
})
