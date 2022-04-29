import { unpack } from './utils'
import { cloneDeep, isEmpty } from 'lodash-es'

export const combat = (player, monsters) => {
  const playerSnapshot = cloneDeep(player)
  const mastersSnapshot = cloneDeep(monsters)

  // 随机生成战斗怪物数量
  const monsterCount =
    player.level.current < 5
      ? Math.floor(Math.random() * 3 + 1)
      : Math.floor(Math.random() * 6 + 1)
  const monsterList = new Array(monsterCount)

  // 添加怪物到怪物组
  for (let i = 0; i < monsterList.length; i++) {
    monsterList[i] = cloneDeep(
      mastersSnapshot[Math.floor(Math.random() * mastersSnapshot.length)]
    )
  }

  // TODO 为怪物生成词缀

  // 判断出手顺序
  const combatLogs = []
  let round = 1

  const playerSkills = unpack(playerSnapshot.skillSet)

  while (
    playerSnapshot.base.$hp > 0 &&
    monsterList.filter(monster => monster.base.$hp > 0).length > 0
  ) {
    const skillList = playerSkills.filter(item => {
      return !item.type.includes('被动') && item.round == 0
    })

    let nextSkill = {}
    if (isEmpty(skillList)) nextSkill = unpack(100000)
    else {
      nextSkill = skillList[Math.floor(Math.random() * skillList.length)]
      nextSkill.round = nextSkill.duration
    }

    const skillDeconstruct = nextSkill.effects[0].split('@')
    const skillAttackTime = skillDeconstruct[0]
    const skillAttackBaseDmg = skillDeconstruct[1]

    const playerSkillDmg = Math.ceil(
      playerSnapshot.attack.$att * skillAttackTime * skillAttackBaseDmg
    )

    const currentLiveMonsterList = monsterList.filter(
      monster => monster.base.$hp > 0
    )

    const currentBeAttackedMonster =
      currentLiveMonsterList[
        Math.floor(Math.random() * currentLiveMonsterList.length)
      ]

    currentBeAttackedMonster.base.$hp -= playerSkillDmg

    if (nextSkill.id == 100000) {
      combatLogs.push(
        `${round} - ${player.name} 攻击了 ${currentBeAttackedMonster.name}，造成了${playerSkillDmg}伤害`
      )
    } else {
      combatLogs.push(
        `${round} - ${player.name} 使用技能 ${nextSkill.name} 攻击了 ${currentBeAttackedMonster.name}，造成了${playerSkillDmg}伤害`
      )
    }

    if (monsterList.filter(monster => monster.base.$hp > 0).length === 0) {
      combatLogs.push(`${round} - ${player.name} 已获胜`)
      break
    }

    playerSkills.forEach(item => {
      if (item.id === nextSkill.id) return
      if (item.round > 0) item.round--
    })

    round++

    const currentAttackMonster =
      currentLiveMonsterList[
        Math.floor(Math.random() * currentLiveMonsterList.length)
      ]

    const monsterDmg = currentAttackMonster.base.$att

    playerSnapshot.base.$hp -= monsterDmg

    combatLogs.push(
      `${round} - ${currentAttackMonster.name} 攻击了 ${playerSnapshot.name}，造成了${monsterDmg}伤害`
    )

    if (playerSnapshot.base.$hp <= 0) {
      combatLogs.push(`${round} - ${playerSnapshot.name} 已死亡`)
      break
    }

    round++
  }

  return combatLogs
}
