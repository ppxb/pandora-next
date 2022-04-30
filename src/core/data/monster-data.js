const monsterDataTable = [
  {
    id: 1200001,
    name: '机械守卫',
    alias: 'Mechanical guard',
    max: 2,
    base: {
      $hp: 24,
      $att: 6,
      $def: 10,
      $crit: 0.05,
      $dodge: 0.03,
      exp: 15,
      gil: 20
    },
    skills: []
  },
  {
    id: 1200002,
    name: '战斗机器',
    alias: 'Fighter',
    max: 3,
    base: {
      $hp: 32,
      $att: 8,
      $def: 20,
      $crit: 0.05,
      $dodge: 0.04,
      exp: 18,
      gil: 27
    }
  },
  {
    id: 1200003,
    name: '狂热者',
    alias: 'Zealot',
    maxLevel: 10,
    max: 4,
    base: {
      $hp: 39,
      $att: 11,
      $def: 30,
      $crit: 0.05,
      $dodge: 0.07,
      exp: 28,
      gil: 35
    }
  },
  {
    id: 1200004,
    name: '异人',
    alias: 'Ex',
    max: 5,
    base: {
      $hp: 48,
      $att: 15,
      $def: 40,
      $crit: 0.05,
      $dodge: 0.06,
      exp: 43,
      gil: 60
    }
  },
  {
    id: 1200005,
    name: '变种猎犬',
    alias: 'Mutant Hound',
    max: 6,
    base: {
      $hp: 58,
      $att: 17,
      $def: 50,
      $crit: 0.05,
      $dodge: 0.07,
      exp: 65,
      gil: 77
    }
  },
  {
    id: 1200006,
    name: '嗜血兽',
    alias: 'Bloody',
    max: 6,
    base: {
      $hp: 60,
      $att: 19,
      $def: 60,
      $crit: 0.05,
      $dodge: 0.04,
      exp: 94,
      gil: 83
    }
  },
  {
    id: 1200007,
    name: '机械巡警',
    alias: 'Robocop',
    max: 7,
    base: {
      $hp: 72,
      $att: 22,
      $def: 70,
      $crit: 0.05,
      $dodge: 0.04,
      exp: 130,
      gil: 91
    }
  },
  {
    id: 1200008,
    name: '探测者',
    alias: 'Detector',
    max: 7,
    base: {
      $hp: 83,
      $att: 30,
      $def: 80,
      $crit: 0.05,
      $dodge: 0.05,
      exp: 174,
      gil: 123
    }
  },
  {
    id: 1200009,
    name: '毁灭者',
    alias: 'Destroyer',
    max: 8,
    base: {
      $hp: 90,
      $att: 36,
      $def: 90,
      $crit: 0.05,
      $dodge: 0.08,
      exp: 226,
      gil: 142
    }
  },
  {
    id: 1200010,
    name: '监视者',
    alias: 'Watcher',
    max: 10,
    base: {
      $hp: 109,
      $att: 47,
      $def: 110,
      $crit: 0.05,
      $dodge: 0.08,
      exp: 344,
      gil: 189
    }
  }
]

export default monsterDataTable
