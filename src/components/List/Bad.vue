<template>
  <section>
    <h2 :class="styles.headline">会社概要</h2>
    <div :class="styles.data_list">
      <div>
        <span :class="styles.term">社名</span>
        <div :class="styles.description">
          株式会社リンクアンドモチベーション (Link and Motivation Inc.)
        </div>
      </div>
      <div>
        <span :class="styles.term">設立</span>
        <div :class="styles.description">2000年3月27日</div>
      </div>
      <div>
        <span :class="styles.term">創業</span>
        <div :class="styles.description">2000年4月7日</div>
      </div>
      <div>
        <span :class="styles.term">事業内容</span>
        <div :class="styles.description">
          <div>モチベーションエンジニアリングによる企業変革コンサルティング・クラウドサービス</div>
          <div>モチベーションマネジメント事業（育成・制度・風土変革支援）</div>
          <div>エントリーマネジメント事業（採用支援）</div>
          <div>ベンチャー・インキュベーション</div>
        </div>
      </div>
      <div>
        <span :class="styles.term">取引銀行</span>
        <div :class="styles.description">
          <div>みずほ銀行 銀座通支店</div>
          <div>三井住友銀行 銀座支店</div>
          <div>三菱UFJ銀行 銀座通支店</div>
        </div>
      </div>
    </div>
    <h2 :class="styles.headline">リンクダイニングへの道順</h2>
    <div :class="styles.ordered_list">
      <span>1. オフィスを出て右に向かう</span>
      <span>2. 1つ目の信号を横断歩道を渡ってから左折</span>
      <span>3. 昭和通り沿いをまっすぐ進む</span>
      <span>4. 銀座東七丁目の信号を右折</span>
      <span>5. 銀座七丁目の信号の手前、右手に入口</span>
    </div>
  </section>
</template>

<style module="styles">
.headline:not(:first-child) {
  margin-block-start: 16px;
}
.data_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-block-start: 8px;
}
.term {
  font-weight: bold;
}
.description {
  margin-inline-start: 16px;
}
.ordered_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-block-start: 8px;
}
</style>
