"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

export function FreeTrial() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="bg-glow-radial relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-950/50 to-card/60 p-12 text-center shadow-2xl shadow-violet-900/30">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            {t.freeTrial.title}
          </h2>
          <p className="mt-6 text-muted-foreground">{t.freeTrial.newBusinesses}</p>
          <p className="mt-2 text-4xl font-extrabold text-gradient-brand sm:text-5xl">
            {t.freeTrial.freePosts}
          </p>
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">
            {t.freeTrial.description}
          </p>
          <Button
            size="lg"
            className="btn-primary mt-8 h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
          >
            {t.freeTrial.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
