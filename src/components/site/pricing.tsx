"use client";

import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/site/section-badge";
import { useLanguage } from "@/lib/language";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge>{t.pricing.badge}</SectionBadge>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-gradient-brand">{t.pricing.title}</span>
            <span className="text-white">.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/40 to-card/60 p-10 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-violet-400">
              {t.pricing.distributionCost}
            </p>
            <p className="mt-2 text-5xl font-extrabold text-white">{t.pricing.price}</p>
            <p className="mt-1 text-muted-foreground">{t.pricing.perPost}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:mt-0 sm:min-w-[320px]">
            <p className="text-sm text-muted-foreground">{t.pricing.exampleCalc}</p>
            <p className="mt-2 font-semibold text-violet-300">{t.pricing.exampleFormula}</p>
            <p className="mt-2 text-lg font-bold text-white">{t.pricing.exampleTotal}</p>
          </div>
        </div>

        <h3 className="mt-20 text-center text-2xl font-bold text-white sm:text-3xl">
          {t.pricing.articleCreation}
        </h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.articles.map((article, i) => (
            <div
              key={article.name}
              className={cn(
                "rounded-2xl border bg-card/60 p-6",
                i === t.pricing.articles.length - 1
                  ? "border-violet-500 shadow-lg shadow-violet-600/20"
                  : "border-white/10"
              )}
            >
              <p className="text-xs text-muted-foreground">{article.length}</p>
              <h4 className="mt-2 font-semibold text-white">{article.name}</h4>
              <p className="mt-2 text-2xl font-extrabold text-violet-400">{article.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{article.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
