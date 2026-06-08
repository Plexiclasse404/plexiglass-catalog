"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { Product, Category } from "@/types";
import { useEffect } from "react";

interface ProductModalProps {
  product: Product;
  category: Category;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, category, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé par le produit "${product.name}" (${category.name}). Pouvez-vous me faire un devis ?`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto md:h-full bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {category.name}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#22c35e] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Demander un devis via WhatsApp
                    </a>

                    <a
                      href={`mailto:contact@plexiglasspro.fr?subject=Demande de devis - ${encodeURIComponent(product.name)}&body=${encodeURIComponent(`Bonjour,

Je suis intéressé par le produit suivant :

Produit : ${product.name}
Catégorie : ${category.name}

Pouvez-vous me faire un devis ?

Cordialement,`)}`}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-white rounded-xl font-medium hover:bg-foreground/90 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Demander un devis par email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
