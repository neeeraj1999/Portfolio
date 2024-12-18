"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import Footer from './footer';

export default function ContactSection() {
  return (
    <div className="relative w-full py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[#e5e7eb]">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="group relative p-[1px] rounded-2xl overflow-hidden">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl animate-gradient" />
              <div className="relative p-8 bg-slate-900 rounded-2xl h-full">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-slate-800">
                    <FiMail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Drop me a line at</h3>
                  <p className="text-slate-300">patilnv20@gmail.com</p>
                  <a
                    href="mailto:patilnv20@gmail.com"
                    className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                  >
                    Mail Me →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="group relative p-[1px] rounded-2xl overflow-hidden">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl animate-gradient" />
              <div className="relative p-8 bg-slate-900 rounded-2xl h-full">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-slate-800">
                    <FiPhone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Call me at</h3>
                  <p className="text-slate-300">+1 315-952-9140</p>
                  <a
                    href="tel:+13159529140"
                    className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                  >
                    Call Me →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          >
            Resume ↓
          </a>
        </motion.div>
        {/* Copyright Section */}
        

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
    
  );
} 