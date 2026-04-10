"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { openCart } = useCart();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=85&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[#C9884A] text-xs uppercase tracking-[0.4em] mb-8 font-inter font-medium"
        >
          Boutique de Café · Desde 2019
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display text-[clamp(3.5rem,10vw,8rem)] font-light text-white leading-[0.95] tracking-tight mb-8"
        >
          Aurora
          <br />
          <em className="font-light not-italic text-[#C9A98C]">Coffee</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-white/70 text-lg md:text-xl font-inter font-light mb-14 max-w-xl leading-relaxed"
        >
          O calor de um café perfeito a cada amanhecer. Grãos selecionados de
          fazendas sustentáveis, do campo à sua xícara.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Ghost button */}
          <motion.a
            href="#graos"
            whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            transition={{ duration: 0.3 }}
            className="px-10 py-4 border border-white/50 text-white text-sm uppercase tracking-[0.2em] font-inter font-medium rounded-none cursor-pointer"
          >
            Nossos Grãos
          </motion.a>

          {/* Primary CTA — opens cart drawer */}
          <motion.button
            onClick={openCart}
            whileHover={{ opacity: 0.85 }}
            transition={{ duration: 0.3 }}
            className="px-10 py-4 bg-[#C9884A] text-white text-sm uppercase tracking-[0.2em] font-inter font-medium rounded-none cursor-pointer"
          >
            Assinar Agora
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-inter">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
