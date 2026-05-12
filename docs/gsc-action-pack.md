# GSC連携アクションパック

## 現在こちらで完了済み
- `robots.txt` に sitemap URL を記載済み。
- `sitemap.xml` にトップページと検索入口3記事を登録済み。
- ルートに確認用ファイル `e75bce87dc0cae0f79bfca9567db6bf6.txt` を配置済み。
- `indexnow-key.txt` を配置済み。
- `docs/gsc-url-inspection-list.csv` にURL検査対象を整理済み。

## アカウントログイン後にやること
1. Google Search Console で `https://musclelove-777.github.io/ai-tenshoku-compass/` をURLプレフィックスとして追加。
2. HTMLファイル確認を選び、指定されたファイル名と中身が既存ファイルと違う場合はルートに追加。
3. サイトマップ `https://musclelove-777.github.io/ai-tenshoku-compass/sitemap.xml` を送信。
4. `docs/gsc-url-inspection-list.csv` のURLを上からURL検査し、未登録ならインデックス登録をリクエスト。
5. 7日後に検索パフォーマンスで表示回数、クリック数、CTR、掲載順位を確認し、`docs/offer-map.csv` の案件優先度を更新。

## ASPリンク差し替えルール
本番ASPリンクが発行されたら、まず `assets/offers.js` の `url` だけ差し替える。HTML内のCTAは `data-offer` をキーにしているため、サイト全体へ自動反映される。

差し替え後は次を確認する。
- 外部リンクが 200 または 3xx を返す。
- UTMが付与される。
- `window.aiTenshokuExportClicks()` にクリック履歴が保存される。
