import getData from './get-data'

export const unpack = item =>
  Array.isArray(item) ? item.map(id => getData(id)) : getData(item)
