import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, TrendingDown, Minus, Calendar } from "lucide-react";
import { MoodData } from "./MoodQuestionnaire";

interface MoodDashboardProps {
  history: MoodData[];
}

export default function MoodDashboard({ history }: MoodDashboardProps) {
  if (history.length === 0) {
    return (
      <Card className="backdrop-blur-xl bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
        <CardContent className="p-12 text-center">
          <Calendar size={48} className="mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">
            Ainda não há dados suficientes. Faça seu primeiro registro!
          </p>
        </CardContent>
      </Card>
    );
  }

  // Prepare chart data
  const chartData = history.slice(-7).map((entry, index) => {
    const date = new Date(entry.date);
    return {
      name: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
      Humor: entry.mood,
      Energia: entry.energy,
      Foco: entry.focus,
    };
  });

  // Calculate averages
  const avgMood = (history.reduce((sum, entry) => sum + entry.mood, 0) / history.length).toFixed(1);
  const avgEnergy = (history.reduce((sum, entry) => sum + entry.energy, 0) / history.length).toFixed(1);
  const avgFocus = (history.reduce((sum, entry) => sum + entry.focus, 0) / history.length).toFixed(1);

  // Calculate trends (compare last 3 vs previous 3)
  const getTrend = (field: keyof Pick<MoodData, "mood" | "energy" | "focus">) => {
    if (history.length < 6) return 0;
    const recent = history.slice(-3).reduce((sum, entry) => sum + (entry[field] as number), 0) / 3;
    const previous = history.slice(-6, -3).reduce((sum, entry) => sum + (entry[field] as number), 0) / 3;
    return ((recent - previous) / previous) * 100;
  };

  const moodTrend = getTrend("mood");
  const energyTrend = getTrend("energy");
  const focusTrend = getTrend("focus");

  const TrendIcon = (trend: number) => {
    if (trend > 5) return <TrendingUp className="text-green-500" size={20} />;
    if (trend < -5) return <TrendingDown className="text-red-500" size={20} />;
    return <Minus className="text-yellow-500" size={20} />;
  };

  const sleepQuality = history.filter((e) => e.sleep === "great").length / history.length;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Humor Médio</span>
                {TrendIcon(moodTrend)}
              </div>
              <div className="text-4xl font-display mb-1">{avgMood}</div>
              <p className="text-xs text-muted-foreground">
                {history.length} registros totais
              </p>
              {moodTrend !== 0 && (
                <p className="text-xs mt-2 font-medium">
                  {moodTrend > 0 ? "+" : ""}
                  {moodTrend.toFixed(1)}% nos últimos 3 dias
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Energia Média</span>
                {TrendIcon(energyTrend)}
              </div>
              <div className="text-4xl font-display mb-1">{avgEnergy}</div>
              <p className="text-xs text-muted-foreground">De 0 a 10</p>
              {energyTrend !== 0 && (
                <p className="text-xs mt-2 font-medium">
                  {energyTrend > 0 ? "+" : ""}
                  {energyTrend.toFixed(1)}% nos últimos 3 dias
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Foco Médio</span>
                {TrendIcon(focusTrend)}
              </div>
              <div className="text-4xl font-display mb-1">{avgFocus}</div>
              <p className="text-xs text-muted-foreground">De 0 a 10</p>
              {focusTrend !== 0 && (
                <p className="text-xs mt-2 font-medium">
                  {focusTrend > 0 ? "+" : ""}
                  {focusTrend.toFixed(1)}% nos últimos 3 dias
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="backdrop-blur-xl bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
          <CardHeader>
            <CardTitle className="text-2xl font-display">Evolução dos Últimos 7 Dias</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis domain={[0, 10]} className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Humor"
                  stroke="hsl(142, 76%, 36%)"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line
                  type="monotone"
                  dataKey="Energia"
                  stroke="hsl(199, 89%, 48%)"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line
                  type="monotone"
                  dataKey="Foco"
                  stroke="hsl(271, 76%, 53%)"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="backdrop-blur-xl bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30">
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg mb-4">✨ Insights Personalizados</h4>
            <div className="space-y-3">
              {sleepQuality > 0.7 && (
                <p className="text-sm">
                  🌙 Você está dormindo bem em {(sleepQuality * 100).toFixed(0)}% dos dias. Continue assim!
                </p>
              )}
              {sleepQuality < 0.4 && (
                <p className="text-sm">
                  😴 Seu sono pode estar afetando seu bem-estar. Considere ajustar sua rotina noturna.
                </p>
              )}
              {moodTrend > 10 && (
                <p className="text-sm">
                  🎉 Seu humor melhorou {moodTrend.toFixed(0)}% nos últimos dias. Você está no caminho certo!
                </p>
              )}
              {energyTrend < -10 && (
                <p className="text-sm">
                  ⚡ Sua energia está em baixa. Experimente o exercício de respiração ou técnicas de TCC.
                </p>
              )}
              {parseFloat(avgFocus) >= 7 && (
                <p className="text-sm">
                  🎯 Seu foco está excelente! Você está conseguindo se concentrar bem.
                </p>
              )}
              {history.length >= 7 && (
                <p className="text-sm">
                  🏆 Parabéns! Você está mantendo consistência com {history.length} registros.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
