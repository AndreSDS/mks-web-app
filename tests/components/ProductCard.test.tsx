import { renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IProduct } from "../../src/interfaces/IProduct";
import { ProductCard } from "../../src/components/ProductCard/ProductCard";
import { RenderWithRedux } from "../RenderWithRedux";
import { useShopCart } from "../../src/hooks/shopCart/useShopCart";

jest.mock("../../src/hooks/shopCart/useShopCart", () => ({
  useShopCart: () => ({
    shopCartProducts: {
      isCartOpen: true,
      products: [],
    },
    addProductToCart: mockAddProductToCart,
    deleteProductFromCart: mockDeleteProductFromCart,
    removeProductFromCart: mockRemoveProductFromCart,
  }),
}));

const mockAddProductToCart = jest.fn();
const mockDeleteProductFromCart = jest.fn();
const mockRemoveProductFromCart = jest.fn();

const product: IProduct = {
  id: 1,
  name: "Product 1",
  description: "Description 1",
  price: "10",
  photo: "https://picsum.photos/200",
  quantity: 1,
  brand: "Brand 1",
  createdAt: "2021-08-01T00:00:00.000Z",
  updatedAt: "2021-08-01T00:00:00.000Z",
};

describe("ProductCard", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the product card", () => {
    RenderWithRedux(<ProductCard product={product} />);

    const deleteButton = screen.getByText(/x/i);
    const productName = screen.getByText(/Product 1/i);
    const productDescription = screen.getByText(/Description 1/i);
    const productPrice = screen.getByText(/R\$10/i);
    const productImage = screen.getByRole("img", {
      name: /imagem do produto Product 1/i,
    });

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it("should add product to cart", async () => {
    RenderWithRedux(<ProductCard product={product} shopCart />);

    const addButton = screen.getByText(/Comprar/i);

    const { result } = renderHook(() => useShopCart());

    await userEvent.click(addButton);

    expect(result.current.addProductToCart).toHaveBeenCalledTimes(1);
    expect(result.current.addProductToCart).toHaveBeenCalledWith(product);
  });

  it("should delete product by id from cart", async () => {
    RenderWithRedux(<ProductCard product={product} shopCart />);

    const deleteButton = screen.getByText(/x/i);

    mockDeleteProductFromCart.mockImplementation((productId) => {
      return productId;
    });

    const { result } = renderHook(() => useShopCart());

    await userEvent.click(deleteButton);

    expect(result.current.deleteProductFromCart).toHaveBeenCalledTimes(1);
    expect(result.current.deleteProductFromCart).toHaveBeenCalledWith(product.id);
  });

  it("should descrease product quantity by id", async () => {
    RenderWithRedux(<ProductCard product={product} shopCart />);

    const decreaseButton = screen.getByText(/-/i);

    mockRemoveProductFromCart.mockImplementation((productId) => {
      return productId;
    });

    await userEvent.click(decreaseButton);

    const { result } = renderHook(() => useShopCart());

    expect(result.current.removeProductFromCart).toHaveBeenCalledTimes(1);
    expect(result.current.removeProductFromCart).toHaveBeenCalledWith(
      product.id
    );
  });

  it("should increase product quantity", async () => {
    RenderWithRedux(<ProductCard product={product} shopCart />);

    const increaseButton = screen.getByText(/\+/i);

    mockAddProductToCart.mockImplementation((product) => {
      return product;
    });

    await userEvent.click(increaseButton);

    const { result } = renderHook(() => useShopCart());

    expect(result.current.addProductToCart).toHaveBeenCalledTimes(1);
    expect(result.current.addProductToCart).toHaveBeenCalledWith(product);
  });
});
