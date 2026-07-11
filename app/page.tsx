import Image from "next/image";
import ProgressGauge from "./components/ProgressGauge";

type Project = {
  name: string;
  status: string;
  statusColor: string;
  icon: string | null;
  description: string;
  progress: number;
  tech: string[];
  links: { label: string; href: string }[];
  history?: { date: string; text: string }[];
};

const projects: Project[] = [
  {
    name: "Typedex",
    status: "公開中",
    statusColor: "bg-green-500/15 text-green-600 dark:text-green-400",
    icon: "/icons/typedex.png",
    description:
      "性格タイプで友達を「集めて」相性を分析できる、中高生向けのiOSアプリ。企画・デザイン・開発・App Store申請までを一人で担当。",
    progress: 100,
    tech: ["React Native", "Expo", "TypeScript"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/jp/app/id6781932071",
      },
    ],
  },
  {
    name: "RINGDOM",
    status: "v2 開発中",
    statusColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    icon: "/icons/ringdom.png",
    description:
      "ポーカーの判断ミスをAIが添削する上達ログ。プレイしたハンドを記録するとAIコーチが評価し、記録が貯まるほど自分の弱点（リーク）が見えてくる。",
    progress: 70,
    tech: ["React Native", "Expo", "TypeScript", "Claude API"],
    links: [{ label: "Webアプリ (v1)", href: "https://ringdom.vercel.app" }],
    history: [
      {
        date: "v1",
        text: "Web技術（Capacitor）でWeb / iOS / Androidの3プラットフォーム対応版を開発。Web版を公開（現在も稼働中）。",
      },
      {
        date: "2026.06-07",
        text: "iOS App Storeの審査に挑戦するも却下。Webをラップした構成がネイティブアプリとしての品質基準に届かなかった。",
      },
      {
        date: "2026.07-",
        text: "却下を機に方針転換し、React Nativeでゼロから再構築するv2が爆誕。AIコーチ機能を一新して実機テストまで完了、ストア公開へ再挑戦中。",
      },
    ],
  },
  {
    name: "ヤブサメ",
    status: "公開準備中",
    statusColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    icon: null,
    description:
      "競馬WIN5の買い目を人気合計・人気帯の条件で絞り込むフィルターツール。フリーミアム型のWebアプリとして公開準備中。",
    progress: 80,
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    links: [],
  },
  {
    name: "kakeibo",
    status: "非公開運用中",
    statusColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    icon: "/icons/kakeibo.png",
    description:
      "パートナーと二人で使う共有家計簿アプリ。レシートを撮影するとClaude APIが品目と金額を自動で読み取って記帳する。自分たちで毎日使いながら改善を続けている。",
    progress: 90,
    tech: ["React Native", "Expo", "Supabase", "Claude API"],
    links: [],
  },
  {
    name: "Slash Rush",
    status: "開発中",
    statusColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    icon: null,
    description:
      "画面をスラッシュして蛇を切断していく60秒の2Dアクションゲーム。Canvasベースで、短時間で遊べる暇つぶしゲームとして開発中。",
    progress: 40,
    tech: ["TypeScript", "Canvas 2D"],
    links: [],
  },
  {
    name: "エイショット",
    status: "構想中",
    statusColor: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-400",
    icon: null,
    description:
      "「遺影 × ショット」の造語。堅苦しくなりがちな遺影を、元気なうちにカジュアルに撮って家族と共有できるサービスの構想。",
    progress: 15,
    tech: ["企画段階"],
    links: [],
  },
  {
    name: "筋トレアプリ（仮）",
    status: "構想中",
    statusColor: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-400",
    icon: null,
    description:
      "トレーニングメニューの自動生成に加えて、部位ごとの超回復・放置状態を人体マップの色（赤→緑→青）で直感的に可視化するアプリの構想。",
    progress: 10,
    tech: ["企画段階"],
    links: [],
  },
];

const skillGroups = [
  {
    title: "業務経験",
    items: ["OutSystems（要件定義〜設計〜開発）", "業務システム開発"],
  },
  {
    title: "フロントエンド / モバイル",
    items: ["TypeScript", "React / Next.js", "React Native (Expo)", "Capacitor"],
  },
  {
    title: "バックエンド / インフラ",
    items: ["Supabase", "Vercel", "Claude API（LLM連携）"],
  },
  {
    title: "その他",
    items: ["Git / GitHub", "App Store 申請・公開"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Toshiki Kawata
        </h1>
        <p className="mt-3 text-lg text-muted">
          システムエンジニア / 個人開発者
        </p>
        <p className="mt-6 leading-relaxed">
          業務ではOutSystemsを用いた業務システム開発に要件定義から携わり、個人では
          「あったらいいな」を形にするアプリを企画からストア公開まで一人で開発しています。
          2026年にiOSアプリ「Typedex」をApp Storeで公開しました。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/ToshikiKawata"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            GitHub
          </a>
          <a
            href="mailto:tkawata.dev@gmail.com"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">スキル</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-line bg-card p-5"
            >
              <h3 className="mb-3 text-sm font-semibold text-muted">
                {group.title}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          プロジェクト
        </h2>
        <p className="mb-8 text-sm text-muted">
          公開済みのものから構想段階のものまで、個人開発の全プロジェクト。
        </p>
        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-line bg-card p-6"
            >
              <div className="mb-3 flex items-center gap-4">
                {project.icon ? (
                  <Image
                    src={project.icon}
                    alt={`${project.name}のアイコン`}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-2xl border border-line"
                  />
                ) : (
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-2xl border border-dashed border-line text-muted">
                    <span className="text-base leading-none">🎨</span>
                    <span className="text-[9px] leading-none">未選定</span>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-medium ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              {project.history && (
                <ol className="mb-5 space-y-3 border-l-2 border-line pl-4">
                  {project.history.map((item) => (
                    <li key={item.date} className="relative">
                      <span className="absolute -left-[21.5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                      <p className="text-xs font-semibold text-accent">
                        {item.date}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              )}
              <div className="mb-4">
                <ProgressGauge value={project.progress} />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          お問い合わせ
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          お仕事のご相談・アプリへのフィードバックは{" "}
          <a
            href="mailto:tkawata.dev@gmail.com"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            tkawata.dev@gmail.com
          </a>{" "}
          までお気軽にどうぞ。
        </p>
      </section>

      <footer className="mt-20 border-t border-line pt-8 text-center text-xs text-muted">
        © 2026 Toshiki Kawata
      </footer>
    </main>
  );
}
