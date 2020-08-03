exports.ids = [2];
exports.modules = {

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_url/index.vue?vue&type=template&id=3b8ebec8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wrapper style2",attrs:{"id":"main"}},[_vm._ssrNode("<h1 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row gtr-150\"><div class=\"col-12\"><div id=\"content\"><article class=\"box post\"><header class=\"style1\"></header> <a"+(_vm._ssrAttr("href",(_vm.article.image) ? '/uploads/' + _vm.article.image.filename : '/images/pic02.jpg'))+" class=\"image featured\"><img"+(_vm._ssrAttr("src",(_vm.article.image) ? '/uploads/' + _vm.article.image.filename : '/images/pic02.jpg'))+" alt></a> <p>"+_vm._ssrEscape("\n              "+_vm._s(_vm.article.content)+"\n            ")+"</p></article></div></div></div> "),_vm._ssrNode("<div class=\"row gtr-150 mt-5\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"button style2",attrs:{"to":'/articles/' + _vm.article.url + '/update'}},[_vm._v("Update")]),_vm._ssrNode(" <button class=\"button style1\">Delete</button> "),_c('nuxt-link',{staticClass:"button style2",attrs:{"to":"/articles"}},[_vm._v("Back to Articles")])],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/_url/index.vue?vue&type=template&id=3b8ebec8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_url/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _urlvue_type_script_lang_js_ = ({
  async asyncData(context) {
    const {
      data
    } = await context.$axios.get('/api/articles/' + context.route.params.url);
    return {
      article: data
    };
  },

  methods: {
    deleteRecord() {
      if (confirm("Are you sure?") === true) {
        this.$axios.delete('/api/articles/' + this.$route.params.url).then(response => {
          if (response.status == 200) {
            swal('Success', 'Article deleted successfully', 'success');
            this.$router.push({
              name: 'articles',
              params: {
                deleted: 'yes'
              }
            });
          }
        }).catch(error => {
          console.log(error);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/articles/_url/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var articles_urlvue_type_script_lang_js_ = (_urlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/articles/_url/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  articles_urlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1235619c"
  
)

/* harmony default export */ var _url = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map