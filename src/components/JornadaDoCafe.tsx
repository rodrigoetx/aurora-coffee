"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const etapas = [
  {
    id: 1,
    titulo: "Colheita Manual",
    subtitulo: "Da Planta à Mão",
    descricao:
      "Cada cereja é colhida individualmente por mãos experientes, escolhendo somente os frutos no ponto exato de maturação.",
    imagem:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=85&w=1400&auto=format&fit=crop",
    numero: "01",
  },
  {
    id: 2,
    titulo: "Secagem ao Sol",
    subtitulo: "Paciência & Terroir",
    descricao:
      "Os frutos descansam ao sol por semanas sobre leitos suspensos, desenvolvendo os açúcares naturais que definem o perfil sensorial único de cada lote.",
    imagem:
      "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=85&w=1400&auto=format&fit=crop",
    numero: "02",
  },
  {
    id: 3,
    titulo: "Torra Artesanal",
    subtitulo: "O Ponto de Perfeição",
    descricao:
      "Nossos mestres torradores acompanham cada lote com precisão científica e sensibilidade artística, realçando as notas exclusivas de cada origem.",
    imagem:
      "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=85&w=1400&auto=format&fit=crop",
    numero: "03",
  },
];

export default function JornadaDoCafe() {
  const { isDark } = useTheme();

  /** The outer wrapper defines the total scroll-height for pinning */
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * Map scroll progress (0→1) to horizontal translateX.
   * At 0%  → 0px   (first card visible)
   * At 100% → -(number of extra cards × 100vw) so each card occupies full viewport width
   */
  const cards = etapas.length;
  // We shift left by (cards - 1) full widths as user scrolls from 0 to 1
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(cards - 1) * 100}vw`]
  );

  return (
    /**
     * Outer container: height = cards × 100vh so the sticky panel has room to "scroll"
     * On mobile (< md) we switch to a normal vertical stack (no horizontal trick)
     */
    <section
      ref={containerRef}
      className={`transition-colors duration-700 ${
        isDark ? "bg-[#0d0906]" : "bg-[#F7F1E8]"
      }`}
      style={{ height: `${cards * 100}vh`, position: "relative" }} // gives scroll room on desktop; position:relative required by Framer Motion useScroll
    >
      {/* ───── Section label (always visible, above the sticky panel) ───── */}
      <div
        className={`hidden md:block absolute top-0 left-0 right-0 z-10 px-12 pt-14 transition-colors duration-700`}
      >
        <p
          className={`text-[10px] uppercase tracking-[0.4em] font-inter font-medium mb-2 transition-colors duration-700 ${
            isDark ? "text-[#C9884A]" : "text-[#9B7355]"
          }`}
        >
          Processo &amp; Origem
        </p>
        <h2
          className={`font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight transition-colors duration-700 ${
            isDark ? "text-white" : "text-[#1E0F08]"
          }`}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          A Jornada do <em className="not-italic text-[#C9884A]">Grão</em>
        </h2>
      </div>

      {/* ───── DESKTOP: sticky horizontal scroll panel ───── */}
      <div className="hidden md:block sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full"
          // total track width = cards × 100vw
          // each child is 100vw wide
        >
          {etapas.map((etapa) => (
            <div
              key={etapa.id}
              className="relative w-screen h-screen flex-shrink-0 overflow-hidden"
            >
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={etapa.imagem}
                alt={etapa.titulo}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Text content */}
              <div className="relative z-10 h-full flex flex-col justify-end px-16 pb-20 max-w-xl">
                <span className="font-display text-[8rem] font-light leading-none text-white/10 select-none mb-(-4)">
                  {etapa.numero}
                </span>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9884A] font-inter mb-3">
                  {etapa.subtitulo}
                </p>
                <h3
                  className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-white leading-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {etapa.titulo}
                </h3>
                <div className="w-10 h-px bg-[#C9884A] mb-5" />
                <p className="text-white/70 font-inter font-light text-sm leading-relaxed max-w-sm">
                  {etapa.descricao}
                </p>
              </div>

              {/* Progress dots */}
              <div className="absolute bottom-8 right-12 flex gap-2">
                {etapas.map((e) => (
                  <div
                    key={e.id}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      e.id === etapa.id
                        ? "bg-[#C9884A] scale-125"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ───── MOBILE: normal vertical stack ───── */}
      <div className="md:hidden flex flex-col">
        {/* Mobile section header */}
        <div
          className={`px-6 pt-16 pb-10 transition-colors duration-700 ${
            isDark ? "bg-[#0d0906]" : "bg-[#F7F1E8]"
          }`}
        >
          <p
            className={`text-[10px] uppercase tracking-[0.4em] font-inter font-medium mb-2 transition-colors duration-700 ${
              isDark ? "text-[#C9884A]" : "text-[#9B7355]"
            }`}
          >
            Processo &amp; Origem
          </p>
          <h2
            className={`font-display text-4xl font-light leading-tight transition-colors duration-700 ${
              isDark ? "text-white" : "text-[#1E0F08]"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A Jornada do <em className="not-italic text-[#C9884A]">Grão</em>
          </h2>
        </div>

        {etapas.map((etapa) => (
          <div key={etapa.id} className="relative w-full h-[80vw] min-h-[320px] max-h-[480px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={etapa.imagem}
              alt={etapa.titulo}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9884A] font-inter mb-2">
                {etapa.numero} · {etapa.subtitulo}
              </p>
              <h3
                className="font-display text-3xl font-light text-white leading-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {etapa.titulo}
              </h3>
              <p className="text-white/70 font-inter font-light text-xs leading-relaxed">
                {etapa.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
