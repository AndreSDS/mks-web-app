import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import { store } from "../../src/context/store";
import { RenderWithRedux } from "../RenderWithRedux";
import { Home } from "../../src/pages/Home/Home";
import { ProductList } from "../../src/components/ProductList/ProductList";

describe("ProductList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the shimmer component", () => {
    jest.mock("../../src/hooks/products/useProductSelector", () => ({
      useProductSelector: () => ({
        products: [],
      }),
    }));

    RenderWithRedux(<ProductList />);

    const shimmerComponent = screen.getByTestId("shimmer");

    expect(shimmerComponent).toBeInTheDocument();
  });

  it("should render the product list when products is not empty", async () => {
    const { rerender } = RenderWithRedux(
      <>
        <Home />
        <ProductList />
      </>
    );

    rerender(
      <>
        <Provider store={store}>
          <ProductList />
        </Provider>
      </>
    );

    const productList = await screen.findByTestId("product-list");

    expect(productList).toBeInTheDocument();
  });
});
