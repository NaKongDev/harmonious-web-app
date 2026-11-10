"use client";
import React from "react";
import { ClipboardClock, X } from "lucide-react";
import { motion } from "motion/react";

export default function LeadSolidMore({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {open && (
        <div className="fixed bg-black/20 w-full h-full flex justify-center items-center z-100" onClick={onClose}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white md:w-[50%] w-[80%] h-fit relative"
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
