"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getCatalogData } from "@/lib/data";
import { ArrowUpRight, Layers } from "lucide-react";

export function CategoryGrid() {
  const data = getCatalogData();

  return (
    <section id="categories" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted mb-6">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">Notre Catalogue</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Découvrez nos catégories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions en plexiglass pour chaque besoin — de la présentation au rangement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link href={`/categories/${category.id}/`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-muted">
                  <Image
                    src={category.coverImage}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:text-foreground/80 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.products.length} produit
                    {category.products.length > 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
