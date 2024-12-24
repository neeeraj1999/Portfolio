"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

const MobileMenu = ({
  items,
}: {
  items: {
    title: string;
    href: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 relative flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-white/75 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white/75 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white/75 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="flex flex-col items-center gap-8">
            {items.map((item, idx) => (
              <li key={item.href + idx}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-white/75 hover:text-purple-400 transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
