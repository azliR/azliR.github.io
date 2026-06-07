import * as React from "react";
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
    <section id="faq" className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <SectionHeading
          kicker="FAQ"
          title="Frequently asked questions"
          description="Clear answers about our engineering capabilities, process, and setups."
        />
      </div>

      <div className="border-t border-border w-full bg-card/10 py-12 px-6 md:px-8 lg:px-12 flex justify-center">
        <div className="w-full max-w-3xl divide-y divide-border border-y border-border">
          {faqItems.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-5">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex w-full items-center justify-between text-left font-semibold text-lg text-foreground hover:underline transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 p-1.5 rounded-none border border-border bg-card">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
