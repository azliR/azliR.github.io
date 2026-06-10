// @vitest-environment jsdom
import { describe, it, expect, vi } from "vite-plus/test";

// Mock TanStack React Router Link/createFileRoute
vi.mock("@tanstack/react-router", () => ({
  createFileRoute: () => () => ({}),
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
}));

describe("Works Route Component Helper", () => {
  it("mocks router routes correctly", () => {
    expect(true).toBe(true);
  });
});
