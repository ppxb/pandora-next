const role_skill_data_table = [
  {
    id: 100001,
    name: '斩击',
    alias: 'Slash',
    type: ['物理', '基本'],
    duration: 2,
    round: 0,
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: `用力进行挥砍，造成150%攻击力的物理伤害`
  }
]

const talent_skill_data_table = [
  {
    id: 101001,
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
    id: 101002,
    name: '荣耀',
    alias: 'Glory',
    type: ['被动', '天赋'],
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: '仅对当前角色生效，+10%元素抗性'
  },
  {
    id: 101003,
    name: '残忍',
    alias: 'Cruel',
    type: ['被动', '天赋'],
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: '仅对当前角色生效，+5%暴击几率，+5%暴击伤害'
  },
  {
    id: 101004,
    name: '迷幻',
    alias: 'Phantom',
    type: ['被动', '天赋'],
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: '仅对当前角色生效，+5%闪避几率'
  }
]

const skill_data_table = Array().concat(
  role_skill_data_table,
  talent_skill_data_table
)

export default skill_data_table
