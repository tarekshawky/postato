"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language";

export function PublisherLevels() {
  const { t } = useLanguage();
  const levels = t.publisherLevels.levels.map((level, i) => ({
    ...level,
    dots: i + 1,
    top: i === t.publisherLevels.levels.length - 1,
  }));

  return (
    <section className="border-t border-white/5 bg-black/20 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          {t.publisherLevels.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <div
              key={level.name}
              className={cn(
                "relative rounded-2xl border bg-card/60 p-7",
                level.top ? "border-violet-500/50" : "border-white/10"
              )}
            >
              {level.top && (
                <span className="absolute right-6 top-6 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-white">
                  {t.publisherLevels.top}
                </span>
              )}
              <div className="flex gap-1.5">
                {Array.from({ length: level.dots }).map((_, i) => (
                  <span key={i} className="size-2 rounded-full bg-violet-400" />
                ))}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{level.name}</h3>
              <p className="mt-2 text-xl font-extrabold text-violet-400">{level.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{level.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
