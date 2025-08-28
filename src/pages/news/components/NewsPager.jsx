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
            className={`h-3 w-3 rounded-full transition cursor-pointer ${
              active
                ? "bg-yellow-400 scale-160"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        );
      })}
    </div>
  );
}
