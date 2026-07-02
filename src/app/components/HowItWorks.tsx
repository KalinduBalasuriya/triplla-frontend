const steps = [
  {
    number: "01",
    title: "Inquiry Comes In",
    desc: "Tourists reach out via your website, WhatsApp, or email. TourHub captures every inquiry automatically into a unified inbox — no more sticky notes or lost messages.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build the Itinerary",
    desc: "Choose from your saved trip templates — one-day tours, island round trips, safaris — or build a custom package. Add accommodations, transport, and guides in minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Send a Quote",
    desc: "Generate a professional quote with your branding and send it directly to the tourist. Track when they open it. Follow up with one click.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Confirm & Coordinate",
    desc: "Once accepted, confirm bookings with hotels, drivers, and tour guides — all from a single screen. Everyone gets notified automatically.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9,11 12,14 22,4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Run the Tour",
    desc: "Track your tour groups in real-time. Your team and guides know exactly where they need to be. Guests get itinerary updates on their phones.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16 10,8"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Invoice & Get Paid",
    desc: "Auto-generate itemized invoices and send them instantly. Record payments, track outstanding balances, and close the loop — all in TourHub.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#fcb51b" }}>From Inquiry to Invoice</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Every step of your operation,<br />
            <span style={{ color: "#0071cd" }}>finally in one place.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            TourHub replaces the chaos of manual management with a clear, end-to-end workflow — purpose-built for travel agencies.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-[85%] h-px" style={{ background: "linear-gradient(to right, transparent, #e0edfa 10%, #e0edfa 90%, transparent)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative group">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: idx % 2 === 0 ? "#e8f4ff" : "#fffbeb" }}>
                        <div style={{ color: idx % 2 === 0 ? "#0071cd" : "#fcb51b" }}>{step.icon}</div>
                      </div>
                      <span className="absolute -top-2 -right-2 text-xs font-black text-white w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#0071cd", fontSize: "9px" }}>
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mt-2">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
