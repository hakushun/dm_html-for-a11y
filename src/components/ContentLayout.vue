<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <article :class="styles.root">
    <h1 :class="styles.title">{{ title }}</h1>
    <section :class="styles.body">
      <slot />
    </section>
  </article>
</template>

<style module="styles">
:root {
  --gap: 32px;
}
.root {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}
.title {
  font-size: 2rem;
  text-decoration: underline;
}
.body {
  position: relative;
  display: grid;
  grid-template-columns: calc(50% - var(--gap) / 2) calc(50% - var(--gap) / 2);
  gap: var(--gap);
  height: 100%;
}
.body::after {
  position: absolute;
  left: 50%;
  content: '';
  width: 1px;
  height: 100%;
  border: 1px solid var(--black);
  transform: translateX(-50%);
}
</style>
