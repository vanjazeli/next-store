import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from './ProductPrice';
import { Product } from '@/types';
import { productUrl } from '@/lib/urls';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="items-center p-0">
        <Link href={`${productUrl}/${product.slug}`}>
          <Image src={product.images[0]} alt={product.name} height={300} width={300} priority />
        </Link>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`${productUrl}/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} starts</p>
          {product.stock > 0 ? <ProductPrice value={Number(product.price)} /> : <p className="text-destructive">Out of stock</p>}
        </div>
      </CardContent>
    </Card>
  );
}
