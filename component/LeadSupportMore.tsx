"use client";
import React from "react";
import { MessageCircleText, X } from "lucide-react";
import { motion } from "motion/react";

export default function LeadSupportMore({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
            className="bg-white md:w-[50%] w-[80%] h-fit relative"
          >
            <X size={20} className="absolute top-2 right-2" onClick={onClose} />
            <div className="p-18 flex flex-col gap-10 justify-center">
              <MessageCircleText size={50} className="text-[#F97316]" />
              <p className="font-bold text-2xl">Support</p>
              <p className="text-sm">Reliable support whenever you need it.</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
