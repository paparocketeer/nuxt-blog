exports.ids = [4];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3dce3b59", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-item a:active,.page-item a:hover,.page-item a:visited{color:#555}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/index.vue?vue&type=template&id=0b212f67&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wrapper style3",attrs:{"id":"highlights"}},[_vm._ssrNode("<div class=\"title\">Articles</div> "),_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.$fetchState.pending)?[_vm._ssrNode("<div class=\"row aln-center\">","</div>",_vm._l((3),function(item,index){return _vm._ssrNode("<div class=\"col-4 col-12-medium\">","</div>",[_c('content-placeholders',[_c('content-placeholders-img'),_vm._v(" "),_c('content-placeholders-heading'),_vm._v(" "),_c('content-placeholders-text',{attrs:{"lines":6}})],1)],1)}),0)]:(_vm.$fetchState.error)?_vm._ssrNode("<p>"+_vm._ssrEscape("Error while fetching articles: "+_vm._s(_vm.error))+"</p>"):[(_vm.posts.docs.length)?_vm._ssrNode("<div class=\"row aln-center\">","</div>",_vm._l((_vm.posts.docs),function(article){return _vm._ssrNode("<div class=\"col-4 col-12-medium\">","</div>",[_vm._ssrNode("<section class=\"highlight\">","</section>",[_c('nuxt-link',{staticClass:"image featured",attrs:{"to":'/articles/' + article.url}},[_c('img',{attrs:{"src":(article.image) ? '/uploads/' + article.image.filename : 'images/pic02.jpg',"alt":""}})]),_vm._ssrNode(" <h3>"+_vm._ssrEscape(_vm._s(article.title))+"</h3> <p>"+_vm._ssrEscape(_vm._s(article.description))+"</p> "),_vm._ssrNode("<ul class=\"actions\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"button style1",attrs:{"to":'/articles/' + article.url}},[_vm._v("Learn more")])],1)])],2)])}),0):_vm._ssrNode(("<div class=\"row aln-center\"><div class=\"col-12 aln-center\"><p>No records found.</p></div></div>"))],_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-5\">","</div>",[(_vm.posts.totalPages > 1)?_c('b-pagination-nav',{attrs:{"align":"center","link-gen":_vm.linkGen,"number-of-pages":_vm.posts.totalPages,"use-router":""}}):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row aln-center add-btn\">","</div>",[_c('nuxt-link',{staticClass:"button style2",attrs:{"to":"/articles/new"}},[_vm._v("Add New")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/index.vue?vue&type=template&id=0b212f67&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/index.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var articlesvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [],
      limit: 3
    };
  },

  async fetch() {
    this.posts = await this.$http.$get(`/api/articles/p/${this.$route.query.page}/${this.$route.query.limit ? this.$route.query.limit : this.limit}`);
  },

  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`;
    }

  },
  watch: {
    '$route.query': '$fetch'
  }
});
// CONCATENATED MODULE: ./pages/articles/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlesvue_type_script_lang_js_ = (articlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/articles/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "64dc7f68"
  
)

/* harmony default export */ var articles = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map