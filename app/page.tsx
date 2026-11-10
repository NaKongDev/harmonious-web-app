"use client";

import { motion } from "motion/react";
import { Manrope, Momo_Signature } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-next",
  display: "swap",
});

const momoSignature = Momo_Signature({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-momo-next",
  display: "swap",
});

export default function IntroPage() {
  const router = useRouter();
  const [zoom, setZoom] = useState(false);
  const [writingComplete, setWritingComplete] = useState(false);

  useEffect(() => {
    if (!writingComplete) return;

    const timer = setTimeout(() => {
      setZoom(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [writingComplete]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center w-full overflow-hidden">
      {/* Handwriting Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: zoom ? 35 : 1,
          opacity: zoom ? 0 : 1,
        }}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={() => {
          if (zoom) {
            router.push("/home");
          }
        }}
        className="origin-center"
      >
        <motion.span
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          animate={{
            clipPath: "inset(0 0% 0 0)",
          }}
          transition={{
            duration: 3,
            delay: 0.8,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            setWritingComplete(true);
          }}
          className={`inline-block p-2 ${momoSignature.variable} font-momo text-center text-5xl md:text-7xl`}
        >
          <span>
            Welcome to{" "}
            <span className="text-[#F97316]">Harmonious</span>
          </span>
        </motion.span>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: zoom ? 0 : 1,
          y: zoom ? 30 : 0,
        }}
        transition={{
          duration: zoom ? 0.4 : 1,
          delay: zoom ? 0 : 3.2,
        }}
        className={`mt-6 ${manrope.variable} font-manrope text-lg text-gray-500`}
      >
        <span className="md:text-lg text-sm font-medium">
          Harmonious Co.,Ltd. &#169; 2026
        </span>
      </motion.div>
    </section>
  );
}