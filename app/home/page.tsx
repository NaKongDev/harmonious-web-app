"use client";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { motion } from "motion/react";
import {
  MousePointerClick,
  Flame,
  BuildingComplex,
  Handshake,
  ClipboardClock,
  UserRoundGroup,
  Brain,
  MessageCircleText,
  MoveRight,
  UsersRound,
  Hourglass,
  Package,
  Clock,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import LeadSolidMore from "@/components/LeadSolidMore";
import LeadTeamMore from "@/components/LeadTeamMore";
import LeadSmartMore from "@/components/LeadSmartMore";
import LeadSupportMore from "@/components/LeadSupportMore";
import ContactUs from "@/components/ContactUs";
import AutoImageSlider from "@/components/AutoImageSlider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins-next",
  display: "swap",
});

type Page = "home" | "about" | "trackRecords" | "service";

function page() {
  const [page, setPage] = useState<Page>("home");
  const [clicker, setClocker] = useState<boolean>(false);
  const [openSolid, setOpenSolid] = useState<boolean>(false);
  const [openTeam, setOpenTeam] = useState<boolean>(false);
  const [openSmart, setOpenSmart] = useState<boolean>(false);
  const [openSup, setOpenSup] = useState<boolean>(false);
  const [openContactUs, setOpenContactUs] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    const sectionIds: Page[] = ["home", "about", "service", "trackRecords"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPage(entry.target.id as Page);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      // className={`bg-linear-to-b from-[#FFFFFF] to-[#FBD2B6] h-600 ${poppins.variable} font-poppins`}
      className={`bg-[#FFFFFF] ${poppins.variable} font-poppins `}
    >
      <LeadSolidMore open={openSolid} onClose={() => setOpenSolid(false)} />
      <LeadTeamMore open={openTeam} onClose={() => setOpenTeam(false)} />
      <LeadSmartMore open={openSmart} onClose={() => setOpenSmart(false)} />
      <LeadSupportMore open={openSup} onClose={() => setOpenSup(false)} />
      <ContactUs open={openContactUs} onClose={() => setOpenContactUs(false)} />

      <div className="fixed flex justify-between items-center md:px-15 px-5 pt-5 top-0 w-full text-lg ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => {
            scrollToSection("home");
            setPage("home");
          }}
        >
          <img
            src="/LogoHMS3.png"
            className="w-40 drop-shadow-xl drop-shadow-white"
            alt="Logo"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="hidden md:flex z-50 justify-between text-base items-center gap-5 bg-white font-bold rounded-full border border-black/10 shadow-gray-500/20 backdrop-blur-xl shadow-lg py-1 px-1"
        >
          <motion.a
            whileTap={{ scale: 0.8 }}
            className={`px-5 py-1 cursor-pointer rounded-full ${page === "home" ? "bg-linear-to-br from-orange-600 to-orange-400 text-white" : "bg-white"} duration-300`}
            onClick={() => {
              scrollToSection("home");
              setPage("home");
            }}
          >
            Home
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            className={`px-5 py-1 cursor-pointer rounded-full ${page === "about" ? "bg-linear-to-br from-orange-600 to-orange-400 text-white" : "bg-white"} duration-300`}
            onClick={() => {
              scrollToSection("about");
              setPage("about");
            }}
          >
            About
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            className={`px-5 py-1 cursor-pointer rounded-full ${page === "service" ? "bg-linear-to-br from-orange-600 to-orange-400 text-white" : "bg-white"} duration-300`}
            onClick={() => {
              scrollToSection("service");
              setPage("service");
            }}
          >
            Service
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            className={`px-5 py-1 cursor-pointer rounded-full ${page === "trackRecords" ? "bg-linear-to-br from-orange-600 to-orange-400 text-white" : "bg-white"} duration-300`}
            onClick={() => {
              scrollToSection("trackRecords");
              setPage("trackRecords");
            }}
          >
            Track Records
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="flex cursor-pointer gap-3 text-sm items-center bg-linear-to-br from-orange-600 to-orange-400 px-5 py-2 rounded-full text-white font-bold shadow-lg border border-black/10"
          onClick={() => setOpenContactUs(true)}
        >
          Contact Us{" "}
          <div>
            <MousePointerClick size={23} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex flex-col gap-10"
      >
        <div
          id="home"
          className="md:h-200 not-md:py-15 bg-[url(/FuturisticHarmoniousAI.png)]"
        >
          <div className="md:px-55 md:my-15 px-5 grid md:grid-cols-2 grid-cols-1 p-2 gap-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex flex-col gap-5"
            >
              <p className="text-4xl font-bold">Welcome to</p>
              <p className="md:text-8xl text-5xl font-bold text-[#F97316] text-shadow-lg/90 text-shadow-orange-200">
                Harmonious
              </p>
              <p className="text-white bg-gray-800/70 p-4 w-[80%]">
                22 Years of Experience in providing business solution! We help
                our clients to achieve their goals im improving supply
                operations.
              </p>
              <p className="text-white bg-gray-800/70 p-4 w-[80%] text-sm">
                Open : Monday-Friday Time : 9am to 6pm | Closed :
                Saturday-Sunday
              </p>
              <p className="text-white bg-gray-800/70 p-4 w-[80%] text-sm">
                Email : info@harmonious.co.th | Phone : +66 2941 2877
              </p>
              <a
                href="https://www.google.com/maps/place/Harmonious+Company+Ltd./@13.8430625,100.5674251,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29ce69526d3cf:0x8547fcbd096650a1!8m2!3d13.8430625!4d100.5674251!16s%2Fg%2F11b6bjflbc?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800/70 p-4 w-[80%] cursor-pointer text-sm"
              >
                Location : 180 Soi Ngamwongwan 48 Ngamwongwan Rd., Ladyao
                Chatuchak, Bangkok 10900 Thailand
              </a>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex justify-center items-center"
            >
              {/* <img
              src={"/Harmonious.png"}
              className="w-full rounded-lg shadow-xl shadow-gray-500/20 border border-black/20"
            /> */}
            </motion.div>
          </div>

          <div className="md:px-55 px-5 md:flex not-md:grid not-md:grid-cols-1 not-md:gap-5 justify-center items-center gap-30">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              className="md:w-[25%] shadow-lg border border-black/10  bg-white text-[#F97316] hover:bg-linear-to-br from-orange-600 to-orange-400 hover:text-white rounded-lg px-5 py-8 flex flex-col items-center gap-3 duration-300"
            >
              <Flame size={40} />
              <span className="w-full text-center text-xl font-bold">
                Innovation with Passion
              </span>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              className="md:w-[25%] shadow-lg border border-black/10 bg-white text-[#F97316] hover:bg-linear-to-br from-orange-600 to-orange-400 hover:text-white rounded-lg p-5 py-8 flex flex-col items-center gap-3 duration-300"
            >
              <BuildingComplex size={40} />
              <span className="w-full text-center text-xl font-bold">
                Business Insight & accuracy
              </span>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              className="md:w-[25%] shadow-lg border border-black/10 bg-white text-[#F97316] hover:bg-linear-to-br from-orange-600 to-orange-400 hover:text-white rounded-lg p-5 py-8 flex flex-col items-center gap-3 duration-300"
            >
              <Handshake size={40} />
              <span className="w-full text-center text-xl font-bold">
                Reliability & partnership
              </span>
            </motion.div>
          </div>
        </div>
        <div
          id="about"
          className="md:px-55 scroll-mt-30 px-5 py-10 bg-linear-to-br from-orange-600 to-orange-400 w-full text-white grid md:grid-cols-2 grid-cols-1"
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <div className="text-5xl font-bold">Why Choose Harmonious ?</div>
            <div className="h-2 mt-3 bg-white w-55 rounded-full"></div>
            <div className="mt-10">
              <div className="text-base w-[75%]">
                Founded in 2004, office located in Chatuchak Disctrict, Bangkok,
                Thailand. With extensive experiences as SAP consultants of our
                staff, our clients will benefit from our industry expertise and
                strong knowledge in SAP and Microsoft Dynamics CRM.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="grid md:grid-cols-2 grid-cols-1 gap-5 text-black"
          >
            <div className="bg-white p-5 flex flex-col gap-3 shadow-lg">
              <ClipboardClock size={32} className="text-[#F97316]" />
              <p className="font-bold text-xl">Solid Track Records</p>
              <p className="text-sm">22 years of proven business experience.</p>
              <p
                className="hover:text-[#F97316] duration-300 flex items-center gap-2 cursor-pointer"
                onClick={() => setOpenSolid(true)}
              >
                Lead more <MoveRight size={15} />
              </p>
            </div>
            <div className="bg-white p-5 flex flex-col gap-3 shadow-lg">
              <UserRoundGroup size={32} className="text-[#F97316]" />
              <p className="font-bold text-xl">Team of Professionals</p>
              <p className="text-sm">Experienced SAP and CRM consultants.</p>
              <p
                className="hover:text-[#F97316] duration-300 flex items-center gap-2 cursor-pointer"
                onClick={() => setOpenTeam(true)}
              >
                Lead more <MoveRight size={15} />
              </p>
            </div>
            <div className="bg-white p-5 flex flex-col gap-3 shadow-lg">
              <Brain size={32} className="text-[#F97316]" />
              <p className="font-bold text-xl">Smart Technology</p>
              <p className="text-sm">Modern solutions for business growth.</p>
              <p
                className="hover:text-[#F97316] duration-300 flex items-center gap-2 cursor-pointer"
                onClick={() => setOpenSmart(true)}
              >
                Lead more <MoveRight size={15} />
              </p>
            </div>
            <div className="bg-white p-5 flex flex-col gap-3 shadow-lg">
              <MessageCircleText size={32} className="text-[#F97316]" />
              <p className="font-bold text-xl">Support</p>
              <p className="text-sm">Reliable support whenever you need it.</p>
              <p
                className="hover:text-[#F97316] duration-300 flex items-center gap-2 cursor-pointer"
                onClick={() => setOpenSup(true)}
              >
                Lead more <MoveRight size={15} />
              </p>
            </div>
          </motion.div>
        </div>

        <div
          id="service"
          className="md:px-55 scroll-mt-30 px-5 py-10 w-full grid md:grid-cols-3 grid-cols-1 gap-10"
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <div className="text-5xl font-bold">What We Do ?</div>
            <div className="h-2 mt-3 bg-linear-to-br from-orange-600 to-orange-400 w-55 rounded-full"></div>
            <div className="text-base w-[75%] mt-10">
              A group of results oriented, passionate and technology savvy
              company in Bangkok with operating for over 20 years now serving 50
              over customers. Our belief in harmony of human and technology,
              relationship and commitment to deliver becomes the recipe of our
              success.
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col gap-5"
          >
            <img src={"/SAP.jpg"} />
            <div className="text-2xl font-bold">SAP Implementation</div>
            <div className="text-sm w-[75%]">
              Provides our clients the solutions in SAP to fully utilized their
              SAP investment. We also provide ABAP/4 programmer. Harmonious has
              in-house product, Harmonious Asset Tracking System, to automate
              asset inventory task.
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col gap-5"
          >
            <img src={"/LUI.jpg"} />
            <div className="text-2xl font-bold">LiquidUI</div>
            <div className="text-sm w-[75%]">
              Proven End-To-End Solutions that Simplify and Customize SAP ERP.
              LiquidUI solution suites enable users to streamline SAP processes
              without complicated and expensive ABAP and Java programming. This
              enables an organization to customize transaction screens to the
              restricted requirements of specific jobs, while leaving essential
              SAP coding untouched.
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col gap-5"
          >
            <img src={"/Micro.jpg"} />
            <div className="text-2xl font-bold">Microsoft Dynamics 365 CRM</div>
            <div className="text-sm w-[75%]">
              Microsoft Dynamics CRM meets the changing expectations of
              customers with a service solution that is robust and flexible.
              Users find familiar functionality and an interface that let them
              work in a personal, natural way. This intelligent solution informs
              customer service professionals with guidance that is insightful
              and actionable. The result is a connected, collaborative, and
              integrated organization.
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col gap-5"
          >
            <img src={"/barcode.jpg"} />
            <div className="text-2xl font-bold">T-Barcode</div>
            <div className="text-sm w-[75%]">
              TBarCode/SAPwin is the flexible bar code solution for SAP ERP, R/3
              and mySAP ERP in Windows environments – both for local and for
              network printers.By using TBarCode/SAPwin you can print all common
              barcodes on all Windows printers. You can avoid special equipment
              like bar code cartridges, bar code fonts or barcode
              printers.TBarCode/SAPwin can be used with SAPscript, ABAP and
              SmartForms. All predefined forms in SAP are supported.
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col gap-5"
          >
            <img src={"/order.jpg"} />
            <div className="text-2xl font-bold">Smart Order</div>
            <div className="text-sm w-[75%]">
              “Smart Order” streamline order-to-cash process. Enable customer
              track statuses of the order (From Order Approval, Order shipment,
              Invoice and etc.) Fully integrated to client back-end ERP such as
              SAP system
            </div>
          </motion.div>
        </div>

        <div
          id="trackRecords"
          className="md:px-55 scroll-mt-30 px-5 py-10 h-fit bg-linear-to-br from-orange-600 to-orange-400 w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="border border-black/10 bg-[#FFFFFF] shadow-gray-500/20 rounded-xl p-5 grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <div className="flex md:justify-center items-end gap-5">
              <Hourglass size={70} className="text-[#F97316]" />
              <div>
                <div className="text-[#F97316] text-4xl font-bold">
                  <CountUp value={22} duration={2.5} />
                </div>
                <div className="font-bold">Years Experience</div>
              </div>
            </div>
            <div className="flex md:justify-center items-end gap-5">
              <Package size={70} className="text-[#F97316]" />
              <div>
                <div className="text-[#F97316] text-4xl font-bold">
                  <CountUp value={368} duration={2.5} />
                </div>
                <div className="font-bold">Projects</div>
              </div>
            </div>
            <div className="flex md:justify-center items-end gap-5">
              <UsersRound size={70} className="text-[#F97316]" />
              <div>
                <div className="text-[#F97316] text-4xl font-bold">
                  <CountUp value={72} duration={2.5} />
                </div>
                <div className="font-bold">Customers</div>
              </div>
            </div>
          </motion.div>
          {/*  */}
        </div>

        <div className="md:px-55 px-5 py-5 ">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <div className="text-5xl font-bold">Our Track Records</div>
            <div className="h-2 w-55 mt-3 bg-linear-to-br from-orange-600 to-orange-400 rounded-full"></div>
            <AutoImageSlider />
          </motion.div>
        </div>

        <div className="md:px-55 px-5 py-5 bg-linear-to-br from-orange-600 to-orange-400 text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
          >
            <div className="text-5xl font-bold">
              <img src={"/LogoHMS3.png"} className="bg-white px-5 py-1 w-50" />
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Quick Links</p>
              <div className="h-1 mt-1 bg-white w-20 rounded-full mb-2"></div>
              <div className="grid grid-cols-1 gap-2">
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("home");
                    setPage("home");
                  }}
                >
                  Home
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("about");
                    setPage("about");
                  }}
                >
                  About
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("service");
                    setPage("service");
                  }}
                >
                  Service
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("trackRecords");
                    setPage("trackRecords");
                  }}
                >
                  Track Records
                </a>
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Contact Info</p>
              <div className="h-1 mt-1 bg-white w-20 rounded-full mb-2"></div>
              <div className="grid grid-cols-5 gap-2">
                <div className="flex justify-center">
                  <Mail size={25} />
                </div>
                <div className="col-span-4">info@harmonious.co.th</div>
                <div className="flex justify-center">
                  <Phone size={25} />
                </div>
                <div className="col-span-4">+66 2941 2877</div>
                <div className="flex justify-center">
                  <Clock size={25} />
                </div>
                <div className="col-span-4">
                  Mon-Fri: 9am to 6pm <p>Saturday / Sunday: Closed</p>
                </div>
                <div className="flex justify-center">
                  <MapPinned size={25} />
                </div>
                <div className="col-span-4">
                  180 Soi Ngamwongwan 48 Ngamwongwan Rd., Ladyao Chatuchak,
                  Bangkok 10900 Thailand
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Map</p>
              <div className="h-1 mt-1 bg-white w-20 rounded-full mb-2"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.93287580157!2d100.56485017623056!3d13.843067695171758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ce69526d3cf%3A0x8547fcbd096650a1!2sHarmonious%20Company%20Ltd.!5e0!3m2!1sth!2sth!4v1794371093119!5m2!1sth!2sth"
                width="350"
                height="230"
                className="border border-black/10 shadow-gray-500/20 rounded-lg"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default page;
