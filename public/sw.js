if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),f={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Qil2asNF2vs-HENLXtifS/_buildManifest.js",revision:"d36691ee882d4346cf16dc759426d4fb"},{url:"/_next/static/Qil2asNF2vs-HENLXtifS/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203.215f7ebb412294c3.js",revision:"215f7ebb412294c3"},{url:"/_next/static/chunks/218.ee5bb437b51df9be.js",revision:"ee5bb437b51df9be"},{url:"/_next/static/chunks/455-e2ff12da24bcbbfc.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/469-3f577bc6e9879601.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/4bd1b696-0218daba03ee85af.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/850-ebb99619ef33d75c.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/937-67969ac540dff4c3.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/938157b5-c9cb08e5d446d90e.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/app/_not-found/page-934c354b91f62e2d.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/app/auth/sign_in/page-0b080a378d1ad974.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/app/auth/sign_up/page-52b5d8db1cbe713a.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/app/layout-8780e430dd328a0e.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/app/page-3fee902a9a1ba304.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/bc9e92e6-fb701d34a8a7f15b.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/c16f53c3-d14c34ed9bf793e8.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/framework-895c1583be5f925a.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/main-5f07798935e8c965.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/main-app-c98f9c44f5c81a2d.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/pages/_app-66de6c865428b55f.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/pages/_error-c74051872fda1c25.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-1de50c99d66fb263.js",revision:"Qil2asNF2vs-HENLXtifS"},{url:"/_next/static/css/111eb8d70c3da91d.css",revision:"111eb8d70c3da91d"},{url:"/_next/static/css/eafc44308225a1e5.css",revision:"eafc44308225a1e5"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/manifest.json",revision:"ebcae28f4fd2f64640abd6365f6d54f8"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.sameOrigin,i=e.url.pathname;return!(!s||i.startsWith("/api/auth/callback")||!i.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,i=e.url.pathname,a=e.sameOrigin;return"1"===s.headers.get("RSC")&&"1"===s.headers.get("Next-Router-Prefetch")&&a&&!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,i=e.url.pathname,a=e.sameOrigin;return"1"===s.headers.get("RSC")&&a&&!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.url.pathname;return e.sameOrigin&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
