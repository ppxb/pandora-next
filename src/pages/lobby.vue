<template>
  <h1>current player：{{ playerState.name }}</h1>
</template>

<script setup>
import { usePlayerStore } from '../store/player'

const { playerState } = usePlayerStore()
</script>
