"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, CheckCircle2, Lightbulb, BookOpen, Timer } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

const sections = [
  {
    id: 1,
    title: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
    readTime: "2 min",
    content: `
      <p>A Terapia Cognitivo-Comportamental (TCC) é uma abordagem terapêutica estruturada e baseada em evidências científicas que se concentra na relação entre pensamentos, emoções e comportamentos.</p>
      <p>Desenvolvida por Aaron Beck nos anos 1960, a TCC parte do princípio de que nossos pensamentos influenciam diretamente como nos sentimos e como agimos. Ao identificar e modificar padrões de pensamento disfuncionais, podemos transformar nossas emoções e comportamentos.</p>
      <p>A TCC é considerada o "padrão-ouro" no tratamento de diversos transtornos psicológicos, incluindo ansiedade, depressão, fobias, TOC e transtornos alimentares.</p>
    `,
    type: "intro"
  },
  {
    id: 2,
    title: "Como Funciona a TCC na Prática",
    readTime: "3 min",
    content: `
      <p>A TCC trabalha com três componentes principais que estão interligados:</p>
      <p><strong>Pensamentos (Cognições):</strong> São as interpretações que fazemos sobre situações, pessoas e eventos. Muitas vezes, esses pensamentos são automáticos e distorcidos.</p>
      <p><strong>Emoções:</strong> São as respostas emocionais que surgem a partir dos nossos pensamentos. Uma mesma situação pode gerar emoções diferentes dependendo de como a interpretamos.</p>
      <p><strong>Comportamentos:</strong> São as ações que tomamos em resposta aos nossos pensamentos e emoções. Comportamentos disfuncionais podem reforçar pensamentos negativos, criando um ciclo vicioso.</p>
    `,
    highlight: {
      title: "O Triângulo Cognitivo:",
      items: [
        "Situação → gera um Pensamento",
        "Pensamento → gera uma Emoção",
        "Emoção → influencia o Comportamento",
        "Comportamento → reforça o Pensamento inicial"
      ]
    },
    insight: "Ao intervir em qualquer um desses três componentes, podemos quebrar ciclos negativos e criar mudanças positivas duradouras.",
    type: "technique"
  },
  {
    id: 3,
    title: "Técnicas Principais da TCC",
    readTime: "4 min",
    content: `
      <p>A TCC utiliza diversas técnicas práticas e estruturadas para promover mudanças. Aqui estão as principais:</p>
      <p><strong>1. Identificação de Pensamentos Automáticos:</strong> Aprender a reconhecer pensamentos que surgem automaticamente em resposta a situações específicas.</p>
      <p><strong>2. Reestruturação Cognitiva:</strong> Questionar e modificar pensamentos distorcidos, substituindo-os por interpretações mais realistas e equilibradas.</p>
      <p><strong>3. Registro de Pensamentos:</strong> Manter um diário para documentar situações, pensamentos, emoções e comportamentos, identificando padrões.</p>
      <p><strong>4. Exposição Gradual:</strong> Enfrentar progressivamente situações temidas para reduzir a ansiedade e aumentar a confiança.</p>
    `,
    highlight: {
      title: "Distorções Cognitivas Comuns:",
      items: [
        "Pensamento Tudo-ou-Nada: Ver as coisas em categorias extremas",
        "Catastrofização: Antecipar sempre o pior cenário possível",
        "Leitura Mental: Assumir que sabe o que outros estão pensando",
        "Generalização: Tirar conclusões amplas baseadas em eventos isolados",
        "Filtro Mental: Focar apenas nos aspectos negativos"
      ]
    },
    type: "technique"
  },
  {
    id: 4,
    title: "Exercício Prático: Questionamento Socrático",
    readTime: "3 min",
    content: `
      <p>O questionamento socrático é uma ferramenta fundamental da TCC. Consiste em fazer perguntas específicas para examinar a validade dos seus pensamentos automáticos.</p>
      <p>Quando identificar um pensamento negativo, faça-se estas perguntas:</p>
    `,
    highlight: {
      title: "Perguntas para Questionar Pensamentos:",
      items: [
        "Quais evidências eu tenho de que este pensamento é verdadeiro?",
        "Quais evidências eu tenho contra este pensamento?",
        "Existe uma explicação alternativa para esta situação?",
        "Qual é o pior que poderia acontecer? E o melhor? E o mais realista?",
        "O que eu diria a um amigo que tivesse esse pensamento?",
        "Este pensamento está me ajudando ou me prejudicando?"
      ]
    },
    insight: "O objetivo não é pensar positivo o tempo todo, mas desenvolver pensamentos mais realistas e equilibrados que reflitam melhor a realidade.",
    type: "technique"
  },
  {
    id: 5,
    title: "Técnicas Comportamentais da TCC",
    readTime: "3 min",
    content: `
      <p>Além de trabalhar com pensamentos, a TCC também utiliza técnicas comportamentais para promover mudanças concretas:</p>
      <p><strong>Ativação Comportamental:</strong> Especialmente útil para depressão, envolve programar atividades prazerosas e importantes para aumentar o humor e motivação.</p>
      <p><strong>Experimentos Comportamentais:</strong> Testar na prática se seus pensamentos e crenças são verdadeiros, coletando evidências reais.</p>
      <p><strong>Resolução de Problemas:</strong> Abordagem estruturada para enfrentar problemas específicos de forma prática e eficaz.</p>
    `,
    highlight: {
      title: "Passo a Passo da Resolução de Problemas:",
      items: [
        "Identifique e defina o problema claramente",
        "Liste todas as soluções possíveis (sem julgar ainda)",
        "Avalie os prós e contras de cada solução",
        "Escolha a solução mais viável",
        "Crie um plano de ação com passos específicos",
        "Implemente e avalie os resultados"
      ]
    },
    type: "technique"
  },
  {
    id: 6,
    title: "Técnicas de Relaxamento e Mindfulness",
    readTime: "2 min",
    content: `
      <p>A TCC moderna incorpora técnicas de relaxamento e atenção plena (mindfulness) como ferramentas complementares:</p>
      <p><strong>Respiração Diafragmática:</strong> Técnica simples mas poderosa para ativar o sistema nervoso parassimpático e reduzir a ansiedade imediatamente.</p>
      <p><strong>Relaxamento Muscular Progressivo:</strong> Tensionar e relaxar grupos musculares para reduzir a tensão física e mental.</p>
      <p><strong>Mindfulness:</strong> Praticar a atenção plena no momento presente, sem julgamento, reduzindo a ruminação sobre o passado ou preocupação com o futuro.</p>
    `,
    insight: "Estas técnicas ajudam a regular o sistema nervoso e criar um estado mental mais propício para aplicar as técnicas cognitivas da TCC.",
    type: "technique"
  },
  {
    id: 7,
    title: "Quando a TCC é Indicada",
    readTime: "2 min",
    content: `
      <p>A TCC é eficaz para uma ampla gama de condições e situações:</p>
      <p><strong>Transtornos de Ansiedade:</strong> Ansiedade generalizada, fobias, pânico, ansiedade social, TOC.</p>
      <p><strong>Depressão:</strong> Tanto em casos leves quanto moderados a graves (em combinação com medicação quando necessário).</p>
      <p><strong>Problemas de Sono:</strong> Insônia e dificuldades relacionadas ao sono.</p>
      <p><strong>Transtornos Alimentares:</strong> Bulimia, compulsão alimentar, anorexia.</p>
      <p><strong>Gestão de Estresse:</strong> Desenvolvimento de habilidades para lidar com pressões do dia a dia.</p>
      <p><strong>Desenvolvimento Pessoal:</strong> Melhoria da autoestima, habilidades sociais e assertividade.</p>
    `,
    type: "technique"
  },
  {
    id: 8,
    title: "O Processo Terapêutico na TCC",
    readTime: "2 min",
    content: `
      <p>A TCC é uma terapia estruturada, orientada para objetivos e com tempo limitado (geralmente 12-20 sessões):</p>
      <p><strong>Avaliação Inicial:</strong> Compreensão detalhada do problema, história e fatores mantenedores.</p>
      <p><strong>Definição de Objetivos:</strong> Estabelecimento de metas claras e mensuráveis para a terapia.</p>
      <p><strong>Psicoeducação:</strong> Explicação sobre como pensamentos, emoções e comportamentos se relacionam.</p>
      <p><strong>Desenvolvimento de Habilidades:</strong> Aprendizado e prática de técnicas específicas.</p>
      <p><strong>Aplicação Prática:</strong> Tarefas de casa para praticar as técnicas no dia a dia.</p>
      <p><strong>Prevenção de Recaída:</strong> Preparação para manter os ganhos após o término da terapia.</p>
    `,
    insight: "A colaboração ativa entre terapeuta e paciente é essencial. Na TCC, você não é um receptor passivo, mas um participante ativo do seu próprio processo de mudança.",
    type: "technique"
  },
  {
    id: 9,
    title: "Conclusão: A TCC Funciona?",
    readTime: "2 min",
    content: `
      <p>Sim! A TCC é uma das abordagens terapêuticas mais estudadas e com maior respaldo científico. Centenas de estudos clínicos demonstram sua eficácia para diversos transtornos psicológicos.</p>
      <p><strong>Taxas de Eficácia:</strong> Estudos mostram que 60-90% dos pacientes com transtornos de ansiedade e depressão apresentam melhora significativa com a TCC.</p>
      <p><strong>Benefícios Duradouros:</strong> Diferente de algumas abordagens, os ganhos obtidos com a TCC tendem a se manter a longo prazo, pois você aprende habilidades práticas que pode usar pelo resto da vida.</p>
      <p><strong>Combinação com Medicação:</strong> Em casos mais graves, a TCC pode ser combinada com medicação psiquiátrica, potencializando os resultados.</p>
      <p>Se você está enfrentando dificuldades emocionais, comportamentais ou relacionais, a TCC pode ser o caminho para recuperar sua qualidade de vida e bem-estar.</p>
    `,
    type: "conclusion"
  }
];

const blogPost = {
  id: 1,
  title: "Terapia Cognitivo-Comportamental (TCC): Guia Completo e Prático",
  author: "Eric Moreira",
  date: "15 Mar 2024",
  readTime: "22 min",
  category: "TCC",
  image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80",
};

export default function BlogPost() {
  // Ajuste do nome do parâmetro para corresponder ao diretório [slug]
  const { slug } = useParams<{ slug: string }>();
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const { scrollYProgress } = useScroll();
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const toggleSection = (sectionId: number) => {
    setCompletedSections(prev =>
      prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-background to-accent/5">
      {/* Progress bar - Fixed */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero with image */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 bg-accent/90">{blogPost.category}</Badge>
            
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              {blogPost.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{blogPost.readTime} de leitura</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Progress Tracker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <Card className="sticky top-24 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                    <BookOpen size={20} className="text-accent" />
                    Seu Progresso
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Completo</span>
                      <span className="font-semibold">{Math.round((completedSections.length / sections.length) * 100)}%</span>
                    </div>
                    <Progress value={(completedSections.length / sections.length) * 100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    {sections.map((section, index) => (
                      <motion.button
                        key={section.id}
                        onClick={() => {
                          const element = document.getElementById(`section-${section.id}`);
                          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        whileHover={{ x: 4 }}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          completedSections.includes(section.id)
                            ? 'bg-accent/20 border border-accent/30'
                            : 'hover:bg-accent/5 border border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`mt-0.5 ${completedSections.includes(section.id) ? 'text-accent' : 'text-muted-foreground'}`}>
                            {completedSections.includes(section.id) ? (
                              <CheckCircle2 size={16} />
                            ) : (
                              <div className="w-4 h-4 rounded-full border-2" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium line-clamp-2">{section.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Timer size={12} className="text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{section.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={`section-${section.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`backdrop-blur-xl transition-all ${
                    completedSections.includes(section.id)
                      ? 'bg-accent/5 border-accent/30'
                      : 'bg-background/80 border-primary/20'
                  }`}>
                    <CardContent className="p-8 md:p-10">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <h2 className="font-display text-3xl mb-2">{section.title}</h2>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Timer size={14} />
                            <span>{section.readTime} leitura</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSection(section.id)}
                          className={completedSections.includes(section.id) ? 'text-accent' : ''}
                        >
                          <CheckCircle2 size={20} />
                        </Button>
                      </div>

                      <article 
                        className="prose prose-lg max-w-none mb-6
                          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                          prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />

                      {section.highlight && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 my-6"
                        >
                          <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <Lightbulb className="text-accent" size={20} />
                            {section.highlight.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.highlight.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {section.insight && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="pl-6 border-l-4 border-accent/30 py-2 italic text-muted-foreground"
                        >
                          💡 <strong>Insight:</strong> {section.insight}
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-accent/30">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center"
                    >
                      <CheckCircle2 size={32} className="text-accent" />
                    </motion.div>
                    <h3 className="font-display text-3xl mb-4">
                      Parabéns por chegar até aqui! 🎉
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Essas técnicas são apenas o começo. Na terapia, você aprende técnicas personalizadas e tem suporte contínuo para sua jornada.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Agendar Primeira Consulta
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}