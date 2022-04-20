import { nanoid } from 'nanoid'
import { cloneDeep, assign } from 'lodash-es'
import get_data from '~/core/get-data'

const _create_new_player = (name, id) => {
  const role = cloneDeep(get_data(id))
  const player = {
    id: nanoid(),
    name,
    level: {
      current: 1,
      exp: 0,
      next_exp: 50
    },
    attack: {
      $att: 0,
      $matt: 0,
      $crit: 0,
      $crit_dmg: 0,
      $hit: 0,
      $def: 0,
      $recover: 0,
      $armor: 0,
      $armor_reduce: 0,
      $dodge: 0
    },
    resources: {
      gil: 0
    },
    equipments: new Array(8).fill(0),
    package: new Array(40).fill(0)
  }

  const {
    name: role_name,
    alias: role_alias,
    base,
    base_equipments,
    skills,
    level_advance
  } = role

  base_equipments.forEach(item => {
    const equipment = get_data(item)
    player.equipments[equipment.equip_slot] = item
  })

  assign(player, {
    base,
    level_advance,
    skills,
    role: {
      id,
      name: role_name,
      alias: role_alias
    }
  })

  return player
}

export default _create_new_player
