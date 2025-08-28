import { FaInfo, FaSpotify, FaYoutube } from "react-icons/fa";

export default function NewsDate({ date }) {
  const getDateParts = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = d
      .toLocaleDateString("es-ES", { month: "short" })
      .toUpperCase();
    return { day, month };
  };

  const { day, month } = getDateParts(date);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 rounded p-1 w-12">
      <span className="text-lg font-bold text-white leading-none">{day}</span>
      <span className="text-[10px] font-semibold text-gray-400 leading-none">
        {month}
      </span>
    </div>
  );
}
