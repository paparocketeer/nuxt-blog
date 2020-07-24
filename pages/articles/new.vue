<template>
  <section id="intro" class="wrapper style1">
    <div class="title">
      <h1>Add New Article</h1>
    </div>
    <div class="container">
      <form action method="post" enctype="multipart/form-data" @submit.prevent="submitForm()">
        <div class="row gtr-50">
          <div class="col-12">
            <vue-dropzone
              ref="imgDropZone"
              id="customdropzone"
              :options="dropzoneOptions"
              @vdropzone-complete="afterComplete"
            ></vue-dropzone>
          </div>
          <!-- <div class="col-12">
            <img :src="imageSrc" v-if="imageSrc" class="cover-preview" />
            <input
              type="file"
              id="customFile"
              ref="file"
              v-on:change="handleFileUpload()"
              class="custom-file-input"
            />
            <label class="custom-file-label" for="customFile">Choose article image</label>
          </div> -->
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
    </div>
  </section>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from 'axios'

export default {
  data() {
    return {
      h1: '',
      title: '',
      description: '',
      url: '',
      content: '',
      image: '',
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
    vueDropzone: vue2Dropzone,
  },
  methods: {
    async afterComplete(upload) {
      this.isLoading = true
      try {
        if (upload.size < this.dropzoneOptions.maxFilesize * 1024 * 1024) {
          this.image = upload
        }
        else {
          swal('Error', 'Image size is to big', 'error')
        }        
      } catch (error) {
        console.log(error)
        swal('Error', 'Something Went wrong', 'error')
      }
    },
    // handleFileUpload() {
    //   this.image = this.$refs.file.files[0]
    //   const reader = new FileReader()
    //   reader.onload = (e) => {
    //     this.imageSrc = reader.result
    //   }
    //   reader.readAsDataURL(this.image)
    //   console.log(this.image)
    // },
    submitForm() {
      let formData = new FormData()
      formData.append('h1', this.h1)
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('url', this.url)
      formData.append('content', this.content)
      formData.append('image', this.image)

      this.$axios
        .post('/api/articles', formData)
        .then((response) => {
          if (response.data._id) {
            swal('Success', 'Article added successfully', 'success')
            this.$router.push({ name: 'articles', params: { created: 'yes' } })
          }
        })
        .catch((err) => {
          swal('Error', 'Something Went wrong', 'error')
        })
    },
    showAlert() {
      swal('Error', 'Error Fetting Musics', 'error')
    },
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