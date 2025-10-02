"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";

const termos = [
  {
    termo: "TCC - Terapia Cognitivo-Comportamental",
    definicao: "Abordagem terapêutica baseada em evidências que trabalha a relação entre pensamentos, emoções e comportamentos. Foca em modificar padrões disfuncionais através de técnicas práticas.",
    categoria: "Abordagens",
  },
  {
    termo: "Pensamento Automático",
    definicao: "Pensamentos que surgem espontaneamente em nossa mente, geralmente em resposta a situações. Podem ser positivos, negativos ou neutros, e influenciam diretamente nossas emoções.",
    categoria: "Conceitos Básicos",
  },
  {
    termo: "Reestruturação Cognitiva",
    definicao: "Técnica da TCC que envolve identificar, questionar e modificar pensamentos distorcidos ou disfuncionais, substituindo-os por pensamentos mais realistas e adaptativos.",
    categoria: "Técnicas",
  },
  {
    termo: "Distorções Cognitivas",
    definicao: "Padrões de pensamento irracionais ou exagerados que distorcem a realidade. Exemplos: catastrofização, pensamento tudo-ou-nada, leitura mental.",
    categoria: "Conceitos Básicos",
  },
  {
    termo: "Exposição",
    definicao: "Técnica terapêutica que envolve enfrentar gradualmente situações ou estímulos temidos, ajudando a reduzir a ansiedade através da habituação.",
    categoria: "Técnicas",
  },
  {
    termo: "Mindfulness",
    definicao: "Prática de atenção plena ao momento presente, sem julgamento. Ajuda a reduzir ruminação e aumentar a consciência sobre pensamentos e emoções.",
    categoria: "Técnicas",
  },
  {
    termo: "Ansiedade Generalizada (TAG)",
    definicao: "Transtorno caracterizado por preocupação excessiva e persistente sobre diversos aspectos da vida, acompanhada de sintomas físicos como tensão muscular e inquietação.",
    categoria: "Transtornos",
  },
  {
    termo: "Ataque de Pânico",
    definicao: "Episódio súbito de medo intenso acompanhado de sintomas físicos como taquicardia, falta de ar, tontura e sensação de perda de controle.",
    categoria: "Transtornos",
  },
  {
    termo: "Depressão",
    definicao: "Transtorno do humor caracterizado por tristeza persistente, perda de interesse em atividades, alterações no sono/apetite e sentimentos de desesperança.",
    categoria: "Transtornos",
  },
  {
    termo: "Crenças Centrais",
    definicao: "Ideias profundas e rígidas sobre si mesmo, os outros e o mundo, geralmente formadas na infância. Influenciam fortemente nossos pensamentos automáticos e comportamentos.",
    categoria: "Conceitos Básicos",
  },
  {
    termo: "Registro de Pensamentos",
    definicao: "Ferramenta da TCC onde se anota situações, pensamentos, emoções e comportamentos para identificar padrões e trabalhar a reestruturação cognitiva.",
    categoria: "Técnicas",
  },
  {
    termo: "Grounding (Ancoragem)",
    definicao: "Técnicas que ajudam a trazer a atenção para o momento presente, especialmente úteis durante crises de ansiedade ou pânico. Incluem técnicas sensoriais como respiração e observação do ambiente.",
    categoria: "Técnicas",
  },
];

const categorias = ["Todas", "Abordagens", "Conceitos Básicos", "Técnicas", "Transtornos"];

export default function Glossario() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [termoSelecionado, setTermoSelecionado] = useState<string | null>(null);

  const termosFiltrados = termos.filter((t) => {
    const matchBusca = t.termo.toLowerCase().includes(busca.toLowerCase()) ||
                       t.definicao.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoriaAtiva === "Todas" || t.categoria === categoriaAtiva;
    return matchBusca && matchCategoria;
  });

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block p-6 bg-accent/10 rounded-full mb-6"
            >
              <BookOpen size={48} className="text-accent" />
            </motion.div>
            
            <h1 className="font-display text-6xl md:text-8xl leading-tight mb-6">
              Glossário{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                TCC
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Entenda os principais termos e conceitos da Terapia Cognitivo-Comportamental
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Buscar termo..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-12 h-14 text-lg backdrop-blur-xl bg-background/50 border-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {categorias.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                  categoriaAtiva === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {termosFiltrados.map((termo, index) => (
                <motion.div
                  key={termo.termo}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    onClick={() => setTermoSelecionado(termo.termo === termoSelecionado ? null : termo.termo)}
                    className="cursor-pointer"
                  >
                    <Card className={`h-full backdrop-blur-xl bg-gradient-to-br from-background/80 to-primary/5 border-primary/20 shadow-lg hover:shadow-2xl transition-all ${
                      termoSelecionado === termo.termo ? "ring-2 ring-accent" : ""
                    }`}>
                      <CardContent className="p-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                          {termo.categoria}
                        </div>
                        <h3 className="font-display text-xl mb-3">{termo.termo}</h3>
                        <AnimatePresence>
                          {termoSelecionado === termo.termo && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-muted-foreground leading-relaxed"
                            >
                              {termo.definicao}
                            </motion.p>
                          )}
                        </AnimatePresence>
                        {termoSelecionado !== termo.termo && (
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {termo.definicao}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {termosFiltrados.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                Nenhum termo encontrado. Tente outra busca.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
