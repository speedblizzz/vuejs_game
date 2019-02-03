export default {
  getRandomInRange (from, to, fixed) {
    let random = Math.random() * (to - from) + from
    return (random.toFixed(fixed) * 1)
  },
  getTempByUnits (temp, unitsType) {
    return unitsType === 'metric' ? this.getCelsiusTemp(temp) : this.getFahrenheitTemp(temp)
  },
  getCelsiusTemp (temp) {
    return (((temp - 32) * 5 / 9).toFixed(2) * 1)
  },
  getFahrenheitTemp (temp) {
    return (((temp * 9 / 5) + 32).toFixed(2) * 1)
  },
  getHighestTemp (temp, cityObj) {
    return temp === null ? cityObj.main.temp : (cityObj.main.temp > temp ? cityObj.main.temp : temp)
  },
  getNewCitiesDataForGame (allCities) {
    let cities = []
    let highestTemp = null
    for (let i = 0; i < 2; i++) {
      let randomIndex = this.getRandomInRange(0, allCities.length - 1, 0)
      cities.push(allCities[randomIndex])
      allCities[randomIndex].main.temp = allCities[randomIndex].main.temp.toFixed(2) * 1
      highestTemp = this.getHighestTemp(highestTemp, allCities[randomIndex])
    }
    return {
      highestTemp: highestTemp,
      cities: cities
    }
  }
}
