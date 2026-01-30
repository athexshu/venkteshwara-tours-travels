import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type DividerVariant = 'wave' | 'lotus' | 'mandala' | 'rays' | 'clouds';

interface SectionDividerProps {
  variant?: DividerVariant;
  className?: string;
  flip?: boolean;
  color?: string;
}

const WaveDivider = ({ flip, color }: { flip: boolean; color: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  
  return (
    <div ref={ref} className={`relative h-24 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        style={{ x: x1 }}
      >
        <path 
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" 
          className={color || 'fill-background'}
          opacity="0.7"
        />
      </motion.svg>
      <motion.svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        style={{ x: x2 }}
      >
        <path 
          d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,40 L1200,120 L0,120 Z" 
          className={color || 'fill-background'}
        />
      </motion.svg>
    </div>
  );
};

const LotusDivider = ({ flip }: { flip: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  
  return (
    <div ref={ref} className={`relative h-32 flex items-center justify-center overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.div 
        className="flex items-center space-x-4"
        style={{ scale, opacity }}
      >
        <motion.span 
          className="text-4xl"
          style={{ rotate }}
        >
          🌸
        </motion.span>
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <motion.span 
          className="text-5xl"
          animate={{ 
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🪷
        </motion.span>
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <motion.span 
          className="text-4xl"
          style={{ rotate: useTransform(rotate, r => -r) }}
        >
          🌸
        </motion.span>
      </motion.div>
    </div>
  );
};

const MandalaDivider = ({ flip }: { flip: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  
  return (
    <div ref={ref} className={`relative h-40 flex items-center justify-center ${flip ? 'rotate-180' : ''}`}>
      <motion.div
        className="relative"
        style={{ rotate, scale }}
      >
        <motion.div 
          className="w-24 h-24 rounded-full border-4 border-primary/30 flex items-center justify-center"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(212, 175, 55, 0.2)",
              "0 0 40px rgba(212, 175, 55, 0.4)",
              "0 0 20px rgba(212, 175, 55, 0.2)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.span 
            className="text-4xl"
            style={{ rotate: useTransform(rotate, r => -r) }}
          >
            🕉️
          </motion.span>
        </motion.div>
        
        {/* Orbiting elements */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3"
            style={{
              rotate: angle,
              transformOrigin: "3px 50px"
            }}
          >
            <motion.span 
              className="text-lg block"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              ✨
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const RaysDivider = ({ flip }: { flip: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  
  return (
    <div ref={ref} className={`relative h-32 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-primary/40 via-primary-glow/60 to-transparent origin-bottom"
            style={{
              rotate: i * 15 - 82.5,
              transformOrigin: "center bottom"
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
        <motion.div 
          className="relative z-10 text-4xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ☀️
        </motion.div>
      </motion.div>
    </div>
  );
};

const CloudsDivider = ({ flip, color }: { flip: boolean; color: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  return (
    <div ref={ref} className={`relative h-24 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="absolute w-full h-full opacity-60"
        style={{ x: x1 }}
      >
        <path 
          d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z" 
          className={color || 'fill-background'}
        />
      </motion.svg>
      <motion.svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        style={{ x: x2 }}
      >
        <path 
          d="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z" 
          className={color || 'fill-background'}
        />
      </motion.svg>
    </div>
  );
};

export const SectionDivider = ({ 
  variant = 'wave', 
  className = '',
  flip = false,
  color = 'fill-background'
}: SectionDividerProps) => {
  const dividers = {
    wave: <WaveDivider flip={flip} color={color} />,
    lotus: <LotusDivider flip={flip} />,
    mandala: <MandalaDivider flip={flip} />,
    rays: <RaysDivider flip={flip} />,
    clouds: <CloudsDivider flip={flip} color={color} />
  };

  return (
    <div className={`w-full ${className}`}>
      {dividers[variant]}
    </div>
  );
};

export default SectionDivider;
