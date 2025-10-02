"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Award, BookOpen, Brain } from "lucide-react";

export default function Contato() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-6xl md:text-8xl mb-6">
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Conversar?</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Entre em contato para agendar sua consulta ou tirar dúvidas
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Professional Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Professional Photo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl">
                      <img
                        src="/placeholder.svg"
                        alt="Eric Moreira - Psicólogo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-accent/20 -z-10"
                    />
                  </motion.div>

                  {/* Professional Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="font-display text-4xl mb-2">Eric Moreira</h2>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                      <Badge className="bg-accent/20 text-accent border-accent/30">
                        CRP XX/XXXXX
                      </Badge>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Psicólogo Clínico
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 max-w-2xl">
                      Psicólogo especialista em Terapia Cognitivo-Comportamental (TCC), com mais de 10 anos de experiência
                      no atendimento de adolescentes e adultos. Formação em Neurociências e atendimento humanizado.
                    </p>

                    {/* Specialties */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                        <Brain className="text-accent flex-shrink-0" size={24} />
                        <div className="text-left">
                          <p className="font-semibold text-sm">TCC</p>
                          <p className="text-xs text-muted-foreground">Especialista</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                        <Award className="text-accent flex-shrink-0" size={24} />
                        <div className="text-left">
                          <p className="font-semibold text-sm">Ansiedade</p>
                          <p className="text-xs text-muted-foreground">Foco Principal</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                        <BookOpen className="text-accent flex-shrink-0" size={24} />
                        <div className="text-left">
                          <p className="font-semibold text-sm">10+ anos</p>
                          <p className="text-xs text-muted-foreground">Experiência</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-xl bg-background/50 border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="font-display text-3xl mb-6">Envie uma mensagem</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome completo</label>
                      <Input placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">E-mail</label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone</label>
                      <Input type="tel" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Mensagem</label>
                      <Textarea placeholder="Como posso te ajudar?" rows={6} />
                    </div>
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Enviar Mensagem
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Respondo todas as mensagens em até 24 horas úteis
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div whileHover={{ y: -4 }}>
                <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-xl">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">(11) 98765-4321</p>
                      <Button size="sm" variant="outline">
                        Chamar no WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }}>
                <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-xl">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-mail</h3>
                      <p className="text-muted-foreground">contato@ericmoreira.psi.br</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }}>
                <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-xl">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 20h</p>
                      <p className="text-muted-foreground">Sábado: 8h às 14h</p>
                      <Badge className="mt-2 bg-accent/20 text-accent border-accent/30">
                        Atendimento Online e Presencial
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }}>
                <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-xl">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Localização</h3>
                      <p className="text-muted-foreground">
                        Av. Paulista, 1000 - Conjunto 500<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                      <Button size="sm" variant="outline" className="mt-3">
                        Ver no Mapa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}