"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Wind, Target, Shield, Users, Zap, Video } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "TCC para Ansiedade",
    description: "Controle pensamentos intrusivos e preocupações excessivas",
    features: ["Técnicas de respiração", "Reestruturação cognitiva", "Exposição gradual"],
    color: "from-blue-500/20 to-cyan-500/20",
    link: "/servicos/ansiedade",
    size: "large",
  },
  {
    icon: Heart,
    title: "TCC para Depressão",
    description: "Recupere sua motivação e prazer nas atividades",
    features: ["Ativação comportamental", "Identificação de pensamentos", "Metas graduais"],
    color: "from-pink-500/20 to-rose-500/20",
    link: "/servicos/depressao",
    size: "large",
  },
  {
    icon: Wind,
    title: "Pânico e Fobias",
    description: "Supere crises de pânico e medos limitantes",
    features: ["Controle de crises", "Dessensibilização", "Técnicas de grounding"],
    color: "from-purple-500/20 to-violet-500/20",
    link: "/servicos/panico",
    size: "medium",
  },
  {
    icon: Target,
    title: "TDAH",
    description: "Organize sua mente e desenvolva foco",
    features: ["Gestão de tempo", "Planejamento", "Controle de impulsos"],
    color: "from-orange-500/20 to-amber-500/20",
    link: "/servicos/tdah",
    size: "medium",
  },
  {
    icon: Shield,
    title: "Estresse e Burnout",
    description: "Recupere seu equilíbrio e energia vital",
    features: ["Gestão de estresse", "Autocuidado", "Limites saudáveis"],
    color: "from-green-500/20 to-emerald-500/20",
    link: "/servicos/estresse",
    size: "medium",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Melhore suas conexões e comunicação",
    features: ["Comunicação assertiva", "Resolução de conflitos", "Autoestima"],
    color: "from-red-500/20 to-pink-500/20",
    link: "/servicos/relacionamentos",
    size: "medium",
  },
  {
    icon: Zap,
    title: "Autoestima",
    description: "Desenvolva confiança e autoaceitação",
    features: ["Autoconhecimento", "Crenças limitantes", "Empoderamento"],
    color: "from-yellow-500/20 to-orange-500/20",
    link: "/servicos/autoestima",
    size: "medium",
  },
  {
    icon: Video,
    title: "Terapia Online",
    description: "Atendimento de qualidade de onde você estiver",
    features: ["Flexibilidade", "Conforto", "Mesma eficácia"],
    color: "from-indigo-500/20 to-blue-500/20",
    link: "/servicos/online",
    size: "large",
  },
];

export default function Servicos() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { name: "Início", url: "https://www.psicologoericmoreira.com/" },
      { name: "Serviços", url: "https://www.psicologoericmoreira.com/servicos" }
    ]
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/20 rounded-full"
        />
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-40 h-40 border-2 border-primary/20"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">Especialidades</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
              <span className="block">Serviços</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Especializados
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Abordagens personalizadas para cada desafio emocional, sempre fundamentadas na{" "}
              <span className="text-accent font-semibold">ciência da TCC</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Asymmetric Bento */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {services.map((service, index) => {
              const isLarge = service.size === "large";
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={isLarge ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <Link href={service.link}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="h-full"
                    >
                      <Card className={`h-full backdrop-blur-xl bg-gradient-to-br ${service.color} border-primary/20 shadow-xl hover:shadow-2xl transition-all overflow-hidden group`}>
                        <CardContent className="p-8 h-full flex flex-col">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex p-4 bg-accent/10 rounded-2xl mb-6 w-fit"
                          >
                            <service.icon size={40} className="text-accent" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="font-display text-3xl mb-3 group-hover:text-accent transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Arrow indicator */}
                          <motion.div
                            className="mt-6 flex items-center gap-2 text-accent font-semibold"
                            whileHover={{ x: 5 }}
                          >
                            <span>Saiba mais</span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 10h12m0 0l-4-4m4 4l-4 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-background" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto relative"
        >
          <Card className="max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block p-6 bg-accent/20 rounded-full mb-6"
              >
                <Brain size={48} className="text-accent" />
              </motion.div>
              
              <h2 className="font-display text-4xl md:text-6xl mb-6">
                Não encontrou o que procura?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cada pessoa é única. Vamos conversar sobre como a TCC pode te ajudar especificamente.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg font-semibold shadow-lg"
              >
                Fale com Eric
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
