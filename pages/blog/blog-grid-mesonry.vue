<template>
    <div class="main-container">

        <HeaderBlack addClass="header-transparent" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcrumb-area pt--260 pb--80 pt_md--200 pt_sm--150 bg_color--5 breadcrumb-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1">Grid Masonry</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-mesonry bk-blog-masonry clearfix">
                            <div class="mesonry-list">
                                <masonry
                                    :cols="{default: 3, 991: 2, 575: 1}"
                                    :gutter="30"
                                    >

                                    <div class="blog-33-33 mb--30" v-for="blog in data.blogs.slice(20, 29)" :key="blog.id">
                                        <div class="blog-grid">
                                            <div class="post-thumb">
                                                <n-link :to="`/blog/${blog.slug}`">
                                                    <img :src="blog.image" :alt="blog.title">
                                                </n-link>
                                            </div>
                                            <div class="post-content">
                                                <div class="post-inner">
                                                    <h5 class="heading heading-h5">
                                                        <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
                                                    </h5>
                                                    <div class="post-meta">
                                                        <div class="post-date">{{ blog.date }}</div>
                                                        <div class="post-category">
                                                            <n-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</n-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </masonry>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-pagination-wrapper text-center pt--80">
                            <paginate
                                :page-count="4"
                                :page-range="3"
                                :margin-pages="2"
                                :prev-text="'Prev'"
                                :next-text="'Next'"
                                :container-class="'brook-pagination'"
                                :page-class="'page-item'">
                            </paginate>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '~/data/blog.json';
    import {slugify} from '~/mixins/slugify';

    export default {
        mixins: [slugify],

        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BlogPostFour: () => import('@/components/BlogPostFour'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Grid Masonry'
            }
        },
    };
</script>