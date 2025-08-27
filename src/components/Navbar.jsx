import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center">
        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-cyan-400 transition">
            Acerca de mí
          </a>
          <a href="#music" className="hover:text-cyan-400 transition">
            Mi música
          </a>
        </div>

        <div className="mx-8">
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
    </nav>
  );
}

export default Navbar;
