import { motion } from "framer-motion";
import { Laptop, Smartphone, Tablet, Watch, Headphones, Package } from "lucide-react";

export const CategoryNav = () => {
  const categories = [
    { icon: Laptop, label: "Workstations" },
    { icon: Smartphone, label: "Devices" },
    { icon: Tablet, label: "Tablets" },
    { icon: Watch, label: "Wearables" },
    { icon: Headphones, label: "Audio" },
    { icon: Package, label: "Accessories" },
  ];

  return (
    <section className="py-16 px-6 border-b border-border">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center group-hover:glow-effect transition-all">
                <category.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {category.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
