"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NossosGraos from "@/components/NossosGraos";
import JornadaDoCafe from "@/components/JornadaDoCafe";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col w-full transition-colors duration-700 ${
        isDark ? "bg-[#150e0a] text-white" : "bg-[#FDFAF5] text-[#1E0F08]"
      }`}
    >
      <Header />
      <Hero />
      <NossosGraos />
      <JornadaDoCafe />
      <Footer />
      {/* Drawer portal — rendered at root so it can cover full viewport */}
      <CartDrawer />
    </main>
  );
}
