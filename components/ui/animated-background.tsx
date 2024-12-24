"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const initializePoints = () => {
      const isMobile = window.innerWidth <= 768;
      const width = canvas.width;
      const height = canvas.height;
      
      points = Array.from({ length: isMobile ? 25 : 50 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.5 : 0.3), // Faster on mobile
        vy: (Math.random() - 0.5) * (isMobile ? 0.5 : 0.3), // Faster on mobile
        radius: isMobile ? Math.random() * 0.8 + 0.3 : Math.random() * 1.5 + 0.5, // Smaller on mobile
        color: Math.random() > 0.5 ? "#A855F7" : "#3B82F6",
      }));
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializePoints(); // Reinitialize points on resize
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.fillStyle = "rgba(3, 0, 20, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const isMobile = window.innerWidth <= 768;

      // Update and draw points
      points.forEach((point, i) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Draw point with glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius * (isMobile ? 3 : 4) // Smaller glow on mobile
        );
        // Reduce glow opacity on mobile
        gradient.addColorStop(0, point.color + (isMobile ? "20" : "40"));
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, point.radius * (isMobile ? 3 : 4), 0, Math.PI * 2);
        ctx.fill();

        // Draw point core
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        // Reduce point opacity on mobile
        ctx.fillStyle = point.color + (isMobile ? "80" : "");
        ctx.fill();

        // Draw connections
        points.forEach((otherPoint, j) => {
          if (i === j) return;
          const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
          // Keep desktop distance unchanged
          if (distance < (isMobile ? 100 : 150)) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            const gradient = ctx.createLinearGradient(
              point.x, point.y,
              otherPoint.x, otherPoint.y
            );
            const opacity = isMobile ? "10" : "20"; // More subtle on mobile
            gradient.addColorStop(0, point.color + opacity);
            gradient.addColorStop(1, otherPoint.color + opacity);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base background color */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_100%)]" />
      </div>

      {/* Canvas for constellation effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
};

export default AnimatedBackground;
