<template>
  <section id="highlights" class="wrapper style3">
    <div class="title">Articles</div>
    <div class="container">
      <div class="row aln-center" v-if="data.docs.length">
        <div class="col-3 col-12-medium" v-for="article in data.docs" :key="article.url">
          <section class="highlight">
            <nuxt-link :to="'/articles/' + article.url" class="image featured">
              <img
                :src="(article.image) ? '../uploads/' + article.image.filename : 'images/pic02.jpg'"
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
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>
      <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
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
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
      ],
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
  },
  head() {
    return {
      title: 'Articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Articles examples inside MEVN blog',
        },
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      ],
    }
  },
  async asyncData(context) {
    let page = context.route.query.page ? context.route.query.page : 1
    const { data } = await context.$axios.get(`/api/articles/p/${page}`)
    return {
      data,
    }
  },
}
</script>


