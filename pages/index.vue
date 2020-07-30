<template>
  <section v-if="allMusic">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <h3 class="text-center">Player</h3>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6">
          <img
            src="https://images.pexels.com/photos/3624281/pexels-photo-3624281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="image"
          />
          <div class="card player_card">
            <div class="card-body">
              <h6 class="card-title">
                <b>{{this.current.title}} - {{this.current.artist}}</b>
              </h6>
              <div>
                <i class="fas fa-backward control mr-4"></i>
                <i class="fas fa-play play"></i>
                <i class="fas fa-pause play"></i>
                <i class="fas fa-forward control ml-4"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card shadow">
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
                <tr v-for="(music,index) in allMusic" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{music.title}}</td>
                  <td>{{music.artist}}</td>
                  <td>
                    <button class="btn btn-primary" v-if="!isplaying" @click="play(music)">Play</button>
                    <button class="btn btn-primary" v-else @click="pause">Pause</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head () {
    return {
      title: 'Статический тайтл',
      meta: [
        {hid: 'description', name: 'description', content: 'Статический деск'},
        {hid: 'robots', name: 'robots', content: 'noindex,nofollow'}
      ]
    }
  },
  layout: 'no-sidebar',
  data() {
    return {
      current: {
        title: '',
        artist: ''
      },
      song: true,
      isplaying: false,
      allMusic: null,
      index: 0,
      player: ''
    }
  },
  methods: {
     async initPlayer() {
      if (this.allMusic !== []) {        
        this.current = await this.allMusic[this.index]        
        this.player.src = this.current.music.path.replace('static','')
      } else {
        this.song = true
      }
    },
      async getAllSongs() {
        try {
        let response = await this.$axios.$get('/api/music')
        console.log(response)
        if (response === []) {
          this.song = true
          this.current = null
        } else {
          this.song = false
          this.allMusic = response
        }
        await this.initPlayer()
      } catch (err) {
        this.current = null
        console.log(err)
      }
    },
    play(song) {
      console.log(song)
      if (song) {
        this.current = song
        this.player.src = this.current.music.path.replace('static','')
      }
      this.player.play()
      this.isplaying = true
    },
    pause() {
      this.player.pause()
      this.isplaying = false
    }
  },
  created() {
 if (process.client) {
      this.player = new Audio()
    }
    this.getAllSongs()
  }
}
</script>
<style  scoped>
</style>


