if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("worker-9St_GNTHat1t0ha57ISzo.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-runtime.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/server/pages/_middleware.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/9St_GNTHat1t0ha57ISzo/_buildManifest.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/9St_GNTHat1t0ha57ISzo/_middlewareManifest.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/9St_GNTHat1t0ha57ISzo/_ssgManifest.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/452-e38e154c5a1e386c.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/main-8b3a18d5f6d56ed4.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/pages/404-5c49c3ae2df2f7a9.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/pages/_app-f1a2bf538a0159ba.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/pages/dash-da1a354921a80e3d.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/pages/login-3e62bfd6aca5de3f.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/_next/static/chunks/webpack-9cac972b79d0fd5d.js",revision:"9St_GNTHat1t0ha57ISzo"},{url:"/favicons/android-chrome-192x192.png",revision:"dc5958c29c43d84814574c5a8ce8aaf6"},{url:"/favicons/android-chrome-256x256.png",revision:"eba8ba3eaf3eee87ed1301d93cbf366b"},{url:"/favicons/apple-touch-icon.png",revision:"7fb8ae115ab274907efab7a3e8e31165"},{url:"/favicons/browserconfig.xml",revision:"6323ba86a95eabb2f621d1f3c902df9f"},{url:"/favicons/favicon-16x16.png",revision:"45f1bff2348ca1107f5013c2b8518b6e"},{url:"/favicons/favicon-32x32.png",revision:"f8082671e0703d1bac3f382b350184d5"},{url:"/favicons/favicon.ico",revision:"2be74ecf9427e229a36c2190422b1c6f"},{url:"/favicons/icon-512x512.png",revision:"f83f1c1c5279b4cd9bbeffa78bb50a9b"},{url:"/favicons/mstile-150x150.png",revision:"195c251adf7793ea61bbd0ddabee7b13"},{url:"/favicons/safari-pinned-tab.svg",revision:"5160471aa4127c66d34f237656178559"},{url:"/favicons/site.webmanifest",revision:"d353d262e790ee7fef826bd8471f6907"},{url:"/robots.txt",revision:"10d70fa40ba55c38426bbeb46ea329b7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
