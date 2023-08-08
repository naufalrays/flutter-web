'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "919a3b088ab5884f9327b0abfdd5da1c",
"index.html": "8947e80c3c45f15a85ac2c7b14d9b9aa",
"/": "8947e80c3c45f15a85ac2c7b14d9b9aa",
"main.dart.js": "28913613b8214a24a28c4743dce291a7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e007e3e31654eebc93f8fcc999524f88",
".git/config": "0f5074334b2f499e604a593aa2851e78",
".git/objects/04/8fdf360d261147cc13d91abda0da17f6ec5c45": "6a3314b47be0ee1e0126d5a478e22ea6",
".git/objects/35/979447a49242d39c4322175391300357454dda": "56cd71bf5ee5cc53dc7da9e45a4030c9",
".git/objects/56/5e39eec2ccd22b51ff4cd73b5235d42654f0c2": "380faf921c2b323f279e703492ad3201",
".git/objects/05/a4c7bc7f1ad04199635510fd6c3fd31cfed5d8": "0a904e0d7b402c750177c539bc2be4f9",
".git/objects/b3/6b60639a1a7dbf821627a5244b55982163c56a": "5991b81b6e665df9d77a4b875c844111",
".git/objects/da/6e4141af8bca7d14c4e23607eb5e9b5a1770be": "4416061ebd55c78013e326c4eb54d26d",
".git/objects/ae/3db18f9353d61ae2129ca757fdbc621ac62a86": "804fb0f56db5399635a4fe541b4eef8f",
".git/objects/ae/37d329f217a7193e78eaf6f537e44d1bed0ac3": "0c4b661e1869ee16d680b53a6cae77e3",
".git/objects/ab/a4b3ec0eac210106245e919a5da80dedccccbd": "7e4516da7527eb65a7229447633488dc",
".git/objects/c7/70243c5539f6474d0dc5be204459f7828cbe90": "21e4fcef22a7441e9747e44760956ad5",
".git/objects/fc/89407bc8adac2e237bcd0544779c2c420853ab": "cafa5575b52010144dd13d227e0cda12",
".git/objects/e3/192af27c02aa2901e78902cb5b00aef19223f7": "55203c0c74d6ff6a9b93770c95e73ce8",
".git/objects/27/88e4eba4f50ae53cb81742b0f091918da308e6": "87922bbc8248e9ad6a302db300bd6db0",
".git/objects/4b/2598c0e8d12600eb16c18bf69b5d36416c1098": "3ebf3458f681f45fd1f0b2f75c80685a",
".git/objects/pack/pack-a258be381a3f32ca2e85224be1662d51778bfaa6.idx": "180bf471f5fcadbc7905a10abcbf20aa",
".git/objects/pack/pack-a258be381a3f32ca2e85224be1662d51778bfaa6.pack": "5c5c01edce67e44ae364dd20ac0f8888",
".git/objects/7d/abef4688c38cdae4db5c5c58b3a50b8440ba21": "b35ed4403eed3643aa7f621d048a2d85",
".git/objects/7e/4430c1fce8192431d748b34fc78163606cbb8e": "46bff5c321be4a3de7741cd4af636728",
".git/objects/26/8adf614cf9e7fee06fa8d2f8ec8f0d37f2cb1d": "5929959154395e0dbe173934c5f96a70",
".git/objects/21/45ca6686af6d311734458f3ffb8adc9840e64f": "ace7c3eb291500337b3312c0d52e7613",
".git/objects/4d/434f510b26b187cf44194917055b738d2cdfed": "041cda577eedf96ecc94b7a9ba12a296",
".git/objects/86/02208e6737d23761c68cbc64bb316932a126b2": "12862973a6a5f8f3a5cbd8efc2bc90b6",
".git/objects/86/1b9c27f1770a2763a2e02ac89affa9fb72cb24": "f44bbbf844ae857224f2ee514d61f651",
".git/objects/43/832f652c196666f6602c37affdf96a6013ae21": "0cf5be41342a2999f0203d50fbb957a8",
".git/objects/07/fc64f7242429348378a9675de1f8979620de20": "5f8706316ede9e7c0ffc09391cfa8899",
".git/objects/9a/829f0f880384a198711032d0bf43ca992aee2a": "8209b464e78b1676a4efb364121ebf5a",
".git/objects/09/809c541b776515ce060cbdfbc3823054971719": "ff4d5f772fb2101d255a06d4ed2658da",
".git/objects/91/f64eb9043981075dbcd850e6ed5bc1db34e451": "da148c5ae0f423b03029f9212561dc9a",
".git/objects/3f/cc8d842988a53cebf28f7ab73b266575a98ff8": "3137b7396605c996747088ce8960f14d",
".git/objects/30/8174fe4b249bfb50d21c9ddfb930903f9b50b6": "7b8120c6910edcaa9336d21fbddb564a",
".git/objects/37/1c9c5141dab562ee57a0ec7a50c4444cb5e2ad": "d810065975e388856c290c8320191b13",
".git/objects/37/1f3e1b1e4d60a679b9c6fa54bc3f688211850a": "d5afbb113adbbbd3e70dafa57d9f0c06",
".git/objects/6c/cd362d4f5741b60577a26329041c8f90ac9e3e": "d4faaf4245772ff09947ae7324947f34",
".git/objects/ba/b8ff9e950b473c65f435afafb64b26ebb0ffef": "f8b7c3ce357e2c0cab43bce6ee31885d",
".git/objects/a7/27c230914b5b1f3d9f67bd3a41090548d096e1": "439bd907d4dfb37a929dc7f386b42927",
".git/objects/b7/a0e7c584aa3c182a3f4fa8fa63722c61c989f0": "4ab0398652ed9370d919c8837a9a98b6",
".git/objects/de/b5a82d5f0fad74792eefd9e4fa868e49ca2aa0": "41097a5319c9d8268bab13bf37ab87ed",
".git/objects/b9/4ea50ac721ede83e05683ffbf277785f7759dc": "182bc9c7813845fdea98ac062f843d10",
".git/objects/cd/e390750fef6628e23e2a426ff062a9c77b5880": "6b3886acef405f062aab700ace8b6a7d",
".git/objects/cc/73b2864b61170adb071b703e64497155cd54e2": "89e28d6bf5bc55243b1e74d77f3452ee",
".git/objects/e8/0160130b9df4795f4f07a2fa1be1bf301a73b9": "81b2b73e18c13bea80f2f4c6984b6411",
".git/objects/f6/73c864911296bd2d485277b393dcf591744eef": "439c733755d2d3aa81aac37daa971be7",
".git/objects/e9/ee7403c84556bb2a9868a7674832fbcc4665cd": "0917dcc9e52c916e2fa8efa69a59cab1",
".git/objects/23/fd8eec4556d0b4a836f43b238dfe0c160908fa": "9b7a9f1d9097a1b47e5b0b8715475fd9",
".git/objects/4f/324d0ded88e644cc9553f4b6bf5718b760644f": "f80b8979fb7410972463640b5d3d3100",
".git/objects/1d/dd5e7361581c9f8d20efe14c5a5111f7b075a6": "78280a39ef1610a7307e9d55ca9e785a",
".git/objects/1c/8420e208207fc8cb2680d6b7bfd51214fc856d": "b342a9bb7342f0f77392c32167ceb9b2",
".git/objects/82/433d66e2e7cf4669823ef413b9056cb5e10592": "8bf67861cb29ef3b92f7a4e4f00d439d",
".git/objects/47/9a5e0b5171fb7a5a89ec15bab91ac2fa1d89f6": "1e36b6dba48374e15b64c46081616033",
".git/objects/78/e2a6e9e1ad3a421cdd6f2e8b6f1cefa8e72251": "0a79c63489e1900eda1d74a8d48c53a4",
".git/objects/13/5c2ae2eb21c571569a7592a80509e50a4ac549": "440de0c819541566af8f7887fedfc2dd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0518fbbcfbabfe010ac48f4c2ec4c25f",
".git/logs/refs/heads/master": "0518fbbcfbabfe010ac48f4c2ec4c25f",
".git/logs/refs/remotes/origin/master": "5a7e87cc76366eeecc415e07fe6df4f0",
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
".git/refs/heads/master": "8165025cdf0d4deba31b44dcae0bd80b",
".git/refs/remotes/origin/master": "8165025cdf0d4deba31b44dcae0bd80b",
".git/index": "28a8782766b25698bca74441ed0e00b2",
".git/COMMIT_EDITMSG": "f214c9884c896a198659b76a935fdef2",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "bb2c11a70419d48ce941bc94bebf51dc",
"assets/NOTICES": "92fa5a433a39f4e6c5ad1ce082681884",
"assets/FontManifest.json": "577b7b23fff32c919b73232b9d82bdb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5ae0ce240b26057ad1b1fa0896fd0e29",
"assets/fonts/MaterialIcons-Regular.otf": "b9583a1f0a3566d985aecbc2ee50c430",
"assets/assets/audios/user_assessment_input.wav": "9c6335fb24f10779ce295b38a0ff827a",
"assets/assets/audios/user_assessment_great.wav": "9da02eafce83e48e1813c814f897df0c",
"assets/assets/audios/user_assessment_intro.wav": "4a458107460dc54dd52824a9196087d7",
"assets/assets/audios/user_assessment_result.wav": "ccde6fc8ca4e08d0c00716b4378e639d",
"assets/assets/images/jadipintar_logo.png": "72feb50b15d632bbc15d71d2fb4be6c5",
"assets/assets/images/group.png": "9b2b3dcf2ae1e215170fa6987cad4da8",
"assets/assets/images/facebook_logo.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/images/left.png": "2404ce51072cdbd41ea3a4fbe4445ec2",
"assets/assets/images/avatar.png": "f66497b6dd3c959440b9dfcc68863c58",
"assets/assets/images/gauge_lamp.png": "1a2002735c1fad74b55c9ac157c04b17",
"assets/assets/images/assessment_great.png": "9cc26b8125af9ff69eda6298e36febeb",
"assets/assets/images/google_logo.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/images/intro_users_assessment.png": "36c1f6a7edda56c9c5d911f63b61232e",
"assets/assets/images/right.png": "9d82c678d3b79176023351c7bc7028cb",
"assets/assets/videos/greetings_video_ID.mp4": "9e859daa32fff03265545cf26a7996de",
"assets/assets/videos/thank-you-for-ur-sharing.gif": "13a4fb8b926c1f98b7e0a0142cc37ccf",
"assets/assets/videos/tell-me-the-story.gif": "be45e870837457e9bdd65ea83cb9740a",
"assets/assets/videos/tell-me-about-ur-self.gif": "0da158ff5aedcfdd198c91dd8bbca044",
"assets/assets/videos/greetings_video_EN.mp4": "1c3543e86541750024a70eb8deb12642",
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
