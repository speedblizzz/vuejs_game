// state

const state = {
  currentUnits: {
    type: 'metric',
    text: 'C'
  }
}

// getters

const getters = {}

// mutations

const mutations = {
  changeUnits (state, newUnits) {
    state.currentUnits = newUnits
  }
}

// actions

const actions = {
  initiateUnitsSettings ({dispatch, commit}, event) {
    let newUnits = {
      type: event.target.value,
      text: event.target.value === 'metric' ? 'C' : 'F'
    }
    commit('changeUnits', newUnits)
    commit('cities/updateCitiesTemp', newUnits, {root: true})
    dispatch('history/setTempUnits', newUnits, {root: true})
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
