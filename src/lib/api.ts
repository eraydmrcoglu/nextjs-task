import { products } from '@/constants/products';

export async function fetchProducts() {
  return products;
}

export async function fetchProductById(id: number) {
  return products.find(p => p.id === id);
}
