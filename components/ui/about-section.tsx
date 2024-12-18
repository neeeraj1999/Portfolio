"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* About Me Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-20 left-1/2 -translate-x-1/2"
      >
        <h2 className="text-2xl font-light text-white/80 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-purple-500/50" />
          About Me
          <span className="w-8 h-[1px] bg-purple-500/50" />
        </h2>
      </motion.div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-5xl font-bold text-white mb-2.5">Neeraj Patil</h3>
              <div className="flex flex-col gap-2">
                <span className="text-2xl text-purple-400 font-medium">Software Engineer</span>
                <span className="flex items-center gap-2 px-2 py-1 rounded-full bg-[#1a1a1a] border border-[#383838] text-white/70 w-fit text-sm">
                  <div className="relative">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-600 opacity-20"></span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-green-400 relative" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  USA
                </span>
              </div>
            </div>
            <p className="text-lg text-white/70 leading-relaxed">
              Greetings! I&apos;m Neeraj Patil, a passionate software developer with a Master&apos;s degree 
              in Computer Science from the esteemed{" "}
              <motion.span 
                className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Syracuse University
              </motion.span>.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              My journey is defined by a relentless drive for innovation, a commitment to solving complex problems, 
              and a desire to make an impact in the fast-paced tech industry. With a strong foundation in modern 
              web development, full-stack engineering, and cutting-edge technologies, I specialize in transforming 
              abstract ideas into practical, scalable solutions.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Having recently completed my Master&apos;s, I am excited to break into the U.S. tech industry and 
              collaborate with innovative teams on impactful projects. If you&apos;re looking for a versatile and 
              ambitious team member who brings fresh ideas and a passion for problem-solving, let&apos;s connect. 
              Together, we can build something extraordinary!
            </p>

            {/* Get in Touch Button */}
            <motion.button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>

            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/4 w-1 h-20 bg-gradient-to-b from-purple-500/20 to-transparent" />
            <div className="absolute -left-4 bottom-1/4 w-1 h-20 bg-gradient-to-t from-blue-500/20 to-transparent" />
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[600px] w-full"
          >
            {/* Profile Text Overlay */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 -rotate-90 text-[130px] font-bold text-white/5 select-none pointer-events-none z-10">
              PROFILE
            </div>

            {/* Image Container */}
            <div className="relative h-[900px] w-[600px] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <Image
                src="/JPEG image.jpeg"
                alt="Neeraj Patil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Simple decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-purple-500/20 rounded-full" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-blue-500/20 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default AboutSection;
