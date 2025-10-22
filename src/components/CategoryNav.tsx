import { motion } from "framer-motion";
import { Laptop, Smartphone, Tablet, Watch, Headphones, Package } from "lucide-react";

export const CategoryNav = () => {
  const categories = [
    { icon: Laptop, label: "Engineering", section: "technology" },
    { icon: Smartphone, label: "Consulting", section: "services" },
    { icon: Tablet, label: "Training", section: "training" },
    { icon: Watch, label: "IoT", section: "technology" },
    { icon: Headphones, label: "Automotive", section: "technology" },
    { icon: Package, label: "Medical", section: "technology" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 56;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 px-6 border-b border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(category.section)}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-all">
                <category.icon className="h-6 w-6 text-foreground/70" />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                {category.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
