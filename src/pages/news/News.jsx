import { news } from "../../source.json";
import { FaInfo, FaSpotify, FaYoutube } from "react-icons/fa";

function News() {
  const getSource = (link) => {
    if (link) {
      if (link.includes("youtube") || link.includes("youtu.be"))
        return "youtube";
      if (link.includes("spotify")) return "spotify";
    }
    return "unknown";
  };

  const getSourceIcon = (source) => {
    switch (source) {
      case "youtube":
        return <FaYoutube className="w-4 h-4" />;
      case "spotify":
        return <FaSpotify className="w-4 h-4" />;
      default:
        return <FaInfo className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "single":
        return "text-yellow-400";
      case "cover":
        return "text-red-400";
      case "announcement":
        return "text-purple-400";
      case "event":
        return "text-green-400";
      default:
        return "text-cyan-400";
    }
  };

  const getCategoryHover = (category) => {
    switch (category) {
      case "single":
        return "group-hover:text-yellow-400";
      case "cover":
        return "group-hover:text-red-400";
      case "announcement":
        return "group-hover:text-purple-400";
      case "event":
        return "group-hover:text-green-400";
      default:
        return "group-hover:text-cyan-400";
    }
  };

  const getCategoryBorder = (category) => {
    switch (category) {
      case "single":
        return "hover:border-yellow-400";
      case "cover":
        return "hover:border-red-400";
      case "announcement":
        return "hover:border-purple-400";
      case "event":
        return "hover:border-green-400";
      default:
        return "hover:border-cyan-400";
    }
  };

  const getDateParts = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = d
      .toLocaleDateString("es-ES", { month: "short" })
      .toUpperCase();
    return { day, month };
  };

  return (
    <section id="news" className="bg-gray-900">
      <div className="mx-auto px-6 max-w-6xl py-24">
        <div className="flex items-center justify-center mb-16">
          <div className="flex-grow h-px bg-cyan-800"></div>
          <h2 className="px-6 text-3xl md:text-4xl font-bold text-cyan-400 uppercase tracking-wider">
            Novedades
          </h2>
          <div className="flex-grow h-px bg-cyan-800"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {news
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((item, index) => {
              const source = getSource(item.link);
              const icon = getSourceIcon(source);
              const color = getCategoryColor(item.category);
              const hoverColor = getCategoryHover(item.category);
              const borderHover = getCategoryBorder(item.category);
              const { day, month } = getDateParts(item.date);

              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative bg-gray-950 rounded-xl p-6 flex flex-col 
                              shadow-lg border-l-4 border-gray-400 
                              hover:shadow-gray-900
                              transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-1 ${borderHover}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span
                        className={`${color} flex items-center gap-1 text-xs font-semibold uppercase tracking-wide`}
                      >
                        {icon}
                        {item.category}
                      </span>
                      <h3
                        className={`mt-1 text-lg md:text-xl font-bold text-white transition-colors ${hoverColor}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-800 rounded p-1 w-12">
                      <span className="text-lg font-bold text-white leading-none">
                        {day}
                      </span>
                      <span className="text-[10px] font-semibold text-gray-400 leading-none">
                        {month}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default News;
