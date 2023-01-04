import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ed1038c2 = () => interopDefault(import('../pages/about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _ecf409c0 = () => interopDefault(import('../pages/about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _ecd7dabe = () => interopDefault(import('../pages/about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _3ad9ee02 = () => interopDefault(import('../pages/career.vue' /* webpackChunkName: "pages/career" */))
const _596daf60 = () => interopDefault(import('../pages/contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _189447c6 = () => interopDefault(import('../pages/contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _6b42fdc3 = () => interopDefault(import('../pages/home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _0d782d24 = () => interopDefault(import('../pages/home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _ee0965ce = () => interopDefault(import('../pages/home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _4b579d36 = () => interopDefault(import('../pages/home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _df0d8fb2 = () => interopDefault(import('../pages/home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _c0e46850 = () => interopDefault(import('../pages/home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _a3074152 = () => interopDefault(import('../pages/home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _7c5e0761 = () => interopDefault(import('../pages/home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _40009e12 = () => interopDefault(import('../pages/home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _163d7180 = () => interopDefault(import('../pages/home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _d4765d56 = () => interopDefault(import('../pages/home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _26c5ebe0 = () => interopDefault(import('../pages/home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _812fb72c = () => interopDefault(import('../pages/home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _a4909cc6 = () => interopDefault(import('../pages/home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _d4ec3fa4 = () => interopDefault(import('../pages/home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _28b5d8a3 = () => interopDefault(import('../pages/home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _410f1ba2 = () => interopDefault(import('../pages/home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _4a918d70 = () => interopDefault(import('../pages/home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _212cbe1e = () => interopDefault(import('../pages/home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _09c76482 = () => interopDefault(import('../pages/home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _2a2d7352 = () => interopDefault(import('../pages/home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _5eaba98c = () => interopDefault(import('../pages/home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _1079ee3a = () => interopDefault(import('../pages/home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _2ed43208 = () => interopDefault(import('../pages/home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _48119ba3 = () => interopDefault(import('../pages/home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _e14cf434 = () => interopDefault(import('../pages/home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _c27eb82e = () => interopDefault(import('../pages/home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _90245322 = () => interopDefault(import('../pages/index-bu.vue' /* webpackChunkName: "pages/index-bu" */))
const _240c44b2 = () => interopDefault(import('../pages/pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _3f8d51ad = () => interopDefault(import('../pages/pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _d578f438 = () => interopDefault(import('../pages/services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _85524a88 = () => interopDefault(import('../pages/services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _74b8e33d = () => interopDefault(import('../pages/services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _05e6245f = () => interopDefault(import('../pages/team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _05f43be0 = () => interopDefault(import('../pages/team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _798651c5 = () => interopDefault(import('../pages/team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _7d51d364 = () => interopDefault(import('../pages/blog/blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _580e4373 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _d46b3584 = () => interopDefault(import('../pages/blog/blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _225c7e2a = () => interopDefault(import('../pages/blog/blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _21ffdb39 = () => interopDefault(import('../pages/blog/blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _1aa6f6d9 = () => interopDefault(import('../pages/blog/blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _448fb3b9 = () => interopDefault(import('../pages/blog/blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _21792bae = () => interopDefault(import('../pages/blog/blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _57c66b92 = () => interopDefault(import('../pages/blog/blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _1363e16c = () => interopDefault(import('../pages/blog/blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _75ab0256 = () => interopDefault(import('../pages/blog/blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _037f73c2 = () => interopDefault(import('../pages/blog/blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _1103f484 = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _3f2a9e25 = () => interopDefault(import('../pages/element/brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _9ab9e0c8 = () => interopDefault(import('../pages/element/call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _464ed1ac = () => interopDefault(import('../pages/element/carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _6a3b96ce = () => interopDefault(import('../pages/element/contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _570530ee = () => interopDefault(import('../pages/element/dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _76b929de = () => interopDefault(import('../pages/element/flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _1814f923 = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _2532c159 = () => interopDefault(import('../pages/element/icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _10b6f1ee = () => interopDefault(import('../pages/element/instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _7326d35e = () => interopDefault(import('../pages/element/lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _9503f27e = () => interopDefault(import('../pages/element/message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _26691100 = () => interopDefault(import('../pages/element/pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _58394b51 = () => interopDefault(import('../pages/element/tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _f7a9715e = () => interopDefault(import('../pages/element/team.vue' /* webpackChunkName: "pages/element/team" */))
const _17a5375b = () => interopDefault(import('../pages/element/testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _51646588 = () => interopDefault(import('../pages/portfolio/portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _c78f01f6 = () => interopDefault(import('../pages/portfolio/portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _6e1b07ee = () => interopDefault(import('../pages/portfolio/portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _67df1411 = () => interopDefault(import('../pages/portfolio/portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _601e2058 = () => interopDefault(import('../pages/portfolio/portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _42d2eb5c = () => interopDefault(import('../pages/portfolio/portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _3fee8070 = () => interopDefault(import('../pages/portfolio/portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _55ae78a2 = () => interopDefault(import('../pages/portfolio/portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _678d2d42 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _6770fe40 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _1766b2fd = () => interopDefault(import('../pages/portfolio/portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _fdd9aaa8 = () => interopDefault(import('../pages/portfolio/portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _b94464d6 = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _81a37bae = () => interopDefault(import('../pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _92b81744 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _39dfa952 = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _cd45f93e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ed1038c2,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _ecf409c0,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _ecd7dabe,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _3ad9ee02,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _596daf60,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _189447c6,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _6b42fdc3,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _0d782d24,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _ee0965ce,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _4b579d36,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _df0d8fb2,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _c0e46850,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _a3074152,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _7c5e0761,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _40009e12,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _163d7180,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _d4765d56,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _26c5ebe0,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _812fb72c,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _a4909cc6,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _d4ec3fa4,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _28b5d8a3,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _410f1ba2,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _4a918d70,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _212cbe1e,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _09c76482,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _2a2d7352,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _5eaba98c,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _1079ee3a,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _2ed43208,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _48119ba3,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _e14cf434,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _c27eb82e,
    name: "home-vertical-menu"
  }, {
    path: "/index-bu",
    component: _90245322,
    name: "index-bu"
  }, {
    path: "/pricing-plans",
    component: _240c44b2,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _3f8d51ad,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _d578f438,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _85524a88,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _74b8e33d,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _05e6245f,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _05f43be0,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _798651c5,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _7d51d364,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _580e4373,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _d46b3584,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _225c7e2a,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _21ffdb39,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _1aa6f6d9,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _448fb3b9,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _21792bae,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _57c66b92,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _1363e16c,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _75ab0256,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _037f73c2,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _1103f484,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _3f2a9e25,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _9ab9e0c8,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _464ed1ac,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _6a3b96ce,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _570530ee,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _76b929de,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _1814f923,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _2532c159,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _10b6f1ee,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _7326d35e,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _9503f27e,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _26691100,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _58394b51,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _f7a9715e,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _17a5375b,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _51646588,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _c78f01f6,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _6e1b07ee,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _67df1411,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _601e2058,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _42d2eb5c,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _3fee8070,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _55ae78a2,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _678d2d42,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _6770fe40,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _1766b2fd,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _fdd9aaa8,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _b94464d6,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _81a37bae,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _92b81744,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _39dfa952,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _cd45f93e,
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
