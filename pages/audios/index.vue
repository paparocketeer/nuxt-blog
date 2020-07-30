<template>
  <section id="music" class="wrapper style3">
    <div class="title">Audios</div>
    <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <no-ssr>
                    <span
                      class="spinner-border spinner-border-sm"
                      v-if="musicLoading"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </no-ssr>
                  <tr v-for="(music, index) in allmusic" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ music.title }}</td>
                    <td>{{ music.artist }}</td>
                    <td>
                      <button class="btn btn-info" @click="deleteMusic(music._id)">Delete</button>
                      <nuxt-link :to="'/audios/' + music._id + '/update'" class="button style2">Update</nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="row aln-center add-btn">
                <nuxt-link to="/audios/new" class="button style2">Add New</nuxt-link>
              </div>
    <!-- <div class="container">
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
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      // posts: [],
      // limit: 3,
      allmusic: [],
      musicLoading: false,
    }
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
  // async asyncData(context) {
  //   let page = context.route.query.page ? context.route.query.page : 1
  //   const { data } = await context.$axios.get(`/api/articles/p/${page}`)
  //   return {
  //     data,
  //   }
  // },
  // async fetch() {
  //   this.posts = await this.$http.$get(
  //     `/api/articles/p/${this.$route.query.page}/${
  //       this.$route.query.limit ? this.$route.query.limit : this.limit
  //     }`
  //   )
  // },
  methods: {
    async getAllMusics() {
      this.musicLoading = true
      try {
        let data = await this.$axios.$get('/api/music')
        this.allmusic = data
        this.musicLoading = false
      } catch (err) {
        this.musicLoading = false
        swal('Error', 'Error Fetting Musics', 'error')
      }
    },
    deleteMusic(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this Music!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$axios
            .$delete('/api/music/' + id)
            .then(response => {
              this.getAllMusics()
              swal('Poof! Your Music file has been deleted!', {
                icon: 'success'
              })
            })
            .catch(err => {
              swal('Error', 'Somethimg went wrong', 'error')
            })
        } else {
          swal('Your Music file is safe!')
        }
      })
    }
  //   linkGen(pageNum) {
  //     return pageNum === 1 ? '?' : `?page=${pageNum}`
  //   },
  // },
  // watch: {
  //   '$route.query': '$fetch',
  },
  created() {
    this.getAllMusics()
  }
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

