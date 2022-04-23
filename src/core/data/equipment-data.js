const weaponDataTable = [
  {
    id: 800001, // 800001 ~ 800500
    name: '合金剑',
    alias: 'Rigido Sword',
    lable: ['剑', '主手'],
    equipSlot: 0,
    minLevel: 1,
    maxLevel: 10,
    base: {
      $pow: 5,
      $vit: 3
    },
    attack: {
      $att: 10
    }
  }
]

const armorDataTable = [
  {
    id: 800501,
    name: '布甲',
    alias: 'Cloth Armor',
    lable: ['护甲', '上衣'],
    equipSlot: 3,
    minLevel: 1,
    maxLevel: 10,
    base: {
      $hp: 25,
      $vit: 6
    },
    defense: {
      $def: 9
    }
  }
]

const equipmentsDataTable = new Array().concat(weaponDataTable, armorDataTable)

export default equipmentsDataTable
