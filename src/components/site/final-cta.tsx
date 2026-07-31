"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-glow-radial relative overflow-hidden border-t border-white/5 py-24">
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          <span className="text-gradient-brand">{t.finalCta.title}</span>
          <span className="text-white">.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          {t.finalCta.description}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="btn-primary h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
          >
            {t.finalCta.startCampaign}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="btn-outline h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
          >
            {t.finalCta.joinPublisher}
          </Button>
        </div>
      </div>
    </section>
  );
}
