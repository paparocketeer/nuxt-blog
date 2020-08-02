 <template>
  <section id="highlights" class="wrapper style2">
    <h1 class="title">Main</h1>
    <div class="container">
      <div class="row gtr-150">
        <div class="col-6 col-12-medium">
          <div id="content">
            <template v-if="$fetchState.pending">
              <div class="card shadow">
                <div class="card player_card">
                  <div class="card-body">
                    <h6 class="card-title">
                      <content-placeholders-heading />
                    </h6>
                    <table class="table">
                      <tbody>
                        <tr v-for="(music,index) in 6" :key="index">
                          <td>
                            <content-placeholders-text :lines="1"/>
                          </td>
                          <td>
                            <content-placeholders-text :lines="1"/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </template>
            <template v-else-if="$fetchState.error">
              <p>Error while fetching data: {{ error }}</p>
            </template>
            <template v-else>
              <div class="card shadow" v-if="current">
                <div class="card player_card">
                  <div class="card-body">
                    <h6 class="card-title">
                      <b>{{current.title}} - {{current.artist}}</b>
                    </h6>
                    <vue-plyr
                      v-if="current"
                      ref="plyr"
                      :emit="['play', 'pause', 'ended']"
                      @play="onPlay"
                      @pause="onPause"
                      @ended="onEnded"
                    >
                      <audio>
                        <source :src="current.music.path.replace('static', '')" type="audio/mp3" />
                      </audio>
                    </vue-plyr>
                    <table class="table">
                      <tbody>
                        <tr v-for="(music,index) in allMusic" :key="index">
                          <td>{{music.title}}</td>
                          <td>{{music.artist}}</td>
                          <td>
                            <b-icon
                              icon="play-fill"
                              class="player-icon"
                              v-if="!music.isPlaying"
                              @click="play(index)"
                            ></b-icon>
                            <b-icon
                              icon="pause-fill"
                              class="player-icon"
                              v-else
                              @click="pause(index)"
                            ></b-icon>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card shadow" v-else>
                <div class="card player_card">
                  <p>No records found.</p>
                </div>
              </div>
            </template>
            <div class="row aln-center add-btn">
                <nuxt-link to="/music" class="button style2">Music</nuxt-link>
              </div>
          </div>
        </div>
        <div class="col-6 col-12-medium">
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
                <p>Error while fetching data: {{ error }}</p>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      allMusic: null,
      posts: null,
    }
  },
  async fetch() {
    try {
      let response = await this.$axios.$get('/api/music')
      let newObj = { isPlaying: false }
      response.forEach((element) => Object.assign(element, newObj))
      this.allMusic = response
      this.current = this.allMusic[0]

      this.posts = await this.$http.$get('/api/articles/p/1/3')
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    onPause: function (event) {
      this.current.isPlaying = false
    },
    onEnded: function (event) {
      this.allMusic.forEach((element) => (element.isPlaying = false))
    },
    onPlay: function (event) {
      this.current.isPlaying = true
    },
    async getAllSongs() {
      try {
        let response = await this.$axios.$get('/api/music')
        let newObj = { isPlaying: false }
        response.forEach((element) => Object.assign(element, newObj))
        this.allMusic = response
        this.current = this.allMusic[0]
      } catch (err) {
        console.log(err)
      }
    },
    play(index) {
      this.current = this.allMusic[index]
      this.allMusic.forEach((element) => (element.isPlaying = false))
      this.current.isPlaying = true
      this.$nextTick(() => {
        this.$refs.plyr.player.source = {
          type: 'audio',
          title: 'Example title',
          sources: [
            {
              src: this.current.music.path.replace('static', ''),
              type: 'audio/mp3',
            },
          ],
        }
        this.$refs.plyr.player.play()
      })
    },
    pause(index) {
      this.current.isPlaying = false
      this.$nextTick(() => {
        this.$refs.plyr.player.pause()
      })
    },
  },
  // created() {
  //   this.getAllSongs()
  // },
}
</script>
<style scoped>
img {
  width: 100%;
}
.player-icon:hover {
  cursor: pointer;
}

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


