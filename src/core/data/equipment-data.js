const weaponDataTable = [
  {
    id: 800001, // 800001 ~ 800500
    name: '合金剑',
    alias: 'Rigido Sword',
    lable: ['剑', '主手'],
    equipSlot: 0,
    needLevel: 1,
    attack: {
      $att: 7
    }
  },
  {
    id: 800051, // 800001 ~ 800500
    name: '合金匕首',
    alias: 'Rigido Dagger',
    lable: ['匕首', '单手'],
    equipSlot: 0,
    minLevel: 1,
    maxLevel: 10,
    base: {
      $pow: 5,
      $dex: 7
    },
    attack: {
      $att: 8
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
    needLevel: 1,
    defense: {
      $def: 17
    }
  }
]

const equipmentsDataTable = new Array().concat(weaponDataTable, armorDataTable)

export default equipmentsDataTable
