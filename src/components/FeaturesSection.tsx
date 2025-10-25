import { motion } from "framer-motion";
import { Zap, Shield, Layers } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Product Engineering",
      description:
        "Expert consulting and design services that empower engineering teams to streamline development, adopt best practices, and bring products to market faster.",
    },
    {
      icon: Shield,
      title: "Scalable Solutions",
      description:
        "From embedded hardware and firmware to platform software, we build intelligent, high-performance solutions designed to scale with your vision.",
    },
    {
      icon: Layers,
      title: "Professional Training",
      description:
        "Industry-aligned training programs that transform aspiring engineers into confident professionals with practical skills and hands-on experience.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4 tracking-tight">
            Services.{" "}
            <span className="text-muted-foreground font-normal">
              What we offer.
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Increased gap slightly for shadow */}
          {features.map((feature, index) => (
            // Container for card and shadow - Added 'group' class
            <div key={index} className="relative group">
              {/* Gradient Background Shadow Div */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 transform scale-95" // Increased hover opacity to 75
                // Removed animation props, now controlled by hover
              />

              {/* Main Card Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                 // Added subtle lift on hover for the card itself
                whileHover={{ y: -5 }}
                className="relative apple-card rounded-2xl p-8 h-full z-10 transition-transform duration-300" // Added transition-transform
              >
                {/* Icon Container with Gradient */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mb-6 shadow-4xl">
                  {/* Changed icon color to white for contrast */}
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

