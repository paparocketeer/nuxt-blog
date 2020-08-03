exports.ids = [3];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("7a3aee09", content, true)

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@-webkit-keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(180deg,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid hsla(0,0%,78.4%,.8);background-color:hsla(0,0%,100%,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:hsla(0,0%,100%,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:hsla(0,0%,100%,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(180deg,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(180deg,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\"\";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}.vue-dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;transition:.2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone>i{color:#ccc}.vue-dropzone>.dz-preview .dz-image{border-radius:0;width:100%;height:100%}.vue-dropzone>.dz-preview .dz-image img:not([src]){width:200px;height:200px}.vue-dropzone>.dz-preview .dz-image:hover img{transform:none;-webkit-filter:none}.vue-dropzone>.dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);transition:opacity .2s linear;text-align:left}.vue-dropzone>.dz-preview .dz-details .dz-filename{overflow:hidden}.vue-dropzone>.dz-preview .dz-details .dz-filename span,.vue-dropzone>.dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone>.dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.vue-dropzone>.dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.vue-dropzone>.dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone>.dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px solid #fff;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone>.dz-preview:hover .dz-remove{opacity:1}.vue-dropzone>.dz-preview .dz-error-mark,.vue-dropzone>.dz-preview .dz-success-mark{margin-left:auto;margin-top:auto;width:100%;top:35%;left:0}.vue-dropzone>.dz-preview .dz-error-mark svg,.vue-dropzone>.dz-preview .dz-success-mark svg{margin-left:auto;margin-right:auto}.vue-dropzone>.dz-preview .dz-error-message{margin-left:auto;margin-right:auto;left:0;width:100%;text-align:center}.vue-dropzone>.dz-preview .dz-error-message:after{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_url/update.vue?vue&type=template&id=59eb2d27&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wrapper style1",attrs:{"id":"intro"}},[_vm._ssrNode("<div class=\"title\"><h1>Update Article</h1></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<form action method=\"post\" enctype=\"multipart/form-data\">","</form>",[_vm._ssrNode("<div class=\"row gtr-50\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_c('dropzone',{ref:"imgDropZone",attrs:{"id":"customdropzone","options":_vm.dropzoneOptions},on:{"vdropzone-complete":_vm.afterComplete,"vdropzone-mounted":_vm.vmounted,"vdropzone-removed-file":_vm.onRemove}})],1),_vm._ssrNode(" <div class=\"col-6 col-12-small\"><input type=\"text\" placeholder=\"Header\" name=\"header\""+(_vm._ssrAttr("value",(_vm.h1)))+"></div> <div class=\"col-6 col-12-small\"><input type=\"text\" placeholder=\"Title\" name=\"title\""+(_vm._ssrAttr("value",(_vm.title)))+"></div> <div class=\"col-6 col-12-small\"><input type=\"text\" placeholder=\"Description\" name=\"description\""+(_vm._ssrAttr("value",(_vm.description)))+"></div> <div class=\"col-6 col-12-small\"><input type=\"text\" placeholder=\"Slug\" name=\"url\""+(_vm._ssrAttr("value",(_vm.url)))+"></div> <div class=\"col-12\"><textarea cols=\"30\" rows=\"4\" placeholder=\"Content\" name=\"content\">"+_vm._ssrEscape(_vm._s(_vm.content))+"</textarea></div> "),_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<ul class=\"actions\">","</ul>",[_vm._ssrNode("<li><button"+(_vm._ssrAttr("disabled",_vm.isDisabled))+" class=\"btn btn-info\">"+((_vm.addLoading)?("<span role=\"status\" aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\"></span>"):"<!---->")+"Update\n              </button></li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"button style2",attrs:{"to":"/articles"}},[_vm._v("Cancel")])],1)],2)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/_url/update.vue?vue&type=template&id=59eb2d27&

// EXTERNAL MODULE: external "nuxt-dropzone"
var external_nuxt_dropzone_ = __webpack_require__(47);
var external_nuxt_dropzone_default = /*#__PURE__*/__webpack_require__.n(external_nuxt_dropzone_);

// EXTERNAL MODULE: ./node_modules/nuxt-dropzone/dropzone.css
var dropzone = __webpack_require__(48);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_url/update.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var updatevue_type_script_lang_js_ = ({
  async asyncData(context) {
    const {
      data
    } = await context.$axios.get('/api/articles/' + context.route.params.url);
    return {
      article: data
    };
  },

  data() {
    return {
      h1: '',
      title: '',
      description: '',
      url: '',
      content: '',
      image: '',
      isValid: false,
      addLoading: false,
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFiles: 1,
        maxFilesize: 2,
        addRemoveLinks: true,
        acceptedFiles: '.jpg, .jpeg, .png',
        dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag cover image here or click to upload</p>
          <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>
          <p class="form-text">Allowed Size: < 2Mb</p>
          `
      }
    };
  },

  components: {
    Dropzone: external_nuxt_dropzone_default.a
  },
  computed: {
    isDisabled: function () {
      if (this.h1 === '' || this.title === '' || this.description === '' || this.url === '' || this.content === '' || this.image === '') {
        return !this.isValid;
      }
    }
  },

  created() {
    this.fillFormData();
  },

  methods: {
    fillFormData() {
      this.h1 = this.article.h1;
      this.title = this.article.title;
      this.description = this.article.description;
      this.url = this.article.url;
      this.content = this.article.content;
    },

    async afterComplete(upload) {
      this.isLoading = true;

      try {
        if (upload.size < this.dropzoneOptions.maxFilesize * 1024 * 1024) {
          this.image = upload;
        } else {
          swal('Error', 'Image size is to big', 'error');
        }
      } catch (error) {
        console.log(error);
        swal('Error', 'Something Went wrong', 'error');
      }
    },

    vmounted() {
      this.$nextTick(function () {
        let mockFile = this.article.image ? this.article.image : {
          size: 123,
          type: 'image/jpg'
        };
        let url = this.article.image ? '/uploads/' + this.article.image.filename : '/images/pic02.jpg';
        this.$refs.imgDropZone.manuallyAddFile(mockFile, url);
      });
    },

    addNewArticle() {
      let formData = new FormData();
      formData.append('h1', this.h1);
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('url', this.url);
      formData.append('content', this.content);

      if (this.image.upload) {
        formData.append('image', this.image);
      }

      this.$axios.put('/api/articles/' + this.$route.params.url, formData).then(response => {
        if (response.status == 200) {
          swal('Success', 'Article updated successfully', 'success');
          this.$router.push({
            name: 'articles',
            params: {
              updated: 'yes'
            }
          });
        }
      }).catch(error => {
        console.log(error);
        swal('Error', 'Something Went wrong', 'error');
      });
    },

    onRemove() {
      this.image = '';
    }

  }
});
// CONCATENATED MODULE: ./pages/articles/_url/update.vue?vue&type=script&lang=js&
 /* harmony default export */ var _url_updatevue_type_script_lang_js_ = (updatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/articles/_url/update.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _url_updatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e29f422"
  
)

/* harmony default export */ var update = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=update.js.map