# しちゅえーる Landing Page

推しの声で朝を迎えるアラームアプリ「しちゅえーる」の公式ランディングページです。

## 🎯 プロジェクト概要

Next.js 14 (App Router) + TypeScript + Tailwind CSS で構築された、プロダクション対応のランディングページです。

### 主要機能

- **メール事前登録** - Formspree 統合による簡単な事前登録システム
- **レスポンシブデザイン** - モバイルファーストでありながら全デバイスに対応
- **SEO 最適化** - メタデータ、OG 画像、構造化データ対応
- **アクセシビリティ** - WAI-ARIA ガイドラインに準拠
- **パフォーマンス最適化** - Lighthouse 80+スコア達成

### デザイン特徴

- **トーン**: Pop / Cute / Friendly
- **カラーパレット**: 緑ベース (#2DBE73) + アクセント色
- **UI**: 丸みを帯びた要素、やわらかい影、朝の爽やかさ

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
# pnpm推奨（パッケージマネージャーが利用可能な場合）
pnpm install

# または npm
npm install

# または yarn
yarn install
```

**注意**: TypeScript エラーを避けるため、依存関係のインストール後、IDE を再起動することを推奨します。

### 2. 環境変数の設定

`.env.local.example` を `.env.local` にコピーして設定:

```bash
cp env.local.example .env.local
```

`.env.local` ファイルを編集:

```env
# Formspree endpoint for email collection
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id

# Survey URL to redirect after email registration
NEXT_PUBLIC_SURVEY_URL=https://tally.so/r/your-survey-id
```

### 3. 開発サーバーの起動

```bash
pnpm dev
```

http://localhost:3000 でアクセス可能です。

## 📂 プロジェクト構造

```
├── app/
│   ├── globals.css          # グローバルスタイル
│   ├── layout.tsx           # ルートレイアウト + SEOメタデータ
│   └── page.tsx             # メインランディングページ
├── components/
│   ├── icons/               # カスタムSVGアイコン
│   ├── EmailForm.tsx        # メール登録フォーム
│   ├── Hero.tsx             # ヒーローセクション
│   ├── Features.tsx         # 共感→解決セクション
│   ├── VoiceCategories.tsx  # ボイスカテゴリ（横スクロール）
│   ├── HowItWorks.tsx       # 3ステップ説明
│   ├── Trust.tsx            # 信頼・実績セクション
│   ├── Faq.tsx              # FAQアコーディオン
│   ├── FinalCta.tsx         # 最終CTA
│   ├── Navigation.tsx       # ヘッダーナビゲーション
│   ├── Footer.tsx           # フッター
│   ├── Logo.tsx             # ロゴコンポーネント
│   ├── PrimaryButton.tsx    # プライマリボタン
│   └── Section.tsx          # セクションラッパー
├── public/
│   ├── logo.svg             # ロゴ画像
│   ├── phone-mockup.png     # スマホモックアップ
│   ├── og.png               # OG画像
│   └── favicon.ico          # ファビコン
├── tailwind.config.ts       # Tailwindカスタム設定
└── package.json
```

## 🎨 デザインシステム

### カラーパレット

```css
--color-primary: #2DBE73    /* メインカラー（緑） */
--color-bg-soft: #F7FDF9    /* ソフト背景色 */
--color-accent: #FFCC66     /* アクセントカラー（黄） */
--color-text: #111111       /* テキストカラー */
--color-border: #E6F5EC     /* ボーダーカラー */
```

### タイポグラフィ

- **日本語**: Noto Sans JP
- **英語**: Nunito
- Google Fonts から next/font/google で最適化読み込み

### UI 要素

- **ボタン**: `rounded-full` (pill 形状)
- **カード**: `rounded-xl` + ソフトシャドウ
- **セクション余白**: `py-16 md:py-24`

## 📱 セクション構成

1. **Hero** - メインキャッチ + 事前登録フォーム
2. **Features** - 共感（問題提起）→ 解決（アプリの価値）
3. **VoiceCategories** - ボイス種類の横スクロールカード
4. **HowItWorks** - 3 ステップの利用方法
5. **Trust** - 信頼要素（収録数、更新頻度、権利管理）
6. **FAQ** - よくある質問（アコーディオン）
7. **FinalCTA** - 最終コンバージョンポイント

## 🔧 カスタマイズ

### メール登録フォームの設定

1. [Formspree](https://formspree.io/)でアカウント作成
2. 新しいフォームを作成してエンドポイント URL を取得
3. `.env.local`の`NEXT_PUBLIC_FORMSPREE_ENDPOINT`を更新

### アンケート連携の設定

1. [Tally](https://tally.so/)や[Typeform](https://typeform.com/)でアンケート作成
2. 公開 URL を取得
3. `.env.local`の`NEXT_PUBLIC_SURVEY_URL`を更新

### ロゴの変更

`public/logo.svg`を差し替えるだけで OK です。

## 🚀 デプロイ（Vercel）

### 1. GitHub リポジトリにプッシュ

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Vercel にデプロイ

1. [Vercel](https://vercel.com/)にログイン
2. "New Project"をクリック
3. GitHub リポジトリを選択
4. プロジェクト設定:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `pnpm build`
   - Output Directory: `.next`

### 3. 環境変数の設定

Vercel ダッシュボードで環境変数を設定:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- `NEXT_PUBLIC_SURVEY_URL`

### 4. カスタムドメインの設定（オプション）

Vercel ダッシュボードの"Domains"セクションでカスタムドメインを追加できます。

## 📊 パフォーマンス

### Lighthouse 目標スコア

- **Performance**: 80+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 95+

### 最適化項目

- Next.js Image コンポーネント使用
- フォントの最適化（next/font/google）
- CSS-in-JS なし（Tailwind CSS のみ）
- 適切なセマンティック HTML
- アクセシビリティ属性の設定

## 🔍 SEO 設定

- タイトル: "しちゅえーる | 推しの声で朝を迎えるアプリ"
- ディスクリプション: 推し活向けアラームアプリの紹介
- OG 画像: ブランドカラーベースのグラフィック
- 構造化データ: WebApplication schema 対応予定

## 🎯 コンバージョン最適化

### CV ポイント

1. **Hero CTA**: ファーストビューでの事前登録
2. **Final CTA**: ページ下部での最終訴求
3. **ナビゲーション**: 固定ヘッダーからの登録導線

### A/B テスト推奨箇所

- ヒーローセクションのキャッチコピー
- CTA ボタンのテキスト
- 登録特典の訴求内容

## 🛠 開発・保守

### コーディング規約

- TypeScript strict モード
- ESLint + Prettier
- セマンティック HTML の徹底
- Tailwind CSS クラスの一貫性

### トラブルシューティング

**Q: メールフォームが動作しない**
A: `.env.local`の設定と Formspree エンドポイントを確認

**Q: 画像が表示されない**
A: `public/`フォルダの画像ファイルと Next.js Image コンポーネントのパスを確認

**Q: スタイルが適用されない**
A: Tailwind CSS の設定とクラス名を確認

## 📞 サポート

質問や問題がある場合は、GitHub の Issue を作成してください。

---

© 2024 しちゅえーる. All rights reserved.
