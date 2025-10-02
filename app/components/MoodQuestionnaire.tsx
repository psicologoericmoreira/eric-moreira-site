import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Smile, Meh, Frown, Battery, BatteryLow, BatteryMedium, BatteryFull, Focus, Moon, CheckCircle2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export interface MoodData {
  mood: number;
  energy: number;
  focus: number;
  sleep: string;
  concern?: string;
  date: string;
}

interface MoodQuestionnaireProps {
  onComplete: (data: MoodData) => void;
  onCancel: () => void;
}

const questions = [
  {
    id: "mood",
    title: "Como está seu humor hoje?",
    icon: Smile,
  },
  {
    id: "energy",
    title: "Qual seu nível de energia?",
    icon: Battery,
  },
  {
    id: "focus",
    title: "Como está seu foco?",
    icon: Focus,
  },
  {
    id: "sleep",
    title: "Como foi seu sono?",
    icon: Moon,
  },
  {
    id: "concern",
    title: "O que mais te preocupa hoje? (opcional)",
    icon: CheckCircle2,
  },
];

export default function MoodQuestionnaire({ onComplete, onCancel }: MoodQuestionnaireProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<MoodData>>({});

  const progress = ((step + 1) / questions.length) * 100;

  const handleMoodSelect = (value: number) => {
    setAnswers({ ...answers, mood: value });
  };

  const handleScaleSelect = (field: "energy" | "focus", value: number) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleSleepSelect = (value: string) => {
    setAnswers({ ...answers, sleep: value });
  };

  const handleConcernChange = (value: string) => {
    setAnswers({ ...answers, concern: value });
  };

  const canProceed = () => {
    const currentQuestion = questions[step].id;
    if (currentQuestion === "concern") return true; // opcional
    return answers[currentQuestion as keyof MoodData] !== undefined;
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete({
        ...answers,
        date: new Date().toISOString(),
      } as MoodData);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const moodOptions = [
    { icon: Smile, label: "Ótimo", color: "text-green-500", value: 5 },
    { icon: Meh, label: "Ok", color: "text-yellow-500", value: 3 },
    { icon: Frown, label: "Difícil", color: "text-red-500", value: 1 },
  ];

  const sleepOptions = [
    { label: "Ótimo (7-9h)", value: "great" },
    { label: "Razoável (5-7h)", value: "ok" },
    { label: "Ruim (<5h)", value: "bad" },
  ];

  return (
    <Card className="backdrop-blur-xl bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Pergunta {step + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px]"
          >
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = questions[step].icon;
                return <Icon size={32} className="text-accent" />;
              })()}
              <h3 className="font-display text-2xl">{questions[step].title}</h3>
            </div>

            {/* Mood Question */}
            {questions[step].id === "mood" && (
              <div className="flex justify-around gap-4">
                {moodOptions.map((mood) => (
                  <motion.button
                    key={mood.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleMoodSelect(mood.value)}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl transition-all ${
                      answers.mood === mood.value
                        ? "bg-accent/20 border-2 border-accent shadow-lg"
                        : "hover:bg-accent/5 border-2 border-transparent"
                    }`}
                  >
                    <mood.icon size={56} className={mood.color} />
                    <span className="font-medium text-lg">{mood.label}</span>
                  </motion.button>
                ))}
              </div>
            )}

            {/* Energy Question */}
            {questions[step].id === "energy" && (
              <div className="space-y-6">
                <div className="grid grid-cols-10 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                    <motion.button
                      key={value}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleScaleSelect("energy", value)}
                      className={`aspect-square rounded-lg font-semibold transition-all ${
                        answers.energy === value
                          ? "bg-accent text-accent-foreground shadow-lg"
                          : "bg-accent/10 hover:bg-accent/20"
                      }`}
                    >
                      {value}
                    </motion.button>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BatteryLow size={16} /> Muito baixa
                  </span>
                  <span className="flex items-center gap-1">
                    <BatteryFull size={16} /> Muito alta
                  </span>
                </div>
              </div>
            )}

            {/* Focus Question */}
            {questions[step].id === "focus" && (
              <div className="space-y-6">
                <div className="grid grid-cols-10 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                    <motion.button
                      key={value}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleScaleSelect("focus", value)}
                      className={`aspect-square rounded-lg font-semibold transition-all ${
                        answers.focus === value
                          ? "bg-accent text-accent-foreground shadow-lg"
                          : "bg-accent/10 hover:bg-accent/20"
                      }`}
                    >
                      {value}
                    </motion.button>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Sem foco</span>
                  <span>Muito focado</span>
                </div>
              </div>
            )}

            {/* Sleep Question */}
            {questions[step].id === "sleep" && (
              <RadioGroup value={answers.sleep} onValueChange={handleSleepSelect} className="space-y-4">
                {sleepOptions.map((option) => (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      answers.sleep === option.value
                        ? "border-accent bg-accent/10"
                        : "border-transparent bg-accent/5 hover:bg-accent/10"
                    }`}
                    onClick={() => handleSleepSelect(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer text-lg">
                      {option.label}
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            )}

            {/* Concern Question */}
            {questions[step].id === "concern" && (
              <div className="space-y-4">
                <Textarea
                  value={answers.concern || ""}
                  onChange={(e) => handleConcernChange(e.target.value)}
                  placeholder="Compartilhe seus pensamentos... (opcional)"
                  className="min-h-[150px] text-base"
                />
                <p className="text-sm text-muted-foreground">
                  Este campo é opcional e privado. Use-o para registrar o que está em sua mente.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-8">
          {step > 0 && (
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Voltar
            </Button>
          )}
          <Button variant="outline" onClick={onCancel} className="flex-1">
            Cancelar
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex-1 bg-accent hover:bg-accent/90"
          >
            {step === questions.length - 1 ? "Concluir" : "Próximo"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
