import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold">Prodisyn</h1>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#technology" className="text-foreground/70 hover:text-foreground transition-colors">Technology</a>
              <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">Services</a>
              <a href="#training" className="text-foreground/70 hover:text-foreground transition-colors">Training</a>
              <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground h-9 w-9">
              <ShoppingBag className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
