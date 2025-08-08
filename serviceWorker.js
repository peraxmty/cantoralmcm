self.addEventListener("fetch", function(event) {
    console.log(`start server worker`)
  });
const CACHE_NAME = 'cantoral-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/cantos.json',
    // Otros archivos...
];
