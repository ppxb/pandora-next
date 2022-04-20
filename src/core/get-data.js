import skill_data_table from '~/core/data/skill-data'
import role_data_table from '~/core/data/role-data'
import equipments_data_table from '~/core/data/equipment-data'
import { cloneDeep, find } from 'lodash-es'

const Data = {
  1: skill_data_table,
  8: equipments_data_table,
  9: role_data_table
}

const get_data = key => {
  const head = key.toString()[0]
  const record = Data[head]
  const result = cloneDeep(find(record, { id: key })) || key

  return result
}

export default get_data
