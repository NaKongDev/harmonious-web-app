"use client";
import React, { useEffect } from "react";
import { Brain, X } from "lucide-react";
import { motion } from "motion/react";

export default function LeadSmartMore({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed bg-black/20 w-full h-full flex justify-center items-center z-100"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white md:w-[50%] w-[80%] h-fit relative"
          >
            <X size={20} className="absolute top-2 right-2 cursor-pointer" onClick={onClose} />
            <div className="p-18 flex flex-col gap-10 justify-center">
              <Brain size={50} className="text-[#F97316]" />
              <p className="font-bold text-2xl">Smart Technology</p>
              <p className="text-sm">
                Deploy updated and latest technology to meet today's
                increasingly complex operations.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
