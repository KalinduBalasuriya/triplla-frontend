import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative pt-20 sm:pt-32 pb-12 lg:pt-36 lg:pb-24 overflow-hidden scroll-mt-14 sm:scroll-mt-16"
      style={{
        background:
          "linear-gradient(160deg, #f0f7ff 0%, #ffffff 60%, #fffbf0 100%)",
      }}
    >
      {/* Background decorative elements — unchanged */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left content — full width on mobile, half on desktop */}
          <div className="flex-1 text-center lg:text-left w-full max-w-4xl mx-auto lg:mx-0">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 sm:mb-6 border"
              style={{
                backgroundColor: "#e8f4ff",
                borderColor: "#b3d9f7",
                color: "#0071cd",
              }}
            >
              <span
                className="hidden md:block w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                style={{ backgroundColor: "#0071cd" }}
              />
              <span>
                Trusted by Sri Lankan tour operators. Built to scale globally
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-6"
              style={{ lineHeight: "1.25" }}
            >
              One platform for your{" "}
              <span
                className="relative inline-block"
                style={{ lineHeight: "1.35" }}
              >
                <span style={{ color: "#0071cd" }}>Entire Travel</span>
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
              </span>{" "}
              Workflow.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg text-gray-500 leading-relaxed mb-5 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Triplla is an all-in-one travel CRM and DMC management software
              built for travel agencies, inbound tour operators, outbound
              agencies, DMCs and MICE travel teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center lg:justify-start mb-6 sm:mb-10">
              <a
                href="#demo"
                className="w-full sm:w-auto text-center px-5 py-2.5 sm:py-3.5 rounded-xl font-semibold text-white text-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#0071cd",
                  boxShadow: "0 4px 20px rgba(0,113,205,0.35)",
                }}
              >
                Request a Free Demo
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto text-center px-5 py-2.5 sm:py-3.5 rounded-xl font-semibold text-sm border-2 transition-all hover:bg-amber-50"
                style={{ borderColor: "#fcb51b", color: "#b8860b" }}
              >
                See How It Works →
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-x-0 gap-y-2 sm:gap-y-3 justify-center lg:justify-start">
              {["Cloud-Based", "One Workflow+", "More Automation"].map(
                (label, i, arr) => (
                  <div key={label} className="flex items-center">
                    <p className="text-sm sm:text-lg font-bold text-gray-900 px-2.5 sm:px-4">
                      {label}
                    </p>
                    {i < arr.length - 1 && (
                      <div className="w-px h-5 sm:h-6 bg-gray-200 flex-shrink-0" />
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block flex-none w-full max-w-md xl:max-w-lg">
            <Image
              src="/hero-mockup.png"
              alt="Triplla dashboard preview"
              width={600}
              height={500}
              className="w-full h-auto object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
