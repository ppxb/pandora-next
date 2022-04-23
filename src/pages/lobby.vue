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
      <h3>name：{{ state.name }}</h3>
      <h3>level：{{ state.level.current }}</h3>
      <h3>exp：{{ state.level.exp }} / {{ state.level.nextExp }}</h3>
      <h3>role：{{ state.role.name }}</h3>
      <h3>gil：{{ state.resource.gil }}</h3>
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
      <h3>hp：{{ state.base.$hp }}</h3>
      <h3>pow：{{ state.base.$pow }}</h3>
      <h3>dex：{{ state.base.$dex }}</h3>
      <h3>vit：{{ state.base.$vit }}</h3>
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
      <h3>att：{{ state.attack.$att }}</h3>
      <h3>crit：{{ state.attack.$crit }}%</h3>
      <h3>crit dmg：{{ state.attack.$critDmg }}%</h3>
      <h3>hit：{{ state.attack.$hit }}%</h3>
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
      <h3>armor：{{ state.defense.$armor }}</h3>
      <h3>armor reduce：{{ state.defense.$armorReduce }}%</h3>
      <h3>def：{{ state.defense.$def }}</h3>
      <h3>dodge：{{ state.defense.$dodge }}%</h3>
      <h3>recover：{{ state.defense.$recover }}</h3>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from '../store/player'
import computedPlayer from '../core/computed-player'

const { state } = usePlayerStore()

const player = computedPlayer(state)
</script>
