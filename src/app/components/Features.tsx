const features = [
  {
    title: "Smart Inquiry Inbox",
    desc: "Every tourist inquiry — from WhatsApp, email, or your website — lands in one organized inbox. Assign, respond, and convert inquiries to bookings without switching apps.",
    tag: "Inquiries",
    accent: "#0071cd",
    bg: "#e8f4ff",
    visual: (
      <div className="rounded-xl overflow-hidden border border-blue-100">
        <div className="px-4 py-2 text-xs font-semibold border-b border-blue-100 text-blue-700" style={{ backgroundColor: "#dbeafe" }}>Inquiry Inbox · 24 unread</div>
        <div className="bg-white divide-y divide-gray-50">
          {[
            { name: "Emma S.", source: "Website", msg: "Interested in 3-day safari...", time: "2m ago", new: true },
            { name: "James W.", source: "Email", msg: "Looking for island round trip...", time: "18m ago", new: true },
            { name: "Yuki T.", source: "WhatsApp", msg: "1-day cultural tour, June 15", time: "1h ago", new: false },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 px-4 py-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: "#0071cd" }}>{item.name[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-800">{item.name}</span>
                  <span className="text-xs text-gray-400 px-1.5 py-0.5 rounded-full bg-gray-100">{item.source}</span>
                  {item.new && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </div>
                <p className="text-xs text-gray-400 truncate">{item.msg}</p>
              </div>
              <span className="text-xs text-gray-300">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Trip Package Builder",
    desc: "Build and save reusable trip templates — one-day excursions, island round trips, safaris. Attach accommodations, transport, and guides to each package.",
    tag: "Planning",
    accent: "#fcb51b",
    bg: "#fffbeb",
    visual: (
      <div className="rounded-xl overflow-hidden border border-amber-100">
        <div className="px-4 py-2 text-xs font-semibold border-b border-amber-100 text-amber-700" style={{ backgroundColor: "#fef3c7" }}>3-Day Safari Package</div>
        <div className="bg-white p-4 flex flex-col gap-3">
          {[
            { icon: "🏨", label: "Accommodation", value: "Yala Safari Lodge", detail: "2 nights · 3 rooms" },
            { icon: "🚐", label: "Transport", value: "4WD Safari Jeep", detail: "Driver: Chaminda" },
            { icon: "🎯", label: "Tour Guide", value: "Ruwan Perera", detail: "Wildlife Expert · Eng/Ger" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-2 rounded-lg" style={{ backgroundColor: "#fffbeb" }}>
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-xs font-semibold text-gray-800">{item.value}</p>
                <p className="text-xs text-gray-400">{item.detail}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-500">Total package cost</span>
            <span className="text-sm font-bold" style={{ color: "#fcb51b" }}>$2,450</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "One-Click Invoicing",
    desc: "Generate itemized, branded invoices from confirmed bookings instantly. Track payment status, send reminders, and record payments — no accounting software needed.",
    tag: "Finance",
    accent: "#16a34a",
    bg: "#dcfce7",
    visual: (
      <div className="rounded-xl overflow-hidden border border-green-100">
        <div className="px-4 py-2 text-xs font-semibold border-b border-green-100 text-green-700 flex items-center justify-between" style={{ backgroundColor: "#dcfce7" }}>
          <span>INV-20241 · Emma Schneider</span>
          <span className="text-green-600 font-bold">PAID ✓</span>
        </div>
        <div className="bg-white p-4 flex flex-col gap-2">
          {[
            { desc: "3-Day Safari Package × 2 pax", amount: "$1,800" },
            { desc: "Airport Transfer", amount: "$120" },
            { desc: "Guide Fee (Eng)", amount: "$200" },
            { desc: "Park Entry Fees", amount: "$330" },
          ].map((row) => (
            <div key={row.desc} className="flex justify-between text-xs">
              <span className="text-gray-500">{row.desc}</span>
              <span className="font-semibold text-gray-800">{row.amount}</span>
            </div>
          ))}
          <div className="flex justify-between text-sm font-bold border-t border-gray-100 pt-2 mt-1">
            <span>Total</span>
            <span style={{ color: "#16a34a" }}>$2,450.00</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0071cd" }}>Platform Features</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Built for how travel<br />agencies actually work.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Every feature in TourHub was designed around real workflows we observed in travel agencies — not what software companies assumed you needed.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {features.map((feat, idx) => (
            <div key={feat.title} className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}>
              {/* Text */}
              <div className="flex-1 max-w-lg">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
                  style={{ backgroundColor: feat.bg, color: feat.accent, borderColor: feat.bg }}>
                  {feat.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{feat.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{feat.desc}</p>
                <a href="#demo" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-colors" style={{ color: feat.accent }}>
                  Learn more →
                </a>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md">
                <div className="rounded-2xl p-4 border" style={{ backgroundColor: feat.bg, borderColor: feat.bg }}>
                  {feat.visual}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional feature grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🗺️", title: "Live Tour Tracking", desc: "See where each tour group is in real-time" },
            { icon: "🧑‍🤝‍🧑", title: "Client CRM", desc: "Full history, preferences & repeat bookings" },
            { icon: "🏨", title: "Supplier Directory", desc: "Hotels, drivers & guides in one database" },
            { icon: "📊", title: "Revenue Reports", desc: "Know exactly where your money comes from" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
