import { useState } from "react";
import BackgroundVideo from "../assets/final-3.mp4"; // Update the path if needed
import toast from 'react-hot-toast';

export default function TestimonialsAndContact() {
  const reviews = [
    {
      name: "Priya Desai",
      role: "IT Manager",
      company: "InnovaCorp",
      text: "SoftSell made it so easy to turn our unused licenses into extra revenue.",
    },
    {
      name: "Rahul Verma",
      role: "Procurement Lead",
      company: "TechFlow",
      text: "Their service is fast, trustworthy, and super convenient.",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully.");
    // Optionally reset form
    setForm({
      name: "",
      email: "",
      company: "",
      license: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative text-white py-24 px-6 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[150%] z-0 dark:brightness-[80%]"
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10" />

      <div className="relative z-20 max-w-6xl mx-auto space-y-24">
        {/* Testimonials Section */}
        <div>
          <h2 className="text-5xl font-orbitron font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
            What Our Customers Say
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-10">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] max-w-md mx-auto text-left hover:scale-105 transition"
              >
                <p className="text-gray-200 italic mb-6">“{r.text}”</p>
                <h4 className="font-semibold text-lg text-white">{r.name}</h4>
                <p className="text-sm text-gray-400">
                  {r.role}, {r.company}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-6xl font-orbitron font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)] max-w-2xl mx-auto space-y-5"
          >
            <input
              required
              name="name"
              onChange={handleChange}
              value={form.name}
              className="w-full bg-black/30 border border-white/20 p-3 rounded-lg text-white placeholder-gray-400"
              placeholder="Name"
            />
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              className="w-full bg-black/30 border border-white/20 p-3 rounded-lg text-white placeholder-gray-400"
              placeholder="Email"
            />
            <input
              required
              name="company"
              onChange={handleChange}
              value={form.company}
              className="w-full bg-black/30 border border-white/20 p-3 rounded-lg text-white placeholder-gray-400"
              placeholder="Company"
            />
            <select
              required
              name="license"
              onChange={handleChange}
              value={form.license}
              className="w-full bg-black/30 border border-white/20 p-3 rounded-lg text-white"
            >
              <option value="">Select License Type</option>
              <option>Microsoft Office</option>
              <option>Adobe Suite</option>
              <option>Autodesk</option>
              <option>Others</option>
            </select>
            <textarea
              required
              name="message"
              onChange={handleChange}
              value={form.message}
              className="w-full bg-black/30 border border-white/20 p-3 rounded-lg text-white placeholder-gray-400"
              placeholder="Message"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:brightness-110 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
