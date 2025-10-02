"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brain, Heart, Wind, Target, Shield, Users, Puzzle, Video, CheckCircle, ArrowLeft } from "lucide-react";

interface ServicoData {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  sintomas: string[];
  comoAjuda: string;
  beneficios: string[];
  benefits?: string[];
  techniques?: string[];
  process?: string[];
  duration?: string;
  price?: string;
  testimonial?: {
    text: string;
    author: string;
  };
  faqs: Array<{
    pergunta: string;
    resposta: string;
  }>;
}

const servicosData: Record<string, ServicoData> = {
  ansiedade: {
    icon: Brain,
    title: "TCC para Ansiedade",
    subtitle: "Recupere o controle sobre pensamentos e preocupações",
    description: "A ansiedade pode ser paralisante, mas você não precisa viver assim. A Terapia Cognitivo-Comportamental é reconhecida como o tratamento mais eficaz para transtornos de ansiedade.",
    sintomas: [
      "Preocupação excessiva e incontrolável",
      "Tensão muscular constante",
      "Dificuldade de concentração",
      "Irritabilidade",
      "Problemas para dormir",
      "Sintomas físicos (taquicardia, sudorese)",
    ],
    comoAjuda: "Na TCC para ansiedade, identificamos os padrões de pensamento que alimentam a preocupação excessiva. Através de técnicas específicas, você aprenderá a questionar pensamentos catastróficos, desenvolver tolerância à incerteza e reduzir comportamentos de evitação.",
    beneficios: [
      "Redução significativa dos sintomas de ansiedade",
      "Técnicas práticas para uso no dia a dia",
      "Melhora na qualidade do sono",
      "Maior capacidade de lidar com situações estressantes",
      "Resultados duradouros",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo leva o tratamento?",
        resposta: "O tratamento para ansiedade geralmente dura entre 12 a 20 sessões, mas isso varia de acordo com a gravidade dos sintomas e objetivos individuais.",
      },
      {
        pergunta: "Preciso tomar medicação?",
        resposta: "A TCC pode ser eficaz sozinha ou combinada com medicação. Em casos mais graves, a combinação pode ser recomendada. Essa decisão deve ser tomada com um psiquiatra.",
      },
      {
        pergunta: "Como sei se tenho ansiedade patológica?",
        resposta: "Se a preocupação interfere significativamente em suas atividades diárias, relacionamentos ou sono, é importante buscar ajuda profissional para avaliação.",
      },
    ],
  },
  depressao: {
    icon: Heart,
    title: "TCC para Depressão",
    subtitle: "Recupere o prazer e a motivação para viver plenamente",
    description: "A depressão é mais que tristeza. É uma condição séria, mas tratável. A TCC tem eficácia comprovada no tratamento da depressão, ajudando você a modificar padrões negativos de pensamento.",
    sintomas: [
      "Tristeza profunda e persistente",
      "Perda de interesse em atividades antes prazerosas",
      "Alterações no sono e apetite",
      "Fadiga e falta de energia",
      "Sentimentos de culpa ou inutilidade",
      "Dificuldade de concentração",
      "Pensamentos sobre morte",
    ],
    comoAjuda: "Trabalhamos os pensamentos automáticos negativos que mantêm a depressão. Através de técnicas de ativação comportamental, reestruturação cognitiva e desenvolvimento de habilidades de enfrentamento, você gradualmente recupera o prazer nas atividades.",
    beneficios: [
      "Melhora do humor e disposição",
      "Recuperação do interesse em atividades",
      "Aumento da autoestima",
      "Melhora nos relacionamentos",
      "Prevenção de recaídas",
    ],
    faqs: [
      {
        pergunta: "A TCC funciona para depressão grave?",
        resposta: "Sim, estudos mostram que a TCC é eficaz para diferentes níveis de depressão. Em casos graves, pode ser combinada com medicação para melhores resultados.",
      },
      {
        pergunta: "Quanto tempo até sentir melhora?",
        resposta: "Muitas pessoas começam a notar mudanças nas primeiras 4-6 semanas, mas o tratamento completo geralmente leva 12-20 sessões.",
      },
      {
        pergunta: "Como evitar recaídas?",
        resposta: "A TCC ensina habilidades que você pode usar ao longo da vida. Identificar sinais precoces e aplicar as técnicas aprendidas ajuda a prevenir recaídas.",
      },
    ],
  },
  panico: {
    icon: Wind,
    title: "TCC para Pânico e Fobias",
    subtitle: "Liberte-se das crises e recupere sua autonomia",
    description: "Ataques de pânico são aterrorizantes, mas você pode aprender a controlá-los. A TCC é o tratamento de escolha para transtorno de pânico e fobias.",
    sintomas: [
      "Ataques súbitos de medo intenso",
      "Taquicardia e palpitações",
      "Sensação de falta de ar",
      "Tontura ou vertigem",
      "Medo de morrer ou perder o controle",
      "Evitação de locais ou situações",
    ],
    comoAjuda: "Compreendemos o ciclo do pânico e trabalhamos a interpretação catastrófica dos sintomas físicos. Utilizamos exposição gradual e técnicas de manejo da ansiedade para você recuperar confiança.",
    beneficios: [
      "Redução ou eliminação dos ataques de pânico",
      "Diminuição da ansiedade antecipatória",
      "Liberdade para ir onde quiser",
      "Técnicas de controle em momentos de crise",
      "Maior autonomia e qualidade de vida",
    ],
    faqs: [
      {
        pergunta: "Vou ter que enfrentar meus medos?",
        resposta: "Sim, mas de forma gradual e controlada. A exposição é feita respeitando seu ritmo, sempre com suporte terapêutico.",
      },
      {
        pergunta: "E se eu tiver um ataque durante a terapia?",
        resposta: "Isso pode acontecer e é até útil para trabalharmos juntos. O consultório é um ambiente seguro onde você aprenderá a gerenciar os sintomas.",
      },
    ],
  },
  tdah: {
    icon: Target,
    title: "TCC para TDAH em Adultos",
    subtitle: "Organize sua vida e alcance seu potencial",
    description: "O TDAH não é só coisa de criança. Adultos também podem ter dificuldades de foco, organização e controle de impulsos. A TCC oferece estratégias práticas para gerenciar esses desafios.",
    sintomas: [
      "Dificuldade de manter a atenção",
      "Desorganização crônica",
      "Procrastinação frequente",
      "Dificuldade em completar tarefas",
      "Impulsividade",
      "Problemas de gerenciamento de tempo",
    ],
    comoAjuda: "Desenvolvemos sistemas personalizados de organização, técnicas de gerenciamento de tempo e estratégias para melhorar o foco. Trabalhamos também a autoestima e os padrões negativos sobre si mesmo.",
    beneficios: [
      "Melhora na organização pessoal e profissional",
      "Maior produtividade",
      "Redução da procrastinação",
      "Melhora na autoestima",
      "Ferramentas práticas para o dia a dia",
    ],
    faqs: [
      {
        pergunta: "A TCC substitui a medicação para TDAH?",
        resposta: "A TCC é complementar à medicação. Estudos mostram que a combinação dos dois tratamentos oferece os melhores resultados.",
      },
      {
        pergunta: "Funciona para TDAH sem diagnóstico formal?",
        resposta: "Se você tem sintomas de desatenção e desorganização, a TCC pode ajudar, mesmo sem diagnóstico formal. Podemos trabalhar as dificuldades específicas.",
      },
    ],
  },
  estresse: {
    icon: Shield,
    title: "Gestão de Estresse e Burnout",
    subtitle: "Recupere seu equilíbrio e bem-estar",
    description: "O estresse crônico pode levar ao esgotamento total (burnout). Não espere chegar ao limite. A TCC oferece ferramentas para gerenciar o estresse de forma saudável.",
    sintomas: [
      "Exaustão física e mental",
      "Cinismo ou despersonalização",
      "Sensação de ineficácia",
      "Dificuldade de concentração",
      "Irritabilidade aumentada",
      "Problemas de saúde físicos",
    ],
    comoAjuda: "Identificamos suas fontes de estresse e padrões de pensamento que o intensificam. Desenvolvemos estratégias de enfrentamento saudáveis, estabelecimento de limites e técnicas de relaxamento.",
    beneficios: [
      "Redução dos níveis de estresse",
      "Melhora na qualidade de vida",
      "Maior resiliência emocional",
      "Equilíbrio entre vida pessoal e profissional",
      "Prevenção do burnout",
    ],
    faqs: [
      {
        pergunta: "Como sei se estou em burnout?",
        resposta: "Burnout é caracterizado por exaustão emocional, despersonalização e redução da realização pessoal. Se você se sente constantemente esgotado, busque ajuda.",
      },
      {
        pergunta: "Preciso me afastar do trabalho?",
        resposta: "Nem sempre. Às vezes mudanças na forma de lidar com o estresse são suficientes. Em casos graves, um afastamento temporário pode ser necessário.",
      },
    ],
  },
  autoestima: {
    icon: Users,
    title: "Relacionamentos e Autoestima",
    subtitle: "Construa relacionamentos saudáveis e ame quem você é",
    description: "Relacionamentos difíceis e baixa autoestima estão frequentemente conectados. A TCC ajuda você a desenvolver padrões mais saudáveis de se relacionar consigo mesmo e com os outros.",
    sintomas: [
      "Autocrítica excessiva",
      "Dificuldade em dizer não",
      "Medo de rejeição",
      "Relacionamentos tóxicos repetitivos",
      "Dependência emocional",
      "Isolamento social",
    ],
    comoAjuda: "Trabalhamos as crenças centrais negativas sobre você mesmo, desenvolvemos assertividade e habilidades sociais saudáveis. Você aprenderá a estabelecer limites e escolher relacionamentos que te fazem bem.",
    beneficios: [
      "Aumento da autoconfiança",
      "Relacionamentos mais satisfatórios",
      "Maior assertividade",
      "Redução da dependência emocional",
      "Melhor qualidade de vida social",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo leva para melhorar a autoestima?",
        resposta: "A melhora da autoestima é gradual. Com as técnicas da TCC, mudanças significativas podem ocorrer em 15-25 sessões.",
      },
      {
        pergunta: "Posso fazer terapia de casal também?",
        resposta: "Sim, ofereço terapia de casal baseada em TCC. Podemos combinar sessões individuais e de casal conforme necessário.",
      },
    ],
  },
  // Alias para o mesmo conteúdo, permitindo o slug "/relacionamentos"
  relacionamentos: {
    icon: Users,
    title: "Relacionamentos e Autoestima",
    subtitle: "Construa relacionamentos saudáveis e ame quem você é",
    description: "Relacionamentos difíceis e baixa autoestima estão frequentemente conectados. A TCC ajuda você a desenvolver padrões mais saudáveis de se relacionar consigo mesmo e com os outros.",
    sintomas: [
      "Autocrítica excessiva",
      "Dificuldade em dizer não",
      "Medo de rejeição",
      "Relacionamentos tóxicos repetitivos",
      "Dependência emocional",
      "Isolamento social",
    ],
    comoAjuda: "Trabalhamos as crenças centrais negativas sobre você mesmo, desenvolvemos assertividade e habilidades sociais saudáveis. Você aprenderá a estabelecer limites e escolher relacionamentos que te fazem bem.",
    beneficios: [
      "Aumento da autoconfiança",
      "Relacionamentos mais satisfatórios",
      "Maior assertividade",
      "Redução da dependência emocional",
      "Melhor qualidade de vida social",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo leva para melhorar a autoestima?",
        resposta: "A melhora da autoestima é gradual. Com as técnicas da TCC, mudanças significativas podem ocorrer em 15-25 sessões.",
      },
      {
        pergunta: "Posso fazer terapia de casal também?",
        resposta: "Sim, ofereço terapia de casal baseada em TCC. Podemos combinar sessões individuais e de casal conforme necessário.",
      },
    ],
  },
  personalidade: {
    icon: Puzzle,
    title: "Transtornos de Personalidade",
    subtitle: "Desenvolva padrões mais flexíveis e saudáveis",
    description: "Transtornos de personalidade envolvem padrões rígidos de pensamento e comportamento. A TCC, especialmente a Terapia do Esquema, é eficaz no tratamento desses transtornos.",
    sintomas: [
      "Padrões repetitivos de comportamento problemático",
      "Dificuldade em manter relacionamentos",
      "Instabilidade emocional",
      "Impulsividade ou rigidez extrema",
      "Problemas de identidade",
      "Medo intenso de abandono",
    ],
    comoAjuda: "Utilizamos abordagens especializadas da TCC para trabalhar esquemas desadaptativos precoces. Focamos no desenvolvimento de regulação emocional, habilidades interpessoais e padrões mais flexíveis.",
    beneficios: [
      "Maior estabilidade emocional",
      "Relacionamentos mais saudáveis",
      "Melhor regulação emocional",
      "Redução de comportamentos impulsivos",
      "Autocompreensão profunda",
    ],
    faqs: [
      {
        pergunta: "Transtornos de personalidade têm cura?",
        resposta: "Embora seja uma condição crônica, é possível alcançar mudanças significativas e duradouras com tratamento adequado. Muitas pessoas atingem remissão completa.",
      },
      {
        pergunta: "Quanto tempo dura o tratamento?",
        resposta: "O tratamento de transtornos de personalidade tende a ser mais longo, geralmente 1-2 anos, mas os benefícios são transformadores.",
      },
    ],
  },
  online: {
    icon: Video,
    title: "Terapia Online",
    subtitle: "Atendimento de qualidade no conforto da sua casa",
    description: "A terapia online tem a mesma eficácia da presencial, com a vantagem da flexibilidade. Você pode fazer sua sessão de qualquer lugar com privacidade.",
    sintomas: [
      "Dificuldade de deslocamento",
      "Agenda apertada",
      "Mora longe de bons profissionais",
      "Prefere a privacidade de casa",
      "Viaja com frequência",
    ],
    comoAjuda: "Utilizamos plataformas seguras e confidenciais para sessões por videochamada. A qualidade do atendimento é a mesma, com todo o suporte e técnicas da TCC aplicadas de forma remota.",
    beneficios: [
      "Conveniência e flexibilidade de horários",
      "Economia de tempo com deslocamento",
      "Conforto do seu ambiente",
      "Mesma eficácia da terapia presencial",
      "Continuidade do tratamento em viagens",
    ],
    faqs: [
      {
        pergunta: "A terapia online é realmente eficaz?",
        resposta: "Sim! Estudos científicos comprovam que a terapia online tem a mesma eficácia da presencial para a maioria das condições.",
      },
      {
        pergunta: "É seguro e confidencial?",
        resposta: "Sim, utilizamos plataformas criptografadas e seguras. Todas as normas éticas e de sigilo são mantidas.",
      },
      {
        pergunta: "Preciso de equipamento especial?",
        resposta: "Não, apenas um computador, tablet ou smartphone com câmera, microfone e internet estável.",
      },
    ],
  },
};

export default function ServicoDetalhe() {
  // O nome do parâmetro deve corresponder ao diretório [slug]
  const { slug } = useParams<{ slug: string }>();
  const dados = slug ? servicosData[slug] : null;

  if (!dados) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Serviço não encontrado</h1>
          <Link href="/servicos">
            <Button>Voltar para Serviços</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = dados.icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <Link href="/servicos" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para Serviços
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Icon size={32} className="text-accent" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl">{dados.title}</h1>
                <p className="text-xl text-muted-foreground mt-2">{dados.subtitle}</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{dados.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Sintomas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl mb-8">Sintomas Comuns</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {dados.sintomas.map((sintoma: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    <span>{sintoma}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como a TCC Ajuda */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl mb-6">Como a TCC Pode Ajudar</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">{dados.comoAjuda}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl mb-8">Benefícios do Tratamento</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dados.beneficios.map((beneficio: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-accent" size={20} />
                    </div>
                    <p className="pt-2">{beneficio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl mb-8">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {dados.faqs.map((faq, index: number) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="font-display text-3xl md:text-4xl">
                Pronto para Começar?
              </h2>
              <p className="text-lg opacity-90">
                Agende sua primeira consulta e dê o primeiro passo para uma vida mais equilibrada
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Agendar Consulta
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
