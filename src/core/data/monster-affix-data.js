// 词缀分为三种
// 1. 普通词缀
// 2. 精英词缀（精英专有）
// 3. BOSS词缀（BOSS专有）
// 但下一级怪物都可以获得上一级词缀
// 词缀最多6条
// 普通怪物：1-2条普通词缀，总量不超过2条
// 精英怪物：1-3条普通词缀，1-2条精英词缀，总量不超过 4条
// BOSS怪物：1条普通词缀，2条精英词缀，3条BOSS词缀，总量不超过6条

// type:1 普通词缀 2 精英词缀 3 BOSS词缀

const monsterAffixDataTable = [
  {
    name: '坚韧',
    type: 1,
    effect: ['$hp@multiply@1.1']
  }
]

export default monsterAffixDataTable
