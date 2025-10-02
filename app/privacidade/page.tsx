"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block p-6 bg-accent/10 rounded-full mb-6"
            >
              <Shield size={48} className="text-accent" />
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
              Política de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Privacidade
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Última atualização: 15 de março de 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
                <CardContent className="p-6">
                  <Lock size={32} className="text-accent mx-auto mb-3" />
                  <h3 className="font-semibold">Seguro</h3>
                  <p className="text-sm text-muted-foreground">Seus dados protegidos</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
                <CardContent className="p-6">
                  <Eye size={32} className="text-accent mx-auto mb-3" />
                  <h3 className="font-semibold">Transparente</h3>
                  <p className="text-sm text-muted-foreground">Você sabe o que coletamos</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
                <CardContent className="p-6">
                  <FileText size={32} className="text-accent mx-auto mb-3" />
                  <h3 className="font-semibold">Conforme LGPD</h3>
                  <p className="text-sm text-muted-foreground">Lei Geral de Proteção de Dados</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Card className="backdrop-blur-xl bg-background/80 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-muted-foreground prose-li:mb-2">
                <h2>1. Coleta de Informações</h2>
                <p>
                  Coletamos informações que você nos fornece diretamente ao agendar consultas,
                  preencher formulários de contato ou se comunicar conosco. Isso pode incluir:
                </p>
                <ul>
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Informações relacionadas ao motivo da consulta</li>
                </ul>

                <h2>2. Uso das Informações</h2>
                <p>Utilizamos suas informações para:</p>
                <ul>
                  <li>Fornecer serviços de psicoterapia</li>
                  <li>Responder a suas solicitações e perguntas</li>
                  <li>Enviar lembretes de consultas</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Cumprir obrigações legais e éticas</li>
                </ul>

                <h2>3. Sigilo Profissional</h2>
                <p>
                  Como psicólogo, estou legalmente e eticamente obrigado a manter o sigilo de todas
                  as informações compartilhadas durante as sessões de terapia, conforme o Código de
                  Ética Profissional do Psicólogo e a legislação vigente.
                </p>
                <p>
                  As únicas exceções ao sigilo são situações previstas em lei, como risco iminente
                  de vida para você ou terceiros.
                </p>

                <h2>4. Compartilhamento de Informações</h2>
                <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:</p>
                <ul>
                  <li>Quando necessário para prestação de serviços (ex: plataforma de videochamada)</li>
                  <li>Quando exigido por lei ou ordem judicial</li>
                  <li>Com seu consentimento explícito</li>
                </ul>

                <h2>5. Segurança dos Dados</h2>
                <p>
                  Implementamos medidas de segurança apropriadas para proteger suas informações
                  contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
                </p>
                <ul>
                  <li>Criptografia de dados sensíveis</li>
                  <li>Acesso restrito a informações pessoais</li>
                  <li>Uso de plataformas seguras para comunicação</li>
                  <li>Backup regular e seguro de informações</li>
                </ul>

                <h2>6. Seus Direitos (LGPD)</h2>
                <p>De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
                <ul>
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                  <li>Solicitar a portabilidade dos dados</li>
                  <li>Revogar o consentimento</li>
                </ul>

                <h2>7. Retenção de Dados</h2>
                <p>
                  Mantemos seus dados pelo tempo necessário para cumprir as finalidades para as
                  quais foram coletados e conforme exigido pelo Conselho Federal de Psicologia,
                  que determina a guarda de prontuários por no mínimo 5 anos.
                </p>

                <h2>8. Cookies e Tecnologias de Rastreamento</h2>
                <p>
                  Nosso site pode utilizar cookies para melhorar sua experiência de navegação.
                  Você pode configurar seu navegador para recusar cookies, mas isso pode afetar
                  algumas funcionalidades do site.
                </p>

                <h2>9. Atualizações da Política</h2>
                <p>
                  Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças
                  significativas através do site ou por e-mail.
                </p>

                <h2>10. Contato</h2>
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em
                  contato:
                </p>
                <ul>
                  <li>E-mail: privacidade@ericmoreira.psi.br</li>
                  <li>Telefone: (11) 98765-4321</li>
                </ul>
              </article>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}




