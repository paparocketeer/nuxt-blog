(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{302:function(t,e,r){"use strict";r.r(e);r(52);var c=r(22),n={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/articles/"+t.route.params.url);case 2:return r=e.sent,data=r.data,e.abrupt("return",{article:data});case 5:case"end":return e.stop()}}),e)})))()},methods:{deleteRecord:function(){var t=this;!0===confirm("Are you sure?")&&this.$axios.delete("/api/articles/"+this.$route.params.url).then((function(e){200==e.status&&(swal("Success","Article deleted successfully","success"),t.$router.push({name:"articles",params:{deleted:"yes"}}))})).catch((function(t){console.log(t)}))}}},l=r(59),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"wrapper style2",attrs:{id:"main"}},[r("h1",{staticClass:"title"},[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row gtr-150"},[r("div",{staticClass:"col-12"},[r("div",{attrs:{id:"content"}},[r("article",{staticClass:"box post"},[r("header",{staticClass:"style1"}),t._v(" "),r("a",{staticClass:"image featured",attrs:{href:t.article.image?"/uploads/"+t.article.image.filename:"/images/pic02.jpg"}},[r("img",{attrs:{src:t.article.image?"/uploads/"+t.article.image.filename:"/images/pic02.jpg",alt:""}})]),t._v(" "),r("p",[t._v("\n              "+t._s(t.article.content)+"\n            ")])])])])]),t._v(" "),r("div",{staticClass:"row gtr-150 mt-5"},[r("div",[r("nuxt-link",{staticClass:"button style2",attrs:{to:"/articles/"+t.article.url+"/update"}},[t._v("Update")]),t._v(" "),r("button",{staticClass:"button style1",on:{click:function(e){return t.deleteRecord()}}},[t._v("Delete")]),t._v(" "),r("nuxt-link",{staticClass:"button style2",attrs:{to:"/articles"}},[t._v("Back to Articles")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);