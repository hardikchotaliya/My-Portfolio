if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const d=e=>i(e,r),l={module:{uri:r},exports:n,require:d};s[r]=Promise.all(a.map((e=>l[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1_zc3bG5h5ePSl-wCaJtM/_buildManifest.js",revision:"977b4ac6e1d303129ac0aeba92844a40"},{url:"/_next/static/1_zc3bG5h5ePSl-wCaJtM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/130.ace6553262012fd7.js",revision:"ace6553262012fd7"},{url:"/_next/static/chunks/2e3a845b-823c95f8af51b7c7.js",revision:"823c95f8af51b7c7"},{url:"/_next/static/chunks/69480c19-7d2a86b6a5a4342f.js",revision:"7d2a86b6a5a4342f"},{url:"/_next/static/chunks/76.c6b8448a3bd6df99.js",revision:"c6b8448a3bd6df99"},{url:"/_next/static/chunks/862-282b46a6d30440ba.js",revision:"282b46a6d30440ba"},{url:"/_next/static/chunks/cb355538-4bb3aacceca545ee.js",revision:"4bb3aacceca545ee"},{url:"/_next/static/chunks/d9067523-5e211555b0a9e5c1.js",revision:"5e211555b0a9e5c1"},{url:"/_next/static/chunks/framework-63157d71ad419e09.js",revision:"63157d71ad419e09"},{url:"/_next/static/chunks/main-982fa453cb45ae71.js",revision:"982fa453cb45ae71"},{url:"/_next/static/chunks/pages/Test-36f6acd116ff92d2.js",revision:"36f6acd116ff92d2"},{url:"/_next/static/chunks/pages/_app-5a2677cf55398e5a.js",revision:"5a2677cf55398e5a"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-031416a35be45d32.js",revision:"031416a35be45d32"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-cb00cadc135a85b7.js",revision:"cb00cadc135a85b7"},{url:"/_next/static/css/03fd931a266446e1.css",revision:"03fd931a266446e1"},{url:"/_next/static/css/a0b3fc6e69ba1af7.css",revision:"a0b3fc6e69ba1af7"},{url:"/_next/static/media/0596140cb8d9223a-s.woff2",revision:"ddd5de66d4a7c56eeac6e0b10c5d8521"},{url:"/_next/static/media/1a4dd1d7cd3232ea-s.woff2",revision:"91c6fe4b62b5ebda5ccee3c4aa1eb33d"},{url:"/_next/static/media/341baa6ce7a16e81-s.woff2",revision:"0c7b4bd9156673a090be9999002eaab1"},{url:"/_next/static/media/356abdd51b933898-s.woff2",revision:"4ed5a85b9b460c31a44ba541e277bcc0"},{url:"/_next/static/media/c22ccc5eb58b83e1-s.woff2",revision:"8a051a2b61e4a766fff21bb106142860"},{url:"/_next/static/media/d70c23d6fe66d464-s.woff2",revision:"7abbd25026a8e3994d885bd8704b9588"},{url:"/imgs/100_days_badge.png",revision:"3c2f2a52fd18db9f392ba0a11571906e"},{url:"/imgs/50_days_badge.png",revision:"7027b76b4d07f3842dcb03675972806d"},{url:"/imgs/NegotiationAssociate.jpg",revision:"2d75f164e980510deeb6461cfb3d7b9e"},{url:"/imgs/ScrumforOpsandDevOpsFundamentals.jpg",revision:"ac8d6b8736c63c746155659ed7b00ceb"},{url:"/imgs/SixSigmaYellowBelt.jpg",revision:"6952ab02b6c43e7c8c01342e69035504"},{url:"/imgs/aboutMe.png",revision:"cccd1ba74c3b578547253ebd4ba2de98"},{url:"/imgs/article1.png",revision:"dc73ad1e4cef49baa949416d6e9daff1"},{url:"/imgs/article10.png",revision:"250fd22e9cecd090952071439a188e0d"},{url:"/imgs/article11.png",revision:"6b606906ffd9433d6035a34e6d3d623a"},{url:"/imgs/article12.png",revision:"c1bf3822441774a84d938cbec5dca8db"},{url:"/imgs/article13.png",revision:"00a3061501a0cd948dd86a5b5f2f108a"},{url:"/imgs/article14.png",revision:"dae0e8f534444db87d53b83b4fa260ad"},{url:"/imgs/article15.png",revision:"64197dc5b47de43ef19448d7b7a9fa75"},{url:"/imgs/article16.png",revision:"c5d70fca29426430101931bb8bb31d3f"},{url:"/imgs/article17.png",revision:"d2e9c0f5de95be08af03f0c83d4e3c30"},{url:"/imgs/article18.png",revision:"b32fcbc657f985ba6dac8008feaad5a4"},{url:"/imgs/article19.png",revision:"924bac71631c2cd50ff6d9d740123718"},{url:"/imgs/article2.png",revision:"b7171a53d873db84dba981c5c2e7b18f"},{url:"/imgs/article20.png",revision:"58cc3dad91aa50ad894c9396807f4e42"},{url:"/imgs/article21.png",revision:"336ff10aba9e2f9ad744433673d3376d"},{url:"/imgs/article22.png",revision:"963c636a02d0518667cbd8f745764083"},{url:"/imgs/article23.png",revision:"47ec74dd36d9615431619903d2e117ab"},{url:"/imgs/article24.png",revision:"9e5ab8f432aced6fd1309500e107fade"},{url:"/imgs/article25.png",revision:"c938c857a490c7facaa814bcbdbcfead"},{url:"/imgs/article26.png",revision:"c6c74a8b43c14b419167f0fdffda09d0"},{url:"/imgs/article27.png",revision:"ca5d39d2a75051d89e6b9d899b8a0467"},{url:"/imgs/article28.jpg",revision:"18b5361ba31e76c34061ecf80e7de8f0"},{url:"/imgs/article29.jpg",revision:"523828ef0942860887bd32a8897fe129"},{url:"/imgs/article3.png",revision:"2f024baae26fb7f30480a7d9142f0ef8"},{url:"/imgs/article30.png",revision:"9cc670b609c9ade3e65a143f69cd3ebb"},{url:"/imgs/article31.jpg",revision:"f53a9c13e4eea1580866663f7a5a6fd0"},{url:"/imgs/article4.png",revision:"5dc757af9403ee9e9389a16227da33b4"},{url:"/imgs/article5.png",revision:"20c128213f51882e2d5ed26fa093cd86"},{url:"/imgs/article6.png",revision:"f3ad74d823752bdf64592889afcd7680"},{url:"/imgs/article7.png",revision:"5cfb4e9a478a1921edea41ecb46098d3"},{url:"/imgs/article8.png",revision:"0130fb609e749aa7b28cb7cc2be259a8"},{url:"/imgs/article9.png",revision:"b9f612bc6d80740a00f1a03e7efc6e0e"},{url:"/imgs/coding.gif",revision:"201d7b72ca4a1712ede2678aab03c2d4"},{url:"/imgs/enactus.jpeg",revision:"d94506f3960abf7fafc28af2d66a9e6f"},{url:"/imgs/genAl-certi.jpeg",revision:"fcd15ad02739dfa141eec2b7fe242127"},{url:"/imgs/istqb-certi.jpg",revision:"2780e360894ed6e484562958227380dc"},{url:"/imgs/logo.png",revision:"3e3efdfbafb7a567d8f9b8aa769e2981"},{url:"/imgs/me-old.png",revision:"e13a93940fc05e072af5baa538c8cf12"},{url:"/imgs/me.png",revision:"56909807fb78e519158b8becf469e645"},{url:"/imgs/nateg.jpeg",revision:"1d311ea230922c1d9e6ff6fad04536a8"},{url:"/imgs/novembertopreader.png",revision:"ec362234fc3935d8a36a33db7955210a"},{url:"/imgs/np-appri-certi.jpg",revision:"c9f7d520f3a99ee4f56f6cac958f2b1b"},{url:"/imgs/performTestFound-certi.jpeg",revision:"2a9cdf311dc96310d7a0ff9a47f91083"},{url:"/imgs/psts-certi.jpg",revision:"54b7b2582fec3acfe0e89429d1e2664d"},{url:"/imgs/stress_management.jpeg",revision:"3d4daea840cc90f3d36867cdba238e90"},{url:"/imgs/testAuto-certi.jpg",revision:"d6bc353d7b0de103b105b62b89e75d29"},{url:"/imgs/topreaderbadge.png",revision:"153f45497e3d11af43bf2d6d0b4e4257"},{url:"/imgs/underconstruction.png",revision:"d86cc6a89dffe291fb650534f4cc86ad"},{url:"/imgs/wdioJS-certi.jpg",revision:"b848fcb7674eb6f52536fb59e2613ee9"},{url:"/manifest.json",revision:"dc6543665e4419dafbc44c4e58539cb0"},{url:"/sitemap.xml",revision:"0c4d3776879b607a15bed308008ba4e7"},{url:"/svg/api.svg",revision:"c7663107dd42f82ca4217d6d46ecf87d"},{url:"/svg/backend.svg",revision:"5a69c27ea585be1f0c0acea9ea9f4996"},{url:"/svg/frontend.svg",revision:"2e1bb7cf9c67ad62a9e3bf490885532e"},{url:"/svg/newseo.svg",revision:"25e03a481256d1c5125140466bb8ece5"},{url:"/svg/performance.svg",revision:"407b524756995fbeb55dc2bd358cf981"},{url:"/svg/skills/Typescript.svg",revision:"c87187cad0ab07cb31c76fb8facda1e1"},{url:"/svg/skills/algolia.svg",revision:"f2e35054a478cfa259b96372651025a0"},{url:"/svg/skills/aws.svg",revision:"e03ceb559b8b0a29721bba974f415d56"},{url:"/svg/skills/bitbucket.svg",revision:"ff3171f5a1b94bd1569f4ec187369615"},{url:"/svg/skills/bootstrap.svg",revision:"1cfe378d615e2ac382f3b3db9184fc37"},{url:"/svg/skills/browserstack.svg",revision:"2a2c4b1605874a895aaa2ecfeca600bd"},{url:"/svg/skills/css.svg",revision:"3b07ee46b8bd3409cb59a53c684d66c6"},{url:"/svg/skills/cucumber.svg",revision:"5b8bd70d15879fffad3521cbeb7daedc"},{url:"/svg/skills/discord.svg",revision:"147f41c95f6ad7574168c3d3a462c455"},{url:"/svg/skills/django.svg",revision:"e6e3f5dc7c199f384e5814c97a683578"},{url:"/svg/skills/express.svg",revision:"ae071836159e37c188c7d35ee77c20aa"},{url:"/svg/skills/figma.svg",revision:"14fb8d901c3ba51a1ef00450e797cb9a"},{url:"/svg/skills/gatling.svg",revision:"39be0de90eefb7ebbb1208009abb345a"},{url:"/svg/skills/git.svg",revision:"67a18acc12cc40d3cd343e24755895ee"},{url:"/svg/skills/github.svg",revision:"73df13e9453fad75828c2071b924febf"},{url:"/svg/skills/gitlab.svg",revision:"7b1f0ee26e1c5b60ffd6d49f7a97616b"},{url:"/svg/skills/graphql.svg",revision:"f1650c3c260ae6dacb631c43217f7002"},{url:"/svg/skills/hashnode.svg",revision:"56801ee3f556ef82361be6ba7fc6ff62"},{url:"/svg/skills/html.svg",revision:"4447440d22b307c33a57c729e7d7c599"},{url:"/svg/skills/javascript.svg",revision:"830791e93844f750d619e0839710261c"},{url:"/svg/skills/jira.svg",revision:"66d49bde516b50fc82257a9be411d1b2"},{url:"/svg/skills/js.svg",revision:"71acfaf870082299bcbde21aa400964d"},{url:"/svg/skills/macos.svg",revision:"e0ad59f4af8a4646840031aa4d050e6f"},{url:"/svg/skills/markdown.svg",revision:"445beb785401ccc300bf238648ce0ac2"},{url:"/svg/skills/mocha.svg",revision:"b4dbe072ac1539c9e76adfa72caeb981"},{url:"/svg/skills/mongo.svg",revision:"cae33adfcd23c8c5002505082bf7661a"},{url:"/svg/skills/mysql.svg",revision:"0b5bd1b7dc517deb2b8f85e2bcb87dfb"},{url:"/svg/skills/nextjs.svg",revision:"c6e541a732690f4f3335d8c102c892c3"},{url:"/svg/skills/nodejs.svg",revision:"d9f5ba6ae01d66df2c79624c2a682a57"},{url:"/svg/skills/notion.svg",revision:"b3c2bad360e612a88226f045e3842812"},{url:"/svg/skills/npm.svg",revision:"44d9fcf39e490bef7350a15a44db7909"},{url:"/svg/skills/postgresql.svg",revision:"bae4eabea5c2343f4346dcbb29ecf4ee"},{url:"/svg/skills/postman.svg",revision:"149ebd130243e98c3b88f6b608f6b0c5"},{url:"/svg/skills/python.svg",revision:"a1872cef0fb917ddf4d387e298d9f160"},{url:"/svg/skills/react.svg",revision:"7fca2996c86834b9a0d9e0daac11b635"},{url:"/svg/skills/rq.svg",revision:"c29d6a4dcdbe7c8c2a45f8188db1ac3f"},{url:"/svg/skills/selenium.svg",revision:"ad3f6a9a0d4445d19b7157343950331f"},{url:"/svg/skills/shadcn.svg",revision:"221f22df5a7d22e450a86c97d8e445d5"},{url:"/svg/skills/slack.svg",revision:"83f130a729ce9c6f48b8d0d47a55915c"},{url:"/svg/skills/trello.svg",revision:"09ff8d711d69243e36c093230a5caef8"},{url:"/svg/skills/vscode.svg",revision:"22a4f46ec506bfc4d5d318b02198921c"},{url:"/svg/skills/wdio.svg",revision:"0fd6d1fcffe9d7a333c618416156936e"},{url:"/svg/webpack.svg",revision:"d9e506630c7a1d594c230cd5cf9adae4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
