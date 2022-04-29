(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){"use strict";t.a=function(e,t){var n=e.$axios.create({headers:{"Content-Type":"application/json"}});n.setBaseURL("https://api.quwi.com/v2/"),t("api",n)}},179:function(e,t,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("65d8a5b6",content,!0,{sourceMap:!1})},180:function(e,t,n){var content=n(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("4050f683",content,!0,{sourceMap:!1})},189:function(e,t,n){"use strict";n.r(t);var r={computed:{isAuthed:function(){return this.$store.getters.isAuthed}},methods:{redirect:function(){this.$store.getters.isAuthed&&(this.$store.dispatch("logOut"),this.$router.push("/login"))}}},o=(n(263),n(35)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("p",{staticClass:"header--title"},[e._v("Q")]),e._v(" "),n("button",{staticClass:"header--link",on:{click:e.redirect}},[e._v(e._s(e.isAuthed?"LOGOUT":"LOGIN "))])])}),[],!1,null,"cbcb170c",null);t.default=component.exports;installComponents(component,{Header:n(189).default})},195:function(e,t,n){"use strict";var r={mounted:function(){this.$store.dispatch("init"),this.$store.getters.isAuthed?this.$router.push("/"):this.$router.push("/login")}},o=(n(261),n(35)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("div",{staticClass:"container"},[n("Nuxt")],1)],1)}),[],!1,null,"cb90472e",null);t.a=component.exports;installComponents(component,{Header:n(189).default})},196:function(e,t,n){n(197),e.exports=n(198)},259:function(e,t,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("e622d370",content,!0,{sourceMap:!1})},260:function(e,t,n){var r=n(65)(!1);r.push([e.i,"*{margin:0;padding:0;text-decoration:none;color:#000;list-style:none;font-family:sans-serif;outline:none;transition:.3s ease-in;border:none;box-sizing:border-box}input{border:1px solid #999;height:40px;font-size:18px;padding:5px 10px}",""]),e.exports=r},261:function(e,t,n){"use strict";n(179)},262:function(e,t,n){var r=n(65)(!1);r.push([e.i,".container[data-v-cb90472e]{padding:10px 15px}",""]),e.exports=r},263:function(e,t,n){"use strict";n(180)},264:function(e,t,n){var r=n(65)(!1);r.push([e.i,".header[data-v-cbcb170c]{padding:10px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 0 5px #000}.header--title[data-v-cbcb170c]{font-size:34px;font-weight:700}.header--link[data-v-cbcb170c]{font-size:20px;color:#777;cursor:pointer;background:none}",""]),e.exports=r},265:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return d})),n.d(t,"mutations",(function(){return f})),n.d(t,"actions",(function(){return h})),n.d(t,"getters",(function(){return v}));n(34),n(29),n(33),n(14),n(48),n(30),n(49);var r=n(8),o=n(23);n(63),n(47),n(27);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=function(){return{isAuthed:!1,token:"",projects:[]}},f={addUserToken:function(e,data){this.$api.setToken(data,"Bearer"),e.token=data,e.isAuthed=!0},clearStore:function(e){this.$api.setToken(""),e.token="",e.isAuthed=!1},setProjects:function(e,data){e.projects=data},updateProject:function(e,data){e.projects=e.projects.map((function(e){return l(l({},e),{},{name:e.id===data.id?data.name:e.name})}))}},h={init:function(e){var t=e.commit;+localStorage.ban>+new Date&&localStorage.token?(t("addUserToken",localStorage.token),localStorage.setItem("ban",+new Date+2592e6)):(t("clearStore"),localStorage.clear())},logIn:function(e,data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,t.$api.post("auth/login",data).then((function(e){return r("addUserToken",e.data.token),localStorage.setItem("token",e.data.token),localStorage.setItem("ban",+new Date+2592e6),e}));case 4:return o=n.sent,n.abrupt("return",o);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},logOut:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,t.$api.post("auth/logout").then((function(e){r("clearStore"),localStorage.clear()}));case 4:n.sent,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},handleGetProjects:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,t.$api.get("projects-manage/index?filters[is_active]=1&sort=dta_create");case 4:o=n.sent,data=o.data,r("setProjects",data.projects),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},handleUpdateProject:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,r.prev=1,r.next=4,n.$api.post("projects-manage/update?id=".concat(t.id),t);case 4:c=r.sent,data=c.data,o("updateProject",data.project),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}},v={isAuthed:function(e){return e.isAuthed},projects:function(e){return e.projects}}}},[[196,7,1,8]]]);