import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Palette, Play, FileText, Heart, Users } from 'lucide-react';

const servicesData = [
  {
    icon: Lightbulb,
    title: 'Real-world Case Studies',
    description: 'Comprehensive analysis and solutions with measurable outcomes for complex technical challenges',
    color: 'text-primary',
    bgColor: 'bg-primary/20'
  },
  {
    icon: Palette,
    title: 'Interactive, Responsive UI Designs',
    description: 'Modern, accessible user interfaces that work seamlessly across all devices and platforms',
    color: 'text-accent',
    bgColor: 'bg-accent/20'
  },
  {
    icon: Play,
    title: 'Animation & Prototype Demos',
    description: 'Engaging animations and interactive prototypes that bring ideas to life',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/20'
  },
  {
    icon: FileText,
    title: 'UX Writing and Flows',
    description: 'Clear, intuitive user experience design with thoughtful content and navigation flows',
    color: 'text-secondary',
    bgColor: 'bg-secondary/20'
  },
  {
    icon: Heart,
    title: 'Passion Projects',
    description: 'Unique and innovative projects that showcase creativity and technical expertise',
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/20'
  },
  {
    icon: Users,
    title: 'Professional Documentation',
    description: 'Comprehensive documentation and stakeholder endorsements for project transparency',
    color: 'text-primary-glow',
    bgColor: 'bg-primary-glow/20'
  }
];

const ServiceCard = ({ service, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass p-6 rounded-lg hover:glow transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon size={32} className={service.color} />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-surface-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I Can <span className="gradient-text">Help You With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions and services to bring your ideas to life with cutting-edge technology and innovative approaches
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-8">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-neon"
          >
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;