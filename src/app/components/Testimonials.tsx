const testimonials = [
  {
    name: "Mr. Peshan",
    role: "Love Ceylon Tours",
    location: "Sri Lanka 🇱🇰",
    rating: 5,
    text: "Triplla helped us manage inquiries, quotations and tour details in one place. Our workflow is now more organized, faster and easier to control.",
    metric: "Response time: 24h → 45min",
  },
  {
    name: "Mr. Askar Rahim",
    role: "Serandib Discover",
    location: "India 🇮🇳",
    rating: 5,
    text: "Triplla gives our team better visibility across leads, bookings, suppliers and payments. It saves time and reduces manual work in our daily operations.",
    metric: "Team coordination time: −60%",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2 lg:mb-3"
            style={{ color: "#fcb51b" }}
          >
            Customer Stories
          </p>
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 mb-2 lg:mb-4">
            Trusted by <br />
            <span style={{ color: "#0071cd" }}>
              travel companies using Triplla.
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm lg:text-lg">
            Travel agencies and tour operators are using Triplla to replace
            manual work, organize inquiries, speed up quotations and manage
            daily operations from one connected travel management platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-xl lg:rounded-2xl p-4 lg:p-7 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group"
            >
              {/* Quote mark */}
              <div
                className="text-3xl lg:text-5xl font-black leading-none mb-2 lg:mb-4 opacity-20"
                style={{ color: "#0071cd" }}
              >
                "
              </div>

              <p className="text-gray-600 leading-relaxed mb-3 lg:mb-5 text-xs lg:text-sm">
                {t.text}
              </p>

              {/* Metric badge */}
              <div
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 lg:mb-5 border"
                style={{
                  backgroundColor: "#e8f4ff",
                  borderColor: "#b3d9f7",
                  color: "#0071cd",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                  <polyline points="17,6 23,6 23,12" />
                </svg>
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: "#0071cd" }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-bold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#fcb51b"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
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
