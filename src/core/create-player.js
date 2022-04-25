import { nanoid } from 'nanoid'
import { cloneDeep, assign } from 'lodash-es'
import getData from '~/core/get-data'

const createNewPlayer = (name, _raceId) => {
  const initRole = cloneDeep(getData(900001))
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
      $armor: 0,
      $reduce: 0,
      $dodge: 0
    },
    resource: {
      gil: 0
    },
    skills: {
      active: [initRole.skills[0], 0, 0, 0, 0],
      talent: new Array(2).fill(0)
    },
    equipments: new Array(13).fill(0),
    package: new Array(40).fill(0)
  }

  const {
    id: _roleId,
    name: _roleName,
    alias: _roleAlias,
    initEquipments,
    skills,
    levelAdvance: _roleLevelAdvance
  } = initRole

  const {
    name: _raceName,
    alias: _raceAlias,
    base: _raceBase,
    levelAdvance: _raceLevelAdvance,
    talents: _raceTalents
  } = race

  initEquipments.forEach(item => {
    const equipment = getData(item)
    player.equipments[equipment.equipSlot] = item
  })

  assign(player, {
    base: _raceBase,
    levelAdvance: {
      role: _roleLevelAdvance,
      race: _raceLevelAdvance
    },
    skillSet: [...skills, ..._raceTalents],
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
