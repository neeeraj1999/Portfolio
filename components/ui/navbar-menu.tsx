"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarMenu = ({
  items,
  className,
}: {
  items: {
    title: string;
    href: string;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("hidden lg:block", className)}>
      <nav className="fixed top-5 px-8 py-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/[0.08]">
        <ul className="flex items-center gap-10">
          {items.map((item, idx) => (
            <li key={item.href + idx}>
              <Link 
                href={item.href} 
                className="text-[15px] font-medium text-white/75 hover:text-purple-400 transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMenu;
