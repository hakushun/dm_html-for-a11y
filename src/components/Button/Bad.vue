<script setup lang="ts">
function onClick() {
  window.alert('私はボタンの姿をしたdivです。');
}
</script>

<template>
  <section :class="styles.root">
    <div :class="styles.button" @click="onClick">Click me!</div>
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
  cursor: pointer;
}
.button:hover {
  color: var(--accent-color);
  text-decoration: none;
  background-color: var(--white);
}
.button:active {
  box-shadow: none;
  transform: translateY(3px);
}
</style>
