<template>
    <div>
      <router-link to="/">Back</router-link>
      <h1>{{title}}</h1>
      <div>
        <SettingsCheckboxUnits/>
        <SettingsHistoryList/>
      </div>
    </div>
</template>
<script>
import SettingsCheckboxUnits from './SettingsCheckboxUnits.vue'
import SettingsHistoryList from './SettingsHistoryList.vue'

export default {
  name: 'Settings',
  components: {
    SettingsCheckboxUnits,
    SettingsHistoryList
  },
  computed: {
    title () {
      return this.$store.state.titles.settingsTitle
    }
  }
}
</script>
