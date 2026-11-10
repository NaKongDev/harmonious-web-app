"use client";
import React from "react";
import { UserRoundGroup, X } from "lucide-react";
import { motion } from "motion/react";

export default function LeadTeamMore({
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
              <UserRoundGroup size={50} className="text-[#F97316]" />
              <p className="font-bold text-2xl">Team of Professionals</p>
              <p className="text-sm">
                Over 20 years experience of our professional teams ready to help
                our clients digitally transform their supply chain operations
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
