import { renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShopCart } from "../../src/components/ShopCart/ShopCart";
import { useShopCart } from "../../src/hooks/shopCart/useShopCart";
import { RenderWithRedux } from "../RenderWithRedux";

const mockOpenShopCart = jest.fn();

jest.mock("../../src/hooks/shopCart/useShopCart.ts", () => ({
  useShopCart: () => ({
    shopCartProducts: {
      isCartOpen: true,
    },
    openShopCart: mockOpenShopCart,
  }),
}));

describe("ShopCart", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render cart open", () => {
    RenderWithRedux(<ShopCart />);

    expect(screen.getByTestId("shop-cart")).toBeInTheDocument();
    expect(screen.getByTestId("shop-cart")).toHaveStyle("display: flex");
  });

  it("should be able to close cart", async () => {
    RenderWithRedux(<ShopCart />);

    const { result } = renderHook(() => useShopCart());

    const buttonCloseCart = screen.getByTestId("close-shopCart");

    await userEvent.click(buttonCloseCart);

    expect(result.current.openShopCart).toHaveBeenCalled();
  });
});
