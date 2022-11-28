import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { Home } from "../../src/pages/Home/Home";
import { RenderWithRedux } from "../RenderWithRedux";
let rerenderComponent: any;

describe("Home", () => {
  beforeEach(() => {
    const { rerender } = RenderWithRedux(<Home />);
    rerenderComponent = rerender;
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the header", () => {
    expect(
      screen.getByRole("img", {
        name: /logo da loja/i,
      })
    ).toBeInTheDocument();
  });

  it("should render the cart button", () => {
    const cartButton = screen.getByRole("button", {
      name: /Ícone do carrinho de compras/i,
    });

    expect(cartButton).toBeInTheDocument();
  });

  it("should render the footer", () => {
    const footer = screen.getByText(
      /MKS Sistemas © Todos os direitos reservados/i
    );

    expect(footer).toBeInTheDocument();
  });

  it("should render Home page without showing the cart", () => {
    const shopCart = screen.getByTestId("shop-cart");

    expect(shopCart).toHaveStyle("display: hidden");
  });
});
