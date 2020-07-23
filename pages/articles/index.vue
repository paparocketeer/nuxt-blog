<template>
  <section id="highlights" class="wrapper style3">
    <div class="title">Articles</div>
    <div class="container">
      <div class="row aln-center" v-if="articles.length">

        <div 
        class="col-3 col-12-medium"
        v-for="article in articles"
        :key="article._id">
          <section class="highlight">
            <nuxt-link 
            :to="'/articles/' + article._id"
            class="image featured">
              <img src="images/pic02.jpg" alt />
            </nuxt-link>
            <h3>
              {{ article.title }}
            </h3>
            <p>{{ article.description }}</p>
            <ul class="actions">
              <li>
                <nuxt-link
                  class="button style1"
                  :to="'/articles/' + article._id">Learn more</nuxt-link>
              </li>
            </ul>
          </section>
        </div>

      </div>
      <div class="row aln-center" v-else>
        <div class="col-12 aln-center" >
          <p>No records found.</p>
        </div>
      </div>
      <div class="row aln-center add-btn">
        <nuxt-link to="/articles/new" class="button style2">Add New</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Статический тайтл 2',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Статический деск 2',
        },
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      ],
    }
  },
  async asyncData(context) {
    const { data } = await context.$axios.get('/api/articles')
    return {
      articles: data,
    }
  },
}
</script>


