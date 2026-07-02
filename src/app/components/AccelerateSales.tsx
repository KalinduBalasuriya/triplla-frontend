const stats = [
  { value: "3×", label: "Faster quote turnaround", desc: "Send a professional quote in minutes, not hours" },
  { value: "40%", label: "More bookings converted", desc: "Faster responses win more tourists" },
  { value: "Zero", label: "Lost inquiries", desc: "Every lead is captured and tracked" },
  { value: "1 day", label: "Onboarding time", desc: "We set it up and train your team" },
];

const salesFeatures = [
  {
    title: "Respond before your competitor does",
    desc: "Tourist inquiries go cold fast. TourHub notifies your team the moment a lead comes in — from any channel. Reply with a quote in minutes, not days.",
    icon: "⚡",
  },
  {
    title: "Stop losing leads to follow-up chaos",
    desc: "TourHub tracks every inquiry through its entire lifecycle. You'll know exactly which leads need follow-up and when — with one-click reminders.",
    icon: "🎯",
  },
  {
    title: "Quote professionally, win confidently",
    desc: "Send beautiful, branded quotes that make tourists trust you before they even arrive. Include day-by-day itineraries, photos, and transparent pricing.",
    icon: "📄",
  },
  {
    title: "Turn happy tourists into repeat business",
    desc: "TourHub keeps a full history of every client. Know their preferences, send seasonal offers, and build lasting relationships that keep them coming back.",
    icon: "🔄",
  },
];

export default function AccelerateSales() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0071cd 0%, #0058a3 100%)" }}>
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 bg-white" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-amber-400 opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#fcb51b" }}>Accelerate Your Sales</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Stop leaving bookings<br />on the table.
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto text-lg">
            Most travel agencies lose 40% of their inquiries simply because they're too slow to respond or too disorganized to follow up. TourHub fixes that.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center">
              <p className="text-4xl font-black text-white mb-1" style={{ color: s.value === "Zero" ? "#fcb51b" : "white" }}>{s.value}</p>
              <p className="text-sm font-semibold text-blue-100 mb-1">{s.label}</p>
              <p className="text-xs text-blue-300">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {salesFeatures.map((f) => (
            <div key={f.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-blue-200 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#demo"
            className="inline-block px-8 py-4 rounded-xl font-bold text-gray-900 text-sm shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#fcb51b", boxShadow: "0 4px 20px rgba(252, 181, 27, 0.4)" }}
          >
            See TourHub in Action — Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
