<template>
  <section id="intro" class="wrapper style1">
    <div class="title">
      <h1>Update Article</h1>
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
                <nuxt-link to="/audios" class="button style2">Cancel</nuxt-link>
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
      '/api/music/' + context.route.params._id
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
        maxFilesize: 2,
        addRemoveLinks: true,
        acceptedFiles: '.jpg, .jpeg, .png',
        dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag cover image here or click to upload</p>
          <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>
          <p class="form-text">Allowed Size: < 2Mb</p>
          `,
      },
    }
  },
  components: {
    Dropzone,
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
        this.$refs.imgDropZone.manuallyAddFile(mockFile, url)
      })
    },
    addNewMusic() {
      let formData = new FormData()
      formData.append('artist', this.artist)
      formData.append('title', this.title)
      formData.append('image', this.music)

      this.$axios
        .put('/api/music/' + this.$route.params._id, formData)
        .then((response) => {
          if (response.status == 200) {
            swal('Success', 'Music updated successfully', 'success')
            this.$router.push({ name: 'audios', params: { updated: 'yes' } })
          }
        })
        .catch((error) => {
          console.log(error)
          swal('Error', 'Something Went wrong', 'error')
        })
    },
  },
}
</script>
