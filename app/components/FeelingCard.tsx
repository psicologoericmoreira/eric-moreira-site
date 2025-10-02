"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FeelingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export const FeelingCard = ({ icon: Icon, title, description, onClick }: FeelingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-accent h-full"
        onClick={onClick}
      >
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-accent/10 rounded-full">
            <Icon size={32} className="text-accent" />
          </div>
          <h3 className="font-display text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};




