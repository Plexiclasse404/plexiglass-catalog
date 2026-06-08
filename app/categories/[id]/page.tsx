"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getCategoryById } from "@/lib/data";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { useState } from "react";
import { ArrowLeft, PackageOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  const category = getCategoryById(categoryId);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <PackageOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Catégorie non trouvée</h1>
          <p className="text-muted-foreground mb-6">
            La catégorie que vous recherchez n&apos;existe pas.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  const selectedProductData = selectedProduct
    ? category.products.find((p) => p.id === selectedProduct)
    : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: category.name, href: `/categories/${category.id}/` },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src={category.coverImage}
              alt={category.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {category.name}
                </h1>
                <p className="text-white/80 text-lg">
                  {category.products.length} produit
                  {category.products.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            {category.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onClick={() => setSelectedProduct(product.id)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProductData && (
        <ProductModal
          product={selectedProductData}
          category={category}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
