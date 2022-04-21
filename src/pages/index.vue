<template>
  <div>
    <h1>Create your player!</h1>
    <h2>Type your player's name</h2>
    <input type="text" v-model="player_name" />
    <h2>Choose your player's role</h2>
    <div>
      <select v-model="player_role">
        <option v-for="role in role_data_table" :key="role.id" :value="role">
          {{ role.name }}
        </option>
      </select>
      <h2>Choose your player's race</h2>
      <select v-model="player_race">
        <option v-for="race in race_data_table" :key="race.id" :value="race">
          {{ race.name }}
        </option>
      </select>
      <p>Talent：</p>
      <div v-for="talent in player_race.talents" :key="talent.id">
        <p>{{ get_data(talent).name }} - {{ get_data(talent).desc }}</p>
      </div>
    </div>
    <button @click="create">Create</button>
  </div>
</template>

<script setup>
import _create_new_player from '~/core/create-player'
import role_data_table from '~/core/data/role-data'
import race_data_table from '~/core/data/race-data'
import get_data from '~/core/get-data'

import { usePlayerStore } from '~/store/player'
import LZString from 'lz-string'

const player_name = $ref('')
const player_role = $ref(get_data(900001))
const player_race = $ref(get_data(1000001))

const store = usePlayerStore()

const create = () => {
  const save_key = 'pandora_save'
  const player = _create_new_player(player_name, player_role.id, player_race.id)

  player_name = ''

  store.$state = player
  localStorage.setItem(
    save_key,
    LZString.compressToBase64(JSON.stringify(player))
  )
}
</script>
