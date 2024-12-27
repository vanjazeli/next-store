import ProductList from '@/components/shared/Product/ProductList';
import sampleData from '../../../db/sample-data';

export default async function Homepage() {
  return (
    <>
      <ProductList data={sampleData.products} limit={4} title="Newest Arrivals" />
    </>
  );
}
