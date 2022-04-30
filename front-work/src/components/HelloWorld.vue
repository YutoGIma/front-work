<template>
  <div>
    <h1>フロント課題</h1>
    <div v-for="prefecture in state.prefectures" :key="prefecture.prefCode">
      <p>{{prefecture.prefName}}</p>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import dataService from "../api/data"
export default {
  setup() {
    const state = reactive({
      prefectures: [],
    })

    onMounted(() => {
      getPrefectures()
    })

    const getPrefectures = async () => {
      console.log("yesyes")
      const prefectures = await dataService.getPregectures()
      console.log(prefectures.data)
      state.prefectures = prefectures.data.result
    } 

    return {
      state,
    }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
