import { unpack } from './utils'

const calc = (list, target) =>
  list.reduce((res, next) => {
    next[target] &&
      Object.keys(next[target]).forEach(key => {
        res[key] = (res[key] || 0) + next[target][key]
      })
    return res
  }, {})

const computedPlayer = player => {
  const { base, equipments } = player
  // pow=5 vit=10 hp=25 att=10 def=9

  // 1. 计算玩家装备属性
  const unpackedEq = unpack(equipments)
  const calcEq = {
    base: calc(unpackedEq, 'base'),
    attack: calc(unpackedEq, 'attack')
  }

  console.log(calcEq)

  return player
}

export default computedPlayer
