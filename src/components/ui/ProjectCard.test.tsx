// @vitest-environment jsdom
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vite-plus/test";
import ProjectCard from "./ProjectCard";
import { LanguageProvider } from "../layout/LanguageProvider";

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

afterEach(() => {
  cleanup();
});

describe("ProjectCard Component", () => {
  const defaultProps = {
    title: "Test Project",
    description: {
      en: "Test description",
      id: "Deskripsi tes",
    },
    tags: ["React", "TypeScript"],
  };

  it("renders the CTA when href is provided", () => {
    renderWithProvider(<ProjectCard {...defaultProps} href="https://example.com" />);
    expect(screen.getByText("View Case Study")).toBeDefined();
  });

  it("does not render the CTA when href is not provided", () => {
    renderWithProvider(<ProjectCard {...defaultProps} />);
    expect(screen.queryByText("View Case Study")).toBeNull();
  });
});
