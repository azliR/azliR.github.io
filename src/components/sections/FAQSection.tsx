import * as React from "react";
import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { faqItems } from "../../data/faq";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 lg:py-28 border-t border-border">
      <Container>
        <AnimatedSection>
          <SectionHeading
            kicker="FAQ"
            title="Frequently asked questions"
            description="Clear answers about our engineering capabilities, process, and setups."
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto divide-y divide-border/60">
          {faqItems.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <AnimatedSection key={faq.id} delay={0.1 + index * 0.05}>
                <div className="py-5">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="flex w-full items-center justify-between text-left font-semibold text-lg text-foreground hover:text-accent transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0 p-1 rounded-md border border-border/80 bg-card/40">
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-muted" />
                      ) : (
                        <Plus className="h-4 w-4 text-muted" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
