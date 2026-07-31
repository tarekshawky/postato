"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/site/section-badge";
import { useLanguage } from "@/lib/language";

export function ForPublishers() {
  const { t } = useLanguage();
  const flow = t.forPublishers.flow;

  return (
    <section id="for-publishers" className="scroll-mt-20 border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-card/60 p-8 shadow-2xl shadow-black/40">
            <p className="text-center text-sm text-violet-300">{t.forPublishers.wallet}</p>
            <p className="mt-2 text-center text-5xl font-extrabold text-white">
              {t.forPublishers.balance}
            </p>
            <p className="text-center text-sm text-muted-foreground">
              {t.forPublishers.availableBalance}
            </p>

            <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-muted-foreground">
                  {t.forPublishers.pendingEarnings}
                </span>
                <span className="font-semibold text-amber-400">
                  {t.forPublishers.pendingAmount}
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-muted-foreground">
                  {t.forPublishers.totalEarned}
                </span>
                <span className="font-semibold text-emerald-400">
                  {t.forPublishers.totalAmount}
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-muted-foreground">
                  {t.forPublishers.minWithdrawal}
                </span>
                <span className="font-semibold text-white">{t.forPublishers.minAmount}</span>
              </div>
            </div>

            <Button className="btn-primary mt-6 h-auto w-full rounded-[12px] py-3.5 text-[15px] font-bold">
              {t.forPublishers.withdraw}
            </Button>
          </div>

          <div>
            <SectionBadge>{t.forPublishers.badge}</SectionBadge>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-gradient-brand">{t.forPublishers.titleLine1}</span>
              <br />
              <span className="text-gradient-brand">{t.forPublishers.titleLine2}</span>
              <span className="text-white">.</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              {t.forPublishers.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span
                    className={
                      "rounded-full px-4 py-2 text-sm font-semibold " +
                      (i === flow.length - 1
                        ? "bg-gradient-brand text-white"
                        : "border border-white/15 bg-white/5 text-white")
                    }
                  >
                    {step}
                  </span>
                  {i < flow.length - 1 && (
                    <ArrowRight className="size-4 text-violet-400" />
                  )}
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="btn-primary mt-10 h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
            >
              {t.forPublishers.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
