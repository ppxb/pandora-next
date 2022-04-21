const skill_data_table = [
  {
    id: 100001,
    name: '斩击',
    alias: 'Slash',
    type: ['物理', '基本'],
    duration: 1,
    round: 0,
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: `用力进行挥砍，造成$player$matt的物理伤害`
  },
  {
    id: 1000001,
    name: '自利',
    alias: 'Selfish',
    type: ['被动', '天赋'],
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: '仅对当前角色生效，+10%治疗效果，+5%所有伤害'
  },
  {
    id: 1000002,
    name: '荣耀',
    alias: 'Glory',
    type: ['被动', '天赋'],
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: '仅对当前角色生效，+10%元素抗性'
  }
]

export default skill_data_table
