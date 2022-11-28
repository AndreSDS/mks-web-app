import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useShopCartSelector } from "../../hooks/shopCart/useShopCartSelector";
import { setProducts } from "../../context/products-slice";
import { useProductSelector } from "../../hooks/products/useProductSelector";
import { useProducts } from "../../hooks/products/useProducts";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ProductList } from "../../components/ProductList/ProductList";
import { ShopCart } from "../../components/ShopCart/ShopCart";
import { Container, Content } from "./styles";

export const Home = () => {
  const { isCartOpen } = useShopCartSelector((state) => state.shopCart);
  const { products } = useProductSelector((state) => state.products);
  const { getProductsData } = useProducts();
  const disppatch = useDispatch();

  const loadingProducts = async () => {
    if(products.length === 0) {
      const productsData = await getProductsData();
      disppatch(setProducts(productsData));
    }
  };

  useEffect(() => {
    loadingProducts();
  }, []);

  return (
    <Container shopCartOpen={isCartOpen}>
      <Header />
      <ShopCart />

      <Content>
        <ProductList />
      </Content>

      <Footer />
    </Container>
  );
};
