export default function NewsPager({
  total = 5,
  current = 0,
  onChange = () => {},
  className = "",
}) {
  if (total <= 1) return null;
  return (
    <div
      className={`w-full flex items-center justify-center gap-4 py-10 ${className}`}
    >
      {Array.from({ length: total }).map((_, i) => {
        const active = i === current;
        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`h-4 w-4 rounded-full transition ${
              active
                ? "bg-yellow-400 scale-140"
                : "bg-white/30 hover:bg-white/50 cursor-pointer"
            }`}
          />
        );
      })}
    </div>
  );
}
