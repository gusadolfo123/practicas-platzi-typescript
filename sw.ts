interface FetchEvent extends Event {
	request: Request;
	respondWith(response: Promise<Response> | Response): Promise<Response>;
	waitUntil(fn: Promise<any>): void;
}

self.addEventListener('install', (event: FetchEvent) => {
	event.waitUntil(precache());
});

self.addEventListener('fetch', (event: FetchEvent) => {
	const request = event.request;
	if (request.method !== 'GET') {
		return;
	}

	// buscar en cache
	event.respondWith(cachedResponse(request));

	//actualizar el cache
	event.waitUntil(updateCache(request));
});

async function updateCache(request: RequestInfo) {
	const cache = await caches.open('v1');
	const response = await fetch(request);
	return cache.put(request, response);
}

async function precache() {
	const cache = await caches.open('v1');
	return cache.addAll([]);
	// return cache.addAll(['/', '/index.html', '/plugins/AutoPause.js', '/plugins/AutoPlay.js', '/mediaPlayer.js', '/media/video.mp4', '/index.js']);
}

async function cachedResponse(request: RequestInfo) {
	const cache = await caches.open('v1');
	const response = await cache.match(request);
	return response || fetch(request);
}
