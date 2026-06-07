// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vite-plus/test";
import Container from "./Container";

describe("Container Component", () => {
  it("renders children correctly", () => {
    render(<Container>Test Children</Container>);
    expect(screen.getByText("Test Children")).toBeDefined();
  });
});
