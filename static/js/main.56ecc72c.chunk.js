(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,t,a){},,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/me.a7ea3b69.png"},function(e,t,a){var o={"./KpopDemo.mov":13,"./Pokemon.mov":14,"./TravelGalleryDemo.mov":15};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=l,e.exports=n,n.id=12},function(e,t,a){e.exports=a.p+"static/media/KpopDemo.f973017a.mov"},function(e,t,a){e.exports=a.p+"static/media/Pokemon.1fffc325.mov"},function(e,t,a){e.exports=a.p+"static/media/TravelGalleryDemo.8f9c7892.mov"},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(4),r=a.n(l),i=(a(10),a(2)),c=(a(1),function(){return n.a.createElement("img",{alt:"pictue of mary",className:"mary",src:a(11)})}),m=function(){return n.a.createElement("div",{className:"about"},n.a.createElement("p",null,"Hello! My name is Mary Liu, and I'm a NYC based software engineer who is passionate about the communicative possibilities of technology. I believe the value of tech stems from its ability to facilitate ideas and create pathways for dialogue that will eventually affect our lives in a positive way."),n.a.createElement("br",null),n.a.createElement("p",{id:"interests"},"Some other things I like include writing, baking macarons, practicing violin, and playing with my cat Gigi."))},s=function(){return n.a.createElement("div",{id:"works-text"},n.a.createElement("div",null,n.a.createElement("a",{href:"https://hui388.github.io/react-pokemon/",target:"_blank",rel:"noopener noreferrer"},"Pok\xe9mon Team Generator"),n.a.createElement("li",null,"Generate a team of 6 Pok\xe9mon based on any type."),n.a.createElement("li",null,"Made with React and Flexbox. Utilizes Pok\xe9Api. ")),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("a",{href:"http://marumary.com/travel-blog/",target:"_blank",rel:"noopener noreferrer"},"Travel Gallery"),n.a.createElement("li",null,"A collection of picture highlights from my travels."),n.a.createElement("li",null,"Made with Javascript.")),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("a",{href:"http://kpopify.marumary.com/",target:"_blank",rel:"noopener noreferrer"},"K-popify"),n.a.createElement("li",null,"Make a playlist with K-pop tracks from any song!"),n.a.createElement("li",null,"Made with Node.js while listening to BTS. Utilizes Spotify API. ")))},d=function(e){var t=e.selectedVideo,a=e.setSelectedVideo;return n.a.createElement("div",{id:"demo-nav"},n.a.createElement("button",{style:{fontWeight:"Pokemon.mov"===t?"bolder":"normal"},onClick:function(){a("Pokemon.mov")},id:"Pokemon",className:"demo-text",href:"#"},"Pok\xe9mon Generator ")," |",n.a.createElement("button",{style:{fontWeight:"KpopDemo.mov"===t?"bolder":"normal"},onClick:function(){a("KpopDemo.mov")},id:"Kpop",className:"demo-text",href:"#"}," Kpopify ")," |",n.a.createElement("button",{style:{fontWeight:"TravelGalleryDemo.mov"===t?"bolder":"normal"},onClick:function(){a("TravelGalleryDemo.mov")},id:"Travel",className:"demo-text",href:"#"}," Travel Gallery "))},u=function(e){var t=e.selectedVideo,o=e.setSelectedVideo;return n.a.createElement("div",{className:"demos"},n.a.createElement(d,{selectedVideo:t,setSelectedVideo:o}),n.a.createElement("video",{src:a(12)("./".concat(t)),controls:!0,autoPlay:!0}))},f=function(e){var t=e.selectedTab,a=e.setSelectedTab;return n.a.createElement("div",{id:"info-nav"},n.a.createElement("button",{style:{fontWeight:"About"===t?"bolder":"normal"},onClick:function(e){a("About")},id:"about",className:"nav-text",href:"#"},"About ")," |",n.a.createElement("button",{style:{fontWeight:"Portfolio"===t?"bolder":"normal"},onClick:function(e){a("Portfolio")},id:"examples",className:"nav-text",href:"#"}," Portfolio")," |",n.a.createElement("button",{style:{fontWeight:"Demos"===t?"bolder":"normal"},onClick:function(e){a("Demos")},id:"demos",className:"nav-text",href:"#"}," Demos"))},p=function(){return n.a.createElement("div",{id:"links"},">",n.a.createElement("a",{href:"https://drive.google.com/file/d/1BpmhwmR9qvT2fbVuqFkw7j_WqZYEJ6_L/view",target:"_blank",rel:"noopener noreferrer"},"Resume")," |",n.a.createElement("a",{href:"https://github.com/hui388",target:"_blank",rel:"noopener noreferrer"},"Github")," |",n.a.createElement("a",{href:"https://www.linkedin.com/in/mary-liu-600163127/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"<")},h=function(e){var t=e.setSelectedTab,a=e.selectedTab,o=e.selectedVideo,l=e.setSelectedVideo,r={About:m,Portfolio:s,Demos:u}[a];if("Demos"===a)var i=n.a.createElement(u,{selectedVideo:o,setSelectedVideo:l});else i=n.a.createElement(r,null);return n.a.createElement("div",{className:"hold-container"},n.a.createElement(f,{selectedTab:a,setSelectedTab:t}),i,n.a.createElement(p,null))};var v=function(){var e=Object(o.useState)("About"),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(o.useState)("Pokemon.mov"),m=Object(i.a)(r,2),s=m[0],d=m[1];return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quicksand",rel:"stylesheet"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cabin&display=swap",rel:"stylesheet"})),n.a.createElement("div",{className:"container"},n.a.createElement(c,null),n.a.createElement(h,{setSelectedTab:l,selectedTab:a,selectedVideo:s,setSelectedVideo:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.56ecc72c.chunk.js.map