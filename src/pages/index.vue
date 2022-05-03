<template>
  <div class="index">
    <div class="index-slot"></div>
    <div class="index-content">
      <div class="index-title">PANDORA</div>
      <div class="index-version"># VERSION 0.0.1</div>
      <button class="index-start" @click="start">SIGN IN</button>
    </div>
    <footer class="index-footer">
      <a href="https://github.com/ppxb" target="_blank">BUILT BY @PPXB</a>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const start = () => {
  router.push('/lobby')
}
</script>
<style scoped>
.index {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  background: url('~/assets/images/index_cover.png') bottom/cover no-repeat;
}

.index-slot {
  flex-shrink: 1;
}

.index-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.index-title {
  color: var(--primary);
  font-size: 10em;
  line-height: 0.625em;
  font-weight: 700;
}

.index-version {
  color: var(--primary);
  font-size: 1.5em;
  align-self: flex-end;
}

.index-start {
  margin-top: 4em;
  border: 2px solid var(--primary);
  font-size: 1.5em;
  background-color: transparent;
  color: var(--primary);
  padding: 0.5em 4em;
  transition: all 0.25s ease;
}

.index-start:hover {
  background-color: var(--primary);
  color: var(--main-text);
  cursor: pointer;
}

.index-footer {
  flex-shrink: 1;
  font-size: 1.25em;
}

.index-footer a {
  color: rgba(249, 170, 0, 0.8);
  transition: all 0.25s ease;
}
.index-footer a:hover {
  color: var(--primary);
}
</style>
