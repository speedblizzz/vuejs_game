<template>
    <div>
      <h2 v-if="historyList.length > 0">History</h2>
      <ul class="history-list">
        <li :key="item.id" v-for="item in historyList" class="history_item">
            <div :key="city.id" v-for="city in item.cities" class="history_city">
              <span class="history_city-name">{{city.name}}</span>
              <span>{{city.temp}} {{units.text}}</span>
            </div>
            <span class="history-result" :class="{lose: !item.result, won: item.result}">{{item.result ? 'WON' : 'LOSE'}}</span>
        </li>
      </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SettingsHistoryList',
  computed: mapState({
    historyList: state => state.history.historyList,
    units: state => state.units.currentUnits
  })
}
</script>
<style scoped>
.history-list {
  text-align: center;
}
.history_item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 0;
  margin: auto;
  margin-bottom: 20px;

}
.history_city {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 150px;
  padding: 10px;
  border: 1px solid #2d429e
}
.history_city-name {
  margin-bottom: 10px;
}
.lose {
  color: red;
}
.won {
  color: green;
}
</style>
