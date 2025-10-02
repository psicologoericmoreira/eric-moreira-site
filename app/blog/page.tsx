"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Calendar, Clock, Mail, Share2, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const blogPosts = [
  {
    id: 1,
    slug: "tecnicas-tcc-ansiedade",
    title: "5 Técnicas da TCC para Controlar a Ansiedade no Dia a Dia",
    excerpt: "Descubra estratégias práticas e cientificamente comprovadas para gerenciar momentos de ansiedade.",
    category: "Ansiedade",
    date: "15 Mar 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    author: { name: "Eric", avatar: "/placeholder.svg" }
  },
  {
    id: 2,
    slug: "pensamentos-automaticos-negativos",
    title: "Como Identificar Pensamentos Automáticos Negativos",
    excerpt: "Aprenda a reconhecer padrões de pensamento que podem estar sabotando seu bem-estar emocional.",
    category: "TCC",
    date: "10 Mar 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80",
    author: { name: "Eric", avatar: "/placeholder.svg" }
  },
  {
    id: 3,
    slug: "depressao-quando-buscar-ajuda",
    title: "Depressão: Quando Buscar Ajuda Profissional",
    excerpt: "Entenda os sinais que indicam a necessidade de acompanhamento psicológico especializado.",
    category: "Depressão",
    date: "5 Mar 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    author: { name: "Eric", avatar: "/placeholder.svg" }
  },
  {
    id: 4,
    slug: "primeira-sessao-de-terapia",
    title: "O Que Esperar da Sua Primeira Sessão de Terapia",
    excerpt: "Um guia completo sobre como funciona a primeira consulta e como se preparar.",
    category: "Terapia",
    date: "1 Mar 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80",
    author: { name: "Eric", avatar: "/placeholder.svg" }
  },
];


const categories = ["Todos", "Ansiedade", "Depressão", "TCC", "Técnicas", "Estresse", "Terapia"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [email, setEmail] = useState("");

  const filteredPosts = selectedCategory === "Todos"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <TrendingUp size={16} className="text-accent" />
              <span className="text-sm font-medium">Conteúdo atualizado semanalmente</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-tight">
              Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Saúde Mental</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Artigos e recursos sobre psicologia, TCC e bem-estar emocional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 border-b sticky top-20 bg-background/95 backdrop-blur-lg z-40 shadow-sm">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-accent hover:bg-accent/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts - Main Column */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="wait">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-xl transition-all group overflow-hidden">
                      <div className="grid md:grid-cols-3 gap-6">
                        <Link href={`/blog/${post.slug}`} className="md:col-span-1">
                          <div className="aspect-video md:aspect-square overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </Link>
                        
                        <div className="md:col-span-2 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={post.author.avatar} />
                                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{post.author.name}</span>
                              <Badge variant="secondary" className="ml-auto">{post.category}</Badge>
                            </div>
                            
                            <Link href={`/blog/${post.slug}`}>
                              <h3 className="text-2xl font-display mb-2 group-hover:text-accent transition-colors">
                                {post.title}
                              </h3>
                            </Link>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} />
                                {post.readTime}
                              </span>
                            </div>
                            
                            <Button variant="ghost" size="sm">
                              <Share2 size={16} />
                              <span className="ml-2">Compartilhar</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="sticky top-32 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                      <Mail className="text-accent" />
                    </div>
                    <CardTitle>Newsletter Semanal</CardTitle>
                    <CardDescription>
                      Receba artigos, técnicas e insights toda semana
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Input 
                      placeholder="seu@email.com" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                    />
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Inscrever-se
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Sem spam. Cancele quando quiser.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>


              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Tópicos Populares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Ansiedade", "Autoestima", "Relacionamentos", "Estresse", "TCC", "Mindfulness", "Sono", "Autocuidado"].map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
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