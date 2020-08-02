<template>
  <section id="highlights" class="wrapper style3">
    <div class="title">Articles</div>
    <div class="container">
      <template v-if="$fetchState.pending">
        <div class="row aln-center">
          <div class="col-4 col-12-medium" v-for="(item, index) in 3" :key="index">
            <content-placeholders>
              <content-placeholders-img />
              <content-placeholders-heading />
              <content-placeholders-text :lines="6" />
            </content-placeholders>
          </div>
        </div>
      </template>
      <template v-else-if="$fetchState.error">
        <p>Error while fetching articles: {{ error }}</p>
      </template>
      <template v-else>
        <div class="row aln-center" v-if="posts.docs.length">
          <div class="col-4 col-12-medium" v-for="article in posts.docs" :key="article.url">
            <section class="highlight">
              <nuxt-link :to="'/articles/' + article.url" class="image featured">
                <img
                  :src="(article.image) ? '/uploads/' + article.image.filename : 'images/pic02.jpg'"
                  alt
                />
              </nuxt-link>
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
              <ul class="actions">
                <li>
                  <nuxt-link class="button style1" :to="'/articles/' + article.url">Learn more</nuxt-link>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div class="row aln-center" v-else>
          <div class="col-12 aln-center">
            <p>No records found.</p>
          </div>
        </div>
      </template>
      <div class="mt-5">
        <b-pagination-nav
          align="center"
          :link-gen="linkGen"
          :number-of-pages="posts.totalPages"
          use-router
          v-if="posts.totalPages > 1"
        ></b-pagination-nav>
      </div>
      <div class="row aln-center add-btn">
        <nuxt-link to="/articles/new" class="button style2">Add New</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      limit: 3,
    }
  },
  async fetch() {
    this.posts = await this.$http.$get(
      `/api/articles/p/${this.$route.query.page}/${
        this.$route.query.limit ? this.$route.query.limit : this.limit
      }`
    )
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
}
</script>

<style lang="scss">
.page-item {
  a:hover,
  a:visited,
  a:active {
    color: #555;
  }
}
</style>

