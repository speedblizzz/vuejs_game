<template>
<div>
  <ul class="city_buttons">
  <li :key="city.id" v-for="city in cities">
    <a href="" class="city_btn" @click.prevent="checkTemperature(city.main.temp)">
      <span class="city_name">{{city.name}} </span>
      <span v-if="isCityChoosed" class="city_temp">{{city.main.temp}} {{units}}</span>
    </a>
  </li>
</ul>
<button @click="getCities({resetResult:true})" v-if="isCityChoosed" class="next-city_btn">Next cities</button>
</div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Cities',
  computed: mapState({
    cities: state => state.cities.currentCities,
    isCityChoosed: state => state.cities.isCityChoosed,
    units: state => state.units.currentUnits.text
  }),
  methods: {
    ...mapActions('cities', [
      'checkTemperature',
      'getCities'
    ])

  }
}
</script>
<style>
.city_buttons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.city_btn {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  padding: 10px;
  height: 70px;
  text-decoration: none;
  color: #fff;
  background-color: #2d429e;
  border: 2px solid #2d429e;
  border-radius: 5px;
  transition: all .3s
}
.city_btn:hover {
  color: #2d429e;
  background-color: transparent;
}
.city_name {
  font-size: 16px;
  font-weight: bold;
}
.next-city_btn {
  border: none;
  background-color: #2d429e;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
}
</style>
