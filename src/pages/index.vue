<template>
  <div>
    <h1>Create your player!</h1>
    <input type="text" v-model="player_name" />
    <div v-for="role in role_data_table" :key="role.id">
      <label :for="role.name">{{ role.name }}</label>
      <input
        type="radio"
        :id="role.name"
        :value="role.id"
        v-model="player_role_id"
      />
    </div>
    <button @click="create">Create</button>
  </div>
</template>

<script setup>
import _create_new_player from '~/core/create-player'
import role_data_table from '~/core/data/role-data'
import LZString from 'lz-string'

const player_name = $ref('')
const player_role_id = $ref(0)

const create = () => {
  const save_key = 'pandora_save'
  const player = _create_new_player(player_name, player_role_id)
  console.log(player)

  player_name = ''
  // localStorage.setItem(
  //   save_key,
  //   LZString.compressToBase64(JSON.stringify(player))
  // )
}
</script>
