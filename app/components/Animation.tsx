"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// type FadeInProps = {
//   children: React.ReactNode;
//   direction?: "up" | "down" | "left" | "right";
//   delay?: number;
//   duration?: number;
//   className?: string;
//   once?: boolean;
//   distance?: number;
// };

const fadeVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
};

type FadeInProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
  smooth?: boolean; // 👈 new prop for transitions
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  distance = 50,
  smooth = false, // 👈 by default off, but for carousel turn it on
}: FadeInProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const sign = direction === "up" || direction === "left" ? 1 : -1;

  const variants = {
    hidden: { opacity: 0, [axis]: sign * distance },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: {
        duration,
        delay,
        ease: smooth ? "easeInOut" : "circOut",
      },
    },
    exit: smooth
      ? {
          opacity: 0,
          [axis]: -sign * distance,
          transition: { duration: duration * 0.8, ease: "easeInOut" },
        }
      : {},
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit={smooth ? "exit" : undefined} // 👈 support for AnimatePresence
      variants={variants as Variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
type ScaleInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: ScaleInProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeInOut",
      },
    },
  } as Variants;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerChildrenProps = {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  childClassName?: string;
};

export function StaggerChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  once = true,
  childClassName = "",
}: StaggerChildrenProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  } as Variants;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  } as Variants;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Handle case when children is a single element
  if (!Array.isArray(children) && React.isValidElement(children)) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className={className}
      >
        <motion.div variants={itemVariants} className={childClassName}>
          {children}
        </motion.div>
      </motion.div>
    );
  }

  // Handle array of children
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
