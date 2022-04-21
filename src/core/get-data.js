import skillDataTable from '~/core/data/skill-data'
import roleDataTable from '~/core/data/role-data'
import equipmentsDataTable from '~/core/data/equipment-data'
import raceDataTable from '~/core/data/race-data'
import { cloneDeep, find } from 'lodash-es'

const Data = {
  1: skillDataTable,
  8: equipmentsDataTable,
  9: roleDataTable,
  10: raceDataTable
}

const getData = key => {
  const keyString = key.toString()
  const head = keyString.length > 6 ? keyString.substr(0, 2) : keyString[0]
  const record = Data[head]
  const result = cloneDeep(find(record, { id: key })) || key

  return result
}

export default getData
