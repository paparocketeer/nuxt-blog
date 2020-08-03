<template>
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
                    <content-placeholders-text :lines="1" />
                  </td>
                  <td>
                    <content-placeholders-text :lines="1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="$fetchState.error">
      <p>Error while fetching music: {{ error }}</p>
    </template>
    <template v-else>
      <div class="card shadow" v-if="current">
        <div class="card player_card">
          <div class="card-body">
            <h6 class="card-title">
              <b>{{current.title}} - {{current.artist}}</b>
            </h6>
            <vue-plyr v-if="current" ref="plyr" @play="onPlay" @pause="onPause" @ended="onEnded">
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
                    <b-icon icon="pause-fill" class="player-icon" v-else @click="pause(index)"></b-icon>
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
</template>

<script>
export default {
  data() {
    return {
      current: '',
      allMusic: null,
    }
  },
  async fetch() {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.player-icon:hover {
  cursor: pointer;
}
</style>