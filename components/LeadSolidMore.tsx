"use client";
import React, { useEffect } from "react";
import { ClipboardClock, X } from "lucide-react";
import { motion } from "motion/react";

export default function LeadSolidMore({
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
          className="fixed bg-black/20 w-full h-full flex justify-center items-center z-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white md:w-[50%] w-[80%] h-fit relative z-150"
          >
            <X size={20} className="absolute top-2 right-2" onClick={onClose} />
            <div className="p-18 flex flex-col gap-10 justify-center">
              <ClipboardClock size={50} className="text-[#F97316]" />
              <p className="font-bold text-2xl">Solid Track Records</p>
              <p className="text-sm">
                A group of results oriented, passionate and technology savvy
                company in Bangkok with operating for more than 22 years now
                serving 50 over customers.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
