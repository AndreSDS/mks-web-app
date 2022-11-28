import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { Header } from "../../src/components/Header/Header";
import { RenderWithRedux } from "../RenderWithRedux";

describe("Header", () => {
  beforeEach(() => {
    RenderWithRedux(<Header />);
  });

  afterAll(() => {
    cleanup();
  });

  it("should render the logo image", () => {
    expect(
      screen.getByRole("img", {
        name: /logo da loja/i,
      })
    ).toBeInTheDocument();
  });

  it("should render the cart button", () => {
    const cartButton = screen.getByRole("button");

    expect(cartButton).toBeInTheDocument();
  });
});
