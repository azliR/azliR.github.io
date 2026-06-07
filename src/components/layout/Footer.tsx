import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card py-12 md:py-16 text-muted">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="font-sans text-lg font-extrabold tracking-tight text-foreground">
            azlir.dev
          </div>
          <p className="text-sm leading-relaxed max-w-xs">Engineering scalable products.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href="https://github.com/azlir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200 font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200 font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@azlir.dev"
            className="hover:text-foreground transition-colors duration-200 font-medium"
          >
            Email
          </a>
          <a
            href="https://fiverr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200 font-medium"
          >
            Fiverr
          </a>
          <span className="text-xs text-muted/50 font-mono pl-4 border-l border-border">
            &copy; {year} azlir.dev
          </span>
        </div>
      </Container>
    </footer>
  );
}
