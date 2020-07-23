<template>
  <div id="page-wrapper">
    <navbar/>
    <Nuxt />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
  export default {
    head () {
      link: [
        {rel: 'canonical', href: `http://localhost:3000${this.$route.path}`}
      ]
    },
    components: {
      navbar
    }
  }
</script>

<style lang="scss">

@import '@/assets/sass/main.scss';

html, body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-size : 14px;
  line-height: 1.4;
}
h1, h2, h3, h4, h5{
  font-family: 'Roboto Slab';
}
a:hover, a:visited, a:active{
  text-decoration: none;
  color: #f00;
}
.center{
  width : 1500px;
  margin : 0 auto;
}


</style>