 <template>
  <section id="highlights" class="wrapper style2">
    <h1 class="title">Main</h1>
    <div class="container">
      <div class="row gtr-150">
        <div class="col-6 col-12-medium">
          <music />
        </div>
        <div class="col-6 col-12-medium">
          <articles count="3" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import music from '@/components/music.vue'
import articles from '@/components/articles.vue'

export default {
  components: {
    music,
    articles,
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>


