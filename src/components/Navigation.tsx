import React from "react"; // Ensure React is imported
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react"; // Added useRef
import { motion, AnimatePresence } from "framer-motion";
// Removed Swiper imports as they belong in the component using Swiper, not the navigation

// --- Dropdown Menu Data ---

const technologyMenuItems = [
  {
    category: "Explore Technology",
    links: [
      { title: "IoT and Edge Devices", sectionId: "technology" },
      { title: "Semiconductor", sectionId: "technology" },
      { title: "Embedded Security", sectionId: "technology" },
      { title: "Automotive", sectionId: "technology" },
    ],
  },
  {
    category: "Deep Dives",
    links: [
      { title: "Medical Devices", sectionId: "technology" },
      { title: "Networking", sectionId: "technology" },
    ],
  },
];

const servicesMenuItems = [
  {
    category: "Our Services",
    links: [
      { title: "Product Engineering", sectionId: "services" },
      { title: "Technical Consulting", sectionId: "services" },
      { title: "Process Consulting", sectionId: "services" },
    ],
  },
  {
    category: "Learn More",
    links: [
      { title: "Embedded Training", sectionId: "services" },
    ],
  },
];

// --- Dropdown Panel Component ---

interface DropdownLink {
  title: string;
  sectionId: string;
}

interface DropdownCategory {
  category: string;
  links: DropdownLink[];
}

interface DropdownPanelProps {
  items: DropdownCategory[];
  onLinkClick: (id: string) => void;
  // Add prop to know which dropdown is active for positioning if needed
  // For simplicity, we are using translate-x-1/2 which works for centered navs
}

const DropdownPanel: React.FC<DropdownPanelProps> = ({ items, onLinkClick }) => {
  const panelVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={panelVariants}
      // Position absolutely below the nav item. left-1/2 -translate-x-1/2 centers it.
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-60" // Higher z-index than overlay
      // Prevent closing when mouse moves onto the panel itself
      onMouseEnter={(e) => e.stopPropagation()}
    >
      {/* Apple-style blurred background panel */}
      <div className="apple-blur p-6 rounded-lg shadow-2xl border border-border/50 w-max">
        {/* Grid layout for columns */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {items.map((group) => (
            <div key={group.category} className="flex flex-col gap-2">
              {/* Category Title */}
              <h4 className="text-xs font-semibold text-foreground/50 tracking-wide uppercase">
                {group.category}
              </h4>
              {/* Links */}
              <div className="flex flex-col gap-1.5">
                {group.links.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => onLinkClick(link.sectionId)}
                    className="text-sm text-foreground/90 hover:text-foreground text-left transition-colors whitespace-nowrap"
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


// --- Main Navigation Component ---
// Changed to default export function App() for compatibility
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Timer ref for delayed closing
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 56; // Height of the nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setOpenDropdown(null); // Close dropdown on scroll action
    }
  };

  // Open the specified dropdown menu on hover, clear any close timer
  const handleDropdownEnter = (menu: string) => {
    if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
    }
    setOpenDropdown(menu);
  };

  // Start a timer to close the dropdown menu when the mouse leaves
  const handleDropdownLeave = () => {
     // Set a short delay before closing, allowing mouse to move between trigger and panel
     leaveTimerRef.current = setTimeout(() => {
        setOpenDropdown(null);
     }, 150); // Adjust delay as needed (e.g., 150ms)
  };

   // Clear the close timer if the mouse enters the dropdown panel area (handled by onMouseEnter on DropdownPanel's motion.div)
   // Or if mouse enters back onto a trigger element
   const clearLeaveTimer = () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
    }
   }


  // Helper for closing all popups (mobile menu, search, dropdowns)
  const closeAllPopups = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setOpenDropdown(null);
     if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current); // Also clear timer
        leaveTimerRef.current = null;
    }
  }

  // Animation variants for the blur overlay
  const blurOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
    };
  }, []);


  return (
    // Wrap everything in a React Fragment <> to allow sibling elements (nav + overlay)
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-border/50"
        // Use onMouseLeave with the timer logic
        onMouseLeave={handleDropdownLeave}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* === LEFT SIDE (Logo & Desktop Links) === */}
            <div className="flex items-center gap-8">
              {/* Logo/Brand Button */}
              <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    closeAllPopups(); // Ensure dropdown closes
                }}
                onMouseEnter={clearLeaveTimer} // Clear timer if hovering logo
                className="text-xl font-semibold hover:opacity-80 transition-opacity"
              >
                <img src="/prodisyn_logo.png" alt="Prodisyn_logo" className="w-[200px] h-[50px]"/>
              </button>
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-8 text-sm">
                {/* Technology Dropdown Wrapper */}
                <div
                  className="relative h-14 flex items-center" // Height matches nav, flex centers button vertically
                  onMouseEnter={() => handleDropdownEnter('tech')}
                  // onMouseLeave is handled by the parent <nav>
                >
                  <button
                    // Keep onClick for direct navigation if needed, or remove if only dropdown
                    // onClick={() => scrollToSection('technology')}
                    className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Technology
                    {/* Animated Chevron */}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === 'tech' ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {/* Dropdown Panel (Animated with AnimatePresence) */}
                  <AnimatePresence>
                    {openDropdown === 'tech' && (
                      <DropdownPanel
                        items={technologyMenuItems}
                        onLinkClick={scrollToSection}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Dropdown Wrapper */}
                <div
                  className="relative h-14 flex items-center"
                  onMouseEnter={() => handleDropdownEnter('services')}
                >
                  <button
                    // onClick={() => scrollToSection('services')}
                    className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === 'services' ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === 'services' && (
                      <DropdownPanel
                        items={servicesMenuItems}
                        onLinkClick={scrollToSection}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Regular Links (clear timer on hover) */}
                <button
                  onClick={() => scrollToSection('training')}
                  onMouseEnter={clearLeaveTimer} // Clear timer
                  className="text-foreground/70 hover:text-foreground transition-colors h-14 flex items-center" // Ensure consistent height for hover area
                >
                  Training
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  onMouseEnter={clearLeaveTimer} // Clear timer
                  className="text-foreground/70 hover:text-foreground transition-colors h-14 flex items-center" // Ensure consistent height for hover area
                >
                  About
                </button>
              </div>
            </div>

            {/* === RIGHT SIDE (Icons) === */}
            <div className="flex items-center gap-4">
              {/* Search Icon/Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/70 hover:text-foreground h-9 w-9"
                onClick={() => {
                  const nextSearchState = !isSearchOpen;
                  setIsMenuOpen(false);
                  setOpenDropdown(null);
                  if (leaveTimerRef.current) {
                      clearTimeout(leaveTimerRef.current);
                      leaveTimerRef.current = null;
                  }
                  // Set the new state for search
                  setIsSearchOpen(nextSearchState);
                }}
                onMouseEnter={clearLeaveTimer} // Clear timer
              >
                <Search className="h-4 w-4" />
              </Button>
              {/* Shopping Bag Icon/Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/70 hover:text-foreground h-9 w-9"
                onClick={() => alert('Shopping cart functionality coming soon!')}
                onMouseEnter={clearLeaveTimer} // Clear timer
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
              {/* Mobile Menu Icon/Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9"
                onClick={() => {
                    const nextMenuState = !isMenuOpen;
                        // Close other popups
                        setIsSearchOpen(false);
                        setOpenDropdown(null);
                        if (leaveTimerRef.current) {
                            clearTimeout(leaveTimerRef.current);
                            leaveTimerRef.current = null;
                        }
                        // Set the new state for the mobile menu
                        setIsMenuOpen(nextMenuState);// Toggle mobile menu state *after* closing others
                }}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>

          </div>

          {/* === SEARCH PANEL (Conditional Rendering) === */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="py-4 border-t border-border/50">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    autoFocus={true} // Focus input when it appears
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* === MOBILE MENU PANEL (Conditional Rendering) === */}
          {/* Note: Mobile doesn't have dropdowns in this version, just links */}
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

      {/* --- Body Blur Overlay (Conditional Rendering) --- */}
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm pointer-events-none" // Make overlay non-interactive by default
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={blurOverlayVariants}
            transition={{ duration: 0.2 }} // Match dropdown animation time
             // Allow mouse events to pass through unless needed (handled by nav logic)
             // onClick={handleDropdownLeave} // Remove onClick from overlay
             // onMouseEnter={handleDropdownLeave} // Remove onMouseEnter from overlay
          />
        )}
      </AnimatePresence>
    </>
  );
};

