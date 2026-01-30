import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroBackground: string;
}

const HeroSection = ({ heroBackground }: HeroSectionProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);
  
  // Light rays parallax
  const ray1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const ray2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <img 
          src={heroBackground} 
          alt="Spiritual landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Spiritual overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20" />
      <motion.div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Animated Divine light rays with parallax */}
      <motion.div 
        className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-primary-glow/30 to-transparent transform -skew-x-12"
        style={{ y: ray1Y }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-primary/20 to-transparent transform skew-x-12"
        style={{ y: ray2Y }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-0 left-1/2 w-3 h-full bg-gradient-to-b from-primary-glow/20 to-transparent"
        style={{ y: ray1Y }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      
      {/* Content with parallax */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 animate-divine-gradient bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Vyankateshwara Travale
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Your Journey, Our Blessing ✨
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="btn-sacred text-lg px-12 py-6 glow-divine"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Tour 🌸
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating elements with animations and parallax */}
      <motion.div 
        className="absolute bottom-10 left-10 text-white/60 text-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
      >
        🕉️
      </motion.div>
      <motion.div 
        className="absolute top-1/4 right-20 text-white/40 text-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '150%']) }}
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        ✨
      </motion.div>
      <motion.div 
        className="absolute bottom-1/3 right-10 text-white/50 text-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '80%']) }}
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🌸
      </motion.div>
      <motion.div 
        className="absolute top-1/3 left-16 text-white/30 text-xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '120%']) }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ☸️
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
