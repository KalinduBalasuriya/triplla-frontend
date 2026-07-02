const included = [
  "Full platform access — all features",
  "Inquiry management & CRM",
  "Trip package builder",
  "Booking & confirmation workflows",
  "Invoice generation & payment tracking",
  "Tour guide & transport management",
  "Accommodation supplier directory",
  "Live tour tracking dashboard",
  "Revenue & performance reports",
  "Custom branding & templates",
  "Team accounts & role permissions",
  "Dedicated setup & onboarding",
  "Staff training session (1 day)",
  "90-day priority support included",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#fcb51b" }}>Simple Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Pay once. Use forever.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            No subscriptions, no per-seat fees, no surprises. You get TourHub fully set up and running for your agency — one payment, yours permanently.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Main pricing card */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl border-2 shadow-xl overflow-hidden" style={{ borderColor: "#0071cd" }}>
            {/* Top accent bar */}
            <div className="h-1.5" style={{ background: "linear-gradient(to right, #0071cd, #fcb51b)" }} />

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "#e8f4ff", color: "#0071cd" }}>
                    Full Platform
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900">TourHub Complete</h3>
                  <p className="text-sm text-gray-400 mt-1">Everything your agency needs to go fully digital</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Starting from</p>
                  <p className="text-4xl font-black text-gray-900">$<span style={{ color: "#0071cd" }}>1,499</span></p>
                  <p className="text-xs text-gray-400">one-time payment</p>
                </div>
              </div>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {included.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" stroke="#16a34a" strokeWidth="2.5">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  className="flex-1 text-center py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 shadow-md"
                  style={{ backgroundColor: "#0071cd" }}
                >
                  Request a Demo
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-center py-3.5 rounded-xl font-semibold text-sm border-2 transition-all hover:bg-amber-50"
                  style={{ borderColor: "#fcb51b", color: "#b8860b" }}
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-6">
            {/* What's included */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex-1">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: "#e8f4ff" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0071cd" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </span>
                Setup Includes
              </h4>
              <div className="flex flex-col gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔧</span>
                  <span>Platform configuration for your agency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📦</span>
                  <span>Import your existing data</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎨</span>
                  <span>Branded templates & invoice design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">👥</span>
                  <span>On-site staff training session</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📞</span>
                  <span>90-day support after launch</span>
                </div>
              </div>
            </div>

            {/* Custom pricing */}
            <div className="rounded-2xl p-6 border" style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}>
              <span className="text-2xl mb-3 block">🏢</span>
              <h4 className="font-bold text-gray-900 mb-2">Large Agency?</h4>
              <p className="text-sm text-gray-500 mb-4">Multiple branches, large teams, or custom integrations? Let's talk about a tailored plan.</p>
              <a href="#contact" className="text-sm font-semibold" style={{ color: "#b8860b" }}>Get a custom quote →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
