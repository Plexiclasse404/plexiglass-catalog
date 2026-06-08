"use client";

import Link from "next/link";
import { ArrowLeft, PackageOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <PackageOpen className="w-20 h-20 mx-auto text-muted-foreground mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-2">
          Page non trouvée
        </p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-lg hover:bg-foreground/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>
      </motion.div>
    </div>
  );
}
