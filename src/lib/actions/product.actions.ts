'use server';

import { convertPrismaObjectToJS } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { prisma } from '../../../db/prisma';

export async function getLatestProducts() {
  const data = await prisma.product.findMany({ take: LATEST_PRODUCTS_LIMIT, orderBy: { createdAt: 'desc' } });

  return convertPrismaObjectToJS(data);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({ where: { slug } });
}
