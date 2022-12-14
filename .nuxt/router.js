import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d6d6e24 = () => interopDefault(import('../pages/about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _0d7b85a5 = () => interopDefault(import('../pages/about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _0d899d26 = () => interopDefault(import('../pages/about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _228f814c = () => interopDefault(import('../pages/career.vue' /* webpackChunkName: "pages/career" */))
const _630bfb15 = () => interopDefault(import('../pages/contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _7a25056a = () => interopDefault(import('../pages/contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _37b633f0 = () => interopDefault(import('../pages/home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _485ad87f = () => interopDefault(import('../pages/home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _0cf0d79e = () => interopDefault(import('../pages/home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _27b5cf5e = () => interopDefault(import('../pages/home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _5882232c = () => interopDefault(import('../pages/home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _082551b3 = () => interopDefault(import('../pages/home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _58d594dc = () => interopDefault(import('../pages/home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _917e9a88 = () => interopDefault(import('../pages/home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _63f53b7c = () => interopDefault(import('../pages/home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _37b03185 = () => interopDefault(import('../pages/home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _9bb1f04c = () => interopDefault(import('../pages/home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _5dc1bd36 = () => interopDefault(import('../pages/home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _8bb82af6 = () => interopDefault(import('../pages/home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _4e852cb8 = () => interopDefault(import('../pages/home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _3fe315b3 = () => interopDefault(import('../pages/home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _1e8278b0 = () => interopDefault(import('../pages/home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _fa58daec = () => interopDefault(import('../pages/home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _551a013a = () => interopDefault(import('../pages/home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _0aa6fbe3 = () => interopDefault(import('../pages/home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _c82c6e4c = () => interopDefault(import('../pages/home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _7aac191c = () => interopDefault(import('../pages/home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _010db6b2 = () => interopDefault(import('../pages/home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _31ecae3f = () => interopDefault(import('../pages/home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _298ff823 = () => interopDefault(import('../pages/home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _b662ce30 = () => interopDefault(import('../pages/home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _9e67742a = () => interopDefault(import('../pages/home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _075829c4 = () => interopDefault(import('../pages/home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _4f9ee20a = () => interopDefault(import('../pages/index-bu.vue' /* webpackChunkName: "pages/index-bu" */))
const _fe6d7c12 = () => interopDefault(import('../pages/pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _4c729248 = () => interopDefault(import('../pages/pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _bbae7302 = () => interopDefault(import('../pages/services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _1a13d801 = () => interopDefault(import('../pages/services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _d3a8b97c = () => interopDefault(import('../pages/services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _12cb64fa = () => interopDefault(import('../pages/team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _12d97c7b = () => interopDefault(import('../pages/team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _50128cec = () => interopDefault(import('../pages/team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _29ee9c29 = () => interopDefault(import('../pages/blog/blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _305dd390 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _e5e3097a = () => interopDefault(import('../pages/blog/blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _7490c2f6 = () => interopDefault(import('../pages/blog/blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _7c8e7094 = () => interopDefault(import('../pages/blog/blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _83fbd198 = () => interopDefault(import('../pages/blog/blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _302a57d8 = () => interopDefault(import('../pages/blog/blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _7c07c109 = () => interopDefault(import('../pages/blog/blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _4cfeb27c = () => interopDefault(import('../pages/blog/blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _6f2ff78f = () => interopDefault(import('../pages/blog/blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _e5992c4c = () => interopDefault(import('../pages/blog/blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _736d9db8 = () => interopDefault(import('../pages/blog/blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _be72716e = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _b07bb800 = () => interopDefault(import('../pages/element/brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _94e23a3e = () => interopDefault(import('../pages/element/call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _b63cfba2 = () => interopDefault(import('../pages/element/carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _97471b44 = () => interopDefault(import('../pages/element/contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _63ea7189 = () => interopDefault(import('../pages/element/dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _70e18354 = () => interopDefault(import('../pages/element/flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _b0506830 = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _e46b7198 = () => interopDefault(import('../pages/element/icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _bf0c769a = () => interopDefault(import('../pages/element/instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _23299396 = () => interopDefault(import('../pages/element/lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _5fd73c46 = () => interopDefault(import('../pages/element/message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _d1b6a5f6 = () => interopDefault(import('../pages/element/pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _47a25454 = () => interopDefault(import('../pages/element/tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _7ee70d6c = () => interopDefault(import('../pages/element/team.vue' /* webpackChunkName: "pages/element/team" */))
const _7c032640 = () => interopDefault(import('../pages/element/testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _48a87b8d = () => interopDefault(import('../pages/portfolio/portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _101a5f8a = () => interopDefault(import('../pages/portfolio/portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _5bce0938 = () => interopDefault(import('../pages/portfolio/portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _a48c5b54 = () => interopDefault(import('../pages/portfolio/portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _06879899 = () => interopDefault(import('../pages/portfolio/portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _8f601492 = () => interopDefault(import('../pages/portfolio/portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _cb05d46a = () => interopDefault(import('../pages/portfolio/portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _4cf28ea7 = () => interopDefault(import('../pages/portfolio/portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _02d01224 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _02de29a5 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _1a528642 = () => interopDefault(import('../pages/portfolio/portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _7251d547 = () => interopDefault(import('../pages/portfolio/portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _4db7031a = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _0bde24f8 = () => interopDefault(import('../pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _26408539 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _5b526957 = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _064bd4b4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us-01",
    component: _0d6d6e24,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _0d7b85a5,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _0d899d26,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _228f814c,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _630bfb15,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _7a25056a,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _37b633f0,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _485ad87f,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _0cf0d79e,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _27b5cf5e,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _5882232c,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _082551b3,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _58d594dc,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _917e9a88,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _63f53b7c,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _37b03185,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _9bb1f04c,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _5dc1bd36,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _8bb82af6,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _4e852cb8,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _3fe315b3,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _1e8278b0,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _fa58daec,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _551a013a,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _0aa6fbe3,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _c82c6e4c,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _7aac191c,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _010db6b2,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _31ecae3f,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _298ff823,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _b662ce30,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _9e67742a,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _075829c4,
    name: "home-vertical-menu"
  }, {
    path: "/index-bu",
    component: _4f9ee20a,
    name: "index-bu"
  }, {
    path: "/pricing-plans",
    component: _fe6d7c12,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _4c729248,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _bbae7302,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _1a13d801,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _d3a8b97c,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _12cb64fa,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _12d97c7b,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _50128cec,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _29ee9c29,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _305dd390,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _e5e3097a,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _7490c2f6,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _7c8e7094,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _83fbd198,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _302a57d8,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _7c07c109,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _4cfeb27c,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _6f2ff78f,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _e5992c4c,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _736d9db8,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _be72716e,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _b07bb800,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _94e23a3e,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _b63cfba2,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _97471b44,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _63ea7189,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _70e18354,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _b0506830,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _e46b7198,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _bf0c769a,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _23299396,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _5fd73c46,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _d1b6a5f6,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _47a25454,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _7ee70d6c,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _7c032640,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _48a87b8d,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _101a5f8a,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _5bce0938,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _a48c5b54,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _06879899,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _8f601492,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _cb05d46a,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _4cf28ea7,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _02d01224,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _02de29a5,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _1a528642,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _7251d547,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _4db7031a,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _0bde24f8,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _26408539,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _5b526957,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _064bd4b4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
