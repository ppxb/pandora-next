<template>
  <div>
    <h1>Create your player!</h1>
    <h2>Type your player's name</h2>
    <input type="text" v-model="player_name" />
    <h2>Choose your player's role</h2>
    <div v-for="role in role_data_table" :key="role.id">
      <label :for="role.name">{{ role.name }}</label>
      <input
        type="radio"
        :id="role.name"
        :value="role.id"
        v-model="player_role_id"
      />
    </div>
    <h2>Choose your player's race</h2>
    <div v-for="race in race_data_table" :key="race.id">
      <label :for="race.name">{{ race.name }}</label>
      <input
        type="radio"
        :id="race.name"
        :value="race.id"
        v-model="player_race_id"
      />
    </div>
    <button @click="create">Create</button>
  </div>
</template>

<script setup>
import _create_new_player from '~/core/create-player'
import role_data_table from '~/core/data/role-data'
import race_data_table from '~/core/data/race-data'
import LZString from 'lz-string'

const player_name = $ref('')
const player_role_id = $ref(0)
const player_race_id = $ref(0)

const create = () => {
  const save_key = 'pandora_save'
  const player = _create_new_player(player_name, player_role_id, player_race_id)
  console.log(player)

  player_name = ''
  // localStorage.setItem(
  //   save_key,
  //   LZString.compressToBase64(JSON.stringify(player))
  // )
}
</script>
