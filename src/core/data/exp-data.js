const genExpData = () => {
  let tempExpTable = [0, 100]
  for (let i = 2; i <= 100; i++) {
    if (i <= 20)
      tempExpTable.push(
        tempExpTable[i - 1] + Math.ceil(tempExpTable[i - 1] / 2)
      )
    else if (i > 20 && i <= 50)
      tempExpTable.push(tempExpTable[i - 1] + (i + 3) ** 2 * 10)
    else
      tempExpTable.push(
        tempExpTable[i - 1] + Math.ceil(tempExpTable[i - 2] / 10)
      )
  }
  return tempExpTable
}

const expDataTable = genExpData()

export default expDataTable
