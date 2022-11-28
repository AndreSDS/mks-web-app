import { useProductSelector } from "../../hooks/products/useProductSelector";
import { ProductCard } from "../ProductCard/ProductCard";
import { ShimmerComponent } from "../ShimmerComponent/ShimmerComponent";
import { Container } from "./styles";

export const ProductList = () => {
  const { products } = useProductSelector((state) => state.products);

  return (
    <>
      {products.length === 0 ? (
        <ShimmerComponent />
      ) : (
        <Container data-testid="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      )}
    </>
  );
};
