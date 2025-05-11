import { motion } from "framer-motion";
import BackgroundVideo from "../assets/hotel.mp4";
import FinalImage from "../assets/final-2.png"; // ✅ Replace with your actual image path

export default function Hero() {
  // Scroll to Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to How It Works section
  const scrollToHowItWorks = () => {
    const howSection = document.getElementById("how-it-works");
    if (howSection) {
      howSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* SoftSell Title */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-[6rem] md:text-[6rem] lg:text-[8rem] font-orbitron font-extrabold tracking-tight bg-white text-transparent bg-clip-text select-none drop-shadow-xl pointer-events-none">
        SoftSell
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-4xl pt-[350px] mx-auto px-6 flex flex-col pb-[150px] justify-center items-center text-center text-white min-h-screen"
      >
        <h1 className="text-[4rem] md:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
          Resell Software Licenses{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
            Seamlessly
          </span>
          .
        </h1>

        <p className="text-2xl md:text-xl text-gray-200 mb-5 opacity-90 leading-relaxed">
          With <strong>SoftSell</strong>, turn unused software into real revenue — no tech stress, no delays.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg text-xl hover:shadow-xl transition-all duration-300 transform"
          >
            Get a Free Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToHowItWorks}
            className="cursor-pointer border border-white/40 text-white text-xl px-8 py-4 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 transform"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Final Image at the bottom */}
      <div className="relative z-20 w-full mb-[0px]">
        <img
          src={FinalImage}
          alt="Final section"
          className="w-full h-auto shadow-xl"
        />
      </div>
    </div>
  );
}
