<script setup lang="ts">
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
</script>

<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <Header />
    </div>
    <div :class="styles.nav">
      <Nav />
    </div>
    <main :class="styles.main">
      <slot />
    </main>
  </div>
</template>

<style module="styles">
.root {
  display: grid;
  grid-template-areas: 'header header' 'nav main';
  grid-template-rows: minmax(50px, auto) 1fr;
  grid-template-columns: minmax(200px, auto) 1fr;
  height: 100vh;
  overflow: hidden;
}
.header {
  grid-area: header;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  background-color: var(--secondary-color);
}
.nav {
  grid-area: nav;
  padding: 32px 16px;
  background-color: var(--ternary-color);
}
.main {
  grid-area: main;
  padding: 16px;
  overflow: auto;
}
</style>
