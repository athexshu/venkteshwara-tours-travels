import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive = slower, Negative = faster
  direction?: 'up' | 'down';
}

export const ParallaxSection = ({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface ParallaxBackgroundProps {
  imageSrc: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  overlayColor?: string;
}

export const ParallaxBackground = ({ 
  imageSrc, 
  className = '', 
  speed = 0.3,
  overlay = true,
  overlayColor = 'from-primary/30 via-transparent to-secondary/20'
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y, scale }}
      >
        <img 
          src={imageSrc} 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-br ${overlayColor}`} />
      )}
    </div>
  );
};

export default ParallaxSection;
