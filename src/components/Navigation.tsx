import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to scroll to sections on the main page (if needed)
  const scrollToSection = (id: string) => {
    // Check if we are on the homepage before trying to scroll
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const offset = 56; // Adjust if nav height changes
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // If not on homepage, navigate home and then scroll (or just navigate)
      // For simplicity here, we'll just log or you could navigate home first
      console.log(`Need to navigate home to scroll to section: ${id}`);
      // Or navigate: window.location.href = `/#${id}`; (less smooth)
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
            >
              Prodisyn
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 text-sm">
              {/* Technology Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-foreground/70 hover:text-foreground hover:bg-transparent px-3 py-2 h-auto"
                  >
                    Technology
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {/* Option 1: Scroll links if Technology sections are on homepage */}
                  <DropdownMenuItem
                    onClick={() => scrollToSection("technology")} // Assuming 'technology' is the ID of the main section
                    className="cursor-pointer"
                  >
                    Overview
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => scrollToSection("automotive-section-id")} // Replace with actual ID if exists
                    className="cursor-pointer"
                  >
                    Automotive
                  </DropdownMenuItem>
                   <DropdownMenuItem
                    onClick={() => scrollToSection("medical-section-id")} // Replace with actual ID if exists
                    className="cursor-pointer"
                  >
                    Medical Devices
                  </DropdownMenuItem>
                   <DropdownMenuItem
                    onClick={() => scrollToSection("networking-section-id")} // Replace with actual ID if exists
                    className="cursor-pointer"
                  >
                    Networking
                  </DropdownMenuItem>
                   <DropdownMenuItem
                    onClick={() => scrollToSection("iot-section-id")} // Replace with actual ID if exists
                    className="cursor-pointer"
                  >
                    IoT & Edge
                  </DropdownMenuItem>

                  {/* Option 2: Use Links if Technology sub-items have separate pages */}
                  {/* <DropdownMenuItem asChild>
                      <Link to="/technology/automotive">Automotive</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                       <Link to="/technology/medical">Medical Devices</Link>
                    </DropdownMenuItem> */}
                    {/* Add more technology links here */}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-foreground/70 hover:text-foreground hover:bg-transparent px-3 py-2 h-auto"
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/services/product-engineering"
                      className="cursor-pointer"
                    >
                      Product Engineering
                    </Link>
                  </DropdownMenuItem>
                  {/* Add other service links here */}
                  <DropdownMenuItem
                   onClick={() => alert('Technical Consulting page coming soon!')} // Placeholder action
                   className="cursor-pointer"
                  >
                    Technical Consulting
                  </DropdownMenuItem>
                  <DropdownMenuItem
                   onClick={() => alert('Process Consulting page coming soon!')} // Placeholder action
                   className="cursor-pointer"
                  >
                    Process Consulting
                  </DropdownMenuItem>
                  <DropdownMenuItem
                   onClick={() => alert('Embedded Training page coming soon!')} // Placeholder action
                   className="cursor-pointer"
                  >
                    Embedded Training
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Training - Direct Scroll Link */}
              <button
                onClick={() => scrollToSection("training")}
                className="text-foreground/70 hover:text-foreground transition-colors px-3 py-2 rounded-md"
              >
                Training
              </button>

              {/* About - Direct Scroll Link */}
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/70 hover:text-foreground transition-colors px-3 py-2 rounded-md"
              >
                About
              </button>
            </div>
          </div>

          {/* Right side icons */}
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
              onClick={() => alert("Shopping cart functionality coming soon!")}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Input */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 flex flex-col gap-4 text-sm">
            {/* Mobile Technology Links (Example: direct scroll) */}
            <button
              onClick={() => scrollToSection("technology")}
              className="text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Technology (Overview)
            </button>
             <button
              onClick={() => scrollToSection("automotive-section-id")} // Replace ID
              className="text-foreground/70 hover:text-foreground transition-colors text-left pl-4" // Indent sub-items
            >
              Automotive
            </button>
             {/* Add other mobile technology links */}

            {/* Mobile Service Links */}
             <span className="text-foreground/70 text-left font-medium">Services</span>
            <Link
              to="/services/product-engineering"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/70 hover:text-foreground transition-colors text-left pl-4"
            >
              Product Engineering
            </Link>
             <button
               onClick={() => {alert('Consulting page coming soon!'); setIsMenuOpen(false);}}
               className="text-foreground/70 hover:text-foreground transition-colors text-left pl-4"
             >
                Consulting
             </button>
             {/* Add other mobile service links */}

            {/* Mobile Training & About */}
            <button
              onClick={() => scrollToSection("training")}
              className="text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection("about")}
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