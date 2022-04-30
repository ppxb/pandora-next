<template>
  <div class="lobby">
    <div>
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
          <h3
            v-for="(item, index) in player.equipments.filter(item => item != 0)"
            key="item"
          >
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
          <h3>active</h3>
          <h3
            v-for="(item, index) in player.skills.active.filter(
              item => item != 0
            )"
            key="item"
          >
            <button @click="show(item)">
              {{ index }} - {{ unpack(item).name }}
            </button>
          </h3>
          <h3>passive</h3>
          <h3 v-for="(item, index) in player.skills.passive" key="item">
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
    </div>
    <div>
      <h1>Combat log</h1>
      <div class="combat-wrapper">
        <div v-if="isCombat">
          <div v-for="log in combatLog">
            {{ log }}
          </div>
        </div>
        <div v-if="isWait">
          <div v-for="log in waitLog">
            {{ log }}
          </div>
        </div>
      </div>
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
import { onUnmounted } from 'vue'
import calcLoot from '~/core/calc-loot'

const { state } = usePlayerStore()

const player = computedPlayer(state)
const combatLog = $ref([])
const tempLog = $ref([])
const isCombat = $ref(false)
const isWait = $ref(false)
let combatTimer = null
let waitTimer = null
const waitLog = $ref([])

const show = item => item != 0 && console.log(unpack(item))
const startCombat = map => {
  if (isCombat == true && combatTimer) return
  isCombat = true
  const correctMapMonsterData = unpack(
    monsterDataTable.filter(
      monster =>
        monster.max - 2 <= player.level.current ||
        monster.max <= player.level.current + 2
    )
  )

  const { log, winner, loot } = combat(
    player,
    correctMapMonsterData,
    map.maxMonsterCount
  )

  tempLog = log

  combatTimer = setInterval(() => {
    if (tempLog.length === 0) {
      // 在此处处理战斗奖励和升级逻辑
      // 战斗结果会返回战斗日志、奖励、胜者
      // √ 每次战斗结束后会等待3S-5S，然后自动跳转到下一场战斗
      clearInterval(combatTimer)
      isCombat = false
      combatLog = []
      if (winner == 1) {
        calcLoot(player, loot)
      }
      isWait = true

      let count = 5
      waitLog = []

      waitTimer = setInterval(() => {
        if (waitLog.length >= 5) {
          clearInterval(waitTimer)
          isWait = false
          startCombat(map)
        }

        waitLog.push(`正在整顿，寻找下一个敌人...${count}s`)
        count--
      }, 1000)
    }

    combatLog.push(tempLog.shift())
  }, 300)
}

onUnmounted(() => {
  if (combatTimer) clearInterval(combatTimer)
  if (waitTimer) clearInterval(waitTimer)
})
</script>
<style scoped>
.lobby {
  display: flex;
  flex-direction: column;
}

.combat-wrapper {
  width: 600px;
  height: 300px;
  border: 1px solid goldenrod;
  overflow-y: scroll;
}
</style>
