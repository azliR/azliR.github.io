'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_8.part.js": "46a23e2a5fdcea451fc7750a0ea302ac",
"main.dart.js_11.part.js": "1d34c73162c4160b8fe6ffe2f37b8b00",
"main.dart.js_12.part.js": "011adca328d9ad51a4a73bb0fa315e2d",
"assets/AssetManifest.json": "eb20d8580bf7a97c4dc01f0ed19c440b",
"assets/assets/icons/adaptive_launcher_icon.png": "8db1cea18fdad262b209459b8003851c",
"assets/assets/icons/splash_icon.png": "fdf7fde2eeb6acc5d503fa166008080a",
"assets/assets/icons/launcher_icon.png": "7635ba5491d1bca26ed7d2411d5d22ed",
"assets/AssetManifest.bin.json": "c120e7ed1207998cebf6bb2141527663",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5ca6b6bf669a1e33398db5d6c02a1636",
"assets/FontManifest.json": "a1bc731a4bfdaf02e9d1e2cc48f78db7",
"assets/NOTICES": "204d6978bb370be5c61fe39baff5b09c",
"assets/fonts/MaterialIcons-Regular.otf": "8ea0ca8e74331178f77b11fa9970cad9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "63735e76e5c58a5f282ef6d6332bcd6c",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "784117d84ca7da3eb150856fd73513ab",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "b498ecb83f45cae6840baabfc6dc5200",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e56f6a3281960e7c36d6f6590a02a1d3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b392c64816c3c79d6e4b75fcf7396761",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"main.dart.js": "e95c7b5750fbc06dbe57be34a8b607f1",
"main.dart.js_14.part.js": "7a0db7b519e683177ea62912f3f2c318",
"main.dart.js_3.part.js": "d79ae130ed54feb7490ffe6f106281ec",
"main.dart.js_5.part.js": "4ef074556b20334692b7bdaf25d485df",
"main.dart.js_15.part.js": "fe39fec1c316799f48b5e3e54e0b8fb3",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"flutter_bootstrap.js": "1148d915c07d59bf8522aff476746bc0",
"main.dart.js_1.part.js": "e43d5a78d090998a41e63f05fe120ed8",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"main.dart.js_10.part.js": "c88fc51a57ca81b76291329a452848ca",
"main.dart.js_6.part.js": "e741fbd743890ad30176cabe29d065bd",
"main.dart.js_7.part.js": "f15c7fdbcc4d5d68bd2176b9e85cabd6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_17.part.js": "d66b61eef2d5477b7c08277bfb571aa7",
"index.html": "a0c0951c0ad7950467a7909a9489a2c7",
"/": "a0c0951c0ad7950467a7909a9489a2c7",
"main.dart.mjs": "ab9a0dde444c8d19db2db6e3d7418044",
"version.json": "885bddc8f2a4c019ca1e48fa8f675cfa",
"main.dart.js_13.part.js": "78f7b4fe59ff3a8af023f8599fc64062",
"main.dart.js_2.part.js": "6668d50bbda3410f79a92e09edc1c0e7",
"main.dart.wasm": "47facd87e89cdeb73435dc209c7ccca3",
"main.dart.js_16.part.js": "7e96d9e0fcb1e9a2eb2763daf1e7e4d1",
"manifest.json": "e86b3aab194d42052e44a92b089a42bb",
"main.dart.js_4.part.js": "a5c5aeb81654d8c5212e90f326bf78d4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
