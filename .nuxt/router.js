import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _85228358 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6172847c = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages/articles/index" */))
const _36fab616 = () => interopDefault(import('..\\pages\\music\\index.vue' /* webpackChunkName: "pages/music/index" */))
const _29756a6c = () => interopDefault(import('..\\pages\\articles\\new.vue' /* webpackChunkName: "pages/articles/new" */))
const _20811ae4 = () => interopDefault(import('..\\pages\\music\\new.vue' /* webpackChunkName: "pages/music/new" */))
const _013a50cc = () => interopDefault(import('..\\pages\\articles\\_url\\index.vue' /* webpackChunkName: "pages/articles/_url/index" */))
const _0ccb45fe = () => interopDefault(import('..\\pages\\music\\_id.vue' /* webpackChunkName: "pages/music/_id" */))
const _2af80682 = () => interopDefault(import('..\\pages\\articles\\_url\\update.vue' /* webpackChunkName: "pages/articles/_url/update" */))
const _45b2cdce = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _85228358,
    name: "about"
  }, {
    path: "/articles",
    component: _6172847c,
    name: "articles"
  }, {
    path: "/music",
    component: _36fab616,
    name: "music"
  }, {
    path: "/articles/new",
    component: _29756a6c,
    name: "articles-new"
  }, {
    path: "/music/new",
    component: _20811ae4,
    name: "music-new"
  }, {
    path: "/articles/:url",
    component: _013a50cc,
    name: "articles-url"
  }, {
    path: "/music/:id",
    component: _0ccb45fe,
    name: "music-id"
  }, {
    path: "/articles/:url/update",
    component: _2af80682,
    name: "articles-url-update"
  }, {
    path: "/",
    component: _45b2cdce,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
