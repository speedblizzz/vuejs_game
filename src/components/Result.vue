<template>
  <div class="result_block">
    <span class="score">Score: {{score}}</span>
    <span v-if="result" class="result_text" :class="{lose: !isRightAnswer, won: isRightAnswer}">{{result}}</span>
  </div>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    score () {
      return this.$store.state.score
    },
    result () {
      return this.$store.state.result
    },
    isRightAnswer () {
      return this.$store.state.isRightAnswer
    }
  },
  methods: {}
}
</script>
<style>
.result_block {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.result_text {
  font-size: 20px;
  font-weight: bold;
}
.lose {
  color: red;
}
.won {
  color: green;
}
.score {
  font-size: 26px;
  margin-bottom: 20px;
}
</style>
