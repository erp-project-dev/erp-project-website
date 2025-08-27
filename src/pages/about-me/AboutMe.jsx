import me from "../../assets/me.jpg";

function AboutMe() {
  return (
    <section id="about">
      <div className="mx-auto px-6 max-w-6xl py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="about-text text-gray-300">
          <h2 className="text-4xl font-bold mb-2">Eduardo Rodríguez</h2>
          <p className="text-lg text-cyan-400 mb-6 font-semibold">
            Guitarrista en ERP Project
          </p>

          <p className="mb-4 leading-relaxed">
            ERP Project es mi proyecto personal, un espacio donde comparto ideas
            musicales y colaboraciones con otros artistas.
          </p>

          <p className="mb-4 leading-relaxed">
            Aunque mi profesión principal no está ligada a la música, le dedico
            tiempo y disciplina para crear contenido de calidad.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Actualmente estoy trabajando en composiciones propias con la
            intención de, en un futuro, presentarlas en vivo.
          </p>
        </div>

        <div className="about-image flex justify-center md:justify-end">
          <div className="w-80 bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <img
              src={me}
              alt="Eduardo Rodríguez"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
