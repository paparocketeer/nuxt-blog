<template>
  <section id="header" class="wrapper">
    <!-- Logo -->
    <div id="logo">
      <h1>MEVN tryout
      </h1>
      <p>MongoDB + Express + Vue.js + Node.js</p>
    </div>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li>
          <nuxt-link to="/">Main</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/articles">Articles</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/music">Music</nuxt-link>
        </li>       
      </ul>
    </nav>
  </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
#logo h1{
      color: #f00;
}
</style>