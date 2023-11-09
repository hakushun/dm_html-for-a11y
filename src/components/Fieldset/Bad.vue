<template>
  <form :class="styles.root">
    <fieldset :class="styles.group">
      <div>
        <legend>
          <h2>連絡先</h2>
        </legend>
        <div :class="styles.stack">
          <div :class="styles.row">
            <label :class="styles.label" for="bad_name">名前</label>
            <input id="bad_name" type="text" name="bad_name" required />
          </div>
          <div :class="styles.row">
            <label :class="styles.label" for="bad_email">メールアドレス</label>
            <input id="bad_email" type="email" name="bad_email" required />
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset :class="styles.group">
      <div>
        <legend>
          <h2>配送先</h2>
        </legend>
        <div :class="styles.stack">
          <div :class="styles.row">
            <label :class="styles.label" for="bad_address">住所</label>
            <input id="bad_address" type="text" name="bad_address" required />
          </div>
          <div :class="styles.row">
            <label :class="styles.label" for="bad_tel">電話番号</label>
            <input
              id="bad_tel"
              type="tel"
              name="bad_tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required />
          </div>
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
