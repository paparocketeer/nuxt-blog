<template>
  <!-- <div>
    <h1>Article Details</h1>

    <hr>

    <div class="alert alert-success"
      v-if="$route.params.updated=='yes'">Record updated successfully</div>

    <h1>{{ article.h1 }}</h1>

    <p>{{ article.content }}</p>

    <hr>
    <div class="d-flex justify-content-between">
      <div>
        <nuxt-link :to="'/articles/' + article.url + '/update'" class="btn btn-primary mr-3">Update</nuxt-link>
        <button class="btn btn-danger" @click="deleteRecord()">Delete</button>
      </div>
      <nuxt-link to="/articles" class="btn btn-secondary mr-3">Back to Articles</nuxt-link>
    </div>
  </div>-->
  <section id="main" class="wrapper style2">
    <h1 class="title">{{ article.title }}</h1>
    <div class="container">
      <div class="row gtr-150">
        <div class="col-8 col-12-medium">
          <!-- Content -->
          <div id="content">
            <article class="box post">
              <header class="style1">
              </header>
              <a :href="(article.image) ? '../uploads/' + article.image.filename : '/images/pic02.jpg'" class="image featured">
                <img :src="(article.image) ? '../uploads/' + article.image.filename : '/images/pic02.jpg'" alt />
              </a>
              <p>
                {{article.content}}
              </p>
            </article>
           
          </div>
        </div>
        <div class="col-4 col-12-medium">
          <!-- Sidebar -->
          <div id="sidebar">
            <section class="box">
              <header>
                <h2>Vitae turpis consequat</h2>
              </header>
              <ul class="style2">
                <li>
                  <article class="box post-excerpt">
                    <a href="#" class="image left">
                      <img src="/images/pic02.jpg" alt />
                    </a>
                    <h3>
                      <a href="#">Diam odio lorem</a>
                    </h3>
                    <p>Duis odio diam, luctus et vulputate vitae, vehicula ac dolor. Pellentesque at urna eget tellus sed etiam.</p>
                  </article>
                </li>
                <li>
                  <article class="box post-excerpt">
                    <a href="#" class="image left">
                      <img src="/images/pic09.jpg" alt />
                    </a>
                    <h3>
                      <a href="#">Sed duis consequat</a>
                    </h3>
                    <p>Duis odio diam, luctus et vulputate vitae, vehicula ac dolor. Pellentesque at urna eget tellus sed etiam.</p>
                  </article>
                </li>
                <li>
                  <article class="box post-excerpt">
                    <a href="#" class="image left">
                      <img src="/images/pic10.jpg" alt />
                    </a>
                    <h3>
                      <a href="#">Tellus nulla volutpat</a>
                    </h3>
                    <p>Duis odio diam, luctus et vulputate vitae, vehicula ac dolor. Pellentesque at urna eget tellus sed etiam.</p>
                  </article>
                </li>
              </ul>
              <a href="#" class="button style1">Archives</a>
            </section>
            <section class="box">
              <header>
                <h2>Magna diam vehicula</h2>
              </header>
              <ul class="style3">
                <li>
                  <a href="#">Nulla iaculis egestas varius</a>
                </li>
                <li>
                  <a href="#">Augue massa feugiat quam pretium</a>
                </li>
                <li>
                  <a href="#">Orci sem vel libero cras nisi odio</a>
                </li>
                <li>
                  <a href="#">Sed hendrerit massa nam mattis</a>
                </li>
                <li>
                  <a href="#">Turpis vel leo accumsan aliquet</a>
                </li>
                <li>
                  <a href="#">Dapibus mi fermentum fusce non</a>
                </li>
                <li>
                  <a href="#">Arcu laoreet sapien tempus</a>
                </li>
                <li>
                  <a href="#">Nulla iaculis egestas varius</a>
                </li>
                <li>
                  <a href="#">Augue massa feugiat quam pretium</a>
                </li>
                <li>
                  <a href="#">Orci sem vel libero cras nisi odio</a>
                </li>
                <li>
                  <a href="#">Sed hendrerit massa nam mattis</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div class="row gtr-150">
        <div>
        <nuxt-link :to="'/articles/' + article.url + '/update'" class="btn btn-primary mr-3">Update</nuxt-link>
        <button class="btn btn-danger" @click="deleteRecord()">Delete</button>
      </div>
      <nuxt-link to="/articles" class="btn btn-secondary mr-3">Back to Articles</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // middleware: 'auth',

  async asyncData(context) {
    const { data } = await context.$axios.get(
      '/api/articles/' + context.route.params.url
    )
    return {
      article: data,
    }
  },

  methods: {
    // deleteRecord(){
    //   if(confirm("Are you sure?") === true){
    //     this.$axios.delete('/api/articles/' + this.$route.params.id)
    //       .then((response) => {
    //         if(response.data._id){
    //           this.$router.push({ name:'articles', params:{ deleted:'yes' } })
    //         }
    //       })
    //       .catch( (error) => {
    //         console.log(error);
    //       });
    //   }
    // }
  },
}
</script>
