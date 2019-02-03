import axios from 'axios'
import handlers from '../handlers'

// state

const state = {
  currentCities: [],
  allCities: [],
  isCityChoosed: false,
  highestTemp: null,
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
  setHighestTemp (state, temp) {
    state.highestTemp = temp
  },
  setAllCities (state, cities) {
    state.allCities = cities
  },
  updateCitiesTemp (state, newUnits) {
    state.currentCities.forEach(city => {
      city.main.temp = handlers.getTempByUnits(city.main.temp, newUnits.type)
    })
    state.highestTemp = handlers.getTempByUnits(state.highestTemp, newUnits.type)
  }
}

// actions

const actions = {
  getAllCities ({state, dispatch, commit}) {
    return new Promise(resolve => {
      let apiUrl = `http://api.openweathermap.org/data/2.5/box/city?bbox=${state.longitudeFrom},${state.latitudeFrom},${state.longitudeTo},${state.latitudeTo},10&appid=7eefaf7562fed87fbbefa9d5afcec80b&lang=ru&units=metric`
      axios.get(apiUrl).then(function (response) {
        commit('setAllCities', response.data.list)
        dispatch('getNewCities')
      })
    })
  },
  refreshCitiesForGame ({ state, commit, dispatch }) {
    commit('resetResult', null, {root: true})
    commit('changeChoiceStatus', false)

    dispatch('getNewCities')
  },
  getNewCities ({ state, commit }) {
    let newCitiesDataForGame = handlers.getNewCitiesDataForGame(state.allCities)
    commit('setHighestTemp', newCitiesDataForGame.highestTemp)
    commit('setCities', newCitiesDataForGame.cities)
  },
  checkTemperature ({dispatch, state, commit}, temp) {
    if (state.isCityChoosed) {
      return
    }
    let historyCities = []
    let isRightAnswer = state.highestTemp === temp
    state.currentCities.forEach(city => {
      let historyCity = {}
      historyCity.temp = city.main.temp
      historyCity.name = city.name
      historyCities.push(historyCity)
    })
    let historyObj = {
      cities: historyCities,
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
