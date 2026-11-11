"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardTilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleHover?: number;
}

export function CardTilt3D({
  children,
  className = "",
  maxTilt = 8,
  scaleHover = 1.015,
}: CardTilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for luxurious physical damping (Möbius feel)
  const springConfig = { damping: 20, stiffness: 180, mass: 0.25 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (isTouch) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: scaleHover }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
