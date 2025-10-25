import { motion } from "framer-motion";
// Import Carousel components (assuming they are correctly exported from your UI library)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Make sure this path is correct

export const ProductEngineeringSection = () => {
  const engineeringServices = [
    {
      title: "Embedded Design and Development",
      description:
        "Our embedded engineering team specializes in building reliable and high-performance solutions tailored to your hardware platforms. We offer:",
      path: "/product_engineering1.png",
      list: [
        "Hardware Design & Development",
        "Board Support Package (BSP) & Board Bring-Up",
        "Middleware & Protocol Stack Integration",
        "Embedded Applications",
        "Embedded Testing",
      ],
    },
    {
      title: "Verification and Validation",
      description:
        "We ensure that your embedded systems meet quality, safety, and regulatory standards through rigorous validation processes.",
      path: "/product_engineering2.png",
      list: [
        "Software Verification & Validation",
        "System Integration & Validation",
        "Release & Acceptance Testing",
      ],
    },
    {
      title: "Release Management",
      description:
        "We emphasize disciplined release strategies to ensure smooth deployments and compliance.",
      path: "/product_engineering3.jpg",
      list: [
        "Quality Management System (QMS): Adherence to configuration management standards and industry best practices.",
        "Regulatory Compliance: Alignment with required standards and certifications based on domain (e.g., ISO, IEC, FDA, etc.).",
      ],
    },
    {
      title: "Transfer to Production",
      description:
        "We support your transition from prototype to full-scale production with precision and control.",
      path: "/product_engineering4.png",
      list: [
        "Manufacturing Process Definition: Assistance in setting up and documenting efficient, scalable manufacturing workflows.",
        "Production Testing Support: Design and implementation of test strategies for production line validation and quality assurance.",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4 tracking-tight bg-gradient-to-br from-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2.5px_0_white] drop-shadow-[0_-2.5px_0_white] drop-shadow-[2.5px_0_0_white] drop-shadow-[-2.5px_0_0_white]">
            Product Engineering
            <br/>
            <span className="text-muted-foreground font-normal">
              {" "}
              <br/>
              End-to-End Development Services.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            From concept to production and beyond, we provide comprehensive
            product engineering services to bring your innovative ideas to life.
            Our multidisciplinary teams ensure quality, reliability, and market
            readiness.
          </p>
        </div>

        {/* Carousel Implementation */}
        <Carousel
          opts={{
            align: "start",
            loop: true, // Optional: loop the slides
          }}
          className="w-full" // Adjust width as needed
        >
          <CarouselContent className="-ml-4"> {/* Negative margin to counteract item padding */}
            {engineeringServices.map((service, index) => (
              <CarouselItem
                key={index}
                // Adjust basis for how many items show at once
                // e.g., md:basis-1/2 for 2 items on medium screens, lg:basis-1/4 for 4 items on large
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1 h-full"> {/* Added padding wrapper and h-full */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start slightly lower
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation sooner
                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }} // Smoother transition
                    whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }} // Scale up and lift slightly on hover
                    whileTap={{ scale: 0.98 }} // Scale down slightly on tap/click
                    className="apple-card rounded-2xl p-8 flex flex-col h-full" // Ensure card takes full height of item
                  >
                    <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <img
                      src={service.path}
                      alt={service.title}
                      className="w-full h-auto object-contain mb-4 rounded-md flex-shrink-0" // Prevent image shrinking
                      style={{ aspectRatio: '16/9' }} // Give image a consistent aspect ratio
                    />
                    <div className="flex-grow"> {/* Allow text content to grow */}
                      <p className="text-muted-foreground leading-relaxed font-normal">
                        {service.description}
                      </p>
                      {service.list && service.list.length > 0 && (
                        <ul className="list-disc pl-5 mt-4 text-muted-foreground text-sm space-y-1">
                          {service.list.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-8" /> {/* Optional: Add navigation buttons */}
          <CarouselNext className="mr-8" />
        </Carousel>
      </div>
    </section>
  );
};