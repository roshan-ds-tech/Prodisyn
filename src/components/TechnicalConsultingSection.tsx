import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const TechnicalConsultingSection = () => {
  const consultingServices = [
    {
      icon: "🏗️",
      title: "System Architecture Consulting",
      description:
        "Strategic guidance for designing robust and scalable embedded system architectures that align with your business objectives.",
    },
    {
      icon: "💻",
      title: "Software Design Advisory",
      description:
        "Expert advice on software design patterns, best practices, and optimization strategies for embedded applications.",
    },
    {
      icon: "🔒",
      title: "Cybersecurity Consulting",
      description:
        "Comprehensive security assessments and recommendations to protect your embedded systems from vulnerabilities.",
    },
    {
      icon: "⚙️",
      title: "Platform Software Consulting",
      description:
        "Guidance on selecting and integrating platform software solutions that meet your technical requirements.",
    },
    {
      icon: "✅",
      title: "Verification, Validation & Compliance Strategy",
      description:
        "Strategic approach to testing, validation, and regulatory compliance for your embedded products.",
    },
    {
      icon: "🛠️",
      title: "Toolchain & Technology Stack Evaluation",
      description:
        "Expert assessment and recommendations for tools and technologies that best fit your project needs.",
    },
    {
      icon: "🔗",
      title: "System Integration Strategy",
      description:
        "Strategic planning for seamless integration of components and systems in complex embedded environments.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight bg-gradient-to-br from-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2.5px_0_white] drop-shadow-[0_-2.5px_0_white] drop-shadow-[2.5px_0_0_white] drop-shadow-[-2.5px_0_0_white]"
          >
            Technical Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Our expertise in Embedded Systems domain help customers to accelerate
            product development, solve complex system integration challenges, and
            achieve optimized system performance.
          </motion.p>
        </div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-center max-w-4xl mx-auto text-muted-foreground leading-relaxed text-lg">
            At Prodisyn Innovations, our technical consulting services are designed
            to accelerate your product development journey with strategic guidance and
            deep domain expertise. Our seasoned engineers and domain specialists work
            collaboratively with your teams and stakeholders to address complex challenges,
            refine system architecture, and ensure technology alignment with business goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {consultingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="apple-card rounded-2xl p-8 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Accelerate Your Product Development?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss how we can help solve your
            embedded systems challenges.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="tel:+916360677217"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 63606 77217</span>
            </a>
            <a
              href="mailto:info@prodisyn.com"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>info@prodisyn.com</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">
              No.413, 27th Main Road, HSR Layout 1st sector, Bangalore 560102
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
