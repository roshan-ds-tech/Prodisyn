import { motion } from "framer-motion";
import { Zap, Shield, Layers } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience unprecedented speed with cutting-edge processors and optimized architecture.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and advanced security features keep your data protected.",
    },
    {
      icon: Layers,
      title: "Seamless Integration",
      description: "Connect all your devices and workflows in one unified ecosystem.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 hover:glow-effect transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
