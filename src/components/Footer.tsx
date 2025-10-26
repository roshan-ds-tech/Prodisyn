import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Technology",
      links: [
        { label: "IoT and Edge Devices", href: "#" },
        { label: "Semiconductor", href: "#" },
        { label: "Embedded Security", href: "#" },
        { label: "Automotive", href: "#" },
        { label: "Medical Devices", href: "#" },
        { label: "Networking", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Product Engineering", href: "/services/product-engineering" },
        { label: "Technical Consulting", href: "/services/technical-consulting" },
        { label: "Process Consulting", href: "#" },
        { label: "Embedded Training", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Resources", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-semibold mb-4 block">
              Prodisyn
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Intelligence Embedded. Solutions Engineered. We turn innovative
              concepts into production-ready embedded systems.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@prodisyn.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@prodisyn.com</span>
              </a>
              <a
                href="tel:+916360677217"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 63606 77217</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  No.413, 27th Main Road, HSR Layout 1st sector,
                  <br /> Bangalore 560102
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prodisyn Innovations. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};