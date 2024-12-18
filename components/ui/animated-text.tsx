import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn("text-dark dark:text-light", className)}
    >
      {text}
    </motion.div>
  );
};

export const AnimatedTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className={cn(
        "text-3xl font-bold text-dark dark:text-light sm:text-4xl",
        className
      )}
    >
      {text}
    </motion.h2>
  );
};
