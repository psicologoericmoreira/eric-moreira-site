"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Brain,
  Heart,
  Zap,
  Wind,
  Target,
  Shield,
  Video,
  Sparkles,
  Quote,
  ArrowRight,
  Circle,
  Hexagon,
  Award,
} from "lucide-react";
import Link from "next/link";

const feelings = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Preocupação excessiva, pensamentos acelerados",
    content: "A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva pode prejudicar sua qualidade de vida. A TCC pode ajudar você a identificar e modificar padrões de pensamento que alimentam a ansiedade.",
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Tristeza profunda, falta de motivação",
    content: "A depressão é mais que tristeza passageira. É uma condição tratável com a TCC, que trabalha modificando pensamentos negativos e ajudando você a recuperar o prazer nas atividades do dia a dia.",
  },
  {
    icon: Zap,
    title: "Estresse",
    description: "Sobrecarga, tensão constante",
    content: "O estresse crônico pode afetar sua saúde física e mental. Através da TCC, você aprenderá técnicas eficazes para gerenciar o estresse e desenvolver resiliência emocional.",
  },
  {
    icon: Wind,
    title: "Pânico",
    description: "Crises intensas de medo e desconforto",
    content: "Os ataques de pânico são assustadores, mas tratáveis. A TCC é reconhecida como o tratamento mais eficaz para transtorno de pânico, ajudando você a entender e controlar os sintomas.",
  },
];

const services = [
  {
    icon: Brain,
    title: "TCC para Ansiedade",
    description: "Tratamento especializado para transtornos ansiosos",
    link: "/servicos/ansiedade",
  },
  {
    icon: Heart,
    title: "TCC para Depressão",
    description: "Abordagem eficaz no tratamento da depressão",
    link: "/servicos/depressao",
  },
  {
    icon: Wind,
    title: "TCC para Pânico",
    description: "Controle de crises e fobias",
    link: "/servicos/panico",
  },
  {
    icon: Target,
    title: "TCC para TDAH",
    description: "Estratégias para foco e organização",
    link: "/servicos/tdah",
  },
  {
    icon: Shield,
    title: "Estresse e Burnout",
    description: "Recupere seu equilíbrio emocional",
    link: "/servicos/estresse",
  },
  {
    icon: Video,
    title: "Terapia Online",
    description: "Atendimento de qualidade no conforto de casa",
    link: "/servicos/online",
  },
];

const testimonials = [
  {
    text: "A terapia me ajudou a entender meus padrões de pensamento e a lidar melhor com a ansiedade. Hoje me sinto mais no controle da minha vida.",
    author: "Maria, 32 anos",
  },
  {
    text: "Depois de meses travado pela depressão, a TCC me deu ferramentas práticas para sair do ciclo negativo. Estou recuperando minha motivação.",
    author: "João, 28 anos",
  },
  {
    text: "Os ataques de pânico controlavam minha vida. Hoje, com as técnicas que aprendi, consigo identificar os sinais e evitar as crises.",
    author: "Ana, 35 anos",
  },
];

const FloatingShape = ({ delay = 0, duration = 20, children, className = "" }: { delay?: number; duration?: number; children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ y: 0 }}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [selectedFeeling, setSelectedFeeling] = useState<typeof feelings[0] | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 15 });
  const y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div className="min-h-screen overflow-hidden">
      {/* 3D Interactive Hero */}
      <motion.section
        ref={heroRef}
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Floating geometric shapes */}
        <FloatingShape delay={0} className="top-20 left-10 text-accent/20">
          <Circle size={80} />
        </FloatingShape>
        <FloatingShape delay={2} duration={25} className="top-40 right-20 text-primary/10">
          <Hexagon size={120} />
        </FloatingShape>
        <FloatingShape delay={1} duration={18} className="bottom-32 left-1/4 text-accent/15">
          <Brain size={100} />
        </FloatingShape>
        <FloatingShape delay={3} duration={22} className="bottom-20 right-1/3 text-primary/20">
          <Circle size={60} />
        </FloatingShape>

        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10 -z-10" />
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 backdrop-blur-[100px] -z-5" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Large asymmetric layout */}
            <motion.div
              className="grid lg:grid-cols-12 gap-8 items-center"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Text content - takes more space */}
              <div className="lg:col-span-7 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="inline-block px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-6">
                    <span className="text-sm font-medium text-accent">Psicologia • TCC</span>
                  </div>
                  
                  <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                      Reprograme
                    </span>
                    <span className="block">Sua Mente</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                    Transforme padrões de pensamento em{" "}
                    <span className="text-accent font-semibold">ferramentas de crescimento</span> com a
                    ciência da Terapia Cognitivo-Comportamental
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg group"
                  >
                    Começar Agora
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2" size={24} />
                    </motion.div>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="backdrop-blur-sm border-2 px-8 py-6 text-lg"
                    asChild
                  >
                    <Link href="/sobre">Conhecer Eric</Link>
                  </Button>
                </motion.div>
              </div>

              {/* 3D-ish visual element */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x / 2}deg) rotateX(${-mousePosition.y / 2}deg)`,
                }}
              >
                <div className="relative">
                  {/* Glass card with gradient */}
                  <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/20 shadow-2xl">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
                    
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <Image src="/images/icon_azul.png" width={160} height={160} alt="Icon" className="w-[160px] h-[160px] object-contain opacity-40" />
                    </motion.div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-accent rounded-full"
                        style={{
                          top: `${20 + i * 10}%`,
                          left: `${10 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-sm">Role para explorar</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-3 bg-current rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Professional */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-muted/30" />
        
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    {/* Glass card with gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-20" />
                    <div className="relative w-full h-full bg-gradient-to-br from-muted/50 to-accent/10 backdrop-blur-xl border-2 border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
                      {/* Placeholder for photo */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                        <Brain size={120} className="text-primary/40" />
                      </div>
                    </div>
                    
                    {/* Floating badge */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-6 -right-6 bg-accent backdrop-blur-xl border-2 border-accent-foreground/10 rounded-2xl p-4 shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Award size={32} className="text-accent-foreground" />
                        <div>
                          <p className="font-display text-sm text-accent-foreground">Especialista</p>
                          <p className="text-xs text-accent-foreground/80">CRP 06/123456</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-4">
                  <span className="text-sm font-medium text-accent">Conheça o Profissional</span>
                </div>
                
                <h2 className="font-display text-5xl md:text-6xl leading-tight">
                  Eric Moreira
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Psicólogo clínico especialista em{" "}
                  <span className="text-accent font-semibold">Terapia Cognitivo-Comportamental (TCC)</span> com mais de{" "}
                  <span className="text-primary font-semibold">8 anos de experiência</span> ajudando pessoas a transformarem seus padrões de pensamento e conquistarem uma vida mais equilibrada e significativa.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Baseado em Evidências</h3>
                      <p className="text-xs text-muted-foreground">Técnicas cientificamente comprovadas</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-accent/10"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Heart size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Atendimento Humanizado</h3>
                      <p className="text-xs text-muted-foreground">Ambiente acolhedor e sem julgamentos</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    size="lg" 
                    asChild
                  >
                    <Link href="/sobre">
                      Conhecer Melhor
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                  >
                    <Link href="/contato">Agendar Consulta</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feelings - Bento Grid Style */}
      <section className="py-32 px-4 relative -mt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-6">
              Como você está<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                se sentindo?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Cada emoção tem sua origem. Clique para entender o que você está vivenciando.
            </p>
          </motion.div>

          {/* Asymmetric bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {feelings.map((feeling, index) => (
              <motion.div
                key={feeling.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <Card
                  className="h-full cursor-pointer group relative overflow-hidden border-2 hover:border-accent transition-all duration-300"
                  onClick={() => setSelectedFeeling(feeling)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardContent className={`p-8 flex flex-col justify-between h-full relative z-10 ${index === 0 ? 'md:p-12' : ''}`}>
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 bg-accent/10 rounded-2xl inline-block mb-6 ${index === 0 ? 'p-6' : ''}`}
                      >
                        <feeling.icon size={index === 0 ? 48 : 32} className="text-accent" />
                      </motion.div>
                      
                      <h3 className={`font-display ${index === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} mb-3`}>
                        {feeling.title}
                      </h3>
                      <p className={`text-muted-foreground ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                        {feeling.description}
                      </p>
                    </div>
                    
                    <motion.div
                      className="flex items-center gap-2 text-accent font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Entenda mais <ArrowRight size={20} />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How TCC Works - Scroll Timeline */}
      <section className="py-32 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-6">
              O Processo da TCC
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Uma jornada científica e transformadora em três etapas essenciais
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-32">
            {[
              {
                icon: Brain,
                number: "01",
                title: "Identificação",
                description: "Mapeamos seus padrões de pensamento automáticos e reconhecemos as distorções cognitivas que geram sofrimento emocional.",
              },
              {
                icon: Target,
                number: "02",
                title: "Reestruturação",
                description: "Trabalhamos juntos para questionar e modificar pensamentos distorcidos, desenvolvendo perspectivas mais equilibradas e realistas.",
              },
              {
                icon: Sparkles,
                number: "03",
                title: "Transformação",
                description: "Você integra novos comportamentos e hábitos saudáveis ao seu dia a dia, construindo resiliência emocional duradoura.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon side */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                    <div className="relative p-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
                      <step.icon size={80} />
                    </div>
                  </motion.div>
                </div>

                {/* Content side */}
                <div className="flex-1 space-y-4">
                  <div className="font-display text-8xl text-white/10">
                    {step.number}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl">
                    {step.title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Cards with hover 3D effect */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-6">
              Atendimentos<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Especializados
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada desafio emocional requer uma abordagem única e personalizada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full overflow-hidden border-2 hover:border-accent transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <CardContent className="p-8 relative">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6"
                        >
                          <service.icon size={32} className="text-accent" />
                        </motion.div>
                        
                        <h3 className="font-display text-2xl mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        
                        <motion.div
                          className="flex items-center gap-2 text-accent font-medium"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Saiba mais <ArrowRight size={20} />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Chat bubbles style */}
      <section className="py-32 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-6">
              Transformações Reais
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias de quem decidiu dar o primeiro passo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, rotate: 2 }}
              >
                <Card className="h-full border-2 hover:border-accent transition-all duration-300 relative overflow-hidden">
                  {/* Chat bubble tail */}
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card border-l-2 border-b-2 border-accent rotate-45" />
                  
                  <CardContent className="pt-8 pb-6 px-6 space-y-4">
                    <Quote className="text-accent" size={40} />
                    <p className="text-muted-foreground leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-accent">
                        {testimonial.author}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full width immersive */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating shapes */}
        <FloatingShape delay={0} className="top-10 left-10 text-white/10">
          <Circle size={100} />
        </FloatingShape>
        <FloatingShape delay={1} className="bottom-20 right-20 text-white/10">
          <Hexagon size={150} />
        </FloatingShape>

        <div className="container mx-auto relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight">
              Pronto para<br />começar?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              O primeiro passo é sempre o mais importante. Vamos juntos nessa jornada de
              autoconhecimento e transformação.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-12 py-8 text-xl font-semibold shadow-2xl"
              >
                Agendar Primeira Consulta
                <ArrowRight className="ml-3" size={28} />
              </Button>
            </motion.div>

            <p className="text-sm opacity-75">
              📍 Atendimento presencial e online • CRP 06/123456
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feeling Modal */}
      <Dialog open={!!selectedFeeling} onOpenChange={() => setSelectedFeeling(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl flex items-center gap-3">
              {selectedFeeling && <selectedFeeling.icon className="text-accent" size={32} />}
              {selectedFeeling?.title}
            </DialogTitle>
            <DialogDescription className="text-base pt-4 leading-relaxed">
              {selectedFeeling?.content}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button className="w-full py-6">
              Quero Agendar uma Consulta
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
