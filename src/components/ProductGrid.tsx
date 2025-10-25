import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
  const products = [
    {
      title: "Automotive",
      subtitle: "Next-generation applications",
      price: "Reliable communication interfaces and infotainment integration",
      image: "/tesla.png", // Ensure this image is in your public folder
      gradient: true,
       // <-- This makes the Automotive image smaller
    },
    {
      title: "Medical Devices",
      subtitle: "Safe, high-reliability systems",
      price: "Embedded software with compliance in mind",
      image: "/medical.png", // Ensure this image is in your public folder
      // No imageSize prop here, defaults to 'normal' in ProductCard
    },
    {
      title: "Networking",
      subtitle: "End-to-end product designs",
      price: "Hardware, software, mechanical and compliance certifications",
      image: "/networking.jpg", // Ensure this image is in your public folder
      // No imageSize prop here, defaults to 'normal' in ProductCard
    },
    {
      title: "IoT & Edge",
      subtitle: "Connected solutions",
      price: "Real-time sensing, edge analytics, and cloud communication",
      image: "/iot.png", // Ensure this image is in your public folder
      // No imageSize prop here, defaults to 'normal' in ProductCard
    },
  ];

  return (
    <section id="technology" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4 tracking-tight">
            Technology.{" "}
            <span className="text-muted-foreground font-normal">
              Our core capabilities.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            // Pass the whole product object, including imageSize if present
            <ProductCard key={index} {...product}/>
          ))}
        </div>
      </div>
    </section>
  );
};

