<template>
  <section id="footer" class="wrapper style1">
    <div class="title">
      <h1>Update Audio</h1>
    </div>
    <div class="container">
      <form action method="post" enctype="multipart/form-data" @submit.prevent="addNewMusic">
        <div class="row gtr-50">
          <div class="col-12">
            <dropzone
              ref="audioDropZone"
              id="customdropzone"
              :options="dropzoneOptions"
              @vdropzone-complete="afterComplete"
              @vdropzone-removed-file="onRemove"
              @vdropzone-mounted="vmounted"
            ></dropzone>
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Artist" name="artist" v-model="artist" />
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Title" name="title" v-model="title" />
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <button class="btn btn-info" :disabled="isDisabled">
                    <span
                      class="spinner-border spinner-border-sm"
                      v-if="addLoading"
                      role="status"
                      aria-hidden="true"
                    ></span>Update
                  </button>
              </li>
              <li>
                <nuxt-link to="/music" class="button style2">Cancel</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import axios from 'axios'

export default {
  async asyncData(context) {
    const { data } = await context.$axios.get(
      '/api/music/' + context.route.params.id
    )
    return {
      audio: data,
    }
  },
  data() {
    return {
      title: '',
      artist: '',
      music: '',
      addLoading: false,
      isValid: false,
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFiles: 1,
        maxFilesize: 10,
        addRemoveLinks: true,
        acceptedFiles: '.mp3',
        dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag audio file here or click to upload</p>
          <p class="form-text">Allowed Files: .mp3</p>
          <p class="form-text">Allowed Size: < 10Mb</p>
          `,
      },
    }
  },
  components: {
    Dropzone,
  },
  computed: {
    isDisabled: function() {
      if (
        this.title === '' ||
        this.artist === '' ||
        this.music === ''
      ) {
        return !this.isValid
      }
    }
  },

  created() {
    this.fillFormData()
  },

  methods: {
    fillFormData() {
      this.title = this.audio.title
      this.artist = this.audio.artist      
    },
    async afterComplete(upload) {
      try {
        if (upload.size < this.dropzoneOptions.maxFilesize * 1024 * 1024) {
          this.music = upload
        } else {
          swal('Error', 'File size is to big', 'error')
        }
      } catch (error) {
        console.log(error)
        swal('Error', 'Something Went wrong', 'error')
      }
    },
    vmounted() {
      this.$nextTick(function () {
        let mockFile = this.audio.music
        let url = '/uploads/' + this.audio.music.filename
        this.$refs.audioDropZone.manuallyAddFile(mockFile, url)
      })
    },
    addNewMusic() {
      let formData = new FormData()
      formData.append('artist', this.artist)
      formData.append('title', this.title)
      if (this.music.upload) {
        formData.append('music', this.music)
      }
      this.$axios
        .put('/api/music/' + this.$route.params.id, formData)
        .then((response) => {
          if (response.status == 200) {
            swal('Success', 'Music updated successfully', 'success')
            this.$router.push({ name: 'music', params: { updated: 'yes' } })
          }
        })
        .catch((error) => {
          console.log(error)
          swal('Error', 'Something Went wrong', 'error')
        })
    },
    onRemove() {
      this.music = ''
    }
  },
}
</script>
