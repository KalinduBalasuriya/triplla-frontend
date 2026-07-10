import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="TourHub Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Triplla
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-5">
              Triplla is an all-in-one travel management software built for
              travel agencies, DMCs, tour operators and tourism businesses.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mb-5">
              Your travel business, simplified.
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              {[
                {
                  label: "Twitter",
                  path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  label: "LinkedIn",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  label: "YouTube",
                  path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-800 hover:bg-blue-600 transition-colors"
                  aria-label={s.label}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Home",
                "Features",
                "Solutions",
                "Pricing",
                "Customer Feedback",
                "Resources",
                "Request Demo",
                "Login",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Solutions
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Tour Operators",
                "DMC Companies",
                "Inbound Travel Agencies",
                "Outbound Travel Agencies",
                "Group Tour Operators",
                "FIT Tour Specialists",
                "MICE Travel Teams",
                "Customized Tour Specialists",
                "B2B Travel Agents",
                "Growing Travel Startups",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2">
              {["About Us", "Contact", "Resources", "Blog", "Support"].map(
                (l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                ),
              )}
            </div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4 mt-6">
              Contact
            </h4>
            <p className="text-sm text-gray-400">hello@triplla.io</p>
            <p className="text-sm text-gray-400">sales@triplla.com</p>
            <p className="text-sm text-gray-400">+94 77 381 2352</p>
            <p className="text-sm text-gray-400">+94 71 724 9544</p>
            <p className="text-sm text-gray-400">
              No. 477/4, Makumbura, Pannipitiya, Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} riplla. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Powered by Designfox Pvt Ltd </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {l}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
