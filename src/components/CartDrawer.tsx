"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Coffee, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

const planos = [
  {
    id: "essencial",
    nome: "Essencial",
    descricao: "250g de grão premium, moído na hora",
    preco: "R$ 79",
    periodo: "/mês",
    destaque: false,
  },
  {
    id: "reserva",
    nome: "Reserva",
    descricao: "500g · blend exclusivo Aurora + brinde mensal",
    preco: "R$ 139",
    periodo: "/mês",
    destaque: true,
  },
  {
    id: "mestre",
    nome: "Mestre Torreador",
    descricao: "1kg · escolha de origem + acesso a lotes especiais",
    preco: "R$ 219",
    periodo: "/mês",
    destaque: false,
  },
];

export default function CartDrawer() {
  const { isOpen, closeCart } = useCart();
  const { isDark } = useTheme();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* ── Drawer panel ── */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 38 }}
            className={`fixed right-0 top-0 bottom-0 z-[70] w-full md:w-[42%] lg:w-[38%] flex flex-col overflow-hidden shadow-2xl transition-colors duration-700 ${
              isDark
                ? "bg-[#150e0a]/95 border-l border-white/10"
                : "bg-[#FDFAF5]/95 border-l border-[#1E0F08]/10"
            } backdrop-blur-xl`}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between px-8 py-7 border-b transition-colors duration-700 ${
                isDark ? "border-white/10" : "border-[#1E0F08]/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag
                  size={18}
                  className={`transition-colors duration-700 ${
                    isDark ? "text-[#C9884A]" : "text-[#5C3D2E]"
                  }`}
                />
                <span
                  className={`text-lg font-light tracking-wide transition-colors duration-700 ${
                    isDark ? "text-white" : "text-[#1E0F08]"
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Sua Assinatura
                </span>
              </div>
              <button
                onClick={closeCart}
                aria-label="Fechar gaveta"
                className={`w-8 h-8 flex items-center justify-center transition-colors duration-300 ${
                  isDark
                    ? "text-white/40 hover:text-white"
                    : "text-[#1E0F08]/40 hover:text-[#1E0F08]"
                }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-8 py-8 space-y-4">
              <p
                className={`text-xs uppercase tracking-[0.3em] font-inter mb-6 transition-colors duration-700 ${
                  isDark ? "text-white/40" : "text-[#9B7355]"
                }`}
              >
                Escolha seu plano
              </p>

              {planos.map((plano) => (
                <motion.label
                  key={plano.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`relative flex flex-col gap-1 p-6 rounded-none cursor-pointer transition-all duration-300 border ${
                    plano.destaque
                      ? isDark
                        ? "border-[#C9884A] bg-[#C9884A]/8"
                        : "border-[#C9884A] bg-[#C9884A]/5"
                      : isDark
                      ? "border-white/10 hover:border-white/25 bg-white/[0.02]"
                      : "border-[#1E0F08]/10 hover:border-[#9B7355]/40 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="plano"
                    value={plano.id}
                    defaultChecked={plano.destaque}
                    className="sr-only"
                  />

                  {plano.destaque && (
                    <span className="absolute top-3 right-4 text-[9px] uppercase tracking-[0.25em] text-[#C9884A] font-inter font-medium">
                      Mais popular
                    </span>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <h4
                        className={`font-display text-xl font-light mb-1 transition-colors duration-700 ${
                          isDark ? "text-white" : "text-[#1E0F08]"
                        }`}
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {plano.nome}
                      </h4>
                      <p
                        className={`text-xs font-inter font-light leading-relaxed transition-colors duration-700 ${
                          isDark ? "text-white/50" : "text-[#9B7355]"
                        }`}
                      >
                        {plano.descricao}
                      </p>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <span
                        className={`font-display text-2xl font-light transition-colors duration-700 ${
                          isDark ? "text-white" : "text-[#1E0F08]"
                        }`}
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {plano.preco}
                      </span>
                      <span
                        className={`text-xs font-inter transition-colors duration-700 ${
                          isDark ? "text-white/40" : "text-[#9B7355]"
                        }`}
                      >
                        {plano.periodo}
                      </span>
                    </div>
                  </div>
                </motion.label>
              ))}

              {/* Extras */}
              <div className={`mt-8 pt-6 border-t transition-colors duration-700 ${isDark ? "border-white/10" : "border-[#1E0F08]/10"}`}>
                <p
                  className={`text-xs uppercase tracking-[0.3em] font-inter mb-5 transition-colors duration-700 ${
                    isDark ? "text-white/40" : "text-[#9B7355]"
                  }`}
                >
                  Adicionar extras
                </p>
                {[
                  { label: "Moagem personalizada", preco: "+ R$ 0" },
                  { label: "Cápsulas de degustação (10un)", preco: "+ R$ 29" },
                  { label: "Entrega expressa semanal", preco: "+ R$ 18" },
                ].map((extra) => (
                  <div
                    key={extra.label}
                    className={`flex items-center justify-between py-3 border-b last:border-0 transition-colors duration-700 ${
                      isDark ? "border-white/5" : "border-[#1E0F08]/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        className={`w-5 h-5 border flex items-center justify-center transition-colors duration-300 ${
                          isDark
                            ? "border-white/20 hover:border-[#C9884A]"
                            : "border-[#1E0F08]/20 hover:border-[#C9884A]"
                        }`}
                        aria-label={`Adicionar ${extra.label}`}
                      >
                        <Plus size={10} className="text-[#C9884A]" />
                      </button>
                      <span
                        className={`text-xs font-inter font-light transition-colors duration-700 ${
                          isDark ? "text-white/70" : "text-[#5C3D2E]"
                        }`}
                      >
                        {extra.label}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-inter transition-colors duration-700 ${
                        isDark ? "text-white/40" : "text-[#9B7355]"
                      }`}
                    >
                      {extra.preco}
                    </span>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <div className="space-y-2 mt-4">
                {[
                  "Frete grátis em todos os pedidos",
                  "Cancele quando quiser",
                  "Código de rastreio por WhatsApp",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={12} className="text-[#C9884A] flex-shrink-0" />
                    <span
                      className={`text-[11px] font-inter font-light transition-colors duration-700 ${
                        isDark ? "text-white/40" : "text-[#9B7355]"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky CTA footer */}
            <div
              className={`px-8 py-6 border-t transition-colors duration-700 ${
                isDark ? "border-white/10 bg-[#0d0906]/80" : "border-[#1E0F08]/10 bg-[#F7F1E8]/80"
              } backdrop-blur-md`}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-xs uppercase tracking-[0.2em] font-inter transition-colors duration-700 ${
                    isDark ? "text-white/50" : "text-[#9B7355]"
                  }`}
                >
                  Total mensal
                </span>
                <span
                  className={`font-display text-2xl font-light transition-colors duration-700 ${
                    isDark ? "text-white" : "text-[#1E0F08]"
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  R$ 139
                </span>
              </div>

              <motion.button
                whileHover={{ opacity: 0.88 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#C9884A] text-white text-sm uppercase tracking-[0.2em] font-inter font-medium flex items-center justify-center gap-2"
              >
                <Coffee size={14} />
                Finalizar Pedido
              </motion.button>

              <p
                className={`text-center text-[10px] mt-3 font-inter font-light transition-colors duration-700 ${
                  isDark ? "text-white/25" : "text-[#9B7355]/60"
                }`}
              >
                Pagamento 100% seguro via Stripe
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
