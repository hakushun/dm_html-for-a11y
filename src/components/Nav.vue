<script setup lang="ts">
const navList = [
  {
    to: '/',
    label: '<h1> ~ <h6>',
  },
  {
    to: '/anchor',
    label: '<a>',
  },
  {
    to: '/button',
    label: '<button>',
  },
  {
    to: '/list',
    label: '<ul>, <ol>, <dl>',
  },
  {
    to: '/fieldset',
    label: '<fieldset>',
  },
  {
    to: '/references',
    label: 'References',
  },
];
</script>

<template>
  <nav>
    <ul :class="styles.list">
      <li v-for="navItem in navList" :key="navItem.label">
        <router-link :to="navItem.to" :class="styles.link">{{ navItem.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style module="styles">
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.link {
  display: block;
  width: 100%;
  padding: 4px 8px;
  color: var(--black);
  font-size: 18px;
  text-align: center;
}
</style>
