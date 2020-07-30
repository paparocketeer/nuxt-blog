<template>
  <section id="footer" class="wrapper style1">
    <div class="title">
      <h1>Add New Audio</h1>
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
                  ></span>Submit
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
    isDisabled: function () {
      if (this.title === '' || this.artist === '' || this.music === '') {
        return !this.isValid
      }
    },
  },
  methods: {
    addNewMusic() {
      let formData = new FormData()
      formData.append('title', this.title)
      formData.append('artist', this.artist)
      formData.append('music', this.music)
      this.addLoading = true
      this.$axios
        .$post('/api/music', formData)
        .then((response) => {
          this.addLoading = false
          swal('Success', 'New Music Added', 'success')
          this.$router.push({ name: 'music', params: { created: 'yes' } })
        })
        .catch((err) => {
          this.addLoading = false
          swal('Error', err.message, 'error')
        })
    },
    async afterComplete(upload) {
      try {
        if (upload.size < this.dropzoneOptions.maxFilesize * 1024 * 1024) {
          this.music = upload
        } else {
          swal('Error', 'Image size is to big', 'error')
        }
      } catch (err) {
        swal('Error', err.message, 'error')
      }
    },
    onRemove() {
      this.music = ''
    },
  },
}
</script>

<style scoped>
.btn.disabled,
.btn:disabled {
  opacity: 0.65;
  cursor: default;
}
</style>