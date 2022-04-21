<template>
  <div>
    <h1>Welcome to Pandora World!</h1>
    <template v-if="!loadPlayer">
      <h2>Please create your player!</h2>
      <h3>Type your player's name</h3>
      <input type="text" v-model="playerName" />
      <h3>Choose your player's role</h3>
      <div>
        <select v-model="playerRole">
          <option v-for="role in roleDataTable" :key="role.id" :value="role">
            {{ role.alias }}
          </option>
        </select>
        <h3>Choose your player's race</h3>
        <select v-model="playerRace">
          <option v-for="race in raceDataTable" :key="race.id" :value="race">
            {{ race.alias }}
          </option>
        </select>
        <p>Talent：</p>
        <div v-for="talent in playerRace.talents" :key="talent.id">
          <p>{{ getData(talent).alias }} - {{ getData(talent).desc }}</p>
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
import { onMounted } from 'vue'
import createNewPlayer from '~/core/create-player'
import roleDataTable from '~/core/data/role-data'
import raceDataTable from '~/core/data/race-data'
import getData from '~/core/get-data'
import { save, load } from '~/core/save-load'

import { usePlayerStore } from '~/store/player'
import { useRouter } from 'vue-router'

const playerName = $ref('')
const playerRole = $ref(getData(900001))
const playerRace = $ref(getData(1000001))

const store = usePlayerStore()

const loadPlayer = $ref({})

onMounted(() => {
  loadPlayer = load()
})

const router = useRouter()

const create = () => {
  if (playerName === '') return
  const player = createNewPlayer(playerName, playerRole.id, playerRace.id)
  playerName = ''
  store.playerState = player
  save(store.playerState)
}

const select = () => {
  store.playerState = loadPlayer
  router.push('/lobby')
}
</script>
