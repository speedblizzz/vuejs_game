<template>
    <div>
      <h2>Units</h2>
        <ul class="units-list">
          <li>
          <label for="metric"><input id="metric" type="radio" name="unit_type" v-model="units.type" value="metric" @change="initiateUnitsSettings"> Celsius</label>
          </li>
          <li>
          <label for="imperial"><input id="imperial" type="radio" name="unit_type" v-model="units.type" value="imperial" @change="initiateUnitsSettings"> Fahrenheit</label>
          </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SettingsCheckboxUnits',
  computed: mapState({
    units: state => state.units.currentUnits
  }),
  methods: mapActions('units', [
    'initiateUnitsSettings'
  ])
}
</script>
<style>
.units-list {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: auto;
  width: 150px;
  padding: 0;
  list-style: none;
}
.units-list label {
  display: inline-block;
  width: 100%;
  text-align-last: left;
  cursor: pointer;
}
</style>
