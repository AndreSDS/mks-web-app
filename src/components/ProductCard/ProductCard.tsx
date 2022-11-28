import {
  CardContainer,
  ClearProductButton,
  CardContent,
  CardImageContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardButtonAdd,
  CardHeader,
  CardButtonPrice,
  CardButtonsContainer,
  CardButtonQuantity,
} from "./styles";

import bagIcon from "../../assets/images/shopping-bag.png";
import { IProduct } from "../../interfaces/IProduct";
import { useShopCart } from "../../hooks/shopCart/useShopCart";

interface ProductCardProps {
  product: IProduct;
  shopCart?: boolean;
}

export const ProductCard = ({
  product,
  shopCart = false,
}: ProductCardProps) => {
  const { id, name, description, price, photo } = product;
  const { addProductToCart, removeProductFromCart, deleteProductFromCart } =
    useShopCart();

  const priceFormatted = Math.round(Number(price));

  return (
    <>
      <ClearProductButton
        onClick={() => deleteProductFromCart(id)}
        shopCart={shopCart}
      >
        <span>x</span>
      </ClearProductButton>

      <CardContainer data-testid="productCard" shopCart={shopCart}>
        <CardContent shopCart={shopCart}>
          <CardImageContainer shopCart={shopCart}>
            <CardImage
              alt={`imagem do produto ${name}`}
              shopCart={shopCart}
              src={photo}
            />
          </CardImageContainer>

          <CardHeader shopCart={shopCart}>
            <CardTitle shopCart={shopCart}>{name}</CardTitle>

            <CardButtonsContainer shopCart={shopCart}>
              <CardButtonQuantity shopCart={shopCart}>
                <span onClick={() => removeProductFromCart(id)}>-</span>
                <span>{product.quantity}</span>
                <span onClick={() => addProductToCart(product)}>+</span>
              </CardButtonQuantity>

              <CardButtonPrice shopCart={shopCart}>
                <CardPrice>
                  <span>R${priceFormatted}</span>
                </CardPrice>
              </CardButtonPrice>
            </CardButtonsContainer>
          </CardHeader>

          <CardDescription shopCart={shopCart}>{description}</CardDescription>
        </CardContent>

        <CardButtonAdd
          shopCart={shopCart}
          onClick={() => addProductToCart(product)}
        >
          <img src={bagIcon} alt="botão apra comprar produto" />
          <p>Comprar</p>
        </CardButtonAdd>
      </CardContainer>
    </>
  );
};
