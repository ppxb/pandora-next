const weapon_data_table = [
  {
    id: 800001, // 800001 ~ 800500
    name: '合金剑',
    alias: 'Rigido Sword',
    lable: ['剑', '主手'],
    equip_slot: 0,
    min_level: 1,
    max_level: 10,
    base: {
      $att: 10,
      $pow: 5,
      $vit: 3
    }
  }
]

const armor_data_table = [
  {
    id: 800501,
    name: '布甲',
    alias: 'Cloth Armor',
    lable: ['护甲', '上衣'],
    equip_slot: 3,
    min_level: 1,
    max_level: 10,
    base: {
      $hp: 25,
      $vit: 7
    }
  }
]

const equipments_data_table = new Array().concat(
  weapon_data_table,
  armor_data_table
)

export default equipments_data_table
