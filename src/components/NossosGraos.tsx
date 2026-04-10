"use client";

import { motion } from "framer-motion";
import { MapPin, Leaf, Award } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

const graos = [
  {
    nome: "Cerrado Gold",
    descricao:
      "Notas de caramelo e chocolate ao leite. Acidez equilibrada, corpo médio e um final longo e aveludado.",
    origem: "Minas Gerais, Brasil",
    icone: <MapPin size={16} />,
    tostagem: "Torra Média",
    imagem:
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=85&w=800&auto=format&fit=crop",
  },
  {
    nome: "Montanhas Altas",
    descricao:
      "Perfil floral delicado com acidez brilhante de laranja e mel. Uma xícara que desperta os sentidos.",
    origem: "Espírito Santo, Brasil",
    icone: <Leaf size={16} />,
    tostagem: "Torra Clara",
    imagem:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=85&w=800&auto=format&fit=crop",
  },
  {
    nome: "Reserva Premium",
    descricao:
      "Corpo aveludado com notas intensas de cacau amargo e nozes torradas. Para os apreciadores exigentes.",
    origem: "Sul de Minas, Brasil",
    icone: <Award size={16} />,
    tostagem: "Torra Escura",
    imagem:
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=85&w=800&auto=format&fit=crop",
  },
];

export default function NossosGraos() {
  const { isDark } = useTheme();
  const { openCart } = useCart();

  return (
    <section
      id="graos"
      className={`py-32 w-full transition-colors duration-700 ${
        isDark ? "bg-[#150e0a] text-white" : "bg-[#FDFAF5] text-[#1E0F08]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="text-[#C9884A] text-xs uppercase tracking-[0.4em] font-inter font-medium mb-4">
            Origem &amp; Terroir
          </p>
          <h2
            className={`font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight max-w-lg transition-colors duration-700 ${
              isDark ? "text-white" : "text-[#1E0F08]"
            }`}
          >
            Nossos{" "}
            <em className="not-italic font-light text-[#C9884A]">Grãos</em>
          </h2>
          <div className="mt-6 w-12 h-px bg-[#C9884A]" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {graos.map((grao, index) => (
            <motion.article
              key={grao.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`group flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                isDark
                  ? "bg-[#1e1410] border border-white/5 hover:border-white/10"
                  : "bg-white border border-transparent hover:border-[#C9A98C]/20"
              }`}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={grao.imagem}
                  alt={grao.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 backdrop-blur-sm px-3 py-1 transition-colors duration-700 ${
                    isDark ? "bg-black/70" : "bg-white/90"
                  }`}
                >
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-inter font-medium transition-colors duration-700 ${
                      isDark ? "text-white/80" : "text-[#1E0F08]"
                    }`}
                  >
                    {grao.tostagem}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[#C9884A] mb-3">
                  {grao.icone}
                  <span className="text-xs uppercase tracking-[0.2em] font-inter font-medium text-[#C9A98C]">
                    {grao.origem}
                  </span>
                </div>

                <h3
                  className={`font-display text-2xl font-light mb-3 leading-tight transition-colors duration-700 ${
                    isDark ? "text-white" : "text-[#1E0F08]"
                  }`}
                >
                  {grao.nome}
                </h3>
                <div className="w-8 h-px bg-[#C9884A] mb-4" />
                <p
                  className={`font-inter font-light text-sm leading-relaxed flex-grow transition-colors duration-700 ${
                    isDark ? "text-white/60" : "text-[#9B7355]"
                  }`}
                >
                  {grao.descricao}
                </p>

                {/* Card CTA — opens cart */}
                <motion.button
                  onClick={openCart}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`mt-6 text-xs uppercase tracking-[0.2em] font-inter font-medium flex items-center gap-2 group/btn w-fit transition-colors duration-700 ${
                    isDark ? "text-white/70 hover:text-white" : "text-[#1E0F08]"
                  }`}
                >
                  Saiba mais
                  <span
                    className={`inline-block w-6 h-px group-hover/btn:w-10 transition-all duration-300 ${
                      isDark ? "bg-white/70" : "bg-[#1E0F08]"
                    }`}
                  />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
