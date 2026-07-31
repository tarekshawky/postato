"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/site/section-badge";
import { CampaignPinIcon } from "@/components/site/campaign-pin-icon";
import { useLanguage } from "@/lib/language";

export function Hero() {
  const { t } = useLanguage();
  const platforms = [
    { glyph: "f", label: t.hero.platforms.facebook },
    { glyph: "◎", label: t.hero.platforms.instagram },
    { glyph: "♪", label: t.hero.platforms.tiktok },
    { glyph: "𝕏", label: t.hero.platforms.twitter },
    { glyph: "in", label: t.hero.platforms.linkedin },
    { glyph: "✆", label: t.hero.platforms.whatsapp },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute"
        style={{
          width: 600,
          height: 600,
          background: "rgba(124,58,237,0.15)",
          borderRadius: "50%",
          filter: "blur(120px)",
          top: -100,
          left: "50%",
          transform: "translateX(-40%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28 lg:px-8">
        <div>
          <SectionBadge className="gap-2">
            <span
              className="size-1.5 rounded-full"
              style={{ background: "rgb(99,102,241)" }}
            />
            {t.hero.badge}
          </SectionBadge>

          <h1
            className="mt-6"
            style={{ fontSize: 64, lineHeight: "67.2px", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 20 }}
          >
            <span className="text-gradient-brand">{t.hero.titleLine1}</span>
            <br />
            <span className="text-gradient-brand">{t.hero.titleLine2}</span>
            <span className="text-white">.</span>
          </h1>

          <p style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.7)" }}>
            {t.hero.subtitle}
          </p>

          <p className="mt-4" style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 480 }}>
            {t.hero.description}
          </p>

          <ol className="mt-8 space-y-3">
            {t.hero.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span
                  className="flex shrink-0 items-center justify-center rounded-full font-bold text-white"
                  style={{
                    width: 20,
                    height: 20,
                    fontSize: 10,
                    background: "linear-gradient(135deg, rgb(124,58,237), rgb(147,51,234))",
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-white">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="btn-primary h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
            >
              {t.hero.startCampaign}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline h-auto rounded-[12px] px-7 py-3.5 text-[15px] font-bold"
            >
              {t.hero.joinPublisher}
            </Button>
          </div>
        </div>

        <div>
          <div
            style={{
              borderRadius: 24,
              padding: 32,
              maxWidth: 400,
              margin: "0 auto",
              position: "relative",
              background: "rgba(19,19,58,0.8)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <span
              className="absolute z-10 inline-flex items-center gap-1.5"
              style={{
                top: -10,
                right: "-7rem",
                background: "linear-gradient(135deg, rgb(5,150,105), rgb(16,185,129))",
                borderRadius: 12,
                padding: "8px 14px",
                fontSize: 12,
                fontWeight: 700,
                color: "white",
                boxShadow: "rgba(16,185,129,0.3) 0px 4px 20px",
              }}
            >
              <Check className="size-3.5" /> {t.hero.freePosts}
            </span>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(147,51,234,0.15))",
                  border: "1px solid rgba(124,58,237,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CampaignPinIcon />
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
                {t.hero.campaignDistribution}
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "white" }}>12,847</div>
              <div style={{ fontSize: 13, color: "rgb(167,139,250)" }}>
                {t.hero.postsDelivered}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {platforms.map(({ glyph, label }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: "10px 8px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 4, color: "white" }}>{glyph}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginTop: 16,
              }}
            >
              {[
                { value: "340+", label: t.hero.businesses },
                { value: "2,100+", label: t.hero.publishers },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(147,51,234,0.1))",
                    border: "1px solid rgba(124,58,237,0.3)",
                    borderRadius: 12,
                    padding: 12,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>{value}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{label}</div>
                </div>
              ))}
            </div>

            <span
              className="absolute"
              style={{
                bottom: "1.5rem",
                left: "-7rem",
                background: "rgba(19,19,58,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                borderRadius: 12,
                padding: "10px 14px",
                fontSize: 12,
                fontWeight: 600,
                color: "rgb(196,181,253)",
              }}
            >
              {t.hero.pricePerPost}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
