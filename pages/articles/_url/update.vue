<template>
  <!-- <div>
    <h1>Update Article</h1>
    <hr>

    <div class="row">
      <div class="col-md-6">
        <form action=""
          method="post"
          @submit.prevent="submitForm()">

          <div class="form-group">
            <label for="">Title</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.title }"
              v-model="title">
            <div class="invalid-feedback" v-if="errors && errors.title">
              {{ errors.title.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Author</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.author }"
              v-model="author">
            <div class="invalid-feedback" v-if="errors && errors.author">
              {{ errors.author.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Body</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="body"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <input type="submit" value="Submit" class="btn btn-primary mr-3">
          <nuxt-link :to="'/articles/' + $route.params.id" class="btn btn-secondary mr-3">Cancel</nuxt-link>

        </form>
      </div>
    </div>
  </div> -->
  <section id="intro" class="wrapper style1">
    <div class="title">
      <h1>Update Article</h1>
    </div>
    <div class="container">
      <form action method="post" enctype="multipart/form-data" @submit.prevent="submitForm()">
        <div class="row gtr-50">
          <div class="col-12">
            <dropzone
              ref="imgDropZone"
              id="customdropzone"
              :options="dropzoneOptions"
              @vdropzone-complete="afterComplete"
              @vdropzone-mounted="vmounted"
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
    </div>
  </section>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import axios from 'axios'

export default {
  // middleware: 'auth',

  async asyncData(context){
    const {data} = await context.$axios.get('/api/articles/' + context.route.params.url)
    return {
      article : data
    }
  },

  data(){
    return{
      errors:null,
      title:null,
      author:null,
      body:null,
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

  created(){
    this.fillFormData()    
  },

  methods:{
    fillFormData(){
      this.h1 = this.article.h1
      this.title = this.article.title
      this.description = this.article.description
      this.url = this.article.url
      this.content = this.article.content
      this.image = this.article.image
      },
    async afterComplete(upload) {
      
      this.isLoading = true
      try {
        if (upload.size < this.dropzoneOptions.maxFilesize * 1024 * 1024) {
          this.image = upload
          console.log(upload)
        }
        else {
          swal('Error', 'Image size is to big', 'error')
        }        
      } catch (error) {
        console.log(error)
        swal('Error', 'Something Went wrong', 'error')
      }
    },
    vmounted(){
      this.$nextTick(function(){
        console.log(this.article.image)
        let mockFile = this.article.image ? this.article.image : {size: 123, type: 'image/jpg'}
        let url = this.article.image ? '/uploads/' + this.article.image.filename : '/images/pic02.jpg'
        this.$refs.imgDropZone.manuallyAddFile(mockFile, url);
      })
    },
    submitForm(){
      let formData = new FormData()
      formData.append('h1', this.h1)
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('url', this.url)
      formData.append('content', this.content)
      if (this.image.upload) {
        console.log('got new img')
        console.log(this.image)
        formData.append('image', this.image)
      }     

      this.$axios.put( '/api/articles/' + this.$route.params.url , formData)
        .then((response) => {
          console.log(response)

          if(response.data._id){
            this.$router.push({ name:'articles-id', params:{ updated:'yes', id: this.$route.params.id } })
          }
        })
        .catch( (error) => {
          console.log(error)
          if(error.response.data.errors){
            this.errors = error.response.data.errors
          }
        });
    }
  }
}
</script>
