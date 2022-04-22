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
      <h3>name：{{ playerState.name }}</h3>
      <h3>level：{{ playerState.level.current }}</h3>
      <h3>
        exp：{{ playerState.level.exp }} / {{ playerState.level.nextExp }}
      </h3>
      <h3>role：{{ playerState.role.name }}</h3>
      <h3>gil：{{ playerState.resource.gil }}</h3>
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
      <h3>hp：{{ playerState.base.$hp }}</h3>
      <h3>pow：{{ playerState.base.$pow }}</h3>
      <h3>dex：{{ playerState.base.$dex }}</h3>
      <h3>vit：{{ playerState.base.$vit }}</h3>
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
      <h3>att：{{ playerState.attack.$att }}</h3>
      <h3>crit：{{ playerState.attack.$crit }}%</h3>
      <h3>crit dmg：{{ playerState.attack.$critDmg }}%</h3>
      <h3>hit：{{ playerState.attack.$hit }}%</h3>
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
      <h3>armor：{{ playerState.defense.$armor }}</h3>
      <h3>armor reduce：{{ playerState.defense.$armorReduce }}%</h3>
      <h3>def：{{ playerState.defense.$def }}</h3>
      <h3>dodge：{{ playerState.defense.$dodge }}%</h3>
      <h3>recover：{{ playerState.defense.$recover }}</h3>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from '../store/player'

const { playerState } = usePlayerStore()
</script>
