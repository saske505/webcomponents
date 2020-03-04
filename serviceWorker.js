self.addEventListener('install', event => {
    self.skipWaiting();

    // Populate initial serviceworker cache.
    event.waitUntil(
      caches.open(staticCacheName)
        .then(cache => cache.addAll([
          "/shell_top", // head, top bar, inline styles
          "/shell_bottom", // footer
          "/async_info/shell_version", // For comparing changes in the shell. Should be incremented with style changes.
          "/404.html", // Not found page
          "/500.html", // Error page
          "/offline.html" //Offline page
        ]))
    );
  });