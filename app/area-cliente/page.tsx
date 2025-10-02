"use client";

import { motion } from "framer-motion";
import { Lock, BookOpen, Target, FileText, Video, Award, Users, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

const features = [
  {
    icon: BookOpen,
    title: "Exercícios Personalizados",
    description: "Acesse exercícios de TCC customizados para seu processo terapêutico",
  },
  {
    icon: FileText,
    title: "Material de Apoio",
    description: "Guias, planilhas e recursos complementares às sessões",
  },
  {
    icon: Target,
    title: "Metas e Progresso",
    description: "Acompanhe suas metas terapêuticas e evolução ao longo do tempo",
  },
  {
    icon: Video,
    title: "Gravações de Sessões",
    description: "Revise pontos importantes das suas sessões quando precisar",
  },
  {
    icon: Award,
    title: "Conquistas",
    description: "Celebre marcos importantes da sua jornada terapêutica",
  },
  {
    icon: Users,
    title: "Suporte Contínuo",
    description: "Canal direto de comunicação para dúvidas entre sessões",
  },
];

const benefits = [
  "Acesso 24/7 aos seus materiais terapêuticos",
  "Organização centralizada do seu processo",
  "Exercícios práticos para aplicar no dia a dia",
  "Registro de evolução e conquistas",
  "Material exclusivo desenvolvido para você",
  "Privacidade e segurança total dos seus dados",
];

export default function AreaCliente() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        {/* Animated Lock Icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 opacity-5"
        >
          <Lock size={200} className="text-primary" />
        </motion.div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-8"
            >
              <Lock size={40} className="text-primary-foreground" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Área do Cliente
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Espaço exclusivo para pacientes em processo terapêutico. Aqui você encontra ferramentas, 
              exercícios e recursos personalizados para potencializar sua jornada de transformação.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8"
            >
              <p className="text-accent font-medium">
                🔒 Esta área é restrita a pacientes em terapia ativa
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Fazer Login
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contato">
                  Ainda não é paciente?
                  <ChevronRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Recursos Exclusivos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ferramentas desenvolvidas especificamente para complementar e potencializar 
              seu processo terapêutico
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display mb-8">
                Por que usar a Área do Cliente?
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} className="text-accent-foreground" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
                <div className="text-center">
                  <Lock size={80} className="text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-display mb-4">Segurança Garantida</h3>
                  <p className="text-muted-foreground mb-6">
                    Todos os dados são protegidos com criptografia de ponta e seguem 
                    rigorosamente as normas de sigilo profissional.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span>🔒 SSL</span>
                    <span>🛡️ LGPD</span>
                    <span>👨‍⚕️ Sigilo Profissional</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Agende sua primeira consulta e tenha acesso a todas essas ferramentas 
              exclusivas para acelerar sua transformação.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/contato">
                Agendar Primeira Consulta
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
