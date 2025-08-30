import { useState, useMemo } from "react";

import NewsDate from "./components/NewsDate";
import NewsHeader from "./components/NewsHeader";
import NewsPager from "./components/NewsPager";
import NewsContent from "./components/NewsContent";

import { news } from "../../source.json";

function News() {
  const [page, setPage] = useState(0);
  const pageSize = 4;

  const sorted = useMemo(
    () =>
      [...news].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const total = Math.ceil(sorted.length / pageSize);
  const start = page * pageSize;
  const visible = sorted.slice(start, start + pageSize);

  const getSource = (link) => {
    if (link) {
      if (link.includes("youtube") || link.includes("youtu.be"))
        return "youtube";
      if (link.includes("spotify")) return "spotify";
    }
    return "unknown";
  };

  const getCategoryBorder = (category) => {
    switch (category) {
      case "single":
        return "hover:border-yellow-400";
      case "cover":
        return "hover:border-red-400";
      case "info":
        return "hover:border-purple-400";
      case "event":
        return "hover:border-green-400";
      default:
        return "hover:border-cyan-400";
    }
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
          {visible.map((item, index) => {
            const borderHover = getCategoryBorder(item.category);
            return (
              <a
                key={`${item.title}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative bg-gray-950 rounded-xl p-6 flex flex-col shadow-lg border-l-4 border-gray-400 hover:shadow-gray-900 transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-1 ${borderHover}`}
              >
                <div className="flex justify-between items-start">
                  <NewsHeader
                    category={item.category}
                    source={getSource(item.link)}
                    title={item.title}
                  />
                  <NewsDate date={item.date} />
                </div>
                <NewsContent content={item.content} />
              </a>
            );
          })}
        </div>

        {total > 1 && (
          <div className="mt-6 flex justify-center">
            <NewsPager total={total} current={page} onChange={setPage} />
          </div>
        )}
      </div>
    </section>
  );
}

export default News;
