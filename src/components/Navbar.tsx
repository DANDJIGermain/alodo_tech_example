"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: { fr: "Accueil", en: "Home" }, key: "home" },
  { href: "/about", label: { fr: "À propos", en: "About" }, key: "about" },
  {
    label: { fr: "Nos produits", en: "Our products" },
    key: "products",
    subLinks: [
      { href: "/products/alodo", label: { fr: "ALODO", en: "ALODO" } },
      { href: "/products/coinai", label: { fr: "COINAI", en: "COINAI" } },
    ]
  },
  { href: "/solutions", label: { fr: "Solutions", en: "Solutions" }, key: "solutions" },
  { href: "/technology", label: { fr: "Technologie", en: "Technology" }, key: "technology" },
  { href: "/impact", label: { fr: "Impact", en: "Impact" }, key: "impact" },
  { href: "/blog", label: { fr: "Blog", en: "Blog" }, key: "blog" },
  { href: "/careers", label: { fr: "Carrières", en: "Careers" }, key: "careers" },
  { href: "/partners", label: { fr: "Investir", en: "Invest" }, key: "partners" },
];

export default function Navbar({ activeKey }: { activeKey: string }) {
  const [lang, setLang] = useState("fr");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedLang = localStorage.getItem("alodo-lang") || "fr";
    setLang(savedLang);
  }, []);

  const toggleLang = (newLang: string) => {
    localStorage.setItem("alodo-lang", newLang);
    setLang(newLang);
    window.location.reload(); // Refresh to apply changes if using server components or local translations
  };

  return (
    <nav className={`nav ${isMobileOpen ? "nav-mobile-open" : ""}`} id="siteNav">
      <div className="nav-inner">
        <Link className="brand" href="/">
          <span className="mark">AT</span>
          <span>ALODO TECH</span>
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((l) => {
            if ("subLinks" in l) {
              return (
                <div key={l.key} className="nav-item-dropdown">
                  <span className={`nav-link-dropdown ${l.key === activeKey ? "active" : ""}`}>
                    {l.label[lang as keyof typeof l.label]}
                    <svg className="chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 4l3 3 3-3" />
                    </svg>
                  </span>
                  <div className="nav-dropdown">
                    {l.subLinks?.map((sub) => (
                      <Link key={sub.href} href={sub.href}>
                        {sub.label[lang as keyof typeof sub.label]}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={l.href}
                href={l.href as string}
                className={l.key === activeKey ? "active" : ""}
              >
                {l.label[lang as keyof typeof l.label]}
              </Link>
            );
          })}
        </div>
        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            <button
              data-lang="fr"
              className={lang === "fr" ? "on" : ""}
              onClick={() => toggleLang("fr")}
            >
              FR
            </button>
            <button
              data-lang="en"
              className={lang === "en" ? "on" : ""}
              onClick={() => toggleLang("en")}
            >
              EN
            </button>
          </div>
          <Link href="/contact" className="btn primary sm">
            {lang === "fr" ? "Nous contacter" : "Contact"}
          </Link>
          <button
            className="nav-burger"
            aria-label="Menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M3 6h16M3 11h16M3 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
