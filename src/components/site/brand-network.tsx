"use client";

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

export function BrandNetwork() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-white/5 bg-black/20 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-gradient-brand">{t.brandNetwork.titleLine1}</span>
            <br />
            <span className="text-gradient-brand">{t.brandNetwork.titleLine2}</span>
            <span className="text-white">.</span>
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            {t.brandNetwork.description}
          </p>

          <p className="mt-10 text-sm font-semibold tracking-widest text-violet-400">
            {t.brandNetwork.promoteLabel}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
            {t.brandNetwork.promoteItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ArrowRight className="size-4 shrink-0 text-violet-400" />
                <span className="text-sm text-white">{item}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="btn-primary mt-10 h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
          >
            {t.brandNetwork.cta}
          </Button>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-violet-400">
            {t.brandNetwork.whyLabel}
          </p>
          <div className="mt-4 space-y-3">
            {t.brandNetwork.whyItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-card/60 px-5 py-4"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
