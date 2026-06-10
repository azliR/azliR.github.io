import * as React from "react";
import { X, Copy, Check, Send, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { cn } from "#/lib/cn";
import { motion, AnimatePresence } from "motion/react";

interface ContactContextType {
  isOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const ContactContext = React.createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openContact = React.useCallback(() => setIsOpen(true), []);
  const closeContact = React.useCallback(() => setIsOpen(false), []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeContact]);

  return (
    <ContactContext.Provider value={{ isOpen, openContact, closeContact }}>
      {children}
      <AnimatePresence>{isOpen && <ContactModal onClose={closeContact} />}</AnimatePresence>
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = React.useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [copied, setCopied] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState<{ name?: string; email?: string; message?: string }>(
    {},
  );
  const [success, setSuccess] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rizalhadiyansah@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = t("errorNameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("errorEmailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errorInvalidEmail");
    }
    if (!formData.message.trim()) newErrors.message = t("errorMessageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoUrl = `mailto:rizalhadiyansah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      void navigator.clipboard.writeText(body);
    } catch {
      // Fallback
    }

    window.open(mailtoUrl, "_blank");
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/60 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative w-full max-w-xl bg-card border-2 border-border p-6 md:p-8 shadow-2xl z-10 flex flex-col gap-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-muted hover:text-foreground transition-colors cursor-pointer"
          aria-label={t("close")}
        >
          <X className="h-5 w-5" />
        </button>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("contactTitle")}
          </h2>
          <p className="text-sm text-muted mt-2 leading-relaxed">{t("contactDescription")}</p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted/80">
            01 / Direct Channels
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 border border-border bg-transparent hover:bg-accent text-foreground text-xs font-semibold py-3 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600" />
                  {t("copied")}
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-muted" />
                  {t("copyEmail")}
                </>
              )}
            </button>
            <a
              href="mailto:rizalhadiyansah@gmail.com"
              className="flex items-center justify-center gap-2 border border-border bg-transparent hover:bg-accent text-foreground text-xs font-semibold py-3 transition-colors cursor-pointer text-center"
            >
              <Mail className="h-4 w-4 text-muted" />
              {t("openEmailClient")}
            </a>
          </div>
        </div>

        <div className="border-t border-border/10 pt-4" />

        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted/80">
            02 / Quick Inquiry
          </span>

          {success ? (
            <div className="border border-green-500/20 bg-green-500/10 p-4 text-xs font-semibold text-green-700 text-center">
              {t("messageSentSuccess")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-mono font-bold uppercase text-muted"
                  >
                    {t("fieldName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn(
                      "border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-none w-full",
                      errors.name ? "border-red-500" : "border-border",
                    )}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-mono font-bold uppercase text-muted"
                  >
                    {t("fieldEmail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(
                      "border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-none w-full",
                      errors.email ? "border-red-500" : "border-border",
                    )}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[10px] font-mono font-bold uppercase text-muted"
                >
                  {t("fieldMessage")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("fieldMessagePlaceholder")}
                  className={cn(
                    "border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-none w-full resize-none",
                    errors.message ? "border-red-500" : "border-border",
                  )}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 border border-transparent bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold py-3 transition-colors cursor-pointer w-full mt-2"
              >
                <Send className="h-3.5 w-3.5" />
                {t("send")}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
