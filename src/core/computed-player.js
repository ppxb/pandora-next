import { assign, cloneDeep } from 'lodash-es'
import { unpack } from './utils'

const calculate = (list, target) =>
  list.reduce((res, next) => {
    next[target] &&
      Object.keys(next[target]).forEach(key => {
        res[key] = (res[key] || 0) + next[target][key]
      })
    return res
  }, {})

const calcAdvance = computed => {
  Object.keys(computed.base).forEach(key => {
    if (computed.level.current === 1)
      computed.base[key] = computed.base[key] + computed.levelAdvance.role[key]
    else
      computed.base[key] =
        computed.base[key] +
        computed.levelAdvance.role[key] * computed.level.current +
        computed.levelAdvance.race[key] * (computed.level.current - 1)
  })
}

const combine = (eq, player) => {
  Object.keys(eq).forEach(key => {
    Object.keys(player[key]).forEach(attr => {
      player[key][attr] = (eq[key][attr] || 0) + player[key][attr]
    })
  })
  return player
}

const computedPlayer = player => {
  const _temp = cloneDeep(player)
  const unpackedEq = unpack(_temp.equipments)

  const calcEq = {
    base: calculate(unpackedEq, 'base'),
    attack: calculate(unpackedEq, 'attack'),
    defense: calculate(unpackedEq, 'defense')
  }

  const computed = combine(calcEq, _temp)

  calcAdvance(computed)

  const { base, attack, defense } = computed
  assign(attack, {
    $att: attack.$att + Math.floor(base.$pow / 5),
    $critDmg: attack.$critDmg + Number((base.$dex / 10).toFixed(2))
  })
  assign(defense, {
    $dodge: defense.$dodge + Number((base.$dex / 1000).toFixed(2))
  })
  return assign(_temp, { base, attack, defense })
}

export default computedPlayer
