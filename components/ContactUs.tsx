"use client";
import React, { useEffect } from "react";
import {
  MousePointerClick,
  X,
  UserRound,
  Phone,
  Mail,
  Book,
  MessageSquare,
  Send,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";

export default function ContactUs({
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
        <div className="fixed bg-black/20 w-full h-full flex justify-center items-center z-100">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white md:w-[50%] w-[80%] h-fit relative z-150"
          >
            <X size={20} className="absolute top-2 right-2 cursor-pointer" onClick={onClose} />
            <div className="p-10 flex flex-col gap-5 justify-center">
              <img src={"/LogoHMS3.png"} className="w-40" />
              <p className="font-bold text-2xl flex items-center gap-2">
                Contact Us{" "}
                <MousePointerClick size={23} className="text-orange-400" />
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <p className="flex items-start gap-2 mb-1">
                    {" "}
                    <UserRound size={20} className="text-orange-400" /> Name
                  </p>
                  <Input id="form-name" type="text" placeholder="Your Name" />
                </div>

                <div>
                  <p className="flex items-start gap-2 mb-1">
                    {" "}
                    <Phone size={20} className="text-orange-400" /> Phone
                  </p>
                  <Input id="form-phone" type="text" placeholder="Phone" />
                </div>
                <div>
                  <p className="flex items-start gap-2 mb-1">
                    {" "}
                    <Mail size={20} className="text-orange-400" /> Email
                  </p>
                  <Input id="form-email" type="email" placeholder="Email" />
                </div>
                <div>
                  <p className="flex items-start gap-2 mb-1">
                    {" "}
                    <Book size={20} className="text-orange-400" /> Subject
                  </p>
                  <Input id="form-subject" type="text" placeholder="Subject" />
                </div>

                <div className="col-span-2">
                  <p className="flex items-start gap-2 mb-1">
                    {" "}
                    <MessageSquare size={20} className="text-orange-400" />
                    Message
                  </p>
                  <Textarea
                    rows={5}
                    placeholder="Message..."
                    className="resize-none"
                  />
                </div>
              </div>
              <div>
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex items-center px-2 py-1 gap-2 text-white bg-orange-400 shadow-lg cursor-pointer"
                >
                  Send Now <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
