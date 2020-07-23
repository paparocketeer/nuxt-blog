<template>
  <div>
    <h1>Главная</h1>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Статический тайтл',
      meta: [
        {hid: 'description', name: 'description', content: 'Статический деск'},
        {hid: 'robots', name: 'robots', content: 'noindex,nofollow'}
      ]
    }
  },
  layout: 'no-sidebar'
}
</script>


