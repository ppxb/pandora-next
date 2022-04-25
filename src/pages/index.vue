<template>
  <div>
    <h1>Welcome to Pandora World!</h1>
    <template v-if="!loadPlayer.name">
      <h2>Please create your player!</h2>
      <h3>Type your player's name</h3>
      <input type="text" v-model="player.name" />
      <div>
        <h3>Choose your player's race</h3>
        <select v-model="player.race">
          <option v-for="race in raceDataTable" :key="race.id" :value="race">
            {{ race.name }}
          </option>
        </select>
        <p>Talent：</p>
        <div v-for="talent in player.race.talents" :key="talent.id">
          <p>{{ getData(talent).name }} - {{ getData(talent).desc }}</p>
        </div>
      </div>
      <button @click="create">Create</button>
    </template>
    <template v-else>
      <h2>Please select your active player</h2>
      <h3>Player</h3>
      <div style="border: 1px dashed #333; width: 400px; padding: 20px">
        <p>name：{{ loadPlayer && loadPlayer.name }}</p>
        <p>level：{{ loadPlayer.level && loadPlayer.level.current }}</p>
        <p>role：{{ loadPlayer.role && loadPlayer.role.name }}</p>
        <button @click="select">select</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import createNewPlayer from '~/core/create-player'
import raceDataTable from '~/core/data/race-data'
import getData from '~/core/get-data'
import { save, load } from '~/core/save-load'

import { usePlayerStore } from '~/store/player'
import { useRouter } from 'vue-router'

const router = useRouter()

const player = reactive({
  name: '',
  race: getData(1000002)
})

const loadPlayer = $ref({})

const store = usePlayerStore()

onMounted(() => {
  loadPlayer = load()
})

const create = () => {
  if (!player.name) return
  const newPlayer = createNewPlayer(player.name, player.race.id)
  player.name = ''
  store.state = newPlayer
  save(store.state)
  router.push('/lobby')
}

const select = () => {
  store.state = loadPlayer
  router.push('/lobby')
}
</script>
