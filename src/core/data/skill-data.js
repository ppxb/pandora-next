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
  }
]

export default skill_data_table
