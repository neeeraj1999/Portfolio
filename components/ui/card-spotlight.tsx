"use client";
import React from "react";

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export const CardSpotlight = ({ children, className = "" }: CardSpotlightProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      {children}
    </div>
  );
}; 