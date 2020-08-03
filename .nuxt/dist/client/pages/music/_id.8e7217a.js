(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{303:function(t,e,o){"use strict";o.r(e);o(52);var r=o(22),n=o(270),l=o.n(n),c=(o(271),o(91),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/music/"+t.route.params.id);case 2:return o=e.sent,data=o.data,e.abrupt("return",{audio:data});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"",artist:"",music:"",addLoading:!1,isValid:!1,dropzoneOptions:{url:"https://httpbin.org/post",maxFiles:1,maxFilesize:10,addRemoveLinks:!0,acceptedFiles:".mp3",dictDefaultMessage:"<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag audio file here or click to upload</p>\n          <p class=\"form-text\">Allowed Files: .mp3</p>\n          <p class=\"form-text\">Allowed Size: < 10Mb</p>\n          "}}},components:{Dropzone:l.a},computed:{isDisabled:function(){if(""===this.title||""===this.artist||""===this.music)return!this.isValid}},created:function(){this.fillFormData()},methods:{fillFormData:function(){this.title=this.audio.title,this.artist=this.audio.artist},afterComplete:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:try{t.size<1024*e.dropzoneOptions.maxFilesize*1024?e.music=t:swal("Error","File size is to big","error")}catch(t){console.log(t),swal("Error","Something Went wrong","error")}case 1:case"end":return o.stop()}}),o)})))()},vmounted:function(){this.$nextTick((function(){var t=this.audio.music,e="/uploads/"+this.audio.music.filename;this.$refs.audioDropZone.manuallyAddFile(t,e)}))},addNewMusic:function(){var t=this,e=new FormData;e.append("artist",this.artist),e.append("title",this.title),this.music.upload&&e.append("music",this.music),this.$axios.put("/api/music/"+this.$route.params.id,e).then((function(e){200==e.status&&(swal("Success","Music updated successfully","success"),t.$router.push({name:"music",params:{updated:"yes"}}))})).catch((function(t){console.log(t),swal("Error","Something Went wrong","error")}))},onRemove:function(){this.music=""}}}),d=o(59),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"wrapper style1",attrs:{id:"footer"}},[t._m(0),t._v(" "),o("div",{staticClass:"container"},[o("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addNewMusic(e)}}},[o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-12"},[o("dropzone",{ref:"audioDropZone",attrs:{id:"customdropzone",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete,"vdropzone-removed-file":t.onRemove,"vdropzone-mounted":t.vmounted}})],1),t._v(" "),o("div",{staticClass:"col-6 col-12-small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],attrs:{type:"text",placeholder:"Artist",name:"artist"},domProps:{value:t.artist},on:{input:function(e){e.target.composing||(t.artist=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-6 col-12-small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-12"},[o("ul",{staticClass:"actions"},[o("li",[o("button",{staticClass:"btn btn-info",attrs:{disabled:t.isDisabled}},[t.addLoading?o("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v("Update\n                ")])]),t._v(" "),o("li",[o("nuxt-link",{staticClass:"button style2",attrs:{to:"/music"}},[t._v("Cancel")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Update Audio")])])}],!1,null,null,null);e.default=component.exports}}]);