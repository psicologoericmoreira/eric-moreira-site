"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    categoria: "Sobre a Terapia",
    perguntas: [
      {
        pergunta: "Como funciona a primeira sessão?",
        resposta: "Na primeira sessão, faremos uma avaliação inicial onde você compartilhará o que te trouxe à terapia, seus objetivos e histórico. É um momento de conhecimento mútuo, onde também explicarei como a TCC funciona e criaremos um plano de tratamento personalizado. A sessão dura 50 minutos e é totalmente confidencial.",
      },
      {
        pergunta: "Quanto tempo dura o tratamento?",
        resposta: "A TCC é uma terapia de curto a médio prazo. A duração varia conforme a complexidade da questão, mas geralmente varia entre 12 a 24 sessões. Algumas pessoas veem melhorias significativas em poucas semanas, enquanto questões mais profundas podem requerer mais tempo. Revisaremos o progresso regularmente.",
      },
      {
        pergunta: "Qual a frequência das sessões?",
        resposta: "Normalmente, as sessões são semanais, especialmente no início do tratamento. Conforme você desenvolve suas habilidades e nota melhorias, podemos espaçar para quinzenal. A consistência é importante para melhores resultados, mas adaptamos à sua realidade e necessidades.",
      },
      {
        pergunta: "A terapia online é tão eficaz quanto a presencial?",
        resposta: "Sim! Estudos científicos demonstram que a terapia online tem a mesma eficácia que a presencial para a maioria das condições. Usamos plataformas seguras com criptografia de ponta a ponta. A principal vantagem é a flexibilidade e conforto, permitindo que você faça terapia de onde estiver.",
      },
    ],
  },
  {
    categoria: "Sobre a TCC",
    perguntas: [
      {
        pergunta: "O que diferencia a TCC de outras abordagens?",
        resposta: "A TCC é focada no presente e orientada para soluções práticas. Trabalhamos identificando e modificando padrões de pensamento e comportamento que causam sofrimento. É uma abordagem científica, com eficácia comprovada, que te ensina habilidades concretas para usar no dia a dia. Você se torna seu próprio terapeuta.",
      },
      {
        pergunta: "A TCC funciona para o meu problema específico?",
        resposta: "A TCC tem eficácia comprovada para uma ampla gama de condições: ansiedade, depressão, pânico, fobias, TOC, TDAH, estresse, problemas de relacionamento, baixa autoestima, entre outros. Durante a avaliação inicial, determinaremos se a TCC é a melhor abordagem para você.",
      },
      {
        pergunta: "Vou receber tarefas de casa?",
        resposta: "Sim, as tarefas de casa são parte essencial da TCC. Não são tarefas complexas - geralmente envolvem observar seus pensamentos, praticar técnicas aprendidas ou experimentar novos comportamentos. Elas aceleram seu progresso e ajudam a consolidar o aprendizado entre as sessões.",
      },
    ],
  },
  {
    categoria: "Questões Práticas",
    perguntas: [
      {
        pergunta: "Qual o valor da consulta?",
        resposta: "O investimento varia conforme a modalidade (presencial ou online) e duração do acompanhamento. Entre em contato para conhecer os valores atualizados e opções de pagamento. Também trabalho com alguns planos de saúde - consulte disponibilidade.",
      },
      {
        pergunta: "Preciso de encaminhamento médico?",
        resposta: "Não é necessário encaminhamento para iniciar a terapia. Você pode agendar diretamente. No entanto, em alguns casos, pode ser benéfico trabalhar em conjunto com um psiquiatra, especialmente se houver necessidade de medicação. Farei essa avaliação e orientação quando necessário.",
      },
      {
        pergunta: "E se eu precisar remarcar uma sessão?",
        resposta: "Entendo que imprevistos acontecem. Peço que remarcações sejam feitas com no mínimo 24 horas de antecedência. Cancelamentos de última hora (menos de 24h) ou faltas sem aviso prévio serão cobrados, pois o horário estava reservado para você.",
      },
      {
        pergunta: "Minhas informações são confidenciais?",
        resposta: "Absolutamente. O sigilo é um princípio ético fundamental da psicologia. Tudo que for dito nas sessões permanece confidencial, exceto em situações específicas previstas pelo Código de Ética (risco de vida para você ou terceiros). Suas informações estão protegidas e seguras.",
      },
    ],
  },
  {
    categoria: "Dúvidas Comuns",
    perguntas: [
      {
        pergunta: "Quando vou começar a ver resultados?",
        resposta: "Muitas pessoas relatam melhorias já nas primeiras 4-6 sessões. No entanto, mudanças profundas e duradouras levam tempo. A TCC não é mágica - requer dedicação e prática. Você aprenderá habilidades que levará para toda a vida.",
      },
      {
        pergunta: "E se eu não me sentir à vontade?",
        resposta: "A relação terapêutica é fundamental para o sucesso do tratamento. Se em algum momento você não se sentir confortável, podemos conversar sobre isso. É importante haver uma conexão e confiança. Se necessário, posso indicar outro profissional que atenda melhor suas necessidades.",
      },
      {
        pergunta: "Preciso tomar medicação?",
        resposta: "Não necessariamente. A TCC pode ser eficaz sozinha para muitas condições. Em casos mais graves ou específicos, a combinação de terapia e medicação pode oferecer melhores resultados. Avaliaremos juntos e, se necessário, farei encaminhamento para um psiquiatra de confiança.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        
        {/* Floating question marks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <HelpCircle size={40 + i * 10} className="text-accent/20" />
          </motion.div>
        ))}

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block p-6 bg-accent/10 rounded-full mb-6"
            >
              <HelpCircle size={48} className="text-accent" />
            </motion.div>
            
            <h1 className="font-display text-6xl md:text-8xl leading-tight mb-6">
              Perguntas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Frequentes
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre terapia, TCC e como funciona o atendimento
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {faqs.map((categoria, catIndex) => (
              <motion.div
                key={categoria.categoria}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h2 className="font-display text-3xl md:text-4xl mb-6 text-accent">
                  {categoria.categoria}
                </h2>
                
                <Card className="backdrop-blur-xl bg-background/50 border-primary/20 shadow-xl">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {categoria.perguntas.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${catIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left text-lg hover:text-accent transition-colors">
                            {faq.pergunta}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.resposta}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-accent/30 shadow-2xl">
              <CardContent className="p-12 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block p-6 bg-accent/20 rounded-full mb-6"
                >
                  <MessageCircle size={48} className="text-accent" />
                </motion.div>
                
                <h3 className="font-display text-4xl mb-4">
                  Ainda tem dúvidas?
                </h3>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Estou aqui para te ajudar. Entre em contato e vamos conversar sobre como posso te apoiar.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg font-semibold shadow-lg"
                >
                  Falar com Eric
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
