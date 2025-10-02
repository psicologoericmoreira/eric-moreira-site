"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Heart, Wind, Brain, Smile, Frown, Meh, Trophy, Play, Pause, RotateCcw, CheckCircle2, Target, Sparkles, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import MoodQuestionnaire, { MoodData } from "@/app/components/MoodQuestionnaire";
import MoodDashboard from "@/app/components/MoodDashboard";

const moodOptions = [
  { icon: Smile, label: "Ótimo", color: "text-green-500", value: 5 },
  { icon: Meh, label: "Ok", color: "text-yellow-500", value: 3 },
  { icon: Frown, label: "Difícil", color: "text-red-500", value: 1 },
];

const tccExercises = [
  {
    id: 1,
    title: "Desafio do Pensamento",
    description: "Questione seus pensamentos negativos automáticos",
    steps: [
      "Identifique o pensamento negativo",
      "Quais evidências apoiam esse pensamento?",
      "Quais evidências contradizem?",
      "Existe uma visão mais equilibrada?"
    ],
    icon: Brain,
    color: "from-purple-500/20 to-violet-500/20"
  },
  {
    id: 2,
    title: "Registro de Gratidão",
    description: "Liste 3 coisas pelas quais você é grato hoje",
    steps: [
      "Algo pequeno que te fez sorrir",
      "Uma pessoa que te ajudou",
      "Uma conquista pessoal (pode ser mínima!)"
    ],
    icon: Heart,
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 3,
    title: "Exposição Gradual",
    description: "Enfrente seus medos aos poucos",
    steps: [
      "Liste situações do menos ao mais assustador",
      "Comece pela menos assustadora",
      "Repita até a ansiedade diminuir",
      "Avance para o próximo nível"
    ],
    icon: Target,
    color: "from-blue-500/20 to-cyan-500/20"
  }
];

export default function Recursos() {
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [breathingCount, setBreathingCount] = useState(4);
  const [breathingCycles, setBreathingCycles] = useState(0);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [moodHistory, setMoodHistory] = useState<MoodData[]>([]);
  const [exerciseCompleted, setExerciseCompleted] = useState<number[]>([]);
  const [currentExercise, setCurrentExercise] = useState<number | null>(null);
  const [stressLevel, setStressLevel] = useState([50]);

  useEffect(() => {
    if (!breathingActive) return;

    const interval = setInterval(() => {
      setBreathingCount(prev => {
        if (prev <= 1) {
          if (breathingPhase === "inhale") {
            setBreathingPhase("hold");
            return 4;
          } else if (breathingPhase === "hold") {
            setBreathingPhase("exhale");
            return 6;
          } else {
            setBreathingPhase("inhale");
            setBreathingCycles(c => c + 1);
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [breathingActive, breathingPhase]);

  const handleQuestionnaireComplete = (data: MoodData) => {
    setMoodHistory(prev => [...prev, data]);
    setShowQuestionnaire(false);
    setShowDashboard(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-6">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Ferramentas Interativas</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl leading-tight mb-8">
              Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Caixa de Ferramentas</span> Mental
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exercícios práticos, técnicas de TCC e recursos para você praticar sua saúde mental todos os dias
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mood Tracker */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {!showQuestionnaire && !showDashboard && (
              <Card className="backdrop-blur-xl bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-display flex items-center gap-3">
                    <Heart className="text-accent" />
                    Registro de Bem-Estar
                  </CardTitle>
                  <CardDescription className="text-base">
                    Responda algumas perguntas rápidas e acompanhe sua evolução ao longo do tempo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      onClick={() => setShowQuestionnaire(true)}
                      className="bg-accent hover:bg-accent/90 h-auto py-6 flex flex-col items-start gap-2"
                    >
                      <span className="text-lg font-semibold">📝 Novo Registro</span>
                      <span className="text-xs opacity-80">2 minutos • 5 perguntas</span>
                    </Button>
                    <Button
                      onClick={() => setShowDashboard(true)}
                      variant="outline"
                      disabled={moodHistory.length === 0}
                      className="h-auto py-6 flex flex-col items-start gap-2"
                    >
                      <span className="text-lg font-semibold flex items-center gap-2">
                        <BarChart3 size={20} /> Ver Progresso
                      </span>
                      <span className="text-xs opacity-80">
                        {moodHistory.length === 0
                          ? "Faça seu primeiro registro"
                          : `${moodHistory.length} registros salvos`}
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {showQuestionnaire && (
              <MoodQuestionnaire
                onComplete={handleQuestionnaireComplete}
                onCancel={() => setShowQuestionnaire(false)}
              />
            )}

            {showDashboard && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-display">Seu Progresso</h3>
                  <div className="flex gap-2">
                    <Button onClick={() => setShowQuestionnaire(true)} className="bg-accent hover:bg-accent/90">
                      + Novo Registro
                    </Button>
                    <Button onClick={() => setShowDashboard(false)} variant="outline">
                      Fechar
                    </Button>
                  </div>
                </div>
                <MoodDashboard history={moodHistory} />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Breathing Exercise */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-display flex items-center gap-3">
                  <Wind className="text-accent" />
                  Exercício de Respiração 4-4-6
                </CardTitle>
                <CardDescription className="text-base">
                  Acalme sua mente com respiração guiada cientificamente comprovada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <AnimatePresence mode="wait">
                    {!breathingActive ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                      >
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                          <Wind size={64} className="text-accent" />
                        </div>
                        <Button
                          size="lg"
                          onClick={() => setBreathingActive(true)}
                          className="bg-accent hover:bg-accent/90 px-8"
                        >
                          <Play className="mr-2" />
                          Começar Prática
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-8"
                      >
                        <motion.div
                          animate={{
                            scale: breathingPhase === "inhale" ? [1, 1.5] : breathingPhase === "hold" ? 1.5 : [1.5, 1],
                            opacity: breathingPhase === "hold" ? [1, 0.8, 1] : 1,
                          }}
                          transition={{
                            duration: breathingPhase === "inhale" ? 4 : breathingPhase === "hold" ? 4 : 6,
                            ease: "easeInOut",
                          }}
                          className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border-4 border-accent/50 flex items-center justify-center"
                        >
                          <div className="text-center">
                            <div className="text-6xl font-display mb-2">{breathingCount}</div>
                            <div className="text-sm font-medium text-muted-foreground">
                              {breathingPhase === "inhale" && "Inspire"}
                              {breathingPhase === "hold" && "Segure"}
                              {breathingPhase === "exhale" && "Expire"}
                            </div>
                          </div>
                        </motion.div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-center gap-4">
                            <Trophy className="text-accent" />
                            <span className="text-lg">
                              <strong>{breathingCycles}</strong> ciclos completos
                            </span>
                          </div>
                          
                          <div className="flex gap-3 justify-center">
                            <Button
                              variant="outline"
                              onClick={() => setBreathingActive(false)}
                            >
                              <Pause className="mr-2" size={16} />
                              Pausar
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => {
                                setBreathingCycles(0);
                                setBreathingPhase("inhale");
                                setBreathingCount(4);
                              }}
                            >
                              <RotateCcw className="mr-2" size={16} />
                              Reiniciar
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stress Level Checker */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-display">
                  Medidor de Estresse
                </CardTitle>
                <CardDescription className="text-base">
                  Avalie seu nível de estresse atual de 0 a 100
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Slider
                    value={stressLevel}
                    onValueChange={setStressLevel}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-center">
                    <div className="text-5xl font-display mb-2">{stressLevel[0]}</div>
                    <div className="text-muted-foreground">
                      {stressLevel[0] < 30 && "Você está tranquilo! 😌"}
                      {stressLevel[0] >= 30 && stressLevel[0] < 70 && "Nível moderado de estresse 😐"}
                      {stressLevel[0] >= 70 && "Estresse elevado - considere as técnicas abaixo 😰"}
                    </div>
                  </div>
                </div>

                {stressLevel[0] >= 50 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-6 rounded-xl bg-accent/10 border border-accent/20"
                  >
                    <h4 className="font-semibold mb-3">Sugestões Imediatas:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent" />
                        Faça o exercício de respiração acima
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent" />
                        Dê uma volta de 5 minutos
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent" />
                        Beba um copo de água
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent" />
                        Pratique um exercício de TCC abaixo
                      </li>
                    </ul>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* TCC Exercises */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl mb-4">
              Técnicas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">TCC</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Exercícios práticos da Terapia Cognitivo-Comportamental
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tccExercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full backdrop-blur-xl bg-gradient-to-br ${exercise.color} border-primary/20 hover:shadow-2xl transition-all`}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                      <exercise.icon size={32} className="text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{exercise.title}</CardTitle>
                    <CardDescription className="text-base">{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {exercise.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/30">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold">{i + 1}</span>
                          </div>
                          <p className="text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => {
                        if (exerciseCompleted.includes(exercise.id)) {
                          setExerciseCompleted(prev => prev.filter(id => id !== exercise.id));
                        } else {
                          setExerciseCompleted(prev => [...prev, exercise.id]);
                        }
                      }}
                      variant={exerciseCompleted.includes(exercise.id) ? "default" : "outline"}
                      className="w-full"
                    >
                      {exerciseCompleted.includes(exercise.id) ? (
                        <>
                          <CheckCircle2 className="mr-2" size={16} />
                          Completo!
                        </>
                      ) : (
                        "Marcar como Completo"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {exerciseCompleted.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-center"
            >
              <Card className="backdrop-blur-xl bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 inline-block">
                <CardContent className="p-6 flex items-center gap-4">
                  <Trophy className="text-accent" size={32} />
                  <div className="text-left">
                    <div className="font-display text-2xl">
                      {exerciseCompleted.length} exercício{exerciseCompleted.length > 1 ? 's' : ''} completo{exerciseCompleted.length > 1 ? 's' : ''}!
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Continue praticando para melhores resultados
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* E-book Gratuito */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-4 w-fit">
                    <Sparkles size={14} className="text-accent" />
                    <span className="text-xs font-medium">Gratuito</span>
                  </div>
                  <h3 className="font-display text-4xl mb-4">
                    Guia de Introdução à <span className="text-accent">TCC</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Receba gratuitamente nosso e-book completo sobre Terapia Cognitivo-Comportamental 
                    com técnicas práticas, exemplos reais e exercícios para começar hoje mesmo.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                      <span>Fundamentos da TCC explicados de forma simples</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                      <span>10 exercícios práticos passo a passo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                      <span>Casos reais e exemplos de aplicação</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-accent/20">
                    <h4 className="font-semibold text-lg mb-4 text-center">
                      Baixe Agora Gratuitamente
                    </h4>
                    <div className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Seu nome"
                        className="bg-background"
                      />
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-background"
                      />
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                        Receber E-book Grátis
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Ao baixar, você concorda em receber e-mails com conteúdos sobre saúde mental. 
                        Sem spam, cancele quando quiser.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-2xl">
            <CardContent className="p-12 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center"
              >
                <Sparkles size={40} className="text-accent" />
              </motion.div>
              <h3 className="font-display text-4xl mb-4">
                Pronto para Aprofundar?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Esses exercícios são ótimos, mas na terapia você tem um plano personalizado, 
                suporte profissional e acompanhamento contínuo da sua jornada.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Conhecer a Terapia
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}



