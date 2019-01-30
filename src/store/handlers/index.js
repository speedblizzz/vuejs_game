export default {
  getRandomInRange (from, to, fixed) {
    let random = Math.random() * (to - from) + from
    return random.toFixed(fixed)
  },
  getTempByUnits (temp, unitsType) {
    return unitsType === 'metric' ? this.getCelsiusTemp(temp) : this.getFahrenheitTemp(temp)
  },
  getCelsiusTemp (temp) {
    return (((temp - 32) * 5 / 9).toFixed(2) * 1)
  },
  getFahrenheitTemp (temp) {
    return (((temp * 9 / 5) + 32).toFixed(2) * 1)
  }
}
