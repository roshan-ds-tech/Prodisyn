import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
  const products = [
    {
      title: "Automotive",
      subtitle: "Next-generation applications",
      price: "Reliable communication interfaces and infotainment integration",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=800&fit=crop",
      gradient: true,
    },
    {
      title: "Medical Devices",
      subtitle: "Safe, high-reliability systems",
      price: "Embedded software with compliance in mind",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop",
    },
    {
      title: "Networking",
      subtitle: "End-to-end product designs",
      price: "Hardware, software, mechanical and compliance certifications",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=800&fit=crop",
    },
    {
      title: "IoT & Edge",
      subtitle: "Connected solutions",
      price: "Real-time sensing, edge analytics, and cloud communication",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=800&fit=crop",
    },
  ];

  return (
    <section id="technology" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4 tracking-tight">
            Technology. <span className="text-muted-foreground font-normal">Our core capabilities.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
