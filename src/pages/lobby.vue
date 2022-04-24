<template>
  <h1>Player Status：</h1>
  <div style="display: flex; flex-wrap: wrap">
    <div
      style="
        border: 1px dashed #333;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px;
      "
    >
      <h2>Info</h2>
      <h3>name：{{ player.name }}</h3>
      <h3>level：{{ player.level.current }}</h3>
      <h3>exp：{{ player.level.exp }} / {{ player.level.nextExp }}</h3>
      <h3>role：{{ player.role.name }}</h3>
      <h3>gil：{{ player.resource.gil }}</h3>
    </div>

    <div
      style="
        border: 1px dashed #333;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px;
      "
    >
      <h2>Base</h2>
      <h3 v-for="key in Object.keys(player.base)" key="key">
        {{ key.substring(1) }}：{{ player.base[key] }}
      </h3>
    </div>

    <div
      style="
        border: 1px dashed #333;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px;
      "
    >
      <h2>Attack</h2>
      <h3 v-for="key in Object.keys(player.attack)" key="key">
        {{ key.substring(1) }}：{{
          key != '$att' ? player.attack[key] + '%' : player.attack[key]
        }}
      </h3>
    </div>

    <div
      style="
        border: 1px dashed #333;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px;
      "
    >
      <h2>Defense</h2>
      <h3 v-for="key in Object.keys(player.defense)" key="key">
        {{ key.substring(1) }}：{{
          key != '$dodge'
            ? player.defense[key]
            : player.defense[key] * 100 + '%'
        }}
      </h3>
    </div>

    <div
      style="
        border: 1px dashed #333;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px;
      "
    >
      <h2>Equipments</h2>
      <h3 v-for="(item, index) in player.equipments" key="item">
        <button @click="show(item)">
          {{ index }} - {{ unpack(item).name }}
        </button>
      </h3>
    </div>

    <div
      style="
        border: 1px dashed #333;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px;
      "
    >
      <h2>Skills</h2>
      <h3 v-for="(item, index) in player.skills" key="item">
        <button @click="show(item)">
          {{ index }} - {{ unpack(item).name }}
        </button>
      </h3>
    </div>

    <div
      style="
        border: 1px dashed #333;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px;
      "
    >
      <h1>Maps</h1>
      <h3 v-for="(item, index) in mapDataTable" key="item">
        <button @click="startCombat(item)">
          {{ index }} - {{ unpack(item).name }}
        </button>
      </h3>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from '../store/player'
import { unpack } from '../core/utils'
import computedPlayer from '../core/computed-player'
import mapDataTable from '../core/data/map-data'
import monsterDataTable from '../core/data/monster-data'
import { combat } from '../core/combat'

const { state } = usePlayerStore()

const player = computedPlayer(state)
const show = item => item != 0 && console.log(unpack(item))
const startCombat = map => {
  const monsters = unpack(
    monsterDataTable.filter(monster => monster.maxLevel === map.maxLevel)
  )

  combat(player, monsters)
}
</script>
