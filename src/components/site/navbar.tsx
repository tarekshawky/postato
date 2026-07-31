"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { useLanguage } from "@/lib/language";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, toggle } = useLanguage();

  const navLinks = [
    { label: t.nav.forBusinesses, href: "#for-businesses" },
    { label: t.nav.howItWorks, href: "#for-businesses" },
    { label: t.nav.forPublishers, href: "#for-publishers" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.articles, href: "#" },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(8,8,26,0.85)",
        borderBottom: "1px solid rgba(124,58,237,0.2)",
      }}
    >
      <div className="mx-auto flex h-[65px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="POSTATO home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
              style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            size="sm"
            className="h-auto hover:text-white"
            onClick={toggle}
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              border: "1px solid rgba(124,58,237,0.4)",
              background: "rgba(124,58,237,0.15)",
              color: "rgb(167,139,250)",
            }}
          >
            {t.nav.langToggle}
          </Button>
          <Link
            href="#login"
            className="text-sm text-muted-foreground transition-colors hover:text-white"
          >
            {t.nav.login}
          </Link>
          <Button
            size="sm"
            className="btn-primary h-auto rounded-[10px] px-5 py-2 text-sm font-semibold"
          >
            {t.nav.getStarted}
          </Button>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#login"
              className="text-sm text-muted-foreground hover:text-white"
            >
              {t.nav.login}
            </Link>
            <Button
              onClick={toggle}
              className="h-auto w-full rounded-[8px] text-sm"
              variant="outline"
              style={{
                padding: "6px 14px",
                border: "1px solid rgba(124,58,237,0.4)",
                background: "rgba(124,58,237,0.15)",
                color: "rgb(167,139,250)",
              }}
            >
              {t.nav.langToggle}
            </Button>
            <Button className="btn-primary h-auto w-full rounded-[10px] px-5 py-2 text-sm font-semibold">
              {t.nav.getStarted}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
