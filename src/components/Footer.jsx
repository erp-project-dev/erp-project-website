function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 text-center text-sm py-6 border-t border-gray-800">
      <p>
        © {year}{" "}
        <span className="text-cyan-400 font-semibold">ERP Project</span> ·
        Página personal del guitarrista Eduardo Rodríguez Patiño
      </p>
    </footer>
  );
}

export default Footer;
