import news from "./news.json";

function News() {
  return (
    <section id="news" className="bg-gray-900">
      <div className="mx-auto px-6 max-w-6xl py-24">
        <div className="flex items-center justify-center mb-16">
          <div className="flex-grow h-px bg-cyan-800"></div>
          <h2 className="px-6 text-3xl md:text-4xl font-bold text-cyan-400 uppercase">
            Novedades
          </h2>
          <div className="flex-grow h-px bg-cyan-800"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {news
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item, index) => (
              <div
                key={index}
                className="bg-gray-950 rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                    >
                      Ver más →
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default News;
