const testimonials = [
  {
    name: "Chamara Weerasinghe",
    role: "Owner, Emerald Isle Tours",
    location: "Sri Lanka 🇱🇰",
    rating: 5,
    text: "Before TourHub, I was managing 20+ inquiries a week in WhatsApp and a spreadsheet. I'd lose track, miss follow-ups, and send invoices on paper. Now everything is in one place. My response time went from a day to under an hour.",
    metric: "Response time: 24h → 45min",
  },
  {
    name: "Priya Nandakumar",
    role: "Operations Manager, Spice Route Travels",
    location: "India 🇮🇳",
    rating: 5,
    text: "Our team of 8 was drowning in email threads for every booking. With TourHub, my guides know their assignments, hotels get confirmations automatically, and I can see the status of every tour from one dashboard. It paid for itself in the first month.",
    metric: "Team coordination time: −60%",
  },
  {
    name: "Amara Osei",
    role: "Founder, Safari Horizons",
    location: "Ghana 🇬🇭",
    rating: 5,
    text: "I was skeptical about software — I'd tried generic tools that weren't built for travel agencies. TourHub was different. They installed it, configured it for our safari packages, and trained my team in one day. The custom itinerary builder alone is worth it.",
    metric: "Bookings converted: +38%",
  },
  {
    name: "Maria Santos",
    role: "Director, Iberian Discovery Tours",
    location: "Portugal 🇵🇹",
    rating: 5,
    text: "I especially love the invoicing. I used to spend 2 hours every week making invoices in Word. Now it takes me 30 seconds. The invoice looks great, clients trust us more, and I never make a calculation error anymore.",
    metric: "Invoice time: 2h/wk → 5min",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#fcb51b" }}>Customer Feedbacks</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Travel agencies that made<br />
            <span style={{ color: "#0071cd" }}>the switch.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Agencies around the world replaced their manual chaos with TourHub — here's what they said.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group">
              {/* Quote mark */}
              <div className="text-5xl font-black leading-none mb-4 opacity-20" style={{ color: "#0071cd" }}>"</div>

              <p className="text-gray-600 leading-relaxed mb-5 text-sm">{t.text}</p>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border" style={{ backgroundColor: "#e8f4ff", borderColor: "#b3d9f7", color: "#0071cd" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                  <polyline points="17,6 23,6 23,12"/>
                </svg>
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#0071cd" }}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fcb51b">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
