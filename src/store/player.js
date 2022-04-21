import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const playerState = {}

  return {
    playerState
  }
})
