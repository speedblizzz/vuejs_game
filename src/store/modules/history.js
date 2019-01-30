import handlers from '../handlers'
// state

const state = {
  historyList: []
}

// getters

const getters = {}

// mutations

const mutations = {
  saveToHistory (state, obj) {
    state.historyList.push(obj)
  },
  setTempByUnits (state, newUnits) {
    state.historyList.forEach(historyItem => {
      historyItem.cities.forEach(city => {
        city.main.temp = handlers.getTempByUnits(city.main.temp, newUnits.type)
      })
    })
  }
}

// actions

const actions = {
  saveToHistory ({ commit }, obj) {
    commit('saveToHistory', obj)
  },
  setTempUnits ({commit}, newUnits) {
    commit('setTempByUnits', newUnits)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
