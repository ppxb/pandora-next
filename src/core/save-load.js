import LZString from 'lz-string'

const saveKey = 'pandora_save'

export const save = player => {
  localStorage.setItem(
    saveKey,
    LZString.compressToBase64(JSON.stringify(player))
  )
}

export const load = () => {
  const player = localStorage.getItem(saveKey)
  return player ? JSON.parse(LZString.decompressFromBase64(player)) : {}
}
