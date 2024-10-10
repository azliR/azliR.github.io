'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_10.part.js": "d3118952275fbfa3dd67c7eb018e290c",
"main.dart.js_13.part.js": "0ff209dac613486610a57376007ab442",
"main.dart.wasm": "7d7d1e01d1c4e6df1ebcadecef54ecaf",
"main.dart.js": "a00f4556323e90266f50566ca7666e2c",
"main.dart.mjs": "ab9a0dde444c8d19db2db6e3d7418044",
"main.dart.js_7.part.js": "52d6fcc5848a733ba9bb85a786116460",
"main.dart.js_4.part.js": "a5c5aeb81654d8c5212e90f326bf78d4",
"assets/FontManifest.json": "a1bc731a4bfdaf02e9d1e2cc48f78db7",
"assets/AssetManifest.bin": "5ca6b6bf669a1e33398db5d6c02a1636",
"assets/fonts/MaterialIcons-Regular.otf": "8ea0ca8e74331178f77b11fa9970cad9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b392c64816c3c79d6e4b75fcf7396761",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e56f6a3281960e7c36d6f6590a02a1d3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "6aa11851de7560311be4217b6c93b87b",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "8a3557cbc19843fff120e9b374fe50a1",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "292c0b427bde7b63d78320fe318bda39",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/assets/icons/launcher_icon.png": "7635ba5491d1bca26ed7d2411d5d22ed",
"assets/assets/icons/adaptive_launcher_icon.png": "8db1cea18fdad262b209459b8003851c",
"assets/assets/icons/splash_icon.png": "fdf7fde2eeb6acc5d503fa166008080a",
"assets/NOTICES": "46895ae44234c5ebd5f3abd6575dcab5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "eb20d8580bf7a97c4dc01f0ed19c440b",
"assets/AssetManifest.bin.json": "c120e7ed1207998cebf6bb2141527663",
"main.dart.js_8.part.js": "c2e46b377822d887178ec459351eb44c",
"index.html": "e1cc8aa0eeadee6e7174c96a14a2d6e8",
"/": "e1cc8aa0eeadee6e7174c96a14a2d6e8",
"manifest.json": "e86b3aab194d42052e44a92b089a42bb",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"main.dart.js_1.part.js": "02f740d3c995dfc42e7677dd35f3a921",
"main.dart.js_12.part.js": "011adca328d9ad51a4a73bb0fa315e2d",
"main.dart.js_6.part.js": "1f648f20484d6b7909386f39237f4fc9",
"main.dart.js_17.part.js": "3cb07f690b151656d3421ddde3ef741b",
"main.dart.js_2.part.js": "6226a03461bb84cac9053f5ae50759b4",
"main.dart.js_15.part.js": "00bd295473438255da44154d762d3332",
"main.dart.js_5.part.js": "b72370842dd6e398fbdd14ff3909b1b3",
"main.dart.js_16.part.js": "66553293ecd7cd124eb9000f1efb011e",
"main.dart.js_3.part.js": "d652e630abad798bb4ce13412285c3dc",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"main.dart.js_11.part.js": "6e7ebc8d862515d13ef76c70c5bbdba0",
"main.dart.js_14.part.js": "d44ab3ef06dae4b4887fa42c31b1d5ea",
"version.json": "885bddc8f2a4c019ca1e48fa8f675cfa",
"flutter_bootstrap.js": "8ee228451661ad983c1cbdbf72d067de"};
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
