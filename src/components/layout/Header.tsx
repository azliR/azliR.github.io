import { Link } from "@tanstack/react-router";
import Container from "./Container";
import { Menu } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { cn } from "#/lib/cn";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-card">
      <Container className="flex h-16 items-center justify-between py-4">
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity duration-200">
          <img src="/logo.svg" alt="azlir.dev" className="hidden sm:block h-6 w-auto" />
          <img src="/logo-icon.svg" alt="azlir.dev" className="block sm:hidden h-6 w-6" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#work" className="hover:text-foreground transition-colors duration-200">
            {t("work")}
          </a>
          <a href="#capabilities" className="hover:text-foreground transition-colors duration-200">
            {t("capabilities")}
          </a>
          <a href="#reviews" className="hover:text-foreground transition-colors duration-200">
            {t("reviews")}
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors duration-200">
            {t("faq")}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 border border-border px-1.5 py-0.5 text-xs font-mono bg-card">
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-1.5 py-0.5 transition-colors duration-200 font-bold",
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
                "px-1.5 py-0.5 transition-colors duration-200 font-bold",
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
            className="inline-flex md:hidden p-2 text-muted hover:text-foreground transition-colors duration-200"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>
  );
}
