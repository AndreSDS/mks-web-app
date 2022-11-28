import { CartButtonContainer, CartButtonIcon, CartButtonText } from "./styles";
import cartIcon from "../../assets/images/cart-icon.png";
import { useShopCart } from "../../hooks/shopCart/useShopCart";

export const CartButton = () => {
  const { shopCartProducts, openShopCart } = useShopCart();

  const totalProductsInCart = shopCartProducts.products.length || 0;
  const disabled = totalProductsInCart > 0;

  return (
    <CartButtonContainer data-testid="cart-button" disabled={!disabled} onClick={openShopCart}>
      <CartButtonIcon src={cartIcon} alt="Ícone do carrinho de compras" />
      <CartButtonText data-testid="productsinCart">{totalProductsInCart}</CartButtonText>
    </CartButtonContainer>
  );
};
