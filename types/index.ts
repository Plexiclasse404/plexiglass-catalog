export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  products: Product[];
}

export interface CatalogData {
  categories: Category[];
}
