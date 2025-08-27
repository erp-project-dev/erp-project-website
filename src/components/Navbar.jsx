import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      {/* DESKTOP VERSION */}
      <div className="hidden md:flex items-center justify-center gap-12 py-3">
        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-cyan-400 transition">
            Acerca de mí
          </a>
          <a href="#music" className="hover:text-cyan-400 transition">
            Mi música
          </a>
        </div>

        <div>
          <a href="#hero">
            <img src={logo} alt="Logo" className="w-[150px] h-auto" />
          </a>
        </div>

        <div className="flex gap-6 items-center">
          <a href="#news" className="hover:text-cyan-400 transition">
            Novedades
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Sígueme
          </a>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between">
        <a href="#hero">
          <img src={logo} alt="Logo" className="w-[120px] h-auto" />
        </a>
        <button onClick={() => setOpen(!open)} className="text-2xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Acerca de mí
          </a>
          <a
            href="#music"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Mi música
          </a>
          <a
            href="#news"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Novedades
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Sígueme
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
