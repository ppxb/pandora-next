import { unpack } from './utils'
import { cloneDeep } from 'lodash-es'

export const combat = (player, monsters) => {
  const playerSnapshot = cloneDeep(player)
  const mastersSnapshot = cloneDeep(monsters)

  // 随机生成战斗怪物数量
  const monsterCount = Math.floor(Math.random() * 6 + 1)
  const monsterList = new Array(monsterCount)

  // 添加怪物到怪物组
  for (let i = 0; i < monsterList.length; i++) {
    monsterList[i] =
      mastersSnapshot[Math.floor(Math.random() * mastersSnapshot.length)]
  }

  // TODO 为怪物生成词缀

  // 判断出手顺序
  const playerFirst = Math.random() > 0.5
  let round = 0

  // 选择释放技能
  // const skill = unpack(
  //   player.skills[Math.floor(Math.random() * player.skills.length)]
  // )

  const skills = unpack(playerSnapshot.skills)

  const canUseSkills = skills.filter(
    item => !item.type.includes('被动') && item.round === 0
  )

  // 判断哪些技能可以释放

  const roundSkill =
    canUseSkills[Math.floor(Math.random() * canUseSkills.length)]

  console.log(`${player.name} 释放了 ${roundSkill.name}`)
  // while (
  //   player.base.$hp > 0 &&
  //   monsterList.some(monster => monster.base.$hp > 0)
  // ) {
  //   if (playerFirst) {
  //     // 选择释放技能
  //     const skill =
  //       player.skills[Math.floor(Math.random() * player.skills.length)]

  //     console.log(`${player.name} 释放了 ${skill.name}`)

  //     round++
  // player.attack(monsterList)
  // if (monsterList.some(monster => monster.hp > 0)) {
  //   monsterList.forEach(monster => {
  //     monster.attack(player)
  //   })
  // }
  //   }
  // }
}
