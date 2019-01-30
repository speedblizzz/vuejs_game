import Vue from 'vue'
import Vuex from 'vuex'
import cities from './modules/cities'
import units from './modules/units'
import history from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    titles: {
      gameTitle: 'Which city is hotter?',
      settingsTitle: 'Game Settings'
    },
    result: '',
    isRightAnswer: null,
    isGameStarted: false
  },
  modules: {
    cities,
    units,
    history
  },
  getters: {},
  mutations: {
    changeScore (state) {
      state.score++
    },
    setResult (state, result) {
      state.isRightAnswer = result
      state.result = result ? 'You\'re RIGHT' : 'You\'re WRONG'
    },
    resetResult (state) {
      state.result = ''
    },
    startGame (state) {
      state.isGameStarted = true
    }
  },
  actions: {
    showAnswer ({ commit }, isRightAnswer) {
      if (isRightAnswer) {
        commit('setResult', true)
        commit('changeScore')
      } else {
        commit('setResult', false)
      }
    }
  }
})
