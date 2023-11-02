<template>
  <header class="header_root">
    <h1>HTML for a11y</h1>
    <div class="image_wrapper">
      <img src="/vite.svg" alt="vite logo" width="30" height="30" />
    </div>
  </header>
</template>

<style scoped>
.header_root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}
.image_wrapper {
  border-radius: 50%;
  background-color: var(--white);
}
</style>
