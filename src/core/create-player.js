import { nanoid } from 'nanoid'
import { cloneDeep, assign } from 'lodash-es'
import getData from '~/core/get-data'

const createNewPlayer = (name, _roleId, _raceId) => {
  const role = cloneDeep(getData(_roleId))
  const race = cloneDeep(getData(_raceId))

  const player = {
    id: nanoid(),
    name,
    level: {
      current: 1,
      exp: 0,
      nextExp: 50
    },
    attack: {
      $att: 0,
      $crit: 0,
      $critDmg: 0
    },
    defense: {
      $def: 0,
      $recover: 0,
      $armor: 0,
      $armorReduce: 0,
      $dodge: 0
    },
    resource: {
      gil: 0
    },
    activeSkills: new Array(7).fill(0),
    equipments: new Array(13).fill(0),
    package: new Array(40).fill(0)
  }

  const {
    name: _roleName,
    alias: _roleAlias,
    base,
    baseEquipments,
    skills,
    levelAdvance
  } = role

  const { name: _raceName, alias: _raceAlias, talents: _raceTalents } = race

  baseEquipments.forEach(item => {
    const equipment = getData(item)
    player.equipments[equipment.equipSlot] = item
  })

  assign(player, {
    base,
    levelAdvance,
    skills: [...skills, ..._raceTalents],
    role: {
      id: _roleId,
      name: _roleName,
      alias: _roleAlias
    },
    race: {
      id: _raceId,
      name: _raceName,
      alias: _raceAlias
    }
  })

  return player
}

export default createNewPlayer
