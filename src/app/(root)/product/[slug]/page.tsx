import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProductPrice from '@/components/shared/Product/ProductPrice';
import { Card, CardContent } from '@/components/ui/card';
import ProductImages from '@/components/shared/Product/ProductImages';

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const price = Number(product.price);

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-6">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p>
              {product.rating} of {product.numReviews} Reviews
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductPrice className="w-24 rounded-full bg-green-100 px-5 py-2 text-green-800" value={price} />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Description</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="cols-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice value={price} />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {product.stock > 0 ? <Badge variant="outline">In stock</Badge> : <Badge variant="destructive">Out of Stock</Badge>}
              </div>
              {product.stock && <Button className="mt-2 w-full">Add to Cart</Button>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
