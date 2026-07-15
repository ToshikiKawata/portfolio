import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "./Reveal";

export const metadata: Metadata = {
  title: "TaskFlow — 制作サンプルLP | Toshiki Kawata",
  description:
    "架空のSaaS「TaskFlow」のランディングページ制作サンプル。Toshiki KawataのLP制作デモです。",
  robots: { index: false },
};

const features = [
  {
    icon: "📋",
    title: "かんばん進捗ボード",
    detail:
      "タスクをドラッグで動かすだけ。「誰が・何を・いつまでに」がチーム全員に一目で伝わります。",
  },
  {
    icon: "🤖",
    title: "朝のAIサマリー",
    detail:
      "毎朝9時、昨日の進捗と今日の要注意タスクをAIが3行に要約。朝会の前にチームの温度感がわかります。",
  },
  {
    icon: "⏰",
    title: "期限アラート",
    detail:
      "期限48時間前のタスクを自動でハイライトし、担当者にそっと通知。「忘れてた」をなくします。",
  },
  {
    icon: "💬",
    title: "コメント & メンション",
    detail:
      "タスクの文脈のまま会話。チャットツールに議論が流れて消える問題から解放されます。",
  },
  {
    icon: "📱",
    title: "モバイル完全対応",
    detail:
      "移動中もスマホから進捗確認・ステータス更新。現場仕事のチームでも使えます。",
  },
  {
    icon: "🔗",
    title: "外部サービス連携",
    detail:
      "Slack・Googleカレンダーと接続して、通知も予定もいつもの場所に集約できます。",
  },
];

const testimonials = [
  {
    name: "佐藤 ミナ",
    role: "EC運営チーム リーダー（架空）",
    color: "bg-[#5b7cfa]",
    text: "進捗確認のための定例会議が週3回から週1回に減りました。「あれどうなってる？」と聞く回数が激減。",
  },
  {
    name: "田中 ケンジ",
    role: "制作会社 ディレクター（架空）",
    color: "bg-[#8f6bf6]",
    text: "外注メンバーを含めて12人で使っています。朝のAIサマリーを読むだけで1日の段取りが決まる。",
  },
  {
    name: "山本 アオイ",
    role: "スタートアップ COO（架空）",
    color: "bg-[#34d399]",
    text: "導入は本当に5分でした。ツール疲れしていたチームがこれだけは続いています。",
  },
];

const plans = [
  {
    name: "Free",
    price: "¥0",
    unit: "ずっと無料",
    features: ["3人まで", "ボード1つ", "モバイル対応"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "¥980",
    unit: "1人あたり / 月",
    features: [
      "人数無制限",
      "ボード無制限",
      "朝のAIサマリー",
      "Slack / カレンダー連携",
      "優先サポート",
    ],
    highlight: true,
  },
  {
    name: "Team",
    price: "¥2,400",
    unit: "1人あたり / 月",
    features: ["Proの全機能", "権限管理・監査ログ", "SSO対応", "専任サポート"],
    highlight: false,
  },
];

const faqs = [
  {
    q: "本当に5分で使い始められますか？",
    a: "メールアドレスの登録→チーム名の入力→メンバー招待の3ステップです。既存ツールからのインポートも、CSVを放り込むだけで完了します。",
  },
  {
    q: "ITが苦手なメンバーがいても大丈夫？",
    a: "操作は「カードを書く」「動かす」の2つだけに絞っています。60代のメンバーがいるチームでも運用されています（架空の事例です）。",
  },
  {
    q: "無料プランのまま使い続けられますか？",
    a: "はい。3人までのチームなら期限なくずっと無料です。有料プランへの自動移行や急な課金は一切ありません。",
  },
  {
    q: "解約したらデータはどうなりますか？",
    a: "解約後30日間はすべてのデータをCSV/JSONでエクスポートできます。データを人質に取るようなことはしません。",
  },
];

const kanban = [
  {
    column: "今日やる",
    color: "#f59e0b",
    cards: [
      { title: "LPの原稿レビュー", tag: "デザイン", tagColor: "#8f6bf6", who: "M", whoColor: "#5b7cfa", progress: 70 },
      { title: "請求書の送付", tag: "事務", tagColor: "#34d399", who: "K", whoColor: "#8f6bf6", progress: 30 },
    ],
  },
  {
    column: "進行中",
    color: "#5b7cfa",
    cards: [
      { title: "新機能のヒアリング", tag: "企画", tagColor: "#f59e0b", who: "A", whoColor: "#34d399", progress: 55 },
      { title: "採用ページ改修", tag: "デザイン", tagColor: "#8f6bf6", who: "M", whoColor: "#5b7cfa", progress: 85 },
    ],
  },
  {
    column: "完了 🎉",
    color: "#34d399",
    cards: [
      { title: "7月キャンペーン設定", tag: "マーケ", tagColor: "#ef4444", who: "K", whoColor: "#8f6bf6", progress: 100 },
    ],
  },
];

export default function TaskflowSample() {
  return (
    <div className="min-h-screen bg-[#0a0e1f] text-[#e8ecff]">
      <Reveal />

      {/* サンプル表示バナー */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-amber-400 px-4 py-2 text-center text-xs font-bold text-amber-950">
        <span>
          🎨 これはWeb制作の実力を見ていただくためのサンプルLPです（TaskFlowは架空のサービスです）
        </span>
        <Link href="/services" className="underline underline-offset-2">
          制作のご依頼はこちら →
        </Link>
      </div>

      {/* ナビ */}
      <header className="sticky top-0 z-40 border-b border-[#232b55] bg-[#0a0e1f]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <p className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="inline-block h-3.5 w-3.5 rounded-md bg-gradient-to-br from-[#5b7cfa] to-[#8f6bf6]" />
            TaskFlow
          </p>
          <div className="hidden gap-8 text-sm text-[#93a0cc] sm:flex">
            <a href="#features" className="transition-colors hover:text-white">
              機能
            </a>
            <a href="#pricing" className="transition-colors hover:text-white">
              料金
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
          </div>
          <span className="rounded-lg bg-gradient-to-r from-[#5b7cfa] to-[#8f6bf6] px-4 py-2 text-xs font-bold text-white">
            無料ではじめる
          </span>
        </nav>
      </header>

      {/* ヒーロー */}
      <section className="relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="blob-float pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#5b7cfa]/20 blur-3xl" />
        <div
          className="blob-float pointer-events-none absolute -right-24 top-64 h-80 w-80 rounded-full bg-[#8f6bf6]/20 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 text-center">
          <span className="reveal inline-block rounded-full border border-[#4c5aa8] bg-[#161c3f] px-4 py-1.5 text-xs font-medium text-[#9fb0f5]">
            ✨ 10人までのチームに、ちょうどいい
          </span>
          <h1 className="reveal mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            チームの「今」が、
            <br />
            <span className="bg-gradient-to-r from-[#7c9bff] via-[#a78bfa] to-[#f0abfc] bg-clip-text text-transparent">
              3秒でわかる。
            </span>
          </h1>
          <p className="reveal mx-auto mt-6 max-w-xl leading-relaxed text-[#93a0cc]">
            タスク、担当、期限、温度感。散らばっていたチームの情報をひとつの画面に。
            TaskFlowは「進捗を聞く時間」をゼロにする、小さなチームのための進捗共有ツールです。
          </p>
          <div className="reveal mt-9 flex flex-wrap justify-center gap-3">
            <span className="rounded-xl bg-gradient-to-r from-[#5b7cfa] to-[#8f6bf6] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#5b7cfa]/25 transition-transform hover:scale-105">
              無料ではじめる — 30秒で登録
            </span>
            <span className="rounded-xl border border-[#2c3565] bg-[#121735] px-8 py-3.5 text-sm font-medium text-[#c6cff2]">
              ▶ 2分でわかるデモ動画
            </span>
          </div>
          <p className="reveal mt-4 text-xs text-[#6b769e]">
            クレジットカード不要 ・ 3人までずっと無料
          </p>

          {/* アプリUIモック（かんばんボード） */}
          <div className="reveal mt-16">
            <div className="overflow-hidden rounded-2xl border border-[#2c3565] bg-[#0d1228] shadow-2xl shadow-black/50">
              {/* ウィンドウバー */}
              <div className="flex items-center gap-2 border-b border-[#232b55] bg-[#121735] px-4 py-3">
                <span className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </span>
                <span className="ml-2 rounded-md bg-[#0a0e1f] px-3 py-1 text-[10px] text-[#6b769e]">
                  app.taskflow.example — 制作チームのボード
                </span>
              </div>
              {/* ボード本体 */}
              <div className="grid gap-3 p-4 text-left sm:grid-cols-3 sm:gap-4 sm:p-6">
                {kanban.map((col) => (
                  <div
                    key={col.column}
                    className="rounded-xl bg-[#121735] p-3"
                  >
                    <p
                      className="mb-3 flex items-center gap-2 text-xs font-bold"
                      style={{ color: col.color }}
                    >
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: col.color }}
                      />
                      {col.column}
                      <span className="ml-auto text-[#6b769e]">
                        {col.cards.length}
                      </span>
                    </p>
                    <div className="space-y-2.5">
                      {col.cards.map((card) => (
                        <div
                          key={card.title}
                          className="rounded-lg border border-[#232b55] bg-[#0d1228] p-3 transition-colors hover:border-[#4c5aa8]"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-xs font-semibold leading-snug text-[#e8ecff]">
                              {card.title}
                            </p>
                            <span
                              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                              style={{ backgroundColor: card.whoColor }}
                            >
                              {card.who}
                            </span>
                          </div>
                          <span
                            className="mt-2 inline-block rounded px-1.5 py-0.5 text-[9px] font-medium text-white"
                            style={{ backgroundColor: card.tagColor }}
                          >
                            {card.tag}
                          </span>
                          <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-[#232b55]">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#5b7cfa] to-[#8f6bf6]"
                              style={{ width: `${card.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実績帯 */}
      <section className="border-y border-[#232b55] bg-[#0d1228]">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-6 py-10 text-center">
          {[
            ["3,000+", "利用チーム*"],
            ["98%", "継続率*"],
            ["5分", "平均セットアップ"],
          ].map(([num, label]) => (
            <div key={label} className="reveal">
              <p className="bg-gradient-to-r from-[#7c9bff] to-[#b48cff] bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                {num}
              </p>
              <p className="mt-1 text-xs text-[#93a0cc]">{label}</p>
            </div>
          ))}
        </div>
        <p className="pb-4 text-center text-[10px] text-[#6b769e]">
          *サンプルLPのためダミーの数値です
        </p>
      </section>

      {/* 機能 */}
      <section id="features" className="mx-auto max-w-5xl px-6 py-24">
        <p className="reveal text-center text-xs font-bold tracking-[0.25em] text-[#7c9bff]">
          FEATURES
        </p>
        <h2 className="reveal mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          「聞かなくてもわかる」を、つくる機能。
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal rounded-2xl border border-[#232b55] bg-[#0d1228] p-6 transition-all hover:-translate-y-1 hover:border-[#4c5aa8] hover:shadow-xl hover:shadow-[#5b7cfa]/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1c2450] to-[#2a1e55] text-xl">
                {f.icon}
              </span>
              <h3 className="mt-4 font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#93a0cc]">
                {f.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AIサマリーのハイライト */}
      <section className="border-y border-[#232b55] bg-[#0d1228]">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-xs font-bold tracking-[0.25em] text-[#7c9bff]">
              AI DIGEST
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
              朝9時、AIが昨日の進捗を
              <br />
              3行にまとめて報告。
            </h2>
            <p className="mt-5 leading-relaxed text-[#93a0cc]">
              「昨日なにが進んだのか」を把握するために、ボードを隅々まで見る必要はもうありません。
              進んだこと・止まっていること・今日の要注意タスクを、AIが毎朝要約してSlackに届けます。
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-[#c6cff2]">
              {[
                "読むのにかかる時間は30秒",
                "止まっているタスクを自動検出",
                "朝会がそのまま「決める場」になる",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34d399]/15 text-[10px] text-[#34d399]">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {/* AIサマリーのモック */}
          <div className="reveal rounded-2xl border border-[#2c3565] bg-[#121735] p-5 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-[#232b55] pb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5b7cfa] to-[#8f6bf6] text-sm">
                🤖
              </span>
              <div>
                <p className="text-xs font-bold">TaskFlow AI</p>
                <p className="text-[10px] text-[#6b769e]">今日 9:00</p>
              </div>
            </div>
            <div className="space-y-3 pt-4 text-xs leading-relaxed text-[#c6cff2]">
              <p>
                ☀️ おはようございます。<b>昨日は5件のタスクが完了</b>
                しました（7月キャンペーン設定 ほか）。
              </p>
              <p>
                ⚠️ <b>「請求書の送付」が2日間動いていません。</b>
                担当のKさんの今日のタスクは3件です。
              </p>
              <p>
                📌 今日が期限:{" "}
                <span className="rounded bg-[#f59e0b]/15 px-1.5 py-0.5 text-[#fbbf24]">
                  LPの原稿レビュー
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="reveal text-center text-xs font-bold tracking-[0.25em] text-[#7c9bff]">
          VOICES
        </p>
        <h2 className="reveal mt-3 text-center text-3xl font-extrabold tracking-tight">
          小さなチームの、大きな変化。
        </h2>
        <p className="reveal mt-3 text-center text-xs text-[#6b769e]">
          ※サンプルLPのため、事例・人物はすべて架空です
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal rounded-2xl border border-[#232b55] bg-[#0d1228] p-6"
            >
              <p className="text-sm leading-relaxed text-[#c6cff2]">
                「{t.text}」
              </p>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}
                >
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-[11px] text-[#6b769e]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 料金 */}
      <section
        id="pricing"
        className="border-y border-[#232b55] bg-[#0d1228] px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <p className="reveal text-center text-xs font-bold tracking-[0.25em] text-[#7c9bff]">
            PRICING
          </p>
          <h2 className="reveal mt-3 text-center text-3xl font-extrabold tracking-tight">
            チームの規模に合わせて、シンプルに。
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`reveal relative rounded-2xl border p-7 ${
                  plan.highlight
                    ? "border-[#5b7cfa] bg-gradient-to-b from-[#161c3f] to-[#121735] shadow-xl shadow-[#5b7cfa]/15"
                    : "border-[#232b55] bg-[#0a0e1f]"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#5b7cfa] to-[#8f6bf6] px-4 py-1 text-[10px] font-bold text-white">
                    いちばん人気
                  </span>
                )}
                <p className="text-sm font-bold text-[#93a0cc]">{plan.name}</p>
                <p className="mt-3 text-4xl font-extrabold">
                  {plan.price}
                  <span className="ml-1 text-xs font-medium text-[#6b769e]">
                    {plan.unit}
                  </span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-[#c6cff2]">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="text-[#34d399]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <span
                  className={`mt-7 block rounded-xl py-3 text-center text-sm font-bold ${
                    plan.highlight
                      ? "bg-gradient-to-r from-[#5b7cfa] to-[#8f6bf6] text-white"
                      : "border border-[#2c3565] text-[#c6cff2]"
                  }`}
                >
                  このプランではじめる
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <p className="reveal text-center text-xs font-bold tracking-[0.25em] text-[#7c9bff]">
          FAQ
        </p>
        <h2 className="reveal mt-3 text-center text-3xl font-extrabold tracking-tight">
          よくある質問
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="reveal group rounded-xl border border-[#232b55] bg-[#0d1228] px-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-bold">
                {faq.q}
                <span className="text-[#7c9bff] transition-transform group-open:rotate-45">
                  ＋
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-[#93a0cc]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 最終CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="blob-float pointer-events-none absolute left-1/2 top-1/2 h-96 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b7cfa]/15 blur-3xl" />
        <div className="reveal relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            今日から、進捗を
            <br className="sm:hidden" />
            「追いかけない」働き方へ。
          </h2>
          <p className="mt-4 text-sm text-[#93a0cc]">
            30秒で登録完了。クレジットカードは不要です。
          </p>
          <span className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#5b7cfa] to-[#8f6bf6] px-10 py-4 text-sm font-bold text-white shadow-lg shadow-[#5b7cfa]/25 transition-transform hover:scale-105">
            無料ではじめる →
          </span>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-[#232b55] bg-[#0a0e1f] px-6 py-10 text-center">
        <p className="flex items-center justify-center gap-2 text-sm font-extrabold">
          <span className="inline-block h-3 w-3 rounded-md bg-gradient-to-br from-[#5b7cfa] to-[#8f6bf6]" />
          TaskFlow
        </p>
        <p className="mt-3 text-xs text-[#6b769e]">
          このページは架空のサービスを題材にしたLP制作サンプルです。
        </p>
        <p className="mt-2 text-xs text-[#93a0cc]">
          制作:{" "}
          <Link
            href="/services"
            className="font-medium text-[#7c9bff] underline underline-offset-2"
          >
            Toshiki Kawata — LP・ホームページ制作
          </Link>
        </p>
      </footer>
    </div>
  );
}
