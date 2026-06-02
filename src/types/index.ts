export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  slug: string;
  description?: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  badge?: string;
}

export interface BestSeller extends Product {
  tagline: string;
}

export interface Partner {
  name: string;
  logo: string;
}
