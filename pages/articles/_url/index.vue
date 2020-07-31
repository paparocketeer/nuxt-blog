<template>
  <section id="main" class="wrapper style2">
    <h1 class="title">{{ article.title }}</h1>
    <div class="container">
      <div class="row gtr-150">
        <div class="col-12">
          <!-- Content -->
          <div id="content">
            <article class="box post">
              <header class="style1">
              </header>
              <a :href="(article.image) ? '/uploads/' + article.image.filename : '/images/pic02.jpg'" class="image featured">
                <img :src="(article.image) ? '/uploads/' + article.image.filename : '/images/pic02.jpg'" alt />
              </a>
              <p>
                {{article.content}}
              </p>
            </article>
           
          </div>
        </div>
      </div>
      <div class="row gtr-150 mt-5">
        <div>
        <nuxt-link :to="'/articles/' + article.url + '/update'" class="button style2">Update</nuxt-link>
        <button class="button style1" @click="deleteRecord()">Delete</button>
        <nuxt-link to="/articles" class="button style2">Back to Articles</nuxt-link>
      </div>
      
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData(context) {
    const { data } = await context.$axios.get(
      '/api/articles/' + context.route.params.url
    )
    return {
      article: data,
    }
  },

  methods: {
    deleteRecord(){
      if(confirm("Are you sure?") === true){
        this.$axios.delete('/api/articles/' + this.$route.params.url)
          .then((response) => {
            if(response.status == 200){
              swal('Success', 'Article deleted successfully', 'success')
              this.$router.push({ name:'articles', params:{ deleted:'yes' } })
            }
          })
          .catch( (error) => {
            console.log(error);
          });
      }
    }
  },
}
</script>
