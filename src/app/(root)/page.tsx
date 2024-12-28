import ProductList from '@/components/shared/Product/ProductList';
import { getLatestProducts } from '@/lib/actions/product.actions';

export default async function Homepage() {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} limit={4} title="Newest Arrivals" />
    </>
  );
}
