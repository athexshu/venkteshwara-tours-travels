import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Phone, 
  MessageCircle, 
  Mail,
  MapPin,
  Car, 
  Users, 
  Compass, 
  Mountain,
  Facebook,
  Instagram,
  Heart,
  Calendar,
  Clock,
  Star
} from 'lucide-react';
import { ParallaxSection } from '@/components/ParallaxSection';
import { SectionDivider } from '@/components/SectionDivider';
import HeroSection from '@/components/HeroSection';
import FloatingActions from '@/components/FloatingActions';

// Import images
import heroBackground from "@/assets/hero-spiritual-landscape.jpg";
import westernGhats from "@/assets/western-ghats.jpg";
import tirupatiTemple from "@/assets/tirupati-temple.jpg";
import konkanBeaches from "@/assets/konkan-beaches.jpg";
import blessedFamilyJourney from "@/assets/blessed-family-journey.jpg";

// Animation variants with proper types
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};


const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in booking a tour with Vyankateshwara Travale. 
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/+919766426233?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919766426233';
  };

  const openDestinationModal = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const destinations = [
    {
      id: 1,
      title: "Western Ghats Adventure",
      image: westernGhats,
      description: "Where mountains whisper ancient blessings 🏔️",
      duration: "3-4 Days",
      highlights: ["Scenic mountain drives", "Ancient temples", "Waterfall visits", "Hill station stays"],
      price: "₹15,000 - ₹20,000",
      bestTime: "October - March",
      details: "Experience the mystical Western Ghats with comfortable Innova rides through winding mountain roads, visits to ancient hill temples, and breathtaking viewpoints. Includes accommodation and meals."
    },
    {
      id: 2,
      title: "Tirupati Balaji Darshan",
      image: tirupatiTemple,
      description: "Divine darshan of Lord Venkateswara 🕉️",
      duration: "2-3 Days",
      highlights: ["VIP darshan arrangements", "Comfortable stay", "Local temple visits", "Prasadam included"],
      price: "₹8,000 - ₹12,000",
      bestTime: "Year round",
      details: "Sacred pilgrimage to Lord Venkateswara with hassle-free VIP darshan arrangements, comfortable accommodation near the temple, and visits to other significant temples in the region."
    },
    {
      id: 3,
      title: "Konkan Beach Bliss",
      image: konkanBeaches,
      description: "Coastal serenity meets spiritual bliss 🌊",
      duration: "4-5 Days",
      highlights: ["Pristine beaches", "Coastal temples", "Fresh seafood", "Sunset views"],
      price: "₹12,000 - ₹18,000",
      bestTime: "November - February",
      details: "Discover the beautiful Konkan coastline with visits to pristine beaches, ancient coastal temples, and enjoy fresh seafood while watching stunning sunsets over the Arabian Sea."
    },
    {
      id: 4,
      title: "Shirdi Sai Baba",
      image: westernGhats,
      description: "Blessed journey to Sai Baba's abode 🙏",
      duration: "2 Days",
      highlights: ["Sai Baba temple", "Accommodation booking", "Local sightseeing", "Prasadam"],
      price: "₹6,000 - ₹10,000",
      bestTime: "Year round",
      details: "Spiritual journey to Shirdi with comfortable darshan arrangements, nearby temple visits, and peaceful accommodation. Experience the divine grace of Sai Baba."
    },
    {
      id: 5,
      title: "Goa Temple Tour",
      image: konkanBeaches,
      description: "Divine temples in tropical paradise 🌴",
      duration: "3-4 Days",
      highlights: ["Ancient temples", "Beach relaxation", "Portuguese heritage", "Cultural experiences"],
      price: "₹14,000 - ₹22,000",
      bestTime: "November - March",
      details: "Unique blend of spiritual temples and beach relaxation in Goa. Visit ancient Hindu temples while enjoying the tropical paradise and rich cultural heritage."
    },
    {
      id: 6,
      title: "Pandharpur Pilgrimage",
      image: tirupatiTemple,
      description: "Sacred journey to Vithoba temple 🙏",
      duration: "2-3 Days",
      highlights: ["Vithoba temple", "Religious ceremonies", "Local culture", "Holy river bath"],
      price: "₹7,000 - ₹11,000",
      bestTime: "Year round",
      details: "Holy pilgrimage to Lord Vithoba in Pandharpur with traditional ceremonies, cultural experiences, and spiritual cleansing at the sacred Chandrabhaga river."
    },
    {
      id: 7,
      title: "Ajanta Ellora Caves",
      image: westernGhats,
      description: "Ancient Buddhist heritage 🏛️",
      duration: "3 Days",
      highlights: ["UNESCO World Heritage", "Ancient caves", "Buddhist art", "Historical significance"],
      price: "₹10,000 - ₹15,000",
      bestTime: "October - March",
      details: "Explore the magnificent Ajanta and Ellora caves, UNESCO World Heritage sites showcasing ancient Buddhist, Hindu, and Jain art and architecture spanning centuries."
    },
    {
      id: 8,
      title: "Kolhapur Temple Circuit",
      image: tirupatiTemple,
      description: "Royal temples and heritage 👑",
      duration: "2-3 Days",
      highlights: ["Mahalaxmi temple", "Royal heritage", "Local cuisine", "Traditional crafts"],
      price: "₹8,000 - ₹13,000",
      bestTime: "October - April",
      details: "Discover Kolhapur's rich temple heritage including the famous Mahalaxmi temple, royal palaces, and experience authentic Kolhapuri cuisine and traditional crafts."
    }
  ];

  const services = [
    { icon: Car, text: "AC Innova Rides" },
    { icon: Compass, text: "Custom Tour Plans" },
    { icon: Mountain, text: "Temple Visits" },
    { icon: Users, text: "Family Group Trips" },
    { icon: MapPin, text: "Pickup & Drop" }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <HeroSection heroBackground={heroBackground} />

      {/* Section Divider - Hero to About */}
      <SectionDivider variant="wave" className="-mt-1 relative z-10" />

      {/* About Us Section */}
      <section className="py-20 px-4 relative">
        <ParallaxSection speed={0.3}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInLeft}
              >
                <motion.img 
                  src={blessedFamilyJourney} 
                  alt="Blessed Family Journey - Vyankateshwara Travale Temple Tours"
                  className="rounded-2xl shadow-2xl w-full"
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.25)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInRight}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                  variants={staggerItem}
                >
                  Blessed Journeys Begin Here 🙏
                </motion.h2>
                <motion.div 
                  className="text-lg text-muted-foreground space-y-4 leading-relaxed"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.p variants={staggerItem}>
                    At Vyankateshwara Travale, we believe every journey is a pilgrimage of the heart. 
                    With the divine blessings of Lord Vyankateshwara, we guide families through 
                    sacred temples, mystical mountains, and serene coastlines.
                  </motion.p>
                  <motion.p variants={staggerItem}>
                    Our comfortable Innova fleet and experienced drivers ensure your spiritual 
                    journey is safe, blessed, and filled with beautiful memories. From family 
                    temple visits to group adventures, we craft each tour with love and devotion.
                  </motion.p>
                  <motion.p 
                    className="text-primary font-semibold"
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    🌿 "Travel not just to see, but to feel the divine in every destination."
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Section Divider - About to Destinations */}
      <SectionDivider variant="lotus" className="my-4" />

      {/* Destinations Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              variants={scaleIn}
            >
              Sacred Destinations 🌸
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              variants={fadeInUp}
            >
              Where every path leads to blessings
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {destinations.map((destination, index) => (
                  <CarouselItem key={destination.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Card className="card-blessed overflow-hidden group h-full">
                        <motion.div 
                          className="relative overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.img 
                            src={destination.image} 
                            alt={destination.title}
                            className="w-full h-64 object-cover rounded-t-xl"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl"></div>
                          <motion.div 
                            className="absolute bottom-4 left-4 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                            <p className="text-sm opacity-90">{destination.description}</p>
                          </motion.div>
                          <motion.div 
                            className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium"
                            whileHover={{ scale: 1.1 }}
                          >
                            {destination.duration}
                          </motion.div>
                        </motion.div>
                        <div className="p-6">
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Price Range:</span>
                              <span className="font-semibold text-primary">{destination.price}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Best Time:</span>
                              <span className="font-medium">{destination.bestTime}</span>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              className="w-full btn-sacred"
                              onClick={() => openDestinationModal(destination)}
                            >
                              Explore Blessings 🌸
                            </Button>
                          </motion.div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Section Divider - Destinations to Services */}
      <SectionDivider variant="mandala" className="my-8" />

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services 🌿
            </h2>
            <p className="text-xl text-muted-foreground">
              Blessed facilities for your spiritual journey
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={service.text}
                  className="card-blessed text-center p-8 group cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 40px -15px rgba(212, 175, 55, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.text}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section Divider - Services to Contact */}
      <SectionDivider variant="rays" className="my-6" />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Plan Your Journey 💌
            </h2>
            <p className="text-xl text-muted-foreground">
              Every great pilgrimage begins with a single step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
            >
              <motion.div 
                className="card-blessed p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Connect With Us 🙏
                </h3>
                
                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Phone, label: "Call Us", value: "+91 9766426233" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+91 9766426233" },
                    { icon: Mail, label: "Email", value: "info@vyankateshwaratravale.com" }
                  ].map((contact, index) => (
                    <motion.div 
                      key={contact.label}
                      className="flex items-center space-x-4"
                      variants={staggerItem}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <contact.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <p className="font-semibold">{contact.label}</p>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8 space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={handleCall}
                      className="w-full btn-sacred"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now 📞
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-divine"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Now 💬
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
            >
              <motion.div 
                className="card-blessed p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send Message ✨
                </h3>
                
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { name: "name", placeholder: "Your Name", type: "text" },
                    { name: "phone", placeholder: "Phone Number", type: "text" },
                    { name: "email", placeholder: "Email Address", type: "email" }
                  ].map((field) => (
                    <motion.div key={field.name} variants={staggerItem}>
                      <Input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="rounded-xl border-primary/20 focus:border-primary transition-all duration-300"
                      />
                    </motion.div>
                  ))}
                  
                  <motion.div variants={staggerItem}>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your dream journey..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-xl border-primary/20 focus:border-primary resize-none transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div 
                    variants={staggerItem}
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={handleWhatsApp}
                      className="w-full btn-sacred"
                    >
                      Send Blessing 🌸
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider - Contact to Footer */}
      <SectionDivider variant="clouds" className="-mb-1" color="fill-secondary" />

      {/* Footer */}
      <motion.footer 
        className="bg-gradient-to-r from-secondary via-primary to-secondary text-white py-12 px-4 -mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={staggerItem}
            >
              Vyankateshwara Travale
            </motion.h3>
            <motion.p 
              className="text-white/80 mb-6"
              variants={staggerItem}
            >
              Made with <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="w-5 h-5 inline text-red-400" />
              </motion.span> by Vyankateshwara Travale
            </motion.p>
            
            <motion.div 
              className="flex justify-center space-x-8 mb-8"
              variants={staggerItem}
            >
              {["Home", "About", "Contact"].map((link) => (
                <motion.a 
                  key={link}
                  href={link === "Contact" ? "#contact" : "#"} 
                  className="hover:text-primary-glow transition-colors relative"
                  whileHover={{ y: -3 }}
                >
                  {link}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-glow"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-6"
              variants={staggerItem}
            >
              {[Facebook, Instagram, MessageCircle].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>

      {/* Destination Details Modal */}
      <AnimatePresence>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedDestination && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-primary flex items-center gap-2">
                    {selectedDestination.title}
                    <motion.div
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Star className="w-6 h-6 text-yellow-500" />
                    </motion.div>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.img 
                      src={selectedDestination.image}
                      alt={selectedDestination.title}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="bg-primary/10 p-4 rounded-lg text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-primary">Duration</p>
                        <p className="text-sm text-muted-foreground">{selectedDestination.duration}</p>
                      </motion.div>
                      <motion.div 
                        className="bg-secondary/10 p-4 rounded-lg text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <p className="font-semibold text-secondary">Best Time</p>
                        <p className="text-sm text-muted-foreground">{selectedDestination.bestTime}</p>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="font-semibold text-lg text-foreground mb-1">Price Range</p>
                      <p className="text-2xl font-bold text-primary">{selectedDestination.price}</p>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Tour Description
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedDestination.details}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Tour Highlights
                      </h3>
                      <motion.ul 
                        className="space-y-2"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        {selectedDestination.highlights.map((highlight, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-center gap-2 text-muted-foreground"
                            variants={staggerItem}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                            />
                            {highlight}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          onClick={() => {
                            const message = `Hi! I'm interested in the ${selectedDestination.title} tour package. Please share more details.`;
                            const whatsappUrl = `https://wa.me/+919766426233?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, '_blank');
                          }}
                          className="w-full btn-sacred"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Book This Tour via WhatsApp 🌸
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          variant="outline"
                          onClick={() => {
                            window.location.href = `tel:+919766426233`;
                          }}
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call for Details 📞
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
};

export default Index;
