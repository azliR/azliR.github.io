import { Link } from "@tanstack/react-router";
import Container from "./Container";
import { Menu, X, Globe, Monitor, Smartphone, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { cn } from "#/lib/cn";
import { useState } from "react";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductExpanded, setMobileProductExpanded] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-card/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img src="/logo.svg" alt="azlir.dev" className="hidden sm:block h-6 w-auto" />
          <img src="/logo-icon.svg" alt="azlir.dev" className="block sm:hidden h-6 w-6" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted relative">
          <div
            className="relative py-4"
            onMouseEnter={() => setIsProductHovered(true)}
            onMouseLeave={() => setIsProductHovered(false)}
          >
            <button className="flex items-center gap-1 hover:text-foreground transition-colors duration-200 cursor-pointer font-medium text-sm text-muted">
              {t("products")}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  isProductHovered && "rotate-180",
                )}
              />
            </button>

            {isProductHovered && (
              <div className="absolute top-full left-0 mt-1 w-[380px] border border-border bg-card/95 backdrop-blur-md p-6 shadow-2xl z-50 flex flex-col gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted/80">
                    {t("featuredProduct")}
                  </span>
                  <div className="flex items-center gap-2 mt-1.5 mb-2">
                    <h4 className="font-extrabold text-foreground text-lg">inClass</h4>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-bold bg-green-500/10 text-green-500 border border-green-500/20">
                      <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></span>
                      {t("liveBadge")}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{t("inClassDetailedDesc")}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-border pt-4 text-[10px] font-bold uppercase tracking-wider text-center">
                  <a
                    href="https://inclass.azlir.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 p-2 border border-border hover:bg-accent transition-colors duration-200"
                  >
                    <Globe className="h-4 w-4 text-muted" />
                    {t("visitWebsite")}
                  </a>
                  <a
                    href="https://app.inclass.azlir.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 p-2 border border-border hover:bg-accent transition-colors duration-200"
                  >
                    <Monitor className="h-4 w-4 text-muted" />
                    {t("openWebApp")}
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=dev.azlir.inclass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 p-2 border border-border hover:bg-accent transition-colors duration-200"
                  >
                    <Smartphone className="h-4 w-4 text-muted" />
                    {t("getPlayStore")}
                  </a>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/works"
            className="hover:text-foreground transition-colors duration-200 [&.active]:text-foreground [&.active]:font-bold"
          >
            {t("works")}
          </Link>

          <Link
            to="/about"
            className="hover:text-foreground transition-colors duration-200 [&.active]:text-foreground [&.active]:font-bold"
          >
            {t("about")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 border border-border px-1.5 py-0.5 text-xs font-mono bg-card">
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-1.5 py-0.5 transition-colors duration-200 font-bold cursor-pointer",
                lang === "en"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground",
              )}
            >
              EN
            </button>
            <span className="text-muted/30">|</span>
            <button
              onClick={() => setLang("id")}
              className={cn(
                "px-1.5 py-0.5 transition-colors duration-200 font-bold cursor-pointer",
                lang === "id"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground",
              )}
            >
              ID
            </button>
          </div>

          <a
            href="mailto:hello@azlir.dev"
            className="hidden sm:inline-flex items-center gap-2 rounded-none border border-border bg-transparent px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent transition-colors duration-200"
          >
            {t("startProject")}
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden p-2 text-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card/98 backdrop-blur-md absolute top-full left-0 w-full z-40 py-6 px-4 shadow-xl flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div>
              <button
                onClick={() => setMobileProductExpanded(!mobileProductExpanded)}
                className="flex items-center justify-between w-full text-base font-semibold text-muted hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                <span>{t("products")}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileProductExpanded && "rotate-180",
                  )}
                />
              </button>

              {mobileProductExpanded && (
                <div className="mt-2 pl-4 py-3 border-l border-border flex flex-col gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-bold text-foreground text-sm">inClass</span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[8px] font-bold bg-green-500/10 text-green-500 border border-green-500/20">
                        {t("liveBadge")}
                      </span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{t("inClassDesc")}</p>
                  </div>
                  <div className="flex gap-4 text-xs font-bold uppercase tracking-wider pt-2">
                    <a
                      href="https://inclass.azlir.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Website
                    </a>
                    <a
                      href="https://app.inclass.azlir.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Web App
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=dev.azlir.inclass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Play Store
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/works"
              className="text-base font-semibold text-muted hover:text-foreground transition-colors py-2 [&.active]:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("works")}
            </Link>

            <Link
              to="/about"
              className="text-base font-semibold text-muted hover:text-foreground transition-colors py-2 [&.active]:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
          </div>

          <div className="border-t border-border pt-6 flex flex-col gap-4">
            <a
              href="mailto:hello@azlir.dev"
              className="inline-flex items-center justify-center gap-2 rounded-none border border-border bg-transparent px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition-colors duration-200 w-full animate-in fade-in"
            >
              {t("startProject")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
