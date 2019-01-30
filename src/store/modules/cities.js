import axios from 'axios'
import handlers from '../handlers'

// state

const state = {
  currentCities: [],
  allCities: [],
  isCityChoosed: false,
  isWrongData: null,
  rightTemp: null,
  latitudeFrom: 40,
  latitudeTo: 65,
  longitudeFrom: 40,
  longitudeTo: 65
}

// getters

const getters = {}

// mutations

const mutations = {
  setCities (state, cities) {
    state.currentCities = cities
  },
  changeChoiceStatus (state, param) {
    state.isCityChoosed = param
  },
  setTemp (state, temp) {
    state.rightTemp = temp
  },
  setAllCities (state, cities) {
    state.allCities = cities
  },
  updateCitiesTemp (state, newUnits) {
    state.currentCities.forEach(city => {
      city.main.temp = handlers.getTempByUnits(city.main.temp, newUnits.type)
    })
    state.rightTemp = handlers.getTempByUnits(state.rightTemp, newUnits.type)
  }
}

// actions

const actions = {
  getAllCities ({state, dispatch, commit}) {
    return new Promise(resolve => {
      let cities = []
      let apiUrl = `http://api.openweathermap.org/data/2.5/box/city?bbox=${state.longitudeFrom},${state.latitudeFrom},${state.longitudeTo},${state.latitudeTo},10&appid=7eefaf7562fed87fbbefa9d5afcec80b&lang=ru&units=metric`
      axios.get(apiUrl).then(function (response) {
        cities = response.data.list
        commit('setAllCities', cities)
        dispatch('getCities', {resetResult: false})
      })
    })
  },
  getCities ({ state, commit }, params) {
    let cities = []
    let goodTemp = null
    for (let i = 0; i < 2; i++) {
      let randomIndex = handlers.getRandomInRange(0, state.allCities.length - 1, 0) * 1
      cities.push(state.allCities[randomIndex])
      state.allCities[randomIndex].main.temp = state.allCities[randomIndex].main.temp.toFixed(2) * 1
      goodTemp = goodTemp === null ? state.allCities[randomIndex].main.temp : (state.allCities[randomIndex].main.temp > goodTemp ? state.allCities[randomIndex].main.temp : goodTemp)
    }
    commit('setTemp', goodTemp)
    commit('setCities', cities)
    if (params.resetResult) {
      commit('resetResult', null, {root: true})
      commit('changeChoiceStatus', false)
    }
  },
  checkTemperature ({dispatch, state, commit}, temp) {
    if (state.isCityChoosed) {
      return
    }
    let isRightAnswer = state.rightTemp === temp
    let historyObj = {
      cities: state.currentCities,
      result: isRightAnswer
    }
    dispatch('showAnswer', isRightAnswer, {root: true})
    dispatch('history/saveToHistory', historyObj, {root: true})

    commit('changeChoiceStatus', true)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
