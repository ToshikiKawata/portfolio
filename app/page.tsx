import Image from "next/image";
import Link from "next/link";
import ProgressGauge from "./components/ProgressGauge";
import { articles } from "./lib/articles";
import { projects } from "./lib/projects";

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
      <section id="projects" className="mb-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          プロジェクト
        </h2>
        <p className="mb-8 text-sm text-muted">
          公開済みのものから構想段階のものまで、個人開発の全プロジェクト。カードを押すと詳細が見られます。
        </p>
        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10 rounded-xl"
                aria-label={`${project.name}の詳細ページへ`}
              />
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
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
                <span className="ml-auto text-sm font-medium text-muted transition-colors group-hover:text-accent">
                  詳細を見る →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 発信（記事が1件以上あるときだけ表示） */}
      {articles.length > 0 && (
        <section className="mb-20">
          <h2 className="mb-2 text-2xl font-bold tracking-tight">発信</h2>
          <p className="mb-8 text-sm text-muted">
            個人開発で得た知見やストーリーを記事にしています。
          </p>
          <ul className="space-y-3">
            {articles.map((article) => (
              <li key={article.url}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border border-line bg-card p-4 transition-colors hover:border-accent"
                >
                  <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                    {article.platform}
                  </span>
                  <span className="text-sm font-medium group-hover:text-accent">
                    {article.title}
                  </span>
                  <span className="ml-auto text-xs text-muted">
                    {article.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Web制作の案内 */}
      <section className="mb-20">
        <Link
          href="/services"
          className="group block rounded-2xl border border-line bg-gradient-to-br from-accent-soft to-card p-8 transition-colors hover:border-accent"
        >
          <p className="text-xs font-semibold tracking-wide text-accent">
            SERVICE
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
            LP・ホームページ制作、承ります
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            個人店舗・スモールビジネス向けに、企画からデザイン・公開まで一人で担当します。
            デザインサンプルと料金の目安はこちら。
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-accent">
            詳しく見る{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
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
