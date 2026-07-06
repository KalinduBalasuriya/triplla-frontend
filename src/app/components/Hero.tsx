export default function Hero() {
  return (
    <section
      className="relative pt-20 sm:pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f0f7ff 0%, #ffffff 60%, #fffbf0 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #0071cd, transparent)",
          }}
        />
        <div
          className="absolute top-1/2 -left-32 w-60 sm:w-80 h-60 sm:h-80 rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #fcb51b, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #0071cd, transparent)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left w-full max-w-2xl mx-auto lg:mx-0">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 sm:mb-6 border"
              style={{
                backgroundColor: "#e8f4ff",
                borderColor: "#b3d9f7",
                color: "#0071cd",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                style={{ backgroundColor: "#0071cd" }}
              />
              <span>
                Trusted by Sri Lankan tour operators. Built to scale globally
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 mb-5 sm:mb-6">
              One platform for your
              <br />
              <span className="relative inline-block">
                <span style={{ color: "#0071cd" }}>Travel</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "8px" }}
                >
                  <path
                    d="M2 8 Q75 2 150 7 Q225 12 298 5"
                    stroke="#fcb51b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              Workflow.
            </h1>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-7 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Triplla is an all-in-one travel CRM and DMC management software
              built for travel agencies, inbound tour operators, outbound
              agencies, DMCs and MICE travel teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
              <a
                href="#demo"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-semibold text-white text-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#0071cd",
                  boxShadow: "0 4px 20px rgba(0, 113, 205, 0.35)",
                }}
              >
                Request a Free Demo
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all hover:bg-amber-50"
                style={{ borderColor: "#fcb51b", color: "#b8860b" }}
              >
                See How It Works →
              </a>
            </div>

            {/* Social proof — wraps to new lines on very small screens */}
            <div className="flex flex-wrap items-center gap-x-0 gap-y-3 justify-center lg:justify-start">
              {["Cloud-Based", "One Workflow+", "More Automation"].map(
                (label, i, arr) => (
                  <div key={label} className="flex items-center">
                    <p className="text-base sm:text-lg font-bold text-gray-900 px-3 sm:px-4">
                      {label}
                    </p>
                    {i < arr.length - 1 && (
                      <div className="w-px h-6 bg-gray-200 flex-shrink-0" />
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="flex-1 w-full max-w-sm sm:max-w-lg lg:max-w-none">
            <div className="relative mx-auto">
              {/* Main dashboard card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header bar */}
                <div
                  className="flex items-center justify-between px-5 py-3 border-b border-gray-100"
                  style={{ backgroundColor: "#0071cd" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white opacity-30" />
                    <div className="w-3 h-3 rounded-full bg-white opacity-30" />
                    <div className="w-3 h-3 rounded-full bg-white opacity-30" />
                  </div>
                  <span className="text-xs text-white opacity-70 font-medium">
                    TourHub Dashboard
                  </span>
                  <div className="w-16" />
                </div>

                <div className="p-4 sm:p-5">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                    {[
                      {
                        label: "Active Inquiries",
                        value: "24",
                        color: "#0071cd",
                        bg: "#e8f4ff",
                      },
                      {
                        label: "This Month Bookings",
                        value: "89",
                        color: "#16a34a",
                        bg: "#dcfce7",
                      },
                      {
                        label: "Pending Invoices",
                        value: "12",
                        color: "#fcb51b",
                        bg: "#fffbeb",
                      },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl p-2 sm:p-3"
                        style={{ backgroundColor: s.bg }}
                      >
                        <p
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: s.color }}
                        >
                          {s.value}
                        </p>
                        <p className="text-xs text-gray-500 leading-tight mt-0.5">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Recent inquiries list */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Recent Inquiries
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      {
                        name: "Emma Schneider",
                        tour: "3-Day Safari Package",
                        status: "Confirmed",
                        flag: "🇩🇪",
                      },
                      {
                        name: "James Whitfield",
                        tour: "Island Round Trip",
                        status: "Quoted",
                        flag: "🇬🇧",
                      },
                      {
                        name: "Yuki Tanaka",
                        tour: "One-Day Cultural Tour",
                        status: "New",
                        flag: "🇯🇵",
                      },
                    ].map((r) => (
                      <div
                        key={r.name}
                        className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-base flex-shrink-0">
                            {r.flag}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-gray-800 truncate">
                              {r.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {r.tour}
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ml-2"
                          style={{
                            backgroundColor:
                              r.status === "Confirmed"
                                ? "#dcfce7"
                                : r.status === "Quoted"
                                  ? "#e8f4ff"
                                  : "#fffbeb",
                            color:
                              r.status === "Confirmed"
                                ? "#16a34a"
                                : r.status === "Quoted"
                                  ? "#0071cd"
                                  : "#b8860b",
                          }}
                        >
                          {r.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card 1: invoice */}
              <div className="absolute -right-4 top-10 bg-white rounded-xl shadow-lg border border-gray-100 p-3 w-40 hidden sm:block">
                <p className="text-xs text-gray-400 mb-1">Invoice Generated</p>
                <p className="text-sm font-bold text-gray-800">INV-20241</p>
                <p
                  className="text-xs font-semibold mt-1"
                  style={{ color: "#16a34a" }}
                >
                  $2,450.00 ✓
                </p>
              </div>

              {/* Floating card 2: guide assigned */}
              <div className="absolute -left-4 bottom-12 bg-white rounded-xl shadow-lg border border-gray-100 p-3 w-44 hidden sm:block">
                <p className="text-xs text-gray-400 mb-1">
                  Tour Guide Assigned
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: "#fcb51b" }}
                  >
                    R
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Ruwan P.
                    </p>
                    <p className="text-xs text-gray-400">Safari Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
