import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
            >
              Prodisyn
            </button>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <button
                onClick={() => scrollToSection('technology')}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                About
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/70 hover:text-foreground h-9 w-9"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/70 hover:text-foreground h-9 w-9"
              onClick={() => alert('Shopping cart functionality coming soon!')}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="py-4 border-t border-border/50">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              autoFocus
            />
          </div>
        )}

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 flex flex-col gap-4 text-sm">
            <button
              onClick={() => scrollToSection('technology')}
              className="text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              About
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
