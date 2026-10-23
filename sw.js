/* 아무것도 저장하지 않는다 — 바탕화면에 둘 수 있게 하려고 둘 뿐이다. */
self.addEventListener('install',  () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',    () => {});
