(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{304:function(t,e,n){"use strict";n.r(e);n(52);var r=n(22),o=n(270),l=n.n(o),c=(n(271),n(91),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/articles/"+t.route.params.url);case 2:return n=e.sent,data=n.data,e.abrupt("return",{article:data});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{h1:"",title:"",description:"",url:"",content:"",image:"",isValid:!1,addLoading:!1,dropzoneOptions:{url:"https://httpbin.org/post",maxFiles:1,maxFilesize:2,addRemoveLinks:!0,acceptedFiles:".jpg, .jpeg, .png",dictDefaultMessage:"<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag cover image here or click to upload</p>\n          <p class=\"form-text\">Allowed Files: .jpg, .jpeg, .png</p>\n          <p class=\"form-text\">Allowed Size: < 2Mb</p>\n          "}}},components:{Dropzone:l.a},computed:{isDisabled:function(){if(""===this.h1||""===this.title||""===this.description||""===this.url||""===this.content||""===this.image)return!this.isValid}},created:function(){this.fillFormData()},methods:{fillFormData:function(){this.h1=this.article.h1,this.title=this.article.title,this.description=this.article.description,this.url=this.article.url,this.content=this.article.content},afterComplete:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.isLoading=!0;try{t.size<1024*e.dropzoneOptions.maxFilesize*1024?e.image=t:swal("Error","Image size is to big","error")}catch(t){console.log(t),swal("Error","Something Went wrong","error")}case 2:case"end":return n.stop()}}),n)})))()},vmounted:function(){this.$nextTick((function(){var t=this.article.image?this.article.image:{size:123,type:"image/jpg"},e=this.article.image?"/uploads/"+this.article.image.filename:"/images/pic02.jpg";this.$refs.imgDropZone.manuallyAddFile(t,e)}))},addNewArticle:function(){var t=this,e=new FormData;e.append("h1",this.h1),e.append("title",this.title),e.append("description",this.description),e.append("url",this.url),e.append("content",this.content),this.image.upload&&e.append("image",this.image),this.$axios.put("/api/articles/"+this.$route.params.url,e).then((function(e){200==e.status&&(swal("Success","Article updated successfully","success"),t.$router.push({name:"articles",params:{updated:"yes"}}))})).catch((function(t){console.log(t),swal("Error","Something Went wrong","error")}))},onRemove:function(){this.image=""}}}),d=n(59),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrapper style1",attrs:{id:"intro"}},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addNewArticle(e)}}},[n("div",{staticClass:"row gtr-50"},[n("div",{staticClass:"col-12"},[n("dropzone",{ref:"imgDropZone",attrs:{id:"customdropzone",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete,"vdropzone-mounted":t.vmounted,"vdropzone-removed-file":t.onRemove}})],1),t._v(" "),n("div",{staticClass:"col-6 col-12-small"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.h1,expression:"h1"}],attrs:{type:"text",placeholder:"Header",name:"header"},domProps:{value:t.h1},on:{input:function(e){e.target.composing||(t.h1=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-12-small"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-12-small"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",placeholder:"Description",name:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-12-small"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",placeholder:"Slug",name:"url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-12"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{cols:"30",rows:"4",placeholder:"Content",name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-12"},[n("ul",{staticClass:"actions"},[n("li",[n("button",{staticClass:"btn btn-info",attrs:{disabled:t.isDisabled}},[t.addLoading?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v("Update\n              ")])]),t._v(" "),n("li",[n("nuxt-link",{staticClass:"button style2",attrs:{to:"/articles"}},[t._v("Cancel")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Update Article")])])}],!1,null,null,null);e.default=component.exports}}]);