exports.ids = [6];
exports.modules = {

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5a1bda78", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("71e4f824", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("73032fa8", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/music.vue?vue&type=template&id=209571ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"content"}},[(_vm.$fetchState.pending)?[_vm._ssrNode("<div class=\"card shadow\" data-v-209571ce>","</div>",[_vm._ssrNode("<div class=\"card player_card\" data-v-209571ce>","</div>",[_vm._ssrNode("<div class=\"card-body\" data-v-209571ce>","</div>",[_vm._ssrNode("<h6 class=\"card-title\" data-v-209571ce>","</h6>",[_c('content-placeholders-heading')],1),_vm._ssrNode(" "),_vm._ssrNode("<table class=\"table\" data-v-209571ce>","</table>",[_vm._ssrNode("<tbody data-v-209571ce>","</tbody>",_vm._l((6),function(music,index){return _vm._ssrNode("<tr data-v-209571ce>","</tr>",[_vm._ssrNode("<td data-v-209571ce>","</td>",[_c('content-placeholders-text',{attrs:{"lines":1}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td data-v-209571ce>","</td>",[_c('content-placeholders-text',{attrs:{"lines":1}})],1)],2)}),0)])],2)])])]:(_vm.$fetchState.error)?_vm._ssrNode("<p data-v-209571ce>"+_vm._ssrEscape("Error while fetching music: "+_vm._s(_vm.error))+"</p>"):[(_vm.current)?_vm._ssrNode("<div class=\"card shadow\" data-v-209571ce>","</div>",[_vm._ssrNode("<div class=\"card player_card\" data-v-209571ce>","</div>",[_vm._ssrNode("<div class=\"card-body\" data-v-209571ce>","</div>",[_vm._ssrNode("<h6 class=\"card-title\" data-v-209571ce><b data-v-209571ce>"+_vm._ssrEscape(_vm._s(_vm.current.title)+" - "+_vm._s(_vm.current.artist))+"</b></h6> "),(_vm.current)?_c('vue-plyr',{ref:"plyr",on:{"play":_vm.onPlay,"pause":_vm.onPause,"ended":_vm.onEnded}},[_c('audio',[_c('source',{attrs:{"src":_vm.current.music.path.replace('static', ''),"type":"audio/mp3"}})])]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<table class=\"table\" data-v-209571ce>","</table>",[_vm._ssrNode("<tbody data-v-209571ce>","</tbody>",_vm._l((_vm.allMusic),function(music,index){return _vm._ssrNode("<tr data-v-209571ce>","</tr>",[_vm._ssrNode("<td data-v-209571ce>"+_vm._ssrEscape(_vm._s(music.title))+"</td> <td data-v-209571ce>"+_vm._ssrEscape(_vm._s(music.artist))+"</td> "),_vm._ssrNode("<td data-v-209571ce>","</td>",[(!music.isPlaying)?_c('b-icon',{staticClass:"player-icon",attrs:{"icon":"play-fill"},on:{"click":function($event){return _vm.play(index)}}}):_c('b-icon',{staticClass:"player-icon",attrs:{"icon":"pause-fill"},on:{"click":function($event){return _vm.pause(index)}}})],1)],2)}),0)])],2)])]):_vm._ssrNode(("<div class=\"card shadow\" data-v-209571ce><div class=\"card player_card\" data-v-209571ce><p data-v-209571ce>No records found.</p></div></div>"))],_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row aln-center add-btn\" data-v-209571ce>","</div>",[_c('nuxt-link',{staticClass:"button style2",attrs:{"to":"/music"}},[_vm._v("Music")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/music.vue?vue&type=template&id=209571ce&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/music.vue?vue&type=script&lang=js&
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
/* harmony default export */ var musicvue_type_script_lang_js_ = ({
  data() {
    return {
      current: '',
      allMusic: null
    };
  },

  async fetch() {
    try {
      let response = await this.$axios.$get('/api/music');
      let newObj = {
        isPlaying: false
      };
      response.forEach(element => Object.assign(element, newObj));
      this.allMusic = response;
      this.current = this.allMusic[0];
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    onPause: function (event) {
      this.current.isPlaying = false;
    },
    onEnded: function (event) {
      this.allMusic.forEach(element => element.isPlaying = false);
    },
    onPlay: function (event) {
      this.current.isPlaying = true;
    },

    async getAllSongs() {
      try {
        let response = await this.$axios.$get('/api/music');
        let newObj = {
          isPlaying: false
        };
        response.forEach(element => Object.assign(element, newObj));
        this.allMusic = response;
        this.current = this.allMusic[0];
      } catch (err) {
        console.log(err);
      }
    },

    play(index) {
      this.current = this.allMusic[index];
      this.allMusic.forEach(element => element.isPlaying = false);
      this.current.isPlaying = true;
      this.$nextTick(() => {
        this.$refs.plyr.player.source = {
          type: 'audio',
          title: 'Example title',
          sources: [{
            src: this.current.music.path.replace('static', ''),
            type: 'audio/mp3'
          }]
        };
        this.$refs.plyr.player.play();
      });
    },

    pause(index) {
      this.current.isPlaying = false;
      this.$nextTick(() => {
        this.$refs.plyr.player.pause();
      });
    }

  }
});
// CONCATENATED MODULE: ./components/music.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_musicvue_type_script_lang_js_ = (musicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/music.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_musicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "209571ce",
  "7a522320"
  
)

/* harmony default export */ var music = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/articles.vue?vue&type=template&id=5c85dd56&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"sidebar"}},[_vm._ssrNode("<section class=\"box\" data-v-5c85dd56>","</section>",[_vm._ssrNode("<header data-v-5c85dd56><h2 data-v-5c85dd56>Latest articles</h2></header> "),(_vm.$fetchState.pending)?[_vm._ssrNode("<ul class=\"style2\" data-v-5c85dd56>","</ul>",_vm._l((3),function(item,index){return _vm._ssrNode("<li data-v-5c85dd56>","</li>",[_vm._ssrNode("<article class=\"box post-excerpt\" data-v-5c85dd56>","</article>",[_c('nuxt-link',{staticClass:"image left",attrs:{"to":'#'}},[_c('content-placeholders-img',{attrs:{"height":50}})],1),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":'#'}},[_c('content-placeholders-heading')],1),_vm._ssrNode(" "),_c('content-placeholders-text',{attrs:{"lines":3}})],2)])}),0)]:(_vm.$fetchState.error)?_vm._ssrNode("<p data-v-5c85dd56>"+_vm._ssrEscape("Error while fetching articles: "+_vm._s(_vm.error))+"</p>"):[(_vm.posts.docs.length)?_vm._ssrNode("<ul class=\"style2\" data-v-5c85dd56>","</ul>",_vm._l((_vm.posts.docs),function(article){return _vm._ssrNode("<li data-v-5c85dd56>","</li>",[_vm._ssrNode("<article class=\"box post-excerpt\" data-v-5c85dd56>","</article>",[_c('nuxt-link',{staticClass:"image left",attrs:{"to":'/articles/' + article.url}},[_c('img',{attrs:{"src":(article.image) ? '/uploads/' + article.image.filename : 'images/pic02.jpg',"alt":""}})]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":'/articles/' + article.url}},[_c('h3',[_vm._v(_vm._s(article.title))])]),_vm._ssrNode(" <p data-v-5c85dd56>"+_vm._ssrEscape(_vm._s(article.description))+"</p>")],2)])}),0):_vm._ssrNode(("<div class=\"col-12 aln-center\" data-v-5c85dd56><p data-v-5c85dd56>No records found.</p></div>"))],_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row aln-center add-btn\" data-v-5c85dd56>","</div>",[_c('nuxt-link',{staticClass:"button style2",attrs:{"to":"/articles"}},[_vm._v("Articles")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/articles.vue?vue&type=template&id=5c85dd56&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/articles.vue?vue&type=script&lang=js&
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
  props: ['count'],

  data() {
    return {
      posts: null
    };
  },

  async fetch() {
    try {
      this.posts = await this.$http.$get(`/api/articles/p/1/${this.count}`);
    } catch (err) {
      console.log(err);
    }
  }

});
// CONCATENATED MODULE: ./components/articles.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articlesvue_type_script_lang_js_ = (articlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/articles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c85dd56",
  "2839b292"
  
)

/* harmony default export */ var articles = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_id_209571ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_id_209571ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_id_209571ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_id_209571ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_id_209571ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_id_209571ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".player-icon[data-v-209571ce]:hover{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articles_vue_vue_type_style_index_0_id_5c85dd56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articles_vue_vue_type_style_index_0_id_5c85dd56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articles_vue_vue_type_style_index_0_id_5c85dd56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articles_vue_vue_type_style_index_0_id_5c85dd56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articles_vue_vue_type_style_index_0_id_5c85dd56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articles_vue_vue_type_style_index_0_id_5c85dd56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-content-placeholders-img[data-v-5c85dd56]{height:30px}.vue-content-placeholders-text__line[data-v-5c85dd56]{background:#999}article a[data-v-5c85dd56],article h3[data-v-5c85dd56]{text-decoration:none;color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7d6c0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7d6c0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7d6c0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7d6c0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7d6c0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7d6c0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img[data-v-6d7d6c0e]{width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6d7d6c0e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wrapper style2",attrs:{"id":"highlights"}},[_vm._ssrNode("<h1 class=\"title\" data-v-6d7d6c0e>Main</h1> "),_vm._ssrNode("<div class=\"container\" data-v-6d7d6c0e>","</div>",[_vm._ssrNode("<div class=\"row gtr-150\" data-v-6d7d6c0e>","</div>",[_vm._ssrNode("<div class=\"col-6 col-12-medium\" data-v-6d7d6c0e>","</div>",[_c('music')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6 col-12-medium\" data-v-6d7d6c0e>","</div>",[_c('articles',{attrs:{"count":"3"}})],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6d7d6c0e&scoped=true&

// EXTERNAL MODULE: ./components/music.vue + 4 modules
var music = __webpack_require__(57);

// EXTERNAL MODULE: ./components/articles.vue + 4 modules
var articles = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    music: music["default"],
    articles: articles["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d7d6c0e",
  "9174eeee"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Music: __webpack_require__(57).default,Articles: __webpack_require__(58).default})


/***/ })

};;
//# sourceMappingURL=index.js.map