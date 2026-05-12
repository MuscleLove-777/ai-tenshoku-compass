# 自動運用Runbook

## 毎回見る数字

- GSC表示回数
- GSCクリック
- CTAクリック数
- offer別クリック率
- 発生CV
- 承認CV

## クリックログ

ブラウザ上では `localStorage.ai_tenshoku_offer_clicks` に直近200件を保存する。

開発確認用:

```js
window.aiTenshokuExportClicks()
```

本番ASPリンクへ差し替える時は `docs/offer-map.csv` の `url` を更新し、HTML内の同じ `data-offer` を維持する。

## 次に自動生成する記事

1. AI転職エージェントおすすめ比較
2. 未経験からAI職種に転職するロードマップ
3. 生成AI副業で月10万円を作る手順
4. AIエンジニアとデータアナリストの違い
5. AI職種の職務経歴書テンプレート
