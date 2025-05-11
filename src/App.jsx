import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import'./index.css'
import Hero from './components/Hero'
import ChatWidget from './components/ChatWidget';
import HowItWorks from './components/HowItWorks'
import ThemeToggle from './components/ThemeToggle'
import Testimonials from './components/Testimonials'
// Import the Toaster component and toast from react-hot-toast
import { Toaster, toast } from 'react-hot-toast'

import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="font-sans text-gray-800">
     {/* ✅ Add Toaster at top level */}
      <Toaster position="top-center" toastOptions={{ duration: 4000 ,style: {
      background: '#0f172a', // dark slate background
      color: '#f1f5f9',       // light text
      fontFamily: 'Nasalization, sans-serif',
      borderRadius: '8px',
      padding: '12px 16px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },
    success: {
      iconTheme: {
        primary: '#10b981', // emerald green
        secondary: '#ecfdf5',
      },
    },
    error: {
      iconTheme: {
        primary: '#ef4444', // red
        secondary: '#fee2e2',
      },
    }, }} />
      <Hero />
      <HowItWorks />
      <Testimonials />
     
      <Footer />
      <ThemeToggle /> {/* ✅ Light/Dark Mode Button */}
      <ChatWidget /> {/* ✅ Chat Widget */}
    </div>
  )
}

export default App
