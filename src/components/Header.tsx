"use client";

import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { Coffee, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { isDark, toggleTheme, theme } = useTheme();
  const { openCart } = useCart();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-colors duration-700 ${
        isDark
          ? "bg-[#150e0a]/80 border-b border-white/10"
          : "bg-[#FDFAF5]/80 border-b border-[#1E0F08]/10"
      } backdrop-blur-md`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5">
        <Coffee
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
          Aurora Coffee
        </span>
      </a>

      {/* Right controls */}
      <div className="flex items-center gap-4">
        {/* Roast Switcher */}
        <div className="flex items-center gap-3">
          <span
            className={`text-[10px] uppercase tracking-[0.25em] font-inter transition-colors duration-700 hidden sm:block ${
              isDark ? "text-white/50" : "text-[#5C3D2E]/70"
            }`}
          >
            Nível da Torra
          </span>
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema de torra"
            className={`relative w-14 h-7 rounded-full transition-colors duration-700 focus:outline-none ${
              isDark ? "bg-[#C9884A]" : "bg-[#C9A98C]/40"
            }`}
          >
            {/* Thumb */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className={`absolute top-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md ${
                isDark ? "right-1 bg-[#150e0a]" : "left-1 bg-white"
              }`}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 30 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={10} className="text-[#C9884A]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: 30 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -30 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={10} className="text-[#9B7355]" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </button>
          {/* Theme label */}
          <span
            className={`text-[10px] uppercase tracking-[0.2em] font-inter transition-colors duration-700 hidden md:block ${
              isDark ? "text-[#C9884A]" : "text-[#9B7355]"
            }`}
          >
            {theme === "clara" ? "Clara" : "Escura"}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={openCart}
          className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-inter font-medium transition-all duration-700 ${
            isDark
              ? "bg-[#C9884A] text-white hover:bg-[#C9884A]/80"
              : "bg-[#1E0F08] text-white hover:bg-[#5C3D2E]"
          }`}
        >
          Assinar
        </button>
      </div>
    </header>
  );
}
