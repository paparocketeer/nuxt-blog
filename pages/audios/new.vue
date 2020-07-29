<template>
  <section id="footer" class="wrapper style1">
    <div class="title">
      <h1>Add New Audio</h1>
    </div>
    <form @submit.prevent="addNewMusic" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" v-model="musicDetails.title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="artist">Artist</label>
                  <input type="text" v-model="musicDetails.artist" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="artist">Music</label>
                  <div class="custom-file">
                    <input
                      type="file"
                      id="customFile"
                      ref="file"
                      v-on:change="handleFileUpload()"
                      class="custom-file-input"
                    />
                    <label class="custom-file-label" for="customFile">Choose file</label>
                  </div>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" :disabled="isDisabled">
                    <span
                      class="spinner-border spinner-border-sm"
                      v-if="addLoading"
                      role="status"
                      aria-hidden="true"
                    ></span>Submit
                  </button>
                </div>
              </form>
    <!-- <div class="container">
      <form action method="post" enctype="multipart/form-data" @submit.prevent="submitForm()">
        <div class="row gtr-50">
          <div class="col-12">
            <dropzone
              ref="imgDropZone"
              id="customdropzone"
              :options="dropzoneOptions"
              @vdropzone-complete="afterComplete"
            ></dropzone>
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Header" name="header" v-model="h1" />
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Title" name="title" v-model="title" />
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Description" name="description" v-model="description" />
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Slug" name="url" v-model="url" />
          </div>
          <div class="col-12">
            <textarea cols="30" rows="4" v-model="content" placeholder="Content" name="content"></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <input type="submit" class="style2" value="Send" />
              </li>
              <li>
                <nuxt-link to="/articles" class="button style2">Cancel</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div> -->
  </section>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import axios from 'axios'

export default {
  data() {
    return {
      musicDetails: {
        title: '',
        artist: '',
        music: ''
      },
      allmusic: [],
      addState: false,
      addLoading: false,
      musicLoading: false,
      isValid: false
      // h1: '',
      // title: '',
      // description: '',
      // url: '',
      // content: '',
      // image: '',
      // dropzoneOptions: {
      //   url: 'https://httpbin.org/post',
      //   maxFiles: 1,
      //   maxFilesize: 2,
      //   addRemoveLinks: true,
      //   acceptedFiles: '.jpg, .jpeg, .png',
      //   dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag cover image here or click to upload</p>
      //     <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>
      //     <p class="form-text">Allowed Size: < 2Mb</p>
      //     `,
      // },
    }
  },
  // components: {
  //   Dropzone,
  // },
  computed: {
    isDisabled: function() {
      if (
        this.musicDetails.title === '' ||
        this.musicDetails.artist === '' ||
        this.musicDetails.music === ''
      ) {
        return !this.isValid
      }
    }
  },
  methods: {
    handleFileUpload() {
      this.musicDetails.music = this.$refs.file.files[0]
      console.log(this.musicDetails.music.type)
    },
    addNewMusic() {
      let types = /(\.|\/)(mp3|mp4)$/i
      if (
        types.test(this.musicDetails.music.type) ||
        types.test(this.musicDetails.music.name)
      ) {
        let formData = new FormData()
        formData.append('title', this.musicDetails.title)
        formData.append('artist', this.musicDetails.artist)
        formData.append('music', this.musicDetails.music)
        this.addLoading = true
        this.$axios
          .$post('/api/music', formData)
          .then(response => {
            console.log(response)
            this.addLoading = false
            this.musicDetails = {}
            // this.getAllMusics() // we will create this function later
            swal('Success', 'New Music Added', 'success')
          })
          .catch(err => {
            this.addLoading = false
            swal('Error', 'Something Went wrong', 'error')
            console.log(err)
          })
      } else {
        swal('Error', 'Invalid file type', 'error')
        return !this.isValid
      }
    },
  //   async afterComplete(upload) {
  //     this.isLoading = true
  //     try {
  //       if (upload.size < this.dropzoneOptions.maxFilesize * 1024 * 1024) {
  //         this.image = upload
  //         console.log(upload)
  //       }
  //       else {
  //         swal('Error', 'Image size is to big', 'error')
  //       }        
  //     } catch (error) {
  //       console.log(error)
  //       swal('Error', 'Something Went wrong', 'error')
  //     }
  //   },
  //   submitForm() {
  //     let formData = new FormData()
  //     formData.append('h1', this.h1)
  //     formData.append('title', this.title)
  //     formData.append('description', this.description)
  //     formData.append('url', this.url)
  //     formData.append('content', this.content)
  //     formData.append('image', this.image)

  //     this.$axios
  //       .post('/api/articles', formData)
  //       .then((response) => {
  //         if (response.data._id) {
  //           swal('Success', 'Article added successfully', 'success')
  //           this.$router.push({ name: 'articles', params: { created: 'yes' } })
  //         }
  //       })
  //       .catch((err) => {
  //         swal('Error', 'Something Went wrong', 'error')
  //       })
  //   },
  },
}
</script>

<style scoped>
.image-div {
  display: flex;
  margin: 25px;
}
.image {
  max-width: 250px;
  margin: 15px;
}
</style>