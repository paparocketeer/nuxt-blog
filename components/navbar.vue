<template>
  <section id="header" class="wrapper">
    <!-- Logo -->
    <div id="logo">
      <h1>
        <a href="index.html">MEVN blog tryout</a>
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
          <nuxt-link to="/audios">Audios</nuxt-link>
        </li>       
      </ul>
    </nav>
  </section>
</template>

<script>
    export default {
        
    }
</script>