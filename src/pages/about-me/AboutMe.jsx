import header from "../../assets/header.jpg";
import me from "../../assets/me.jpg";

function AboutMe() {
  return (
    <section id="about" className="relative flex items-center py-16 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${header})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <div className="relative z-10 mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-white drop-shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Eduardo Rodríguez
          </h2>
          <p className="text-lg md:text-xl text-cyan-400 mb-6 font-semibold">
            Guitarrista en ERP Project
          </p>

          <p className="mb-4 leading-relaxed text-gray-200">
            ERP Project es mi proyecto personal, un espacio donde comparto ideas
            musicales y colaboraciones con otros artistas.
          </p>

          <p className="mb-4 leading-relaxed text-gray-200">
            Aunque mi profesión principal no está ligada a la música, le dedico
            tiempo y disciplina para crear contenido de calidad.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Actualmente estoy trabajando en composiciones propias con la
            intención de, en un futuro, presentarlas en vivo.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-56 sm:w-64 md:w-80 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={me}
              alt="Eduardo Rodríguez"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
