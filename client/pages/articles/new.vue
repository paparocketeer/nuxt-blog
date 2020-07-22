<template>
  <div>
    <h1>Add New Article</h1>
    <hr>

    <div class="row">
      <div class="col-md-6">
        <form action=""
          method="post"
          @submit.prevent="submitForm()">

          <div class="form-group">
            <label for="">Title</label>
            <input type="text" class="form-control"
              v-model="title">
          </div>

          <div class="form-group">
            <label for="">Author</label>
            <input type="text" class="form-control"
              v-model="author">
          </div>

          <div class="form-group">
            <label for="">Body</label>
            <textarea cols="30" rows="4" class="form-control"
              v-model="body"></textarea>
          </div>

          <input type="submit" value="Submit" class="btn btn-primary mr-3">
          <nuxt-link to="/articles" class="btn btn-secondary mr-3">Cancel</nuxt-link>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//   middleware: 'auth',
  data(){
    return{
      errors:null,
      title:null,
      author:null,
      body:null
    }
  },
  methods:{
    submitForm(){
      this.$axios.post( '/api/articles', {
          title: this.title,
          author: this.author,
          body: this.body,
        })
        .then((response) => {
          console.log(response)
          if(response.data._id){
            this.$router.push({ name:'articles', params:{ created:'yes' } })
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