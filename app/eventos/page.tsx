"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video, MapPin, ChevronRight, CheckCircle2, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/app/hooks/use-toast";

const upcomingEvents = [
  {
    id: 1,
    title: "Workshop: Técnicas de TCC para Ansiedade",
    description: "Aprenda ferramentas práticas da Terapia Cognitivo-Comportamental para gerenciar a ansiedade no dia a dia.",
    date: "15 de Outubro, 2024",
    time: "19:00 - 21:00",
    duration: "2 horas",
    format: "Online ao vivo",
    spots: 30,
    spotsLeft: 12,
    type: "Workshop",
    topics: ["Respiração diafragmática", "Reestruturação cognitiva", "Técnicas de grounding"],
    price: "Gratuito",
    status: "Inscrições abertas",
  },
  {
    id: 2,
    title: "Palestra: Depressão na Era Digital",
    description: "Entenda como o mundo digital impacta nossa saúde mental e aprenda estratégias para manter o equilíbrio.",
    date: "22 de Outubro, 2024",
    time: "20:00 - 21:30",
    duration: "1h30min",
    format: "Live no Instagram",
    spots: null,
    spotsLeft: null,
    type: "Palestra",
    topics: ["Redes sociais e autoestima", "FOMO e ansiedade", "Desconexão saudável"],
    price: "Gratuito",
    status: "Inscrições abertas",
  },
  {
    id: 3,
    title: "Minicurso: Primeiros Passos na TCC",
    description: "Introdução completa aos princípios e técnicas fundamentais da Terapia Cognitivo-Comportamental.",
    date: "05 de Novembro, 2024",
    time: "19:00 - 21:00",
    duration: "4 encontros de 2h",
    format: "Online ao vivo (Zoom)",
    spots: 20,
    spotsLeft: 8,
    type: "Minicurso",
    topics: ["Fundamentos da TCC", "Identificação de pensamentos", "Técnicas práticas", "Exercícios guiados"],
    price: "R$ 297,00",
    status: "Últimas vagas",
  },
];

const pastEvents = [
  {
    title: "Workshop de Inteligência Emocional",
    date: "Setembro 2024",
    participants: 45,
  },
  {
    title: "Palestra sobre Burnout",
    date: "Agosto 2024",
    participants: 120,
  },
  {
    title: "Minicurso de Mindfulness e TCC",
    date: "Julho 2024",
    participants: 35,
  },
];

export default function Eventos() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const { toast } = useToast();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { name: "Início", url: "https://www.psicologoericmoreira.com/" },
      { name: "Eventos", url: "https://www.psicologoericmoreira.com/eventos" }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá um email de confirmação em breve.",
    });
    setFormData({ name: "", email: "", phone: "" });
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
        
        {/* Animated Calendar Icon */}
        <motion.div
          animate={{
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 opacity-5"
        >
          <Calendar size={200} className="text-primary" />
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mb-8"
            >
              <Calendar size={40} className="text-primary-foreground" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Eventos & Workshops
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Participe de lives, palestras e workshops sobre TCC e saúde mental. 
              Aprenda técnicas práticas e conecte-se com uma comunidade comprometida com o bem-estar.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Video size={16} className="text-accent" />
                <span>Online ao vivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-accent" />
                <span>Interativo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Certificado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Próximos Eventos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira a agenda de eventos e garanta sua vaga nos workshops e minicursos.
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-accent/50 transition-all overflow-hidden group">
                  <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                    {/* Event Details */}
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                              {event.type}
                            </Badge>
                            {event.status === "Últimas vagas" && (
                              <Badge variant="destructive" className="animate-pulse">
                                {event.status}
                              </Badge>
                            )}
                            {event.status === "Inscrições abertas" && (
                              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                                {event.status}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                            {event.title}
                          </CardTitle>
                        </div>
                        <div className="text-3xl font-display text-accent flex-shrink-0">
                          {event.price}
                        </div>
                      </div>

                      <CardDescription className="text-base leading-relaxed">
                        {event.description}
                      </CardDescription>

                      {/* Info Grid */}
                      <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3">
                          <Calendar size={20} className="text-accent flex-shrink-0" />
                          <div>
                            <div className="text-sm text-muted-foreground">Data</div>
                            <div className="font-medium">{event.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock size={20} className="text-accent flex-shrink-0" />
                          <div>
                            <div className="text-sm text-muted-foreground">Horário</div>
                            <div className="font-medium">{event.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Video size={20} className="text-accent flex-shrink-0" />
                          <div>
                            <div className="text-sm text-muted-foreground">Formato</div>
                            <div className="font-medium">{event.format}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users size={20} className="text-accent flex-shrink-0" />
                          <div>
                            <div className="text-sm text-muted-foreground">Vagas</div>
                            <div className="font-medium">
                              {event.spotsLeft ? `${event.spotsLeft} disponíveis` : "Ilimitadas"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Topics */}
                      <div className="pt-4 border-t border-border">
                        <div className="text-sm font-semibold mb-3">O que você vai aprender:</div>
                        <div className="flex flex-wrap gap-2">
                          {event.topics.map((topic, idx) => (
                            <Badge key={idx} variant="outline" className="bg-muted/50">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>

                    {/* Registration Form */}
                    <div className="bg-muted/30 p-6 flex flex-col justify-center">
                      {selectedEvent === event.id ? (
                        <motion.form
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onSubmit={handleSubmit}
                          className="space-y-4"
                        >
                          <div>
                            <Label htmlFor={`name-${event.id}`}>Nome Completo</Label>
                            <Input
                              id={`name-${event.id}`}
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor={`email-${event.id}`}>Email</Label>
                            <Input
                              id={`email-${event.id}`}
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor={`phone-${event.id}`}>Telefone (WhatsApp)</Label>
                            <Input
                              id={`phone-${event.id}`}
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                              Confirmar Inscrição
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              className="w-full"
                              onClick={() => setSelectedEvent(null)}
                            >
                              Cancelar
                            </Button>
                          </div>
                        </motion.form>
                      ) : (
                        <div className="space-y-4">
                          <Button
                            className="w-full bg-accent hover:bg-accent/90 group"
                            onClick={() => setSelectedEvent(event.id)}
                          >
                            Inscrever-se Agora
                            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <div className="text-center">
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              <Bell size={16} className="mr-2" />
                              Me avise sobre este evento
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Eventos Anteriores
            </h2>
            <p className="text-muted-foreground">
              Confira alguns dos eventos que já realizamos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Calendar size={32} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-accent">
                      <Users size={16} />
                      <span>{event.participants} participantes</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




