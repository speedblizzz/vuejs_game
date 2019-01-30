<template>
    <div>
      <router-link to="/">Back</router-link>
      <h1>{{title}}</h1>
      <div>
        <Units/>
        <History/>
      </div>
    </div>
</template>
<script>
import Units from './Units.vue'
import History from './History.vue'

export default {
  name: 'Settings',
  components: {
    Units,
    History
  },
  computed: {
    title () {
      return this.$store.state.titles.settingsTitle
    }
  }
}
</script>
