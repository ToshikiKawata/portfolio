import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LP・ホームページ制作 | Toshiki Kawata",
  description:
    "個人店舗・スモールビジネス向けのLP・ホームページ制作を承ります。企画からデザイン・実装・公開・運用まで一人で完結。スマホアプリ開発も対応可能です。",
};

const services = [
  {
    icon: "📄",
    name: "ランディングページ（LP）",
    detail:
      "商品・サービス・キャンペーンの魅力を1ページに凝縮。スマホ表示を最優先に、問い合わせ・予約につながる構成で作ります。",
  },
  {
    icon: "🏠",
    name: "お店・会社のホームページ",
    detail:
      "カフェ・サロン・小規模事業者向けの数ページ構成のサイト。営業時間・メニュー・アクセス・お知らせなど、必要な情報を過不足なく。",
  },
  {
    icon: "⚙️",
    name: "Webアプリ・業務ツール",
    detail:
      "予約フォーム、料金シミュレーター、社内の小さな業務ツールなど「ちょっと動きのある仕組み」もWebで作れます。",
  },
  {
    icon: "📱",
    name: "スマホアプリ",
    detail:
      "iOS/Androidアプリの企画〜App Store公開まで実績あり。「アプリにしたい」段階のご相談から乗れます。",
  },
];

const strengths = [
  {
    title: "一人で全部やります",
    detail:
      "企画・デザイン・実装・公開・運用まで窓口ひとつ。制作会社を挟まないぶん、話が早く費用も抑えられます。",
  },
  {
    title: "AI活用で高速・低コスト",
    detail:
      "最新のAI開発ツールを本業・個人開発で日常的に使い込んでおり、従来より短い期間で形にできます。",
  },
  {
    title: "公開して終わりにしない",
    detail:
      "自分のアプリを公開後も改善し続けている経験から、更新のしやすさ・運用コストまで考えた作りにします。",
  },
  {
    title: "ストア公開までの実績",
    detail:
      "iOSアプリをApp Store公開まで一人で完走。審査対応など「公開の壁」を越えるノウハウがあります。",
  },
];

const flow = [
  {
    step: "1",
    title: "ヒアリング",
    detail: "目的・ターゲット・参考にしたいサイトをお聞きします（無料）",
  },
  {
    step: "2",
    title: "ご提案・お見積り",
    detail: "構成案とデザインの方向性、金額と納期をご提示します",
  },
  {
    step: "3",
    title: "制作",
    detail: "途中経過を実際の画面で確認いただきながら仕上げます",
  },
  {
    step: "4",
    title: "公開・運用",
    detail: "ドメイン取得・公開作業まで代行。公開後の更新もご相談ください",
  },
];

const pricing = [
  {
    name: "ランディングページ",
    price: "50,000円〜",
    detail: "1ページ完結・スマホ対応・お問い合わせ導線込み",
  },
  {
    name: "ホームページ（〜5ページ）",
    price: "120,000円〜",
    detail: "トップ＋下層ページ・お知らせ更新の仕組みもご相談可",
  },
  {
    name: "更新・保守",
    price: "月5,000円〜",
    detail: "テキスト・画像の差し替え、軽微な修正など",
  },
  {
    name: "Webアプリ・スマホアプリ",
    price: "要相談",
    detail: "内容により大きく変わるため、まずはお話をお聞かせください",
  },
];

function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line shadow-sm">
      <div className="flex items-center gap-2 border-b border-line bg-card px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </span>
        <span className="ml-1 flex-1 truncate rounded-md bg-background px-2 py-0.5 text-[10px] text-muted">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/"
        className="text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        ← トップへ戻る
      </Link>

      {/* Hero */}
      <section className="mb-20 mt-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          LP・ホームページ制作、
          <br />
          承ります。
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          個人店舗・スモールビジネス向けに、企画からデザイン・実装・公開までを一人で担当します。
          「お店のページがほしい」「チラシ代わりのLPがほしい」——
          そんな段階のふわっとしたご相談から大歓迎です。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:tkawata.dev@gmail.com?subject=Web制作の相談"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
          >
            無料で相談してみる
          </a>
          <Link
            href="/#projects"
            className="rounded-lg border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
          >
            開発実績を見る
          </Link>
        </div>
      </section>

      {/* できること */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">できること</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-line bg-card p-5"
            >
              <p className="text-2xl">{s.icon}</p>
              <h3 className="mb-2 mt-3 font-bold">{s.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* デザインサンプル */}
      <section className="mb-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          デザインサンプル
        </h2>
        <p className="mb-8 text-sm text-muted">
          雰囲気の異なる3つのサンプルデザイン。お店のトーンに合わせて作り分けます。
          ※いずれも架空の店舗・サービスです。
        </p>
        <div className="space-y-8">
          {/* カフェ */}
          <div>
            <BrowserFrame url="cafe-haruhi.example.jp">
              <div className="bg-[#f7f1e8] px-6 py-10 text-center">
                <p className="text-[10px] font-medium tracking-[0.35em] text-[#a58a63]">
                  SINCE 2026 — 自家焙煎珈琲
                </p>
                <h3 className="mt-3 font-serif text-3xl font-bold text-[#43352a]">
                  喫茶 はるひ
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#7d6b58]">
                  まちの小さな焙煎所から、今日の一杯を。
                </p>
                <span className="mt-5 inline-block rounded-full bg-[#43352a] px-6 py-2 text-xs font-medium text-[#f7f1e8]">
                  メニューを見る
                </span>
                <div className="mt-7 flex justify-center gap-2">
                  {["本日のブレンド ¥520", "季節のシフォン ¥480", "水出しアイス ¥560"].map(
                    (m) => (
                      <span
                        key={m}
                        className="rounded-md border border-[#d9c9b2] bg-[#fffdf9] px-2.5 py-1.5 text-[10px] text-[#6b5a47]"
                      >
                        {m}
                      </span>
                    )
                  )}
                </div>
              </div>
            </BrowserFrame>
            <p className="mt-2 text-xs text-muted">
              カフェ・飲食店向け — 温かみと手仕事感のあるトーン
            </p>
          </div>

          {/* サロン */}
          <div>
            <BrowserFrame url="salon-luce.example.jp">
              <div className="bg-white px-6 py-10 text-center">
                <p className="text-[10px] tracking-[0.5em] text-[#c9a9a6]">
                  HAIR & CARE
                </p>
                <h3 className="mt-3 text-3xl font-light tracking-[0.2em] text-[#3d3a39]">
                  Luce
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#8a8482]">
                  髪も、気持ちも、ふっと軽くなる60分を。
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <span className="rounded-none border border-[#3d3a39] px-6 py-2 text-[11px] tracking-widest text-[#3d3a39]">
                    ご予約
                  </span>
                  <span className="rounded-none border border-[#e3d5d3] bg-[#faf6f5] px-6 py-2 text-[11px] tracking-widest text-[#b09390]">
                    メニュー
                  </span>
                </div>
                <p className="mt-6 text-[10px] tracking-wider text-[#b5aeac]">
                  カット ¥4,900 ／ カラー ¥7,700 ／ 完全予約制
                </p>
              </div>
            </BrowserFrame>
            <p className="mt-2 text-xs text-muted">
              美容室・サロン向け — 余白をいかした上品なトーン
            </p>
          </div>

          {/* SaaS */}
          <div>
            <BrowserFrame url="taskflow.example.app">
              <div className="bg-gradient-to-br from-[#0e1330] to-[#1b2350] px-6 py-10 text-center">
                <span className="rounded-full border border-[#4c5aa8] bg-[#232d63] px-3 py-1 text-[10px] font-medium text-[#9fb0f5]">
                  ✨ 14日間 無料トライアル
                </span>
                <h3 className="mt-4 text-2xl font-extrabold leading-snug text-white">
                  チームのタスク管理を、
                  <br />
                  <span className="bg-gradient-to-r from-[#7c9bff] to-[#b48cff] bg-clip-text text-transparent">
                    もっとシンプルに。
                  </span>
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#a5aed4]">
                  TaskFlowは小さなチームのための進捗共有ツール。
                </p>
                <span className="mt-5 inline-block rounded-lg bg-gradient-to-r from-[#5b7cfa] to-[#8f6bf6] px-6 py-2.5 text-xs font-bold text-white">
                  無料ではじめる →
                </span>
                <div className="mt-7 flex justify-center gap-5 text-[10px] text-[#8d97c4]">
                  <span>導入 3,000社*</span>
                  <span>継続率 98%*</span>
                  <span>設定 5分</span>
                </div>
              </div>
            </BrowserFrame>
            <p className="mt-2 text-xs text-muted">
              サービス・アプリ紹介向け — 数字とCTAで惹きつけるモダンなトーン（*数値はダミー）
            </p>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          選んでいただく理由
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-line bg-card p-5"
            >
              <h3 className="mb-2 font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 料金 */}
      <section className="mb-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">料金の目安</h2>
        <p className="mb-8 text-sm text-muted">
          内容・ボリュームによって変わるため、まずはお気軽にご相談ください。
        </p>
        <div className="overflow-hidden rounded-xl border border-line">
          {pricing.map((p, i) => (
            <div
              key={p.name}
              className={`flex flex-wrap items-baseline justify-between gap-2 bg-card p-5 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <div>
                <p className="font-bold">{p.name}</p>
                <p className="mt-1 text-xs text-muted">{p.detail}</p>
              </div>
              <p className="text-lg font-bold text-accent">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 流れ */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          ご依頼の流れ
        </h2>
        <ol className="space-y-4">
          {flow.map((f) => (
            <li key={f.step} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-bold text-accent">
                {f.step}
              </span>
              <div>
                <p className="font-bold">{f.title}</p>
                <p className="mt-0.5 text-sm text-muted">{f.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-line bg-card p-8 text-center">
        <h2 className="text-xl font-bold tracking-tight">
          まずは話だけでも、お気軽に。
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          「何を決めてから相談すればいいか分からない」状態で大丈夫です。
          ご相談・お見積りは無料。無理な営業は一切しません。
        </p>
        <a
          href="mailto:tkawata.dev@gmail.com?subject=Web制作の相談"
          className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
        >
          メールで相談する
        </a>
        <p className="mt-3 text-xs text-muted">tkawata.dev@gmail.com</p>
      </section>

      <footer className="mt-16 border-t border-line pt-8 text-center text-xs text-muted">
        © 2026 Toshiki Kawata
      </footer>
    </main>
  );
}
