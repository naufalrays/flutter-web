'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "919a3b088ab5884f9327b0abfdd5da1c",
"index.html": "0802ba63345690b89c69b287ba2c25e8",
"/": "0802ba63345690b89c69b287ba2c25e8",
"main.dart.js": "f177de1488970b94d460558542d36644",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e007e3e31654eebc93f8fcc999524f88",
".git/config": "0f5074334b2f499e604a593aa2851e78",
".git/objects/56/5e39eec2ccd22b51ff4cd73b5235d42654f0c2": "380faf921c2b323f279e703492ad3201",
".git/objects/05/a4c7bc7f1ad04199635510fd6c3fd31cfed5d8": "0a904e0d7b402c750177c539bc2be4f9",
".git/objects/b3/6b60639a1a7dbf821627a5244b55982163c56a": "5991b81b6e665df9d77a4b875c844111",
".git/objects/da/6e4141af8bca7d14c4e23607eb5e9b5a1770be": "4416061ebd55c78013e326c4eb54d26d",
".git/objects/c7/70243c5539f6474d0dc5be204459f7828cbe90": "21e4fcef22a7441e9747e44760956ad5",
".git/objects/fc/89407bc8adac2e237bcd0544779c2c420853ab": "cafa5575b52010144dd13d227e0cda12",
".git/objects/27/88e4eba4f50ae53cb81742b0f091918da308e6": "87922bbc8248e9ad6a302db300bd6db0",
".git/objects/4b/2598c0e8d12600eb16c18bf69b5d36416c1098": "3ebf3458f681f45fd1f0b2f75c80685a",
".git/objects/pack/pack-a258be381a3f32ca2e85224be1662d51778bfaa6.idx": "180bf471f5fcadbc7905a10abcbf20aa",
".git/objects/pack/pack-a258be381a3f32ca2e85224be1662d51778bfaa6.pack": "5c5c01edce67e44ae364dd20ac0f8888",
".git/objects/7d/abef4688c38cdae4db5c5c58b3a50b8440ba21": "b35ed4403eed3643aa7f621d048a2d85",
".git/objects/21/45ca6686af6d311734458f3ffb8adc9840e64f": "ace7c3eb291500337b3312c0d52e7613",
".git/objects/09/809c541b776515ce060cbdfbc3823054971719": "ff4d5f772fb2101d255a06d4ed2658da",
".git/objects/30/8174fe4b249bfb50d21c9ddfb930903f9b50b6": "7b8120c6910edcaa9336d21fbddb564a",
".git/objects/37/1c9c5141dab562ee57a0ec7a50c4444cb5e2ad": "d810065975e388856c290c8320191b13",
".git/objects/6c/cd362d4f5741b60577a26329041c8f90ac9e3e": "d4faaf4245772ff09947ae7324947f34",
".git/objects/a7/27c230914b5b1f3d9f67bd3a41090548d096e1": "439bd907d4dfb37a929dc7f386b42927",
".git/objects/b7/a0e7c584aa3c182a3f4fa8fa63722c61c989f0": "4ab0398652ed9370d919c8837a9a98b6",
".git/objects/cc/73b2864b61170adb071b703e64497155cd54e2": "89e28d6bf5bc55243b1e74d77f3452ee",
".git/objects/e8/0160130b9df4795f4f07a2fa1be1bf301a73b9": "81b2b73e18c13bea80f2f4c6984b6411",
".git/objects/23/fd8eec4556d0b4a836f43b238dfe0c160908fa": "9b7a9f1d9097a1b47e5b0b8715475fd9",
".git/objects/47/9a5e0b5171fb7a5a89ec15bab91ac2fa1d89f6": "1e36b6dba48374e15b64c46081616033",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3730233d0165f80befead317b92808e",
".git/logs/refs/heads/master": "d3730233d0165f80befead317b92808e",
".git/logs/refs/remotes/origin/master": "55386af3e5eb1359ebdd42a5bcc7e544",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "285b92fa7f7615fc1e71db7781a109bd",
".git/refs/remotes/origin/master": "285b92fa7f7615fc1e71db7781a109bd",
".git/index": "3e0f537fbc06fc5c79eda2f243e652f4",
".git/COMMIT_EDITMSG": "eb1ff3a7fe725c27aca6e5872903ebb3",
".git/FETCH_HEAD": "accabec4867082d495041738164d30e5",
"assets/AssetManifest.json": "0038abf66323581af7db287a9f671299",
"assets/NOTICES": "3f5cb3b37a558caf4aec08908c84007d",
"assets/FontManifest.json": "577b7b23fff32c919b73232b9d82bdb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5b6f94463169e4ed5a8aa5ddd45cb831",
"assets/fonts/MaterialIcons-Regular.otf": "b9583a1f0a3566d985aecbc2ee50c430",
"assets/assets/audios/user_assessment_input.wav": "9c6335fb24f10779ce295b38a0ff827a",
"assets/assets/audios/user_assessment_great.wav": "9da02eafce83e48e1813c814f897df0c",
"assets/assets/audios/user_assessment_intro.wav": "4a458107460dc54dd52824a9196087d7",
"assets/assets/images/jadipintar_logo.png": "72feb50b15d632bbc15d71d2fb4be6c5",
"assets/assets/images/group.png": "9b2b3dcf2ae1e215170fa6987cad4da8",
"assets/assets/images/facebook_logo.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/images/left.png": "2404ce51072cdbd41ea3a4fbe4445ec2",
"assets/assets/images/avatar.png": "f66497b6dd3c959440b9dfcc68863c58",
"assets/assets/images/assessment_great.png": "9cc26b8125af9ff69eda6298e36febeb",
"assets/assets/images/google_logo.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/images/intro_users_assessment.png": "36c1f6a7edda56c9c5d911f63b61232e",
"assets/assets/images/right.png": "9d82c678d3b79176023351c7bc7028cb",
"assets/assets/videos/Japi-talking%252001.js": "e8f65aa7084d25b7dd41bf43f8451a7e",
"assets/assets/videos/introducing.mp4": "9e859daa32fff03265545cf26a7996de",
"assets/assets/videos/Japi-talking-02.gif": "f037455264901d7b71c39152b1617ee0",
"assets/assets/videos/Japi-talking-01.gif": "c6e95b14bf5a9240680375d22e8224a4",
"assets/assets/fonts/Outfit-Light.ttf": "905f109c79bd9683fc22eaffe4808ffe",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
