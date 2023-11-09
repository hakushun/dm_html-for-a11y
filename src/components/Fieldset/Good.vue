<template>
  <form :class="styles.root">
    <fieldset :class="styles.group">
      <legend>
        <h2>連絡先</h2>
      </legend>
      <div :class="styles.stack">
        <div :class="styles.row">
          <label :class="styles.label" for="good_name">名前</label>
          <input id="good_name" type="text" name="good_name" required />
        </div>
        <div :class="styles.row">
          <label :class="styles.label" for="good_email">メールアドレス</label>
          <input id="good_email" type="email" name="good_email" required />
        </div>
      </div>
    </fieldset>
    <fieldset :class="styles.group">
      <legend>
        <h2>配送先</h2>
      </legend>
      <div :class="styles.stack">
        <div :class="styles.row">
          <label :class="styles.label" for="good_address">住所</label>
          <input id="good_address" type="text" name="good_address" required />
        </div>
        <div :class="styles.row">
          <label :class="styles.label" for="good_tel">電話番号</label>
          <input
            id="good_tel"
            type="tel"
            name="good_tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required />
        </div>
      </div>
    </fieldset>
  </form>
</template>

<style module="styles">
.root {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.group {
  border: none;
}
.stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.label {
  min-width: 120px;
  font-size: 16px;
}
.label::after {
  content: ':';
}
</style>
