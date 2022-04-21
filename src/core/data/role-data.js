const role_data_table = [
  {
    id: 900001,
    name: '剑豪',
    alias: 'Hayato',
    base: {
      $hp: 50,
      $max_hp: 0,
      $pow: 20,
      $dex: 25,
      $vit: 15
    },
    level_advance: {
      $hp: 3,
      $pow: 4,
      $dex: 7,
      $vit: 4
    },
    skills: [100001],
    base_equipments: [800001, 800501]
  },
  {
    id: 900002,
    name: '影',
    alias: 'Hayato',
    base: {
      $hp: 45,
      $max_hp: 0,
      $pow: 15,
      $dex: 30,
      $vit: 15
    },
    level_advance: {
      $hp: 2,
      $pow: 5,
      $dex: 7,
      $vit: 3
    },
    skills: [100001],
    base_equipments: [800001, 800501]
  }
]

export default role_data_table
