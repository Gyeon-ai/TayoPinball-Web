self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const isTayoPinballCache = (key) => key.includes('/TayoPinball-Web/');
      const keys = await caches.keys();
      await Promise.all(keys.filter(isTayoPinballCache).map((key) => caches.delete(key)));

      const clients = await self.clients.matchAll({ type: 'window' });
      await self.registration.unregister();

      for (const client of clients) {
        client.navigate(client.url).catch(() => {});
      }
    })(),
  );
});
