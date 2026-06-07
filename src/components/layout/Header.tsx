import * as React from "react";
import { Link } from "@tanstack/react-router";
import Container from "./Container";
import { Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-[4px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-sans text-lg font-extrabold tracking-tight text-foreground"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          azlir.dev
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#work" className="hover:text-foreground transition-colors duration-200">
            Work
          </a>
          <a href="#capabilities" className="hover:text-foreground transition-colors duration-200">
            Capabilities
          </a>
          <a href="#reviews" className="hover:text-foreground transition-colors duration-200">
            Reviews
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors duration-200">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@azlir.dev"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors duration-200"
          >
            Start a Project
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
