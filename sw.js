const CACHE_NAME = 'til.mudit.xyz.sw.cache.v1'

async function cacheResources(caches) {
  const URLS_TO_CACHE = [
    '/',
    '/app.js',
    '/app.css',
    'https://buttons.github.io/buttons.js',
    '/red',
    '/yellow'
  ]

  const cache = await caches.open(CACHE_NAME)
  await cache.addAll(URLS_TO_CACHE)
}


self.addEventListener('install', event => {
  event.waitUntil(cacheResources(caches))
})

self.addEventListener('fetch', event => {
  event.respondWith(async function () {
    const resourceFromCache = await caches.match(event.request)

    if (resourceFromCache) {
      return resourceFromCache
    }

    // fetch, cache and return resource
    const requestedResource = event.request.clone()
    const fetchedResource = await fetch(requestedResource);

    if (fetchedResource && fetchedResource.status === 200 && (fetchedResource.type === 'basic' || fetchedResource.type === 'cors')) {
      const fetchedResourceForCache = fetchedResource.clone()
      const cache = await caches.open(CACHE_NAME)

      await cache.put(event.request, fetchedResourceForCache)
    }

    return fetchedResource
  }())
})
