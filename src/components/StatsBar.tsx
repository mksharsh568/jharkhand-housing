const stats = [
  { value: "14,000+", label: "Properties Listed" },
  { value: "6", label: "Districts Covered" },
  { value: "8,500+", label: "Happy Families" },
  { value: "500+", label: "Verified Agents" },
];

export default function StatsBar() {
  return (
    <div className="bg-orange-600 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 sm:gap-0 sm:justify-around">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-white px-4">
            <strong className="text-2xl font-extrabold">{s.value}</strong>
            <span className="text-orange-100 text-xs mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
