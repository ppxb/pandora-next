const roleDataTable = [
  {
    id: 900001,
    name: '初心者',
    alias: 'Beginner',
    levelAdvance: {
      $hp: 10,
      $pow: 3,
      $dex: 3,
      $vit: 3
    },
    skills: [100000],
    initEquipments: [800001, 800501]
  },
  {
    id: 900002,
    name: '剑豪',
    alias: 'Hayato',
    base: {
      $hp: 50,
      $pow: 20,
      $dex: 25,
      $vit: 15
    },
    levelAdvance: {
      $hp: 3,
      $pow: 4,
      $dex: 7,
      $vit: 4
    },
    skills: [100001],
    baseEquipments: [800001, 800501]
  },
  {
    id: 900003,
    name: '影',
    alias: 'Shadow',
    levelAdvance: {
      $hp: 10,
      $pow: 3,
      $dex: 3,
      $vit: 3
    },
    skills: [100001],
    baseEquipments: [800051, 800501]
  }
]

export default roleDataTable
