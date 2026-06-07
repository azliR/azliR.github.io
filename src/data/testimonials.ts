export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Professional, reliable, and consistently delivered production-ready work.",
    author: "Founder",
  },
  {
    id: "t2",
    quote: "Fast execution with strong technical understanding.",
    author: "Startup Client",
  },
  {
    id: "t3",
    quote: "Clear communication and excellent delivery quality.",
    author: "Product Team",
  },
];
