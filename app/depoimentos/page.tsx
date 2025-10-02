"use client";

import { motion } from "framer-motion";
import { Quote, Star, Heart, TrendingUp, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Depoimentos anônimos seguindo diretrizes éticas do CFP
const testimonials = [
  {
    condition: "Ansiedade Generalizada",
    quote: "Passei anos convivendo com pensamentos acelerados e preocupações constantes. A TCC me ensinou a identificar esses padrões e desenvolver ferramentas práticas para lidar com eles. Hoje me sinto mais no controle.",
    author: "M., 32 anos",
    timeInTherapy: "6 meses",
    improvements: ["Redução de sintomas ansiosos", "Melhor qualidade do sono", "Maior autoconfiança"],
    icon: TrendingUp,
  },
  {
    condition: "Depressão",
    quote: "Estava sem energia para as atividades mais simples do dia a dia. O processo terapêutico me ajudou a entender meus pensamentos negativos e recuperar gradualmente o prazer nas coisas. Foi um divisor de águas na minha vida.",
    author: "J., 28 anos",
    timeInTherapy: "8 meses",
    improvements: ["Recuperação da motivação", "Retorno às atividades prazerosas", "Melhora do humor"],
    icon: Heart,
  },
  {
    condition: "Transtorno de Pânico",
    quote: "Os ataques de pânico controlavam minha vida. Evitava lugares e situações por medo. Aprendi técnicas para identificar os sinais precocemente e gerenciar as crises. Hoje volto a viver com mais liberdade.",
    author: "A., 35 anos",
    timeInTherapy: "4 meses",
    improvements: ["Controle das crises", "Redução de comportamentos evitativos", "Maior autonomia"],
    icon: Shield,
  },
  {
    condition: "TDAH em Adultos",
    quote: "Vivia me sentindo perdido, com dificuldade de focar e organizar minhas tarefas. A terapia me deu estratégias concretas de organização e manejo do tempo. Minha produtividade e autoestima melhoraram muito.",
    author: "L., 26 anos",
    timeInTherapy: "5 meses",
    improvements: ["Melhor organização", "Aumento de foco", "Gestão eficaz do tempo"],
    icon: TrendingUp,
  },
  {
    condition: "Estresse e Burnout",
    quote: "O trabalho estava me consumindo. Não conseguia mais separar vida profissional e pessoal. Através da TCC, aprendi a estabelecer limites saudáveis e técnicas de gerenciamento de estresse. Recuperei meu equilíbrio.",
    author: "R., 40 anos",
    timeInTherapy: "7 meses",
    improvements: ["Estabelecimento de limites", "Redução do estresse", "Melhor equilíbrio vida-trabalho"],
    icon: Award,
  },
  {
    condition: "Autoestima e Relacionamentos",
    quote: "Tinha dificuldade de me expressar e colocar limites nos meus relacionamentos. A terapia me ajudou a desenvolver assertividade e a reconhecer meu próprio valor. Hoje tenho relacionamentos mais saudáveis.",
    author: "C., 29 anos",
    timeInTherapy: "6 meses",
    improvements: ["Comunicação assertiva", "Aumento da autoestima", "Relações mais saudáveis"],
    icon: Heart,
  },
];

const stats = [
  { number: "95%", label: "Satisfação dos Pacientes", description: "Relatam melhora significativa" },
  { number: "4-8", label: "Meses Médios", description: "Tempo médio de tratamento" },
  { number: "100%", label: "Confidencialidade", description: "Sigilo profissional garantido" },
  { number: "Online", label: "Atendimento", description: "Flexível e acessível" },
];

export default function Depoimentos() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { name: "Início", url: "https://www.psicologoericmoreira.com/" },
      { name: "Depoimentos", url: "https://www.psicologoericmoreira.com/depoimentos" }
    ]
  };

  return (
    <div className="min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        {/* Floating Quote Marks */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 opacity-10"
        >
          <Quote size={200} className="text-primary" />
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
              <Quote size={40} className="text-primary-foreground" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Histórias de Transformação
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Relatos anônimos de pessoas que encontraram na TCC o caminho para superar desafios e viver com mais qualidade. 
              Todos os depoimentos seguem rigorosamente as diretrizes éticas do CFP.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-primary" />
                <span>Sigilo Profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <span>Ética do CFP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-6">
                    <div className="text-4xl font-display text-primary mb-2">{stat.number}</div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Relatos de Pacientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada história é única, mas todas compartilham algo em comum: a decisão de buscar ajuda e o compromisso com a mudança.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all border-2 hover:border-primary/30 relative overflow-hidden group">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardContent className="p-8 relative">
                    {/* Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <testimonial.icon size={64} className="text-primary" />
                    </div>

                    {/* Condition Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                      <Star size={16} className="text-primary" />
                      <span className="text-sm font-medium text-primary">{testimonial.condition}</span>
                    </div>

                    {/* Quote */}
                    <Quote size={32} className="text-primary/30 mb-4" />
                    <p className="text-foreground/90 italic mb-6 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author & Time */}
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">Em terapia há {testimonial.timeInTherapy}</div>
                      </div>
                    </div>

                    {/* Improvements */}
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-3">Melhoras Percebidas:</div>
                      <div className="space-y-2">
                        {testimonial.improvements.map((improvement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{improvement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Note */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Shield size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-display mb-3">Compromisso com a Ética Profissional</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Todos os depoimentos apresentados respeitam rigorosamente o Código de Ética Profissional do Psicólogo e as resoluções do Conselho Federal de Psicologia (CFP). Os relatos são anônimos, sem identificação dos pacientes, e não fazem promessas de resultados garantidos.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada processo terapêutico é único. Os resultados variam de acordo com diversos fatores individuais, incluindo engajamento no processo, contexto de vida e características pessoais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Comece Sua Própria História de Transformação
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma primeira sessão e descubra como a TCC pode ajudar você a superar seus desafios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contato">Agendar Primeira Sessão</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicos">Conhecer os Serviços</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}




