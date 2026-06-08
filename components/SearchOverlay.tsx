"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Package } from "lucide-react";
import { searchProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Array<{ product: any; category: any }>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query.trim()) {
        setResults(searchProducts(query));
      } else {
        setResults([]);
      }
    }, 150);
    return () => clearTimeout(debounce);
  }, [query]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md"
          onClick={onClose}
        >
          <div
            className="max-w-2xl mx-auto pt-20 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit, une catégorie..."
                className="w-full pl-12 pr-12 py-4 text-lg bg-white border-2 border-border rounded-2xl focus:border-foreground focus:outline-none transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="mt-6">
              {query.trim() && results.length === 0 && (
                <div className="text-center py-12">
                  <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Aucun produit trouvé pour &quot;{query}&quot;
                  </p>
                </div>
              )}

              {results.length > 0 && (
                <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                  <p className="text-sm text-muted-foreground mb-4">
                    {results.length} résultat{results.length > 1 ? "s" : ""}
                  </p>
                  {results.map(({ product, category }) => (
                    <Link
                      key={product.id}
                      href={`/categories/${category.id}/`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-semibold truncate group-hover:text-foreground/80 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.name}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}

              {!query.trim() && (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Commencez à taper pour rechercher...</p>
                </div>
              )}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
