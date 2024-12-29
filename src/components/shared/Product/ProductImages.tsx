'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { toOrdinal } from '@/lib/utils';

type ProductImagesProps = {
  images: Array<string>;
};

export default function ProductImages({ images }: ProductImagesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState('');

  const imagesLen = images.length;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(toOrdinal(api.selectedScrollSnap() + 1));

    api.on('select', () => {
      setCurrent(toOrdinal(api.selectedScrollSnap() + 1));
    });
  }, [api]);

  return (
    <div className="flex flex-col gap-4">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images &&
            images.map((imageSrc) => (
              <CarouselItem key={imageSrc}>
                <div className="aspect-square overflow-hidden rounded-xl border">
                  <Image className="h-full w-full select-none object-cover" src={imageSrc} height={500} width={500} priority alt={imageSrc} />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-4">
            <CarouselPrevious aria-label="Previous image" className="relative left-0 top-0 translate-x-0 translate-y-0" />
            <CarouselNext aria-label="Next image" className="relative left-0 top-0 translate-x-0 translate-y-0" />
          </div>
          <p>
            {current} out of {imagesLen} images
          </p>
        </div>
      </Carousel>
    </div>
  );
}
