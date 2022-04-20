const gen_exp_data_table = () => {
  let temp_exp_table = [0, 50]
  for (let i = 2; i <= 100; i++) {
    if (i <= 20)
      temp_exp_table.push(
        temp_exp_table[i - 1] + Math.ceil(temp_exp_table[i - 1] / 2)
      )
    else if (i > 20 && i <= 50)
      temp_exp_table.push(temp_exp_table[i - 1] + (i + 3) ** 2 * 10)
    else
      temp_exp_table.push(
        temp_exp_table[i - 1] + Math.ceil(temp_exp_table[i - 2] / 10)
      )
  }
  return temp_exp_table
}

const exp_data_table = gen_exp_data_table()

export default exp_data_table
