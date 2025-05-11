import React from "react";
import BackgroundVideo from "../assets/HowItWorks.mp4"; // Update the path if needed
import FinalImage from "../assets/final-2.png"; // ✅ Replace with your actual image path

export default function HowItWorksAndWhyChooseUs() {
  const steps = [
    {
      title: "Upload License",
      description: "Users upload their license for verification.",
      icon: "📤",
      pillText: "Upload License",
    },
    {
      title: "Get Valuation",
      description: "Get an accurate valuation based on your license's worth in minutes.",
      icon: "💰",
      pillText: "Get Valuation",
    },
    {
      title: "Get Paid",
      description: "Receive instant payout after verification is complete.",
      icon: "🏦",
      pillText: "Get Paid",
    },
  ];

  const reasons = [
    { icon: "⚡", title: "Fast Processing", desc: "Quick license evaluations." },
    { icon: "🔒", title: "Secure Deals", desc: "Encrypted, safe transactions." },
    { icon: "💼", title: "Trusted by Businesses", desc: "Used by 500+ companies." },
    { icon: "📞", title: "24/7 Support", desc: "Customer support anytime, anywhere." },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* HOW IT WORKS Section */}
      <div className="relative z-20 py-24 px-6 min-h-screen">
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[6rem] md:text-[8rem] font-orbitron font-extrabold tracking-tight opacity-15 whitespace-nowrap select-none pointer-events-none bg-gradient-to-r from-[#c4ec56] via-white to-gray-400 text-transparent bg-clip-text z-10">
          HOW IT WORKS
        </h1>

        <div className="relative max-w-6xl mx-auto pt-64 z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center bg-[#0404047a] border border-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 text-center mb-6">{step.description}</p>
                <div className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-center font-semibold tracking-wide shadow-inner hover:scale-[1.03] transition">
                  {step.pillText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="relative z-20 py-32 px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-orbitron font-extrabold tracking-tight pb-8 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
            Why Choose Us
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Discover why thousands trust our platform to resell software securely and effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group bg-[#0d0d0dd9] border border-white/10 backdrop-blur-md p-8 rounded-2xl transition-transform duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <div className="text-5xl mb-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{r.title}</h3>
              <p className="text-sm text-gray-300">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Image at the bottom */}
      <div className="relative z-20 w-full mb-0">
        <img
          src={FinalImage}
          alt="Final section"
          className="w-full h-auto shadow-xl"
        />
      </div>
    </section>
  );
}
