import { Fragment } from "react";
import type { Architecture } from "../lib/projects";

export default function ArchDiagram({
  architecture,
}: {
  architecture: Architecture;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-card p-6">
      <div className="flex min-w-fit flex-col items-center gap-3">
        {architecture.layers.map((layer, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <div className="flex flex-col items-center gap-0.5">
                {architecture.arrows[i - 1] && (
                  <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent">
                    {architecture.arrows[i - 1]}
                  </span>
                )}
                <span className="text-lg leading-none text-accent">↓</span>
              </div>
            )}
            <div className="flex flex-wrap justify-center gap-3">
              {layer.nodes.map((node) => (
                <div
                  key={node.name}
                  className="min-w-44 rounded-lg border border-line bg-background px-4 py-3 text-center"
                >
                  <p className="text-sm font-semibold">{node.name}</p>
                  {node.detail && (
                    <p className="mt-1 text-xs text-muted">{node.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
      {architecture.note && (
        <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
          {architecture.note}
        </p>
      )}
    </div>
  );
}
