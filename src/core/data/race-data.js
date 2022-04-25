const raceDataTable = [
  {
    id: 1000001,
    name: '新人类',
    alias: 'NT',
    base: {
      $hp: 45,
      $pow: 15,
      $dex: 30,
      $vit: 15
    },
    levelAdvance: {
      $hp: 2,
      $pow: 5,
      $dex: 7,
      $vit: 3
    },
    talents: [101001, 101002]
  },
  {
    id: 1000002,
    name: '皮克希',
    alias: 'Pixie',
    base: {
      $hp: 65,
      $pow: 18,
      $dex: 24,
      $vit: 18
    },
    levelAdvance: {
      $hp: 32,
      $pow: 8,
      $dex: 13,
      $vit: 9
    },
    talents: [101003, 101004]
  }
]

export default raceDataTable
