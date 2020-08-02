<template>
  <section id="music" class="wrapper style3">
    <div class="title">Audios</div>
    <div class="container">
      <div class="row gtr-50">
        <div class="col-12 aln-center">
          <table class="table">
            <tbody>
              <tr v-for="(music,index) in allmusic" :key="index">
                <td>{{music.artist}} - {{music.title}}</td>
                <td>
                  <nuxt-link :to="''">
                    <b-icon
                      v-b-tooltip.hover
                      :title="`Delete ${music.artist} - ${music.title}`"
                      icon="trash-fill"
                      variant="danger"
                      class="player-icon"
                      @click="deleteMusic(music._id)"
                    ></b-icon>
                  </nuxt-link>

                  <nuxt-link :to="'/music/' + music._id">
                    <b-icon
                      v-b-tooltip.hover
                      :title="`Edit ${music.artist} - ${music.title}`"
                      variant="info"
                      icon="pencil-square"
                    ></b-icon>
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row aln-center add-btn">
      <nuxt-link to="/music/new" class="button style2">Add New</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      allmusic: [],
      musicLoading: false,
    }
  },
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
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$axios
            .$delete('/api/music/' + id)
            .then((response) => {
              this.getAllMusics()
              swal('Music file has been deleted!', {
                icon: 'success',
              })
            })
            .catch((err) => {
              swal('Error', err.message, 'error')
            })
        } else {
          swal('Your Music file is safe!')
        }
      })
    },
  },
  created() {
    this.getAllMusics()
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

#music table{
  display: flex;
    justify-content: center;
    td{
      padding-right: 30px;
    }
    a{
      padding-right: 10px;
    }
}
</style>

