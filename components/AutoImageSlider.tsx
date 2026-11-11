"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { name: "Bangkok Industrial Gas", img: "/images/project1.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project2.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project3.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project4.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project4.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project4.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project4.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project4.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project4.jpg" },
  { name: "Bangkok Industrial Gas", img: "/images/project4.jpg" },
];

export default function AutoImageSlider() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const distance = track.scrollWidth / 2;
    const speed = 80; // pixels per second

    const startAnimation = () => {
      animationRef.current?.stop();

      const current = x.get();
      const normalized = ((current % distance) + distance) % distance;
      const start = normalized === 0 ? 0 : normalized - distance;

      x.set(start);

      animationRef.current = animate(x, -distance, {
        duration: (distance + start) / speed,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    };

    startAnimation();

    const observer = new ResizeObserver(startAnimation);
    observer.observe(track);

    return () => {
      observer.disconnect();
      animationRef.current?.stop();
    };
  }, [x]);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.play();
  };

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5">
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative h-56 w-80 shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={src.img}
              alt={`Project ${index + 1}`}
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
