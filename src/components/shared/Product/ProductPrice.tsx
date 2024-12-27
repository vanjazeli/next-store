import { cn } from '@/lib/utils';

type ProductPriceProps = {
  value: number;
  className?: string;
};

export default function ProductPrice({ value, className }: ProductPriceProps) {
  const strValue = value.toFixed(2);
  const [dollars, cents] = strValue.split('.');

  return (
    <p className={cn('flex items-start text-2xl', className)}>
      <span className="pt-1 text-xs">$</span>
      <span>{dollars}</span>
      <span className="pt-1 text-xs">.{cents}</span>
    </p>
  );
}
