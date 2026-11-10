"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "motion/react";

type CountUpProps = {
  value: number;
  duration?: number;
  suffix?: string;
};

export default function CountUp({
  value,
  duration = 2,
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString("en-US"));
    });

    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, count, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
