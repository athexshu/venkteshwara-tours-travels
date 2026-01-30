import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Sparkles } from 'lucide-react';

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent("Hi! I'm interested in booking a tour with Vyankateshwara Travale.")}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Action buttons */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* WhatsApp Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0,
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 20
                }
              }}
              exit={{ 
                scale: 0, 
                opacity: 0, 
                y: 20,
                transition: { delay: 0.05, duration: 0.2 }
              }}
              onClick={handleWhatsApp}
              className="group flex items-center gap-3 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="pl-4 pr-1 py-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat on WhatsApp
              </span>
              <div className="w-12 h-12 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
            </motion.button>

            {/* Call Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.1,
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 20
                }
              }}
              exit={{ 
                scale: 0, 
                opacity: 0, 
                y: 20,
                transition: { delay: 0, duration: 0.2 }
              }}
              onClick={handleCall}
              className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="pl-4 pr-1 py-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Call Now
              </span>
              <div className="w-12 h-12 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-14 h-14 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isExpanded 
            ? "0 4px 20px rgba(212, 175, 55, 0.4)"
            : [
                "0 4px 20px rgba(212, 175, 55, 0.3)",
                "0 4px 30px rgba(212, 175, 55, 0.5)",
                "0 4px 20px rgba(212, 175, 55, 0.3)"
              ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: isExpanded ? 0 : Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <Sparkles className="w-6 h-6" />
          )}
        </motion.div>

        {/* Pulse ring animation when closed */}
        {!isExpanded && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-glow"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              scale: [1, 1.5, 1.8],
              opacity: [0.5, 0.2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingActions;
