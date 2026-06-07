export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "projects",
    question: "What kind of projects do you take?",
    answer:
      "Mobile apps, backend systems, SaaS products, internal tools, real-time platforms, and AI integrations.",
  },
  {
    id: "startups",
    question: "Do you work with startups?",
    answer: "Yes — from MVP to production-scale systems.",
  },
  {
    id: "existing",
    question: "Can you work on existing products?",
    answer: "Yes. Including improvements, scaling, architecture, and new features.",
  },
  {
    id: "end-to-end",
    question: "Do you provide end-to-end development?",
    answer: "Yes — from frontend to backend systems.",
  },
  {
    id: "teams",
    question: "Can you join existing teams?",
    answer: "Yes, depending on scope and availability.",
  },
];
