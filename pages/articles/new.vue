<template>
  <section id="intro" class="wrapper style1">
    <div class="title">
      <h1>Add New Article</h1>
    </div>
    <div class="container">
      <form 
          action=""
          method="post"
          @submit.prevent="submitForm()">
        <div class="row gtr-50">
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Header" name="header" v-model="h1">
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Title" name="title" v-model="title">
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Description" name="description" v-model="description">
          </div>
          <div class="col-6 col-12-small">
            <input type="text" placeholder="Slug" name="url" v-model="url">
          </div>
          <div class="col-12">
            <textarea cols="30" rows="4" v-model="content" placeholder="Content" name="content"></textarea>
          </div>
          <div class="col-12">
            <input
                      type="file"
                      id="customFile"
                      ref="file"
                      v-on:change="handleFileUpload()"
                      class="custom-file-input"
                    />
                    <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <input type="submit" class="style2" value="Send" />
              </li>
              <button
              @click="showAlert">swal</button>
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
import axios from 'axios'

export default {
  data() {
    return {
      h1: '',
      title: '',
      description: '',
      url: '',
      content: '',
      image: null
    }
  },
  methods: {
    handleFileUpload() {
      this.image = this.$refs.file.files[0]
      console.log(this.image)
    },
    submitForm() {
      this.$axios
        .post('/api/articles', {
          h1: this.h1,
          title: this.title,
          description: this.description,
          url: this.url,
          content: this.content,
          image: this.image,
        }
        // ,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   }
        // }
        )
        .then((response) => {
          // console.log(response)
          if (response.data._id) {
            swal('Success', 'Added successfully!')
            this.$router.push({ name: 'articles', params: { created: 'yes' } })
          }
          else{
            swal('Error', response.data.message)
          }
        })
        .catch((error) => {
          swal('Error', error)
          console.log(error)
          // if (error.response.data.errors) {
          //   this.errors = error.response.data.errors
          // }
        })
    },
    showAlert(){
      swal('Error', 'Error Fetting Musics', 'error')
    }
  },
}
</script>