import { motion } from "framer-motion";
import { Phone, Mail, MapPin, TrendingUp, GitBranch, Shield, Settings, Users } from "lucide-react";

export const ProcessConsultingSection = () => {
  const processServices = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Software Development Lifecycle (SDLC) Optimization",
      description:
        "Streamline your development processes with optimized workflows, improved collaboration, and accelerated delivery cycles.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Agile & DevOps Enablement",
      description:
        "Transform your development culture with Agile methodologies and DevOps practices for continuous integration and deployment.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Regulatory Compliance Consulting",
      description:
        "Navigate complex regulatory requirements with expert guidance on industry standards and compliance frameworks.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "CI/CD & Test Automation Strategy",
      description:
        "Implement robust continuous integration, delivery pipelines, and comprehensive test automation strategies.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&q=80",
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
            Process Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Optimizing Processes, Driving Success.
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
            We provide expert guidance on adopting industry best practices and optimizing
            processes to speed up project execution and delivery, driving faster time to market.
          </p>
          
          {/* Image between descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="my-12 flex justify-center"
          >
            <div className="relative w-full max-w-4xl h-64 md:h-80 rounded-2xl overflow-hidden apple-card">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80"
                alt="Process Consulting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <p className="text-center max-w-4xl mx-auto text-muted-foreground leading-relaxed text-lg mt-4">
            At Prodisyn Innovations, our Process Consulting Services are tailored to help organizations
            enhance operational efficiency, improve software quality, and accelerate time-to-market.
            We work closely with engineering and management teams to streamline development workflows,
            enforce compliance, and adopt best-in-class methodologies that drive consistent delivery excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {processServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="apple-card rounded-2xl overflow-hidden h-full flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 bg-background/90 rounded-xl backdrop-blur-sm shadow-lg">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-primary/5 to-secondary/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
              Why Choose Our Process Consulting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Foster better teamwork and cross-functional collaboration across your organization
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">
                  Ensure higher quality with best-practice methodologies
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-muted-foreground text-sm">
                  Drive ongoing optimization and operational excellence
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Optimize Your Development Processes?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss how we can help streamline
            your operations and accelerate delivery.
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
