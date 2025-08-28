import { FaInfo, FaSpotify, FaYoutube } from "react-icons/fa";

export default function NewsHeader({ source, category, title }) {
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

  const icon = getSourceIcon(source);
  const color = getCategoryColor(category);
  const hoverColor = getCategoryHover(category);

  return (
    <div>
      <span
        className={`${color} flex items-center gap-1 text-xs font-semibold uppercase tracking-wide`}
      >
        {icon}
        {category}
      </span>
      <h3
        className={`mt-1 text-lg md:text-xl font-bold text-white transition-colors ${hoverColor}`}
      >
        {title}
      </h3>
    </div>
  );
}
