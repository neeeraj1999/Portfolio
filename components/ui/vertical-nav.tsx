"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode, IconBrandHackerrank } from "@tabler/icons-react";

interface NavItem {
  icon: JSX.Element;
  href: string;
  label: string;
  color: string;
  bgColor: string;
}

const VerticalNav = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const mobileContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const navItems: NavItem[] = [
    {
      icon: <IconBrandGithub className="stroke-[1.5]" />,
      href: "https://github.com/neeeraj1999",
      label: "GitHub",
      color: "#2ea043",
      bgColor: "rgba(46, 160, 67, 0.1)"
    },
    {
      icon: <IconBrandLeetcode className="stroke-[1.5]" />,
      href: "https://leetcode.com/u/Neeeraj/",
      label: "LeetCode",
      color: "#ffa116",
      bgColor: "rgba(255, 161, 22, 0.1)"
    },
    {
      icon: <IconBrandLinkedin className="stroke-[1.5]" />,
      href: "https://www.linkedin.com/in/neeraj-patil-76278816b/",
      label: "LinkedIn",
      color: "#0a66c2",
      bgColor: "rgba(10, 102, 194, 0.1)"
    },
    {
      icon: <IconBrandHackerrank className="stroke-[1.5]" />,
      href: "https://www.hackerrank.com/profile/patilnv20",
      label: "HackerRank",
      color: "#2ec866",
      bgColor: "rgba(46, 200, 102, 0.1)"
    }
  ];

  return (
    <>
      {/* Mobile Navigation (Between text and buttons) */}
      <motion.div
        variants={mobileContainerVariants}
        initial="hidden"
        animate="show"
        className="lg:hidden flex flex-row justify-center gap-4 mb-8"
      >
        {navItems.map((navItem, index) => (
          <motion.div
            key={index}
            variants={mobileItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={navItem.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: navItem.bgColor,
                border: `1px solid ${navItem.color}40`
              }}
              aria-label={navItem.label}
            >
              {React.cloneElement(navItem.icon, { 
                size: 22,
                style: { color: navItem.color }
              })}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop Navigation (Vertical) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="hidden lg:flex fixed right-8 top-[10%] -translate-y-0 z-50 flex-col gap-5"
      >
        {navItems.map((navItem, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={navItem.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: navItem.bgColor,
                border: `1px solid ${navItem.color}40`
              }}
              aria-label={navItem.label}
            >
              {React.cloneElement(navItem.icon, { 
                size: 27,
                style: { color: navItem.color }
              })}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default VerticalNav;
