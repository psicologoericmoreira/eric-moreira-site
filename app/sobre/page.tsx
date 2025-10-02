"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, BookOpen, Heart, Target, Users, Sparkles, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

const timeline = [
  {
    year: "2015",
    icon: GraduationCap,
    title: "Graduação em Psicologia",
    description: "Universidade Federal - Formação com foco em abordagens cognitivas",
  },
  {
    year: "2017",
    icon: Award,
    title: "Especialização em TCC",
    description: "Certificação avançada em Terapia Cognitivo-Comportamental",
  },
  {
    year: "2019",
    icon: Briefcase,
    title: "Clínica Particular",
    description: "Abertura do consultório especializado em transtornos de ansiedade",
  },
  {
    year: "2023",
    icon: Sparkles,
    title: "Atendimento Online",
    description: "Expansão para terapia digital, alcançando pessoas em todo Brasil",
  },
];

const values = [
  {
    icon: Heart,
    title: "Empatia",
    description: "Escuta ativa e acolhimento sem julgamentos",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Metodologia baseada em evidências científicas",
  },
  {
    icon: BookOpen,
    title: "Educação",
    description: "Você aprende a ser seu próprio terapeuta",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Caminhamos juntos na sua jornada de transformação",
  },
];

export default function Sobre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { name: "Início", url: "https://www.psicologoericmoreira.com/" },
      { name: "Sobre", url: "https://www.psicologoericmoreira.com/sobre" }
    ]
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero with floating photo */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  {/* Glass card with gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-20" />
                  <div className="relative w-full h-full bg-gradient-to-br from-muted/50 to-accent/10 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Placeholder for photo */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                      <Users size={120} className="text-primary/40" />
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-6 -right-6 bg-accent/10 backdrop-blur-xl border border-accent/30 rounded-full p-6"
                  >
                    <Award size={32} className="text-accent" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl p-4"
                  >
                    <span className="text-sm font-display text-primary">CRP 06/123456</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20">
                <span className="text-sm font-medium text-accent">Psicólogo • CRP 06/123456</span>
              </div>
              
              <h1 className="font-display text-6xl md:text-7xl leading-tight">
                Eric Moreira
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialista em Terapia Cognitivo-Comportamental com mais de{" "}
                <span className="text-accent font-semibold">8 anos de experiência</span> ajudando
                pessoas a transformarem seus padrões de pensamento e conquistarem uma vida mais leve.
              </p>

              <div className="pt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                    <Target size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Abordagem Prática</h3>
                    <p className="text-muted-foreground">Técnicas aplicáveis no dia a dia, com resultados mensuráveis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-accent/10 rounded-lg">
                    <Heart size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Atendimento Humanizado</h3>
                    <p className="text-muted-foreground">Ambiente seguro e acolhedor para sua jornada</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Timeline */}
      <section ref={containerRef} className="py-32 px-4 relative bg-gradient-to-b from-background to-muted/30">
        <motion.div style={{ y, opacity }} className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-6">
              Trajetória <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Profissional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma jornada dedicada ao estudo da mente humana e ao bem-estar emocional
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden lg:block" />

            <div className="space-y-24">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left side */}
                  <div className={`${index % 2 === 0 ? "lg:text-right" : "lg:order-2"}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      <Card className="backdrop-blur-xl bg-background/50 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-accent/10 rounded-xl">
                              <item.icon size={32} className="text-accent" />
                            </div>
                            <span className="font-display text-4xl text-primary">{item.year}</span>
                          </div>
                          <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg hidden lg:block z-10" />

                  {/* Right side (empty for spacing) */}
                  <div className={index % 2 === 0 ? "lg:order-2" : ""} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values - Floating cards */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-primary/5" />
        
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-6">
              Valores que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Guiam</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios fundamentais que norteiam cada sessão
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full backdrop-blur-xl bg-gradient-to-br from-background/80 to-primary/5 border-primary/20 shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block p-4 bg-accent/10 rounded-2xl mb-6"
                    >
                      <value.icon size={40} className="text-accent" />
                    </motion.div>
                    <h3 className="font-display text-2xl mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* First Session CTA */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto relative"
        >
          <Card className="max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-accent/30 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block p-6 bg-accent/20 rounded-full mb-4"
                >
                  <Sparkles size={48} className="text-accent" />
                </motion.div>
                
                <h2 className="font-display text-4xl md:text-6xl">
                  Como será sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">primeira sessão?</span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Na primeira consulta, vamos conversar sobre seus objetivos, entender o que te trouxe até aqui
                  e começar a traçar um plano personalizado. É um espaço sem julgamentos, onde você pode ser
                  completamente autêntico.
                </p>

                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="font-display text-5xl text-accent mb-2">50min</div>
                    <p className="text-muted-foreground">Duração da sessão</p>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-5xl text-accent mb-2">100%</div>
                    <p className="text-muted-foreground">Confidencial</p>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-5xl text-accent mb-2">0</div>
                    <p className="text-muted-foreground">Julgamentos</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg font-semibold shadow-lg"
                >
                  Agendar Primeira Sessão
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
