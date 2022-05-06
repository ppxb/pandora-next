<template>
  <div class="index">
    <div class="index-slot"></div>
    <div class="index-content">
      <div class="index-title">PANDORA</div>
      <div class="index-version"># VERSION 0.0.1</div>
      <button class="index-button" @click="start">SIGN IN</button>
      <button class="index-button" @click="start">PATCH LOG</button>
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
  flex: 1;
}

.index-content {
  flex: 2;
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
  margin-bottom: 4em;
}

.index-button {
  width: 260px;
  padding: 12px 20px;
  border: 2px solid var(--primary);
  font-size: 1.5em;
  margin-bottom: 1em;
  background-color: transparent;
  color: var(--primary);
  transition: all 0.25s ease;
}

.index-button:hover {
  background-color: var(--primary);
  color: var(--main-text);
  cursor: pointer;
}

.index-footer {
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
