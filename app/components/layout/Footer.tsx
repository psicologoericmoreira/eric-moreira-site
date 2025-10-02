import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-display text-xl">EM</span>
              </div>
              <span className="font-display text-2xl">Eric Moreira</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Psicólogo especialista em Terapia Cognitivo-Comportamental
            </p>
            <p className="text-xs text-primary-foreground/60">CRP XX/XXXXX</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-accent transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:text-accent transition-colors">
                  Recursos Gratuitos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-display text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos/ansiedade" className="hover:text-accent transition-colors">
                  TCC para Ansiedade
                </Link>
              </li>
              <li>
                <Link href="/servicos/depressao" className="hover:text-accent transition-colors">
                  TCC para Depressão
                </Link>
              </li>
              <li>
                <Link href="/servicos/panico" className="hover:text-accent transition-colors">
                  TCC para Pânico
                </Link>
              </li>
              <li>
                <Link href="/servicos/online" className="hover:text-accent transition-colors">
                  Terapia Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contato@ericmoreira.com" className="hover:text-accent transition-colors">
                  contato@ericmoreira.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+5511999999999" className="hover:text-accent transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Eric Moreira. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="hover:text-accent transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/glossario" className="hover:text-accent transition-colors">
              Glossário
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};




