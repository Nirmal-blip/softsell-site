import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-600 to-black text-white pt-20 pb-8">
      {/* Wave Shape (SVG) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M321.39 56.39C213.14 74.13 106.61 90.27 0 66.9V0h1200v66.9c-110.34 22.51-221.78 13.3-331.39-6.51C756.84 37.69 639.5 8.21 518.17 11.46 407.85 14.38 321.39 56.39 321.39 56.39z"
            fill="currentColor"
            className="text-[#18191af4]"
          ></path>
        </svg>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-6 z-10 relative">
        <FaFacebookF className="text-white text-xl hover:text-blue-300 cursor-pointer" />
        <FaTwitter className="text-white text-xl hover:text-blue-300 cursor-pointer" />
        <FaLinkedinIn className="text-white text-xl hover:text-blue-300 cursor-pointer" />
        <FaInstagram className="text-white text-xl hover:text-blue-300 cursor-pointer" />
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-center space-x-8 mb-4 text-sm font-medium text-blue-100">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Team</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>

      {/* Footer Bottom */}
      <p className="text-center text-xs text-blue-100 mt-4">
        ©2025 SoftSell | All Rights Reserved
      </p>
    </footer>
  );
}
