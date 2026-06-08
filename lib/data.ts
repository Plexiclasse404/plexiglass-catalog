import { CatalogData } from "@/types";
import productsData from "@/data/products.json";

export function getCatalogData(): CatalogData {
  return productsData as CatalogData;
}

export function getCategoryById(id: string) {
  const data = getCatalogData();
  return data.categories.find((cat) => cat.id === id);
}

export function getProductById(id: string) {
  const data = getCatalogData();
  for (const category of data.categories) {
    const product = category.products.find((p) => p.id === id);
    if (product) return { product, category };
  }
  return null;
}

export function searchProducts(query: string) {
  const data = getCatalogData();
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];

  const results: Array<{ product: any; category: any }> = [];

  for (const category of data.categories) {
    for (const product of category.products) {
      if (
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        category.name.toLowerCase().includes(lowerQuery)
      ) {
        results.push({ product, category });
      }
    }
  }

  return results;
}
