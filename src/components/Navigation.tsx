import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold gradient-text">ProdiStore</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">Products</a>
              <a href="#solutions" className="text-foreground/80 hover:text-foreground transition-colors">Solutions</a>
              <a href="#technology" className="text-foreground/80 hover:text-foreground transition-colors">Technology</a>
              <a href="#support" className="text-foreground/80 hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
