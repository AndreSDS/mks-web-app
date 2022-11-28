import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartButton } from "../../src/components/CartButton/CartButton";
import { ProductCard } from "../../src/components/ProductCard/ProductCard";
import { IProduct } from "../../src/interfaces/IProduct";
import { RenderWithRedux } from "../RenderWithRedux";

const mockProduct: IProduct = {
  id: 1,
  name: "Test Product",
  brand: "Test Brand",
  price: "10",
  photo: "test-image.png",
  description: "Test description",
  quantity: 1,
  createdAt: "2021-01-01",
  updatedAt: "2021-01-01",
};

describe("CartButton", () => {
  it("should render the cart button", () => {
    RenderWithRedux(<CartButton />);

    const cartButton = screen.getByTestId("cart-button");

    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toBeDisabled();
  });

  it("should render the cart button with 0 products", () => {
    RenderWithRedux(<CartButton />);

    const cartButtonQuantity = screen.getByText(/0/i);

    expect(cartButtonQuantity).toBeInTheDocument();
  });

  it("should render the cart button with 1 product", async () => {
    RenderWithRedux(
      <>
        <ProductCard product={mockProduct} />
        <CartButton />
      </>
    );

    const buttonAddToCart = screen.getByText(/comprar/i);
    expect(buttonAddToCart).toBeInTheDocument();

    await userEvent.click(buttonAddToCart);

    const cartButtonQuantity = screen.getByTestId(/productsinCart/i);
    expect(cartButtonQuantity).toBeInTheDocument();
    expect(cartButtonQuantity).toHaveTextContent("1");
  });

  it("should be able to open the shop cart", async () => {
    const mockOpenShopCart = jest.fn();

    jest.mock("../../src/hooks/shopCart/useShopCart", () => ({
        useShopCart: () => ({
        shopCartProducts: {
          products: [{}],
        },
        openShopCart: mockOpenShopCart,
      }),
    }));

    RenderWithRedux(
      <>
        <CartButton />
      </>
    );

    const cartButton = screen.getByTestId("cart-button");
    expect(cartButton).toBeEnabled();
  });
});
