"use client";

import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/site/section-badge";
import { useLanguage } from "@/lib/language";

export function ForBusinesses() {
  const { t } = useLanguage();

  return (
    <section id="for-businesses" className="scroll-mt-20 border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge>{t.forBusinesses.badge}</SectionBadge>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-gradient-brand">{t.forBusinesses.title}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.forBusinesses.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.forBusinesses.steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-card/60 p-6 transition-colors hover:border-violet-500/30"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="btn-primary h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
          >
            {t.forBusinesses.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
