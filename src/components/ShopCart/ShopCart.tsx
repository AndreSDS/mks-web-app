import { useShopCart } from "../../hooks/shopCart/useShopCart";
import { useShopCartSelector } from "../../hooks/shopCart/useShopCartSelector";
import { ProductCard } from "../ProductCard/ProductCard";
import {
  Container,
  ButtonCloseCart,
  ShopCartHeader,
  Content,
  ShopCartFooter,
  TotalPrice,
  ButtonCheckout,
} from "./styles";

export const ShopCart = () => {
  const { products, totalPrice } = useShopCartSelector(
    (state) => state.shopCart
  );

  const {
    shopCartProducts: { isCartOpen },
    openShopCart,
  } = useShopCart();

  return (
    <Container data-testid="shop-cart" isCartOpen={isCartOpen}>
      <ShopCartHeader>
        <h1>Carrinho de compras</h1>

        <ButtonCloseCart data-testid="close-shopCart" isCartOpen={isCartOpen} onClick={openShopCart}>
          <span>x</span>
        </ButtonCloseCart>
      </ShopCartHeader>

      <Content>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} shopCart />
        ))}
      </Content>

      <ShopCartFooter>
        <TotalPrice>
          <h1>Total:</h1>
          <span>R${totalPrice}</span>
        </TotalPrice>

        <ButtonCheckout onClick={openShopCart}>
          <p>Finalizar compra</p>
        </ButtonCheckout>
      </ShopCartFooter>
    </Container>
  );
};
