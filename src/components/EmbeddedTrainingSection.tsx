import { motion } from "framer-motion";
import { Phone, Mail, MapPin, GraduationCap, Briefcase, RotateCcw, School, Code, Cpu, Terminal, Smartphone, Zap, Rocket } from "lucide-react";

export const EmbeddedTrainingSection = () => {
  const trainingPrograms = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "TechStepUp",
      subtitle: "For Aspirants and Fresh Graduates",
      description:
        "Designed for final-year students and recent graduates, this program builds strong foundations in Embedded System Software and Embedded Linux development. It combines academic theory with industry practices to help learners transition smoothly into the professional world.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "TechElevate",
      subtitle: "For Corporate Professionals (Upskill & Reskill)",
      description:
        "Targeted at working professionals looking to upgrade or diversify their embedded systems skillset. This track focuses on cutting-edge tools, frameworks, and real-time operating systems relevant to evolving industry needs.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&q=80",
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "TechReboot",
      subtitle: "For Practitioners Seeking Career Pivot",
      description:
        "Ideal for engineers and technologists aiming to shift into embedded systems from adjacent domains. The curriculum is structured to provide core theoretical understanding along with hands-on experience using COTS (Commercial Off-The-Shelf) boards.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80",
    },
    {
      icon: <School className="h-8 w-8" />,
      title: "TechBridge",
      subtitle: "For University Collaboration & Student Skill Upgrade",
      description:
        "This initiative partners with universities to provide embedded training modules that enhance academic learning with industry-ready practical exposure, aligning curriculum with real-world engineering challenges.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
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
            Embedded Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Your Trusted Innovation Partner
          </motion.p>
        </div>

        {/* Main Description with Visual Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-center max-w-4xl mx-auto text-muted-foreground leading-relaxed text-lg">
            We offer corporate training, industry-oriented professional training for students and 
            internship for budding engineers, in Embedded domain.
          </p>

          {/* Technology Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-12"
          >
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[
                { icon: <Code className="h-12 w-12" />, label: "C/C++" },
                { icon: <Cpu className="h-12 w-12" />, label: "ARM" },
                { icon: <Terminal className="h-12 w-12" />, label: "Linux" },
                { icon: <Smartphone className="h-12 w-12" />, label: "RTOS" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 group-hover:from-primary/20 group-hover:to-secondary/30 transition-all duration-300">
                    <div className="text-primary mb-2">{tech.icon}</div>
                    <p className="text-sm font-medium text-muted-foreground">{tech.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image between descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="my-12 flex justify-center"
          >
            <div className="relative w-full max-w-5xl h-64 md:h-80 rounded-2xl overflow-hidden apple-card">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&q=80"
                alt="Embedded Systems Training"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <p className="text-center max-w-4xl mx-auto text-muted-foreground leading-relaxed text-lg mt-4">
            Prodisyn Institute of Technology is the Learning and Excellence Hub of Prodisyn Innovations, 
            offering comprehensive, industry-oriented training programs in Embedded System Design. 
            Tailored for students, aspiring professionals, and corporate teams, these programs are designed 
            to bridge the gap between academic learning and real-world industry requirements.
          </p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="my-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Zap className="h-6 w-6" />, title: "Industry-Ready", desc: "Real-world projects" },
                { icon: <GraduationCap className="h-6 w-6" />, title: "Expert Mentors", desc: "Experienced instructors" },
                { icon: <Rocket className="h-6 w-6" />, title: "Career Growth", desc: "Boost your potential" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/10 hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary mb-3 flex justify-center">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <p className="text-center max-w-4xl mx-auto text-muted-foreground leading-relaxed text-lg mt-4">
            Focused on cutting-edge technologies such as ARM processors, Embedded RTOS, and Embedded Linux, 
            Prodisyn delivers targeted skill development to equip participants with niche and in-demand expertise. 
            Understanding that learners have diverse needs at various stages of their professional journey, 
            we have structured our training into four specialized programs—each uniquely designed to support 
            and empower individuals and organizations in building strong embedded systems capabilities.
          </p>
        </motion.div>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {trainingPrograms.map((program, index) => (
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
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 bg-background/90 rounded-xl backdrop-blur-sm shadow-lg">
                  <div className="text-primary">
                    {program.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-1 tracking-tight">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 font-medium">
                  {program.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {program.description}
                </p>
              </div>
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
            Ready to Start Your Embedded Systems Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our training team to discuss which program is right for you.
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
