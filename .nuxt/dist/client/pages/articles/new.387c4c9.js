(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{274:function(t,e,o){var content=o(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("7eb16094",content,!0,{sourceMap:!1})},287:function(t,e,o){"use strict";var n=o(274);o.n(n).a},288:function(t,e,o){(e=o(57)(!1)).push([t.i,".btn.disabled[data-v-ebf647b0],.btn[data-v-ebf647b0]:disabled{opacity:.65;cursor:default}.image-div[data-v-ebf647b0]{display:flex;margin:25px}.image[data-v-ebf647b0]{max-width:250px;margin:15px}",""]),t.exports=e},300:function(t,e,o){"use strict";o.r(e);o(52);var n=o(22),r=o(270),l=o.n(r),c=(o(271),o(91),{data:function(){return{h1:"",title:"",description:"",url:"",content:"",image:"",isValid:!1,addLoading:!1,dropzoneOptions:{url:"https://httpbin.org/post",maxFiles:1,maxFilesize:2,addRemoveLinks:!0,acceptedFiles:".jpg, .jpeg, .png",dictDefaultMessage:"<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag cover image here or click to upload</p>\n          <p class=\"form-text\">Allowed Files: .jpg, .jpeg, .png</p>\n          <p class=\"form-text\">Allowed Size: < 2Mb</p>\n          "}}},components:{Dropzone:l.a},computed:{isDisabled:function(){if(""===this.h1||""===this.title||""===this.description||""===this.url||""===this.content||""===this.image)return!this.isValid}},methods:{afterComplete:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e.isLoading=!0;try{t.size<1024*e.dropzoneOptions.maxFilesize*1024?e.image=t:swal("Error","Image size is to big","error")}catch(t){console.log(t),swal("Error","Something Went wrong","error")}case 2:case"end":return o.stop()}}),o)})))()},addNewArticle:function(){var t=this,e=new FormData;e.append("h1",this.h1),e.append("title",this.title),e.append("description",this.description),e.append("url",this.url),e.append("content",this.content),e.append("image",this.image),this.addLoading=!0,this.$axios.post("/api/articles",e).then((function(e){t.addLoading=!1,swal("Success","Article added successfully","success"),t.$router.push({name:"articles",params:{created:"yes"}})})).catch((function(e){t.addLoading=!1,swal("Error",e.message,"error")}))},onRemove:function(){this.image=""}}}),d=(o(287),o(59)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"wrapper style1",attrs:{id:"intro"}},[t._m(0),t._v(" "),o("div",{staticClass:"container"},[o("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addNewArticle(e)}}},[o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-12"},[o("dropzone",{ref:"imgDropZone",attrs:{id:"customdropzone",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete,"vdropzone-removed-file":t.onRemove}})],1),t._v(" "),o("div",{staticClass:"col-6 col-12-small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.h1,expression:"h1"}],attrs:{type:"text",placeholder:"Header",name:"header"},domProps:{value:t.h1},on:{input:function(e){e.target.composing||(t.h1=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-6 col-12-small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-6 col-12-small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",placeholder:"Description",name:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-6 col-12-small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",placeholder:"Slug",name:"url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-12"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{cols:"30",rows:"4",placeholder:"Content",name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-12"},[o("ul",{staticClass:"actions"},[o("li",[o("button",{staticClass:"btn btn-info",attrs:{disabled:t.isDisabled}},[t.addLoading?o("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v("Submit\n              ")])]),t._v(" "),o("li",[o("nuxt-link",{staticClass:"button style2",attrs:{to:"/articles"}},[t._v("Cancel")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Add New Article")])])}],!1,null,"ebf647b0",null);e.default=component.exports}}]);