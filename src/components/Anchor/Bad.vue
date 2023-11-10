<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function onClick() {
  router.push('/');
}
</script>

<template>
  <section :class="styles.root">
    <button type="button" :class="styles.button" @click="onClick">トップページへ</button>
  </section>
</template>

<style module="styles">
.root {
  display: grid;
  place-items: center;
}
.button {
  display: block;
  padding: 4px 8px;
  font-weight: bold;
  color: var(--white);
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 6px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
}
.button:hover {
  color: var(--accent-color);
  background-color: var(--white);
}
.button:active {
  box-shadow: none;
  transform: translateY(3px);
}
</style>
