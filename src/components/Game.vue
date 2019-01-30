
<template>
  <div class="game">
    <router-link to="/settings">Settings</router-link>
    <h1>{{title}}</h1>
    <div v-if="isGameStarted">
      <Result/>
      <Cities/>
    </div>
    <button class="start_btn" v-if="!isGameStarted" @click="startGame"> Start game</button>
  </div>
</template>

<script>
import Result from './Result.vue'
import Cities from './Cities.vue'
export default {
  name: 'Game',
  components: {
    Result,
    Cities
  },
  computed: {
    isGameStarted () {
      return this.$store.state.isGameStarted
    },
    title () {
      return this.$store.state.titles.gameTitle
    }
  },
  methods: {
    startGame () {
      this.$store.dispatch('cities/getAllCities')
      this.$store.commit('startGame')
    }
  }
}
</script>
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2d429e;
}
.start_btn {
  color: #fff;
  padding: 10px 20px;
  border: none;
  background-color: #2d429e;
  cursor: pointer;
}
</style>
