<template>
  <section :class="styles.root">
    <router-link to="/" :class="styles.link">トップページへ</router-link>
  </section>
</template>

<style module="styles">
.root {
  display: grid;
  place-items: center;
}
.link {
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
.link:hover {
  color: var(--accent-color);
  text-decoration: none;
  background-color: var(--white);
}
.link:active {
  box-shadow: none;
  transform: translateY(3px);
}
</style>
