"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  Shield,
  Award,
} from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 1 23 45 67 89",
      href: "tel:+33123456789",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@plexiglasspro.fr",
      href: "mailto:contact@plexiglasspro.fr",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Paris, France",
      href: "#",
    },
  ];

  const features = [
    { icon: Clock, label: "Délai rapide", desc: "Fabrication sous 5-7 jours" },
    { icon: Shield, label: "Garantie qualité", desc: "Matériaux premium certifiés" },
    { icon: Award, label: "Sur mesure", desc: "Dimensions personnalisables" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demandez un devis personnalisé pour vos projets en plexiglass
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-white/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/33123456789?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20un%20produit%20en%20plexiglass."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#22c35e] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </a>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="text-center p-4 rounded-xl bg-white"
                >
                  <feature.icon className="w-6 h-6 mx-auto mb-2 text-foreground" />
                  <p className="text-sm font-medium">{feature.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors resize-none"
                      placeholder="Décrivez votre projet en plexiglass..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-white rounded-xl font-medium hover:bg-foreground/90 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer la demande
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
