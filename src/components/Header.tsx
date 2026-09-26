"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const content = document.getElementById("content");
    const footer = document.getElementById("site-footer");
    if (content) content.inert = open;
    if (footer) footer.inert = open;
    return () => {
      document.body.style.overflow = "";
      if (content) content.inert = false;
      if (footer) footer.inert = false;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-bg" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell relative z-50 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-[-0.03em]"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav-link md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 z-40 bg-bg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav
            className="shell flex h-full flex-col justify-center gap-5 pb-20"
            aria-label="Mobile"
          >
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                className="font-serif text-[clamp(2.75rem,12vw,4.25rem)] leading-none tracking-[-0.03em]"
                onClick={() => setOpen(false)}
                {...("external" in item && item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
