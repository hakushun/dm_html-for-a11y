<script setup lang="ts">
const navList = [
  {
    to: '/',
    label: 'HOME',
  },
  {
    to: '/',
    label: 'PAGE1',
  },
  {
    to: '/',
    label: 'PAGE2',
  },
  {
    to: '/',
    label: 'PAGE3',
  },
];
</script>

<template>
  <nav>
    <ul class="nav_list">
      <li v-for="navItem in navList" :key="navItem.label">
        <router-link to="/" class="nav_list_link">{{ navItem.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav_list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav_list_link {
  display: block;
  width: 100%;
  padding: 4px 8px;
  font-size: 18px;
  text-align: center;
}
</style>
