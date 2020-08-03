export { default as Articles } from '../..\\components\\articles.vue'
export { default as Music } from '../..\\components\\music.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'

export const LazyArticles = import('../..\\components\\articles.vue' /* webpackChunkName: "components_articles'}" */).then(c => c.default || c)
export const LazyMusic = import('../..\\components\\music.vue' /* webpackChunkName: "components_music'}" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\navbar.vue' /* webpackChunkName: "components_navbar'}" */).then(c => c.default || c)
