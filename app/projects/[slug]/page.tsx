import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchDiagram from "../../components/ArchDiagram";
import ProgressGauge from "../../components/ProgressGauge";
import { getProject, projects } from "../../lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Toshiki Kawata Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/"
        className="text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        ← トップへ戻る
      </Link>

      {/* Header */}
      <header className="mb-12 mt-8">
        <div className="flex items-center gap-5">
          {project.icon ? (
            <Image
              src={project.icon}
              alt={`${project.name}のアイコン`}
              width={72}
              height={72}
              className="h-18 w-18 shrink-0 rounded-2xl border border-line"
            />
          ) : (
            <div className="flex h-18 w-18 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-line text-muted">
              <span className="text-xl leading-none">🎨</span>
              <span className="text-[10px] leading-none">未選定</span>
            </div>
          )}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {project.name}
              </h1>
              <span
                className={`rounded-full px-3 py-0.5 text-xs font-medium ${project.statusColor}`}
              >
                {project.status}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 leading-relaxed text-muted">{project.description}</p>
        {project.disclaimer && (
          <p className="mt-3 text-xs leading-relaxed text-muted/80">
            {project.disclaimer}
          </p>
        )}
        <div className="mt-6">
          <ProgressGauge value={project.progress} active={!project.ended} />
        </div>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 構想メモ（構想中プロジェクト用） */}
      {project.concept && (
        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold tracking-tight">構想メモ</h2>
          <ul className="space-y-3">
            {project.concept.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 shrink-0 text-accent">💡</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 主な機能 */}
      {project.features && (
        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold tracking-tight">主な機能</h2>
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 shrink-0 text-accent">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 技術スタック */}
      {project.stackDetail && (
        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold tracking-tight">
            技術スタック
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.stackDetail.map((group) => (
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
      )}

      {/* システム構成 */}
      {project.architecture && (
        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold tracking-tight">
            システム構成
          </h2>
          <ArchDiagram architecture={project.architecture} />
        </section>
      )}

      {/* 開発ヒストリー */}
      {project.history && (
        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold tracking-tight">
            開発ヒストリー
          </h2>
          <ol className="space-y-4 border-l-2 border-line pl-4">
            {project.history.map((item) => (
              <li key={item.date} className="relative">
                <span className="absolute -left-[21.5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                <p className="text-xs font-semibold text-accent">{item.date}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <footer className="mt-16 border-t border-line pt-8">
        <Link
          href="/"
          className="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          ← トップへ戻る
        </Link>
      </footer>
    </main>
  );
}
