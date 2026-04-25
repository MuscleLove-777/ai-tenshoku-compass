# AI転職コンパス - スケジュールエージェントガイド

このリポジトリは **AI時代の転職・副業ナビ** `AI転職コンパス` の本体です。
あなた（スケジュールエージェント）は毎日JST 09:23に起動し、最新の転職市場・AI×キャリア情報をリサーチして記事を3本生成します。

## あなたの1日のタスク

1. **リサーチ**: WebSearchで以下のトピックから **3件** の最新ネタを選ぶ
   - AI職種（AIエンジニア・データサイエンティスト・MLOps・LLMエンジニア）の求人動向・年収相場
   - 主要転職エージェント・サイトのキャンペーン/新機能
   - 副業・フリーランス案件の単価動向
   - 退職代行サービスの利用傾向
   - 大手企業のAI活用と人材ニーズ
   - リスキリング・スキルアップ手法
2. **画像選定**: 各記事ごとにUnsplash無料画像を1枚WebSearchで選ぶ
   - クエリ例: `site:unsplash.com job interview`, `site:unsplash.com career office`, `site:unsplash.com remote work laptop`
   - URL形式: `https://images.unsplash.com/photo-XXXX?w=1600&h=900&fit=crop`
3. **記事生成**: 下のHTMLテンプレートに沿って3本作成し `articles/YYYY-MM-DD-<slug>.html` に保存
4. **インデックス更新**: `index.html` の `<div class="blog-grid" id="blog-grid">` 内を最新6件に更新
5. **sitemap.xml更新**: 新規記事URLを追加
6. **コミット&プッシュ**: `[auto] Add daily articles YYYY-MM-DD`
7. **IndexNow通知**: `indexnow-key.txt` を読み、新規URL3本+トップを `https://api.indexnow.org/indexnow` に通知

## 執筆ルール

- **言語**: 日本語
- **文字数**: 本文1200-1800字、`<h2>` 2-3本
- **トーン**: 信頼感あるキャリアアドバイザー目線。データ裏付け重視
- **タイトル**: 28-40字、数字・年収・期間を入れる（例「AIエンジニア転職で年収800万円を実現する3つのキャリアパス」）
- **冒頭**: 1段落でフック（読者の悩み→記事で得られる答え）
- **結論**: 行動喚起（「無料登録」「相談」「資料請求」等）
- **免責**: 末尾に「年収・実績は事例であり成功を保証しない」旨を1行
- **画像**: Unsplashの無料ライセンスのみ。実在人物画像はNG

## 記事HTMLテンプレート

`articles/YYYY-MM-DD-<slug>.html`:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{記事タイトル}} | AI転職コンパス</title>
<meta name="description" content="{{150字以内の要約}}">
<link rel="canonical" href="https://musclelove-777.github.io/ai-tenshoku-compass/articles/{{YYYY-MM-DD-slug}}.html">
<meta property="og:type" content="article">
<meta property="og:title" content="{{記事タイトル}}">
<meta property="og:description" content="{{要約}}">
<meta property="og:image" content="{{Unsplash URL}}">
<meta property="og:url" content="https://musclelove-777.github.io/ai-tenshoku-compass/articles/{{YYYY-MM-DD-slug}}.html">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{{Unsplash URL}}">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"{{記事タイトル}}","image":"{{Unsplash URL}}","datePublished":"{{YYYY-MM-DD}}","author":{"@type":"Organization","name":"AI転職コンパス"}}
</script>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav class="filter-nav"><a href="../index.html" class="filter-btn">← トップに戻る</a></nav>
<main class="article-body">
  <img class="article-hero-img" src="{{Unsplash URL}}" alt="{{記事タイトル}}">
  <p class="article-meta">📅 {{YYYY-MM-DD}} · 🏷️ {{カテゴリ}}</p>
  <h1>{{記事タイトル}}</h1>
  <p>{{リード文}}</p>
  <h2>{{見出し1}}</h2>
  <p>{{本文}}</p>
  <h2>{{見出し2}}</h2>
  <p>{{本文}}</p>
  <h2>まとめ</h2>
  <p>{{結論+CTA}}</p>
  <p style="color:#6b7280;font-size:0.8rem;margin-top:40px;">※ 記載の年収・条件は事例であり、転職成功を保証するものではありません。各サービスの最新条件は公式サイトをご確認ください。</p>
  <a href="../index.html" class="back-link">← 他の記事を見る</a>
</main>
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-promo">
      <p class="promo-label">― Powered by MuscleLove ―</p>
      <div class="footer-links">
        <a href="https://x.com/MuscleGirlLove7" target="_blank" rel="noopener">𝕏 @MuscleGirlLove7</a>
        <a href="https://www.patreon.com/MuscleLove" target="_blank" rel="noopener">💪 Patreon</a>
        <a href="https://musclelove-777.github.io/ai-fukugyo-compass/" target="_blank" rel="noopener">🧭 AI副業コンパス</a>
      </div>
    </div>
    <p class="copyright">© 2026 AI転職コンパス</p>
  </div>
</footer>
</body>
</html>
```

## index.html の blog-grid 更新

最新6件に維持。先頭の `<article class="blog-empty">...</article>` は新規記事ある時に削除：

```html
<article class="blog-card">
  <a href="articles/{{YYYY-MM-DD-slug}}.html"><img src="{{Unsplash URL}}" alt="{{記事タイトル}}" loading="lazy"></a>
  <div class="blog-card-body">
    <div class="blog-card-meta">📅 {{YYYY-MM-DD}} · 🏷️ {{カテゴリ}}</div>
    <h3><a href="articles/{{YYYY-MM-DD-slug}}.html">{{記事タイトル}}</a></h3>
    <p>{{120字程度の要約}}</p>
  </div>
</article>
```

## sitemap.xml 更新

`<urlset>` 内に追加:
```xml
<url>
  <loc>https://musclelove-777.github.io/ai-tenshoku-compass/articles/{{slug}}.html</loc>
  <lastmod>{{YYYY-MM-DD}}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

## 守ってほしいこと

- 毎日 **必ず3本** 記事を追加
- タイトル重複NG（articles/ をlsして既存確認）
- 画像はUnsplashのみ、実在人物NG
- 年収・実績は最新情報を確認、絶対的な保証表現NG
- 「絶対に成功する」「楽して稼げる」等の誇張表現NG
- フッターのMuscleLove広告（X+Patreon+AI副業コンパス）は全ページ必須

## 外部リンク張る時は必ず到達確認（最重要・2026-04-25追加）
記事内で公式サイト・サービスへの外部リンクを張る時、URL を書く前に必ず `curl -sI -m 10 -L "<URL>" -A "Mozilla/5.0" | head -1` で HTTP 200/301/302 を確認すること。
- 採用OK: 200/301/302
- 採用NG: 404/410/0(DNS失敗)/5xx
- NGなら公式トップURLに格上げ、それも無理なら掲載しない
- 推測でURLを書くな（「ブランド名から想像して例えば https://brand.com/foo/」みたいな組み立て厳禁）
- 必ず公式サイトトップ or 公式の検索結果上位から採取

頑張って。
