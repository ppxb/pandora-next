export const combat = (player, monsters) => {
  // 随机生成战斗怪物数量
  const monsterCount = Math.floor(Math.random() * 6 + 1)
  const monsterList = new Array(monsterCount)

  // 添加怪物到怪物组
  for (let i = 0; i < monsterList.length; i++) {
    monsterList[i] = monsters[Math.floor(Math.random() * monsters.length)]
  }

  // 为怪物生成词缀

  console.log(monsterList)
}
