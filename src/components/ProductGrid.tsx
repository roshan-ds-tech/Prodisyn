import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
  const products = [
    {
      title: "ProSync X1",
      subtitle: "Ultimate Performance",
      price: "From $1,999",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop",
      gradient: true,
    },
    {
      title: "CodeForge Pro",
      subtitle: "Developer's Dream",
      price: "From $2,499",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
    },
    {
      title: "DataHub Elite",
      subtitle: "Intelligence Redefined",
      price: "From $3,499",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
    },
    {
      title: "CloudSync Station",
      subtitle: "Seamless Connectivity",
      price: "From $1,299",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            The latest. <span className="text-muted-foreground">Take a look at what's new.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
