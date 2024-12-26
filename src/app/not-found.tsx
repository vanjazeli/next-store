import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import { LinkButton } from '@/components/ui/button-link';

export default function NotFound() {
  return (
    <div className="min-h-center flex min-h-screen flex-col items-center justify-center">
      <Image src="/images/logo.svg" width={48} height={48} alt={`${APP_NAME} logo`} priority />
      <div className="rounded-lg p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold">404 Page not found</h1>
        <p className="mb-4 text-destructive">Could not find the requested page</p>
        <LinkButton href="/">Homepage</LinkButton>
      </div>
    </div>
  );
}