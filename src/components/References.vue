<script setup lang="ts">
const references = {
  web: [
    {
      label: 'HTML Living Standard',
      href: 'https://html.spec.whatwg.org/multipage/',
    },
    {
      label: 'ARIA Authoring Practices Guide (APG)',
      href: 'https://www.w3.org/WAI/ARIA/apg/',
    },
    {
      label: 'Learn HTML',
      href: 'https://web.dev/learn/html',
    },
    {
      label: 'Learn Accessibility',
      href: 'https://web.dev/learn/accessibility',
    },
    {
      label: 'ウェブアクセシビリティを無料で学べる資料まとめ（10年分）',
      href: 'https://note.com/magi1125/n/nbee4b01b2009',
    },
  ],
  book: [
    {
      label: 'HTML5&CSS3デザイン 現場の新標準ガイド【第2版】',
      href: 'https://www.amazon.co.jp/dp/4839974594',
    },
    {
      label: 'Webアプリケーションアクセシビリティ',
      href: 'https://www.amazon.co.jp/dp/4297133660',
    },
    {
      label: 'Form Design Patterns ―シンプルでインクルーシブなフォーム制作実践ガイド',
      href: 'https://www.amazon.co.jp/dp/4862464513',
    },
    {
      label: 'コーディングWebアクセシビリティ',
      href: 'https://www.amazon.co.jp/dp/4862462669',
    },
    {
      label: 'デザイニングWebアクセシビリティ',
      href: 'https://www.amazon.co.jp/dp/4862462650',
    },
  ],
  repository: [
    {
      label: 'HTML for a11y',
      href: 'https://github.com/hakushun/dm_html-for-a11y',
    },
  ],
};
</script>

<template>
  <h1>References</h1>
  <h2 :class="styles.category">Webサイト</h2>
  <ul :class="styles.list">
    <li v-for="item in references.web" :key="item.href">
      <a :href="item.href" target="_blank">{{ item.label }}</a>
    </li>
  </ul>
  <h2 :class="styles.category">書籍</h2>
  <ul :class="styles.list">
    <li v-for="item in references.book" :key="item.href">
      <a :href="item.href" target="_blank">{{ item.label }}</a>
    </li>
  </ul>
  <h2 :class="styles.category">GitHub</h2>
  <ul :class="styles.list">
    <li v-for="item in references.repository" :key="item.href">
      <a :href="item.href" target="_blank">{{ item.label }}</a>
    </li>
  </ul>
</template>

<style module="styles">
.category {
  margin-block-start: 16px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-block-start: 8px;
}
</style>
