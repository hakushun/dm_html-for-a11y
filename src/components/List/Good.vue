<template>
  <section>
    <h2 :class="styles.heading">会社概要</h2>
    <dl :class="styles.overview_list">
      <div>
        <dt :class="styles.overview_term">社名</dt>
        <dd :class="styles.overview_description">
          株式会社リンクアンドモチベーション (Link and Motivation Inc.)
        </dd>
      </div>
      <div>
        <dt :class="styles.overview_term">設立</dt>
        <dd :class="styles.overview_description">2000年3月27日</dd>
      </div>
      <div>
        <dt :class="styles.overview_term">創業</dt>
        <dd :class="styles.overview_description">2000年4月7日</dd>
      </div>
      <div>
        <dt :class="styles.overview_term">事業内容</dt>
        <dd :class="styles.overview_description">
          <ul>
            <li>モチベーションエンジニアリングによる企業変革コンサルティング・クラウドサービス</li>
            <li>モチベーションマネジメント事業（育成・制度・風土変革支援）</li>
            <li>エントリーマネジメント事業（採用支援）</li>
            <li>ベンチャー・インキュベーション</li>
          </ul>
        </dd>
      </div>
      <div>
        <dt :class="styles.overview_term">取引銀行</dt>
        <dd :class="styles.overview_description">
          <ul>
            <li>みずほ銀行 銀座通支店</li>
            <li>三井住友銀行 銀座支店</li>
            <li>三菱UFJ銀行 銀座通支店</li>
          </ul>
        </dd>
      </div>
    </dl>
    <h2 :class="styles.heading">リンクダイニングへの道順</h2>
    <ol :class="styles.route_list">
      <li>オフィスを出て右に向かう</li>
      <li>1つ目の信号を横断歩道を渡ってから左折</li>
      <li>昭和通り沿いをまっすぐ進む</li>
      <li>銀座東七丁目の信号を右折</li>
      <li>銀座七丁目の信号の手前、右手に入口</li>
    </ol>
  </section>
</template>

<style module="styles">
.heading:not(:first-child) {
  margin-block-start: 16px;
}
.overview_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-block-start: 8px;
}
.overview_term {
  font-weight: bold;
}
.overview_description {
  margin-inline-start: 16px;
}
.route_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-block-start: 8px;
  margin-inline-start: 16px;
  list-style: decimal;
}
</style>
