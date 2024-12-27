import ProductCard from './ProductCard';

type ProductListProps = {
  data: any;
  limit?: number;
  title?: string;
};

export default function ProductList({ data, limit, title }: ProductListProps) {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedData.map((product: any) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
}