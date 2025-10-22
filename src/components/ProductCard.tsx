import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  gradient?: boolean;
}

export const ProductCard = ({ title, subtitle, price, image, gradient = false }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden rounded-2xl p-8 h-[500px] group cursor-pointer ${
        gradient ? "bg-secondary/50" : "apple-card"
      }`}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-2 tracking-tight">{title}</h3>
          <p className="text-lg text-muted-foreground mb-4 font-normal">{subtitle}</p>
          <p className="text-base text-muted-foreground">{price}</p>
        </div>
        
        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all text-sm font-medium">
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-80 group-hover:scale-105 transition-transform duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
