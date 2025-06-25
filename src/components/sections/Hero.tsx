import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Brain, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const floatingIcons = [
  { icon: Code, delay: 0, x: 100, y: 50 },
  { icon: Brain, delay: 0.5, x: -80, y: 80 },
  { icon: Zap, delay: 1, x: 120, y: -60 },
];

const typewriterTexts = [
  "Learner",
  "Frontend Developer", 
  "Data Scientist",
  "Cyber Security"
];

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-pink-500/10"></div>
        
        {/* Animated mesh gradient */}
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-white/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            x: [0, x/2, 0],
            y: [0, y/2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
          }}
          style={{
            left: `${10 + index * 30}%`,
            top: `${20 + index * 20}%`,
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Enhanced Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-8"
          >
            {/* Greeting with animated icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-5 w-5 text-yellow-400" />
              </motion.div>
              <p className="text-purple-300 text-lg font-medium">Hello, I'm</p>
            </motion.div>
            
            {/* Enhanced name with staggered animation */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 }} 
                className="text-6xl lg:text-8xl font-bold leading-tight"
              >
                <motion.span 
                  className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Naveen
                </motion.span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Rajpoot
                </motion.span>
              </motion.h1>
              
              {/* Typewriter effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="h-12 flex items-center"
              >
                <span className="text-2xl lg:text-3xl font-semibold text-purple-300">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-pink-400"
                  >
                    |
                  </motion.span>
                </span>
              </motion.div>
            </div>
            
            {/* Enhanced subtitle with animated tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }} 
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-3">
                {["AI Enthusiast", "Cyber Security Learner", "Code Explorer"].map((title, index) => (
                  <motion.span
                    key={title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-sm cursor-pointer hover:bg-white/20 transition-all"
                  >
                    {title}
                  </motion.span>
                ))}
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-white/90 text-xl max-w-lg leading-relaxed"
              >
                A passionate learner driven to shape the future through AI, 
                cybersecurity, and tech innovations that empower people and solve real-world problems.
              </motion.p>
            </motion.div>

            {/* Enhanced CTA buttons with hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1.4 }} 
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
                >
                  View Portfolio
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 group"
                >
                  <motion.div
                    className="mr-2"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Download className="h-5 w-5" />
                  </motion.div>
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced social links with staggered animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1.6 }} 
              className="flex space-x-4 pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/naveenhacks", delay: 0 },
                { icon: Linkedin, href: "https://www.linkedin.com/in/naveen-singh-rajpoot/", delay: 0.1 },
                { icon: Mail, href: "naveenrajpoot157@gmail.com", delay: 0.2 }
              ].map(({ icon: Icon, href, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + delay }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:text-purple-300 hover:bg-white/10 backdrop-blur-md border border-white/20 rounded-xl h-12 w-12 transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Profile Image with 3D effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }} 
            animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
            transition={{ duration: 1, delay: 0.4 }} 
            className="relative flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative">
              {/* Enhanced image container with 3D transform */}
              <motion.div 
                className="relative w-80 h-96 lg:w-96 lg:h-[500px]"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Multiple glowing layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-2xl opacity-40"></div>
                
                {/* Main image container with glass morphism */}
                <motion.div 
                  className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/lovable-uploads/naveen.jpg" 
                    alt="Naveen Rajpoot"
                    className="w-full h-full object-cover object-center" 
                  />
                  
                  {/* Animated overlay gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced floating decorative elements */}
              <motion.div 
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }} 
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }} 
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-80 shadow-2xl"
              />
              
              <motion.div 
                animate={{ 
                  y: [20, -20, 20],
                  rotate: [360, 180, 0],
                  scale: [1, 1.2, 1]
                }} 
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }} 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-80 shadow-2xl"
              />
              
              {/* Animated tech stack indicators with better positioning */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-4 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-white font-medium text-sm flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-purple-400" />
                  Lerner 
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute bottom-4 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-white font-medium text-sm flex items-center">
                  <Code className="w-4 h-4 mr-2 text-pink-400" />
                  Frontend Devloper 
                </span>
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white/60 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: `${100 + i * 30}px 0px`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator with animation */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 }} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }} 
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-md bg-white/10 cursor-pointer hover:border-white/70 transition-colors"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }} 
            className="w-1 h-4 bg-white/70 rounded-full mt-2" 
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-white/60 text-sm mt-2 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
}