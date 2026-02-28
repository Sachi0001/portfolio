import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "About" },
    { to: "/education", label: "Education" },
    { to: "/certificates", label: "Certificates" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#e5e9f1] text-[#1f2947]">
      <nav className="sticky top-0 z-50 bg-[#f7f8fb]/95 border-b border-[#d5dbea] backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center gap-4">
            <h1 className="font-bold text-base sm:text-lg flex items-center gap-2">
              <img
                src="/navbar.jpg"
                alt="Sachin Chandran"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>Sachin Chandran</span>
            </h1>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-[#cfd6e6] px-3 py-2 text-sm font-semibold text-[#1f2947]"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>

            <div className="hidden md:flex gap-6 items-center text-sm font-semibold">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition pb-0.5 ${
                      isActive
                        ? "text-[#1f2947] border-b-2 border-[#1f2947]"
                        : "text-[#59627f] hover:text-[#1f2947]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="bg-[#1f2947] text-white px-4 py-2 rounded-lg hover:bg-[#16203b] transition"
              >
                Resume
              </a>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 border-t border-[#d5dbea] pt-3">
              <div className="flex flex-col gap-2 text-sm font-semibold">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 transition ${
                        isActive
                          ? "bg-[#1f2947] text-white"
                          : "text-[#59627f] hover:bg-[#e9edf5] hover:text-[#1f2947]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="mt-1 w-full text-center bg-[#1f2947] text-white px-4 py-2 rounded-lg hover:bg-[#16203b] transition"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
