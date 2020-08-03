<template>
  <div id="sidebar">
    <section class="box">
      <header>
        <h2>Latest articles</h2>
      </header>
      <template v-if="$fetchState.pending">
        <ul class="style2">
          <li v-for="(item, index) in 3" :key="index">
            <article class="box post-excerpt">
              <nuxt-link :to="'#'" class="image left">
                <content-placeholders-img :height="50" />
              </nuxt-link>
              <nuxt-link :to="'#'">
                <content-placeholders-heading />
              </nuxt-link>
              <content-placeholders-text :lines="3" />
            </article>
          </li>
        </ul>
      </template>
      <template v-else-if="$fetchState.error">
        <p>Error while fetching articles: {{ error }}</p>
      </template>
      <template v-else>
        <ul class="style2" v-if="posts.docs.length">
          <li v-for="article in posts.docs" :key="article.url">
            <article class="box post-excerpt">
              <nuxt-link :to="'/articles/' + article.url" class="image left">
                <img
                  :src="(article.image) ? '/uploads/' + article.image.filename : 'images/pic02.jpg'"
                  alt
                />
              </nuxt-link>
              <nuxt-link :to="'/articles/' + article.url">
                <h3>{{ article.title }}</h3>
              </nuxt-link>
              <p>{{ article.description }}</p>
            </article>
          </li>
        </ul>
        <div class="col-12 aln-center" v-else>
          <p>No records found.</p>
        </div>
      </template>
      <div class="row aln-center add-btn">
        <nuxt-link to="/articles" class="button style2">Articles</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      posts: null,
    }
  },
  async fetch() {
    try {
      this.posts = await this.$http.$get(`/api/articles/p/1/${this.count}`)
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style lang="scss" scoped>
.vue-content-placeholders-img {
  height: 30px;
}

.vue-content-placeholders-text__line {
  background: #999;
}

article a,
article h3 {
  text-decoration: none;
  color: #f00;
}
</style>