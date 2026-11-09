const CACHE='fenix-mc-shell-v4';
const SHELL=[
 './','./index.html','./styles.css','./app.js','./manifest.webmanifest',
 './assets/icon-192.png','./assets/icon-512.png','./assets/icon-maskable-512.png','./assets/apple-touch-icon.png',
 './assets/avatar-full-transparent-1.png','./assets/avatar-full-transparent-2.png','./assets/avatar-full-transparent-3.png',
 './assets/portrait-hiphop-wall.jpg','./assets/portrait-hiphop-wall-alt.jpg','./assets/portrait-neon-square.jpg',
 './assets/phoenix-wall.jpg','./assets/mc-stage.webp','./assets/phoenix-battle.webp','./assets/graffiti-fire.webp'
];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(SHELL);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith('fenix-mc-shell-')&&key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 event.respondWith((async()=>{
   const cached=await caches.match(event.request);if(cached)return cached;
   try{const response=await fetch(event.request);if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone())}return response}
   catch(error){if(event.request.mode==='navigate')return caches.match('./index.html');throw error}
 })());
});
