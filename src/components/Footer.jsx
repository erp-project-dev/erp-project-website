function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 text-center py-6">
      <p className="text-base">
        © {year}{" "}
        <span className="text-cyan-400 font-semibold">ERP Project</span>
      </p>
      <p className="text-sm">
        Página personal de Eduardo Rodríguez Patiño, guitarrista de Perú.
      </p>
    </footer>
  );
}

export default Footer;
