import { Coffee, Camera, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E0F08] text-white">
      {/* Top decorative strip */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9884A]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Coffee size={22} className="text-[#C9884A]" />
              <span
                className="text-2xl font-light tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Aurora Coffee
              </span>
            </div>
            <p className="text-white/50 font-inter font-light text-sm leading-relaxed max-w-xs mb-8">
              Uma boutique dedicada a transformar cada xícara em uma experiência
              sensorial inesquecível. Do campo à sua mesa.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Camera size={16} />, label: "Instagram" },
                { icon: <MessageCircle size={16} />, label: "WhatsApp" },
                { icon: <Mail size={16} />, label: "Email" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C9884A] hover:text-[#C9884A] transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links */}
          <div className="md:col-span-3">
            <h4
              className="text-xs uppercase tracking-[0.3em] text-[#C9884A] mb-6 font-inter font-medium"
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {["Nossa História", "Loja Online", "Assinaturas", "Eventos", "Contato"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white font-inter font-light tracking-wide transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#C9884A] mb-6 font-inter font-medium">
              Encontre-nos
            </h4>
            <address className="not-italic space-y-3 text-sm text-white/50 font-inter font-light leading-relaxed">
              <p>Rua dos Grãos, 123</p>
              <p>Vila Madalena, SP</p>
              <p className="pt-2">
                <a href="tel:+551199999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </p>
              <p>
                <a
                  href="mailto:ola@auroracoffee.com.br"
                  className="hover:text-white transition-colors"
                >
                  ola@auroracoffee.com.br
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-inter font-light tracking-wide">
            © {new Date().getFullYear()} Aurora Coffee. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidade", "Termos de Uso"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 hover:text-white/60 text-xs font-inter font-light tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
