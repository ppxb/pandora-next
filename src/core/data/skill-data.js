const role_skill_data_table = [
  {
    id: 100000,
    name: '普通攻击',
    need: 1,
    alias: 'Direct Attack',
    type: ['物理', '基本'],
    effects: ['1@1'],
    object: 1,
    desc: `对1个敌人造成100%攻击力的物理伤害`
  },
  {
    id: 100001,
    name: '切割',
    alias: 'Concentrate',
    type: ['物理', '基本'],
    need: 2,
    duration: 3,
    round: 0,
    object: 1,
    effects: ['2@0.8'],
    desc: `以极快的速度对单个敌人造成2次攻击，每次造成80%攻击力的物理伤害`
  },
  {
    id: 100002,
    name: '切割',
    alias: 'Concentrate',
    type: ['主动技能', '增益'],
    duration: 2,
    round: 0,
    effects: [
      //[权重]参数名@{前置条件语句}#参数名@事件@事件参数
      'monster@attacked@player@matt'
    ],
    desc: `用力进行挥砍，造成150%攻击力的物理伤害`
  },
  {
    id: 100003,
    name: '凝神',
    alias: 'Concentrate',
    type: ['主动技能', '增益'],
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
    desc: '仅对当前角色生效，暴击几率每等级增加0.08%，暴击伤害每等级增加0.3%'
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
    desc: '仅对当前角色生效，闪避几率每等级提升0.1%'
  }
]

const skill_data_table = Array().concat(
  role_skill_data_table,
  talent_skill_data_table
)

export default skill_data_table
