"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

const images = [
  { name: "Bangkok Industrial Gas", img: "" },
  { name: "Rich Manufacturing", img: "" },
  { name: "Nippon Paint", img: "/OIP.jpg" },
  { name: "PTTOR", img: "/PTTOR.jpg" },
  { name: "IRPC", img: "/163634-130785.png" },
  { name: "CPRAM", img: "" },
  { name: "PTT", img: "/Ptt_logo.png" },
  { name: "UBE Group", img: "" },
  { name: "Bangchak Petroluem", img: "" },
  { name: "Siam Daikin Sales and Service", img: "" },
];

export default function AutoImageSlider() {
  const x = useMotionValue(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  const isHovering = useRef(false);
  const isDragging = useRef(false);
  const distanceRef = useRef(0);

  const speed = 80;

  const startAnimation = () => {
    const distance = distanceRef.current;
    if (!distance || isDragging.current) return;

    animationRef.current?.stop();

    // จัดตำแหน่งให้อยู่ในช่วงของภาพหนึ่งชุด
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

    if (isHovering.current) {
      animationRef.current.pause();
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDistance = () => {
      distanceRef.current = track.scrollWidth / 2;
      startAnimation();
    };

    updateDistance();

    const observer = new ResizeObserver(updateDistance);
    observer.observe(track);

    return () => {
      observer.disconnect();
      animationRef.current?.stop();
    };
  }, []);

  const handleMouseEnter = () => {
    isHovering.current = true;
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    isHovering.current = false;

    if (!isDragging.current) {
      animationRef.current?.play();
    }
  };

  const handleDragStart = () => {
    isDragging.current = true;
    animationRef.current?.stop();
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    startAnimation();
  };

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={trackRef}
        style={{ x, touchAction: "pan-y" }}
        drag="x"
        dragMomentum={false}
        dragElastic={0}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="flex w-max cursor-grab gap-5 active:cursor-grabbing"
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative w-65 shrink-0 overflow-hidden rounded-xl select-none shadow-lg m-5 p-5 border"
          >
            {src.img !== "" ? (
              <div className="relative w-full h-60 overflow-hidden rounded-lg border-2">
                <Image
                  src={src.img}
                  alt={`Project ${index + 1}`}
                  fill
                  draggable={false}
                  className="pointer-events-none object-contain p-2"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center border w-full h-60 rounded-lg bg-gray-300">
                <ImageOff size={50} />
              </div>
            )}

            <div className="mt-5 text-lg">{src.name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
