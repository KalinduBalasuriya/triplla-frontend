const solutions = [
  { icon: "🦁", label: "Safari Operators" },
  { icon: "🏝️", label: "Island Tour Agencies" },
  { icon: "🗺️", label: "Day Trip Planners" },
  { icon: "✈️", label: "Inbound Tour Operators" },
  { icon: "🧭", label: "Adventure Travel" },
  { icon: "🏔️", label: "Trekking Companies" },
];

export default function TrustedBy() {
  return (
    <section className="py-10 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Trusted by agencies across these sectors</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {solutions.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                <span className="text-xl">{s.icon}</span>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
