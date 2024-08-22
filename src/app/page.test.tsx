import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { connectToDb } from "@/lib/db";

jest.mock("../lib/db.ts", () => ({
  connectToDb: jest.fn().mockResolvedValue({ isConnected: true }),
}));

describe("Home Server Component", () => {
  it("renders 'Testing Next' when connected", async () => {
    render(await Home());

    const heading = screen.getByRole("heading", {
      name: /testing next/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders 'Waiting for connection' when not connected", async () => {
    jest.mocked(connectToDb).mockResolvedValueOnce({ isConnected: false });

    render(await Home());

    const waitingText = screen.getByRole("heading", {
      name: /waiting for connection/i,
    });

    expect(waitingText).toBeInTheDocument();
  });
});
