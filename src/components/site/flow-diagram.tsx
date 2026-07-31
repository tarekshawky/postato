"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";

export function FlowDiagram() {
  const { t } = useLanguage();
  const steps = t.flowDiagram.steps;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-card/60 p-8">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span
                className={
                  "rounded-full px-5 py-2.5 text-sm font-semibold " +
                  (i === steps.length - 1
                    ? "bg-gradient-brand text-white"
                    : "border border-white/15 bg-white/5 text-white")
                }
              >
                {label}
              </span>
              {i < steps.length - 1 && (
                <ArrowRight className="size-4 text-violet-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
