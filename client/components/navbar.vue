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
          <nuxt-link to="/services">Services</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cases">Cases</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/wiki">Wiki</nuxt-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
    export default {
        
    }
</script>