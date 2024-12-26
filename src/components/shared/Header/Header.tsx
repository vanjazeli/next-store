import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link className="flex-start" href="/">
            <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} height={48} width={48} priority={true} />
            <span className="ml-3 hidden text-2xl font-bold lg:block">{APP_NAME}</span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant={'ghost'}>
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant={'ghost'}>
            <Link href="/sign-in">
              <UserIcon /> Sign in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
