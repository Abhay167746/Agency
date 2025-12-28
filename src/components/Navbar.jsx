import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home"); // ✅ NEW

  const links = ["Home", "Services", "About", "Contact"];

  // ✅ NEW: Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(link.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP FLOATING NAV ================= */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          fixed top-6 left-1/2 -translate-x-1/2
          z-50 hidden md:block
        "
      >
        <div
          className="
            flex items-center gap-2
            px-6 py-3
            rounded-full
            bg-white/15 backdrop-blur-xl
            border border-white/20
            shadow-lg
          "
        >
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <a
                key={link}
                href={`#${id}`}
                className="
                  relative px-4 py-2
                  text-sm font-medium
                  transition group
                "
                onClick={() => setActive(id)}
              >
                {/* ACTIVE + HOVER PILL */}
                <span
                  className={`
                    absolute inset-0 rounded-full
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-white/30 scale-100 opacity-100"
                        : "bg-white/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }
                  `}
                ></span>

                {/* TEXT */}
                <span
                  className={`
                    relative z-10
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }
                  `}
                >
                  {link}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* ================= MOBILE TOP BAR ================= */}
      <div
        className="
          fixed top-0 left-0 w-full z-50
          md:hidden
          px-4 py-4
          flex justify-between items-center
          bg-black/40 backdrop-blur-xl
          border-b border-white/10
        "
      >
        <div className="text-lg font-bold text-white">Logo</div>

        <button
          onClick={() => setOpen(true)}
          className="text-white text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
    fixed inset-0 z-[60]
    flex items-center justify-center
    bg-black/70 backdrop-blur-xl
  "
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            >
              ✕
            </button>

            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="
    w-[90%] max-w-sm
    rounded-3xl
    bg-white/15 backdrop-blur-xl
    border border-white/20
    py-12
    flex flex-col items-center gap-8
    text-center
  "
            >
              {links.map((link) => {
                const id = link.toLowerCase();
                const isActive = active === id;

                return (
                  <a
                    key={link}
                    href={`#${id}`}
                    onClick={() => {
                      setActive(id);
                      setOpen(false);
                    }}
                    className={`
                      text-2xl font-semibold transition
                      ${isActive ? "text-white" : "text-white/70"}
                    `}
                  >
                    {link}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
