"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    x: [0, 15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const fullName = "Neeraj Patil";
  const professions = [
    "Software Developer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Sports Fanatic"
    
  ];

  // Typewriter effect for name
  useEffect(() => {
    if (displayedText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText]);

  // Profession text change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfessionIndex((prev) => (prev + 1) % professions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 text-white flex items-center justify-center"
        >
          {displayedText}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`inline-block w-[4px] h-[60px] ml-2 bg-purple-400 ${
              isTyping ? "animate-blink" : ""
            }`}
            style={{
              boxShadow: "0 0 10px #A855F7, 0 0 20px #A855F7, 0 0 30px #A855F7",
            }}
          />
        </motion.h1>
        
        <div className="h-12 mb-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProfessionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <p className="text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {professions[currentProfessionIndex]}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-[3px] h-[30px] ml-1 bg-purple-400"
                  style={{
                    boxShadow: "0 0 8px #A855F7, 0 0 15px #A855F7",
                  }}
                />
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Transforming ideas into elegant solutions through clean code and innovative design.
            Passionate about creating seamless digital experiences that make a difference.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Buttons row */}
          <div className="flex gap-8 mb-6">
            <Link 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-white hover:scale-105"
            >
              View Projects
            </Link>

            <Link 
              href="YOUR_RESUME_DRIVE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-white hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Resume
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Open to Work Tag - positioned below and centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-4 py-2 bg-black rounded-full leading-none flex items-center">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-white text-sm font-medium">Actively seeking Full time Software Roles</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
