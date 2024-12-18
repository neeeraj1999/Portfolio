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
  hoverBg: string;
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

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  const navItems: NavItem[] = [
    {
      icon: <IconBrandGithub className="stroke-[1.5]" />,
      href: "https://github.com/neeeraj1999",
      label: "GitHub",
      color: "hover:text-[#2ea043]",
      hoverBg: "hover:bg-[#2ea043]/10"
    },
    {
      icon: <IconBrandLeetcode className="stroke-[1.5]" />,
      href: "https://leetcode.com/u/Neeeraj/",
      label: "LeetCode",
      color: "hover:text-[#ffa116]",
      hoverBg: "hover:bg-[#ffa116]/10"
    },
    {
      icon: <IconBrandLinkedin className="stroke-[1.5]" />,
      href: "https://www.linkedin.com/in/neeraj-patil-76278816b/",
      label: "LinkedIn",
      color: "hover:text-[#0a66c2]",
      hoverBg: "hover:bg-[#0a66c2]/10"
    },
    {
      icon: <IconBrandHackerrank className="stroke-[1.5]" />,
      href: "https://www.hackerrank.com/profile/patilnv20",
      label: "HackerRank",
      color: "hover:text-[#2ec866]",
      hoverBg: "hover:bg-[#2ec866]/10"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="fixed right-8 top-[10%] -translate-y-0 z-50 flex flex-col gap-5"
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
            className={`vertical-nav-icon text-white/75 ${navItem.color} ${navItem.hoverBg} transition-all duration-300
              flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/[0.08]
              hover:shadow-lg hover:shadow-white/[0.03]`}
            aria-label={navItem.label}
          >
            {React.cloneElement(navItem.icon, { size: 27 })}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VerticalNav;
