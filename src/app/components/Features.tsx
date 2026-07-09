import {
  Brain,
  Cable,
  ChartCandlestick,
  FolderTree,
  Handshake,
  ReceiptText,
  SquarePercent,
  UserRoundArrowLeft,
} from "lucide-react";

const features = [
  {
    title: "Smart Inquiry & Lead Management",
    desc: "Capture travel inquiries from WhatsApp, email, website forms, ads, chatbots and agent requests in one organized workspace. Assign leads to the right travel designer, track every follow-up and move inquiries smoothly from first contact to confirmed booking.",
    tag: "SALES & CRM",
    whyItMatters:
      "Faster replies help your agency reach customers before competitors do.",
    accent: "#0071cd",
    bg: "#e8f4ff",
    visual: (
      <div className="rounded-xl overflow-hidden border border-blue-100">
        <div
          className="px-4 py-2 text-xs font-semibold border-b border-blue-100 text-blue-700"
          style={{ backgroundColor: "#dbeafe" }}
        >
          Inquiry Inbox · 24 unread
        </div>
        <div className="bg-white divide-y divide-gray-50">
          {[
            {
              name: "Emma S.",
              source: "Website",
              msg: "Interested in 3-day safari...",
              time: "2m ago",
              new: true,
            },
            {
              name: "James W.",
              source: "Email",
              msg: "Looking for island round trip...",
              time: "18m ago",
              new: true,
            },
            {
              name: "Yuki T.",
              source: "WhatsApp",
              msg: "1-day cultural tour, June 15",
              time: "1h ago",
              new: false,
            },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 px-4 py-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: "#0071cd" }}
              >
                {item.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 px-1.5 py-0.5 rounded-full bg-gray-100">
                    {item.source}
                  </span>
                  {item.new && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  )}
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
    title: "Build professional itineraries and quotations faster",
    desc: "Create day-by-day travel plans with hotels, transport, activities, guides, images and pricing details. Triplla helps your team prepare beautiful proposals and accurate quotations without repeatedly editing old Word files or Excel sheets.",
    tag: "TRIP PLANNING",
    whyItMatters:
      "Your team can send better proposals in less time, with fewer pricing mistakes.",
    accent: "#fcb51b",
    bg: "#fffbeb",
    visual: (
      <div className="rounded-xl overflow-hidden border border-amber-100">
        <div
          className="px-4 py-2 text-xs font-semibold border-b border-amber-100 text-amber-700"
          style={{ backgroundColor: "#fef3c7" }}
        >
          3-Day Safari Package
        </div>
        <div className="bg-white p-4 flex flex-col gap-3">
          {[
            {
              icon: "🏨",
              label: "Accommodation",
              value: "Yala Safari Lodge",
              detail: "2 nights · 3 rooms",
            },
            {
              icon: "🚐",
              label: "Transport",
              value: "4WD Safari Jeep",
              detail: "Driver: Chaminda",
            },
            {
              icon: "🎯",
              label: "Tour Guide",
              value: "Ruwan Perera",
              detail: "Wildlife Expert · Eng/Ger",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-2 rounded-lg"
              style={{ backgroundColor: "#fffbeb" }}
            >
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-xs font-semibold text-gray-800">
                  {item.value}
                </p>
                <p className="text-xs text-gray-400">{item.detail}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-500">Total package cost</span>
            <span className="text-sm font-bold" style={{ color: "#fcb51b" }}>
              $2,450
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Manage every confirmed tour from one dashboard",
    desc: "Once a tour is confirmed, Triplla helps your team manage hotel bookings, transport, guides, suppliers, vouchers, tasks and tour status in one connected workflow.",
    tag: "BOOKINGS & OPERATIONS",
    whyItMatters:
      "Sales, reservations and operations teams stay aligned without depending on scattered chats and files.",
    accent: "#16a34a",
    bg: "#dcfce7",
    visual: (
      <div className="rounded-xl overflow-hidden border border-green-100">
        <div
          className="px-4 py-2 text-xs font-semibold border-b border-green-100 text-green-700 flex items-center justify-between"
          style={{ backgroundColor: "#dcfce7" }}
        >
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
  {
    title: "Track Payments,Costs & Profit Clearly.",
    desc: "Generate invoices, monitor collections, track expenses, manage supplier balances and view profit or loss for each tour. Triplla gives owners and managers a clear view of business performance.",
    tag: "Finance & Profit",
    accent: "#7c3aed",
    bg: "#f3e8ff",
    visual: (
      <div className="rounded-xl overflow-hidden border border-purple-100">
        {/* Header */}
        <div
          className="px-4 py-2 text-xs font-semibold border-b border-purple-100 flex items-center justify-between"
          style={{ backgroundColor: "#ede9fe", color: "#6d28d9" }}
        >
          <span>Tour P&amp;L — Island Round Trip · June</span>
          <span className="font-bold" style={{ color: "#16a34a" }}>
            ▲ Profit
          </span>
        </div>

        <div className="bg-white p-4 flex flex-col gap-4">
          {/* Revenue vs Cost summary bar */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Revenue collected</span>
              <span className="font-semibold text-gray-700">$6,200</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: "100%", backgroundColor: "#7c3aed" }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2 mb-1">
              <span>Supplier costs</span>
              <span className="font-semibold text-gray-700">$3,950</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: "64%", backgroundColor: "#f87171" }}
              />
            </div>
          </div>

          {/* Supplier breakdown */}
          <div className="flex flex-col gap-1.5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
              Supplier Balances
            </p>
            {[
              {
                label: "Sunset Beach Hotel",
                amount: "$1,200",
                status: "Paid",
                color: "#16a34a",
              },
              {
                label: "Lanka Transfers Ltd.",
                amount: "$480",
                status: "Pending",
                color: "#f59e0b",
              },
              {
                label: "Guide — Ruwan P.",
                amount: "$300",
                status: "Paid",
                color: "#16a34a",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0"
              >
                <span className="text-xs text-gray-600">{s.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-800">
                    {s.amount}
                  </span>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor:
                        s.color === "#16a34a" ? "#dcfce7" : "#fef3c7",
                      color: s.color,
                    }}
                  >
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Net profit callout */}
          <div
            className="flex items-center justify-between rounded-lg px-3 py-2.5"
            style={{ backgroundColor: "#f3e8ff" }}
          >
            <div>
              <p className="text-xs text-purple-400">Net Profit — this tour</p>
              <p className="text-lg font-black" style={{ color: "#7c3aed" }}>
                $2,250.00
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-purple-400">Margin</p>
              <p className="text-sm font-bold" style={{ color: "#16a34a" }}>
                36.3%
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-12 lg:py-28"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-6 text-brand-yellow"
            style={{ backgroundColor: "#fef6e3" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v4M10 5h4M5 10v4M3 12h4M17 13l1.6 3.4L22 18l-3.4 1.6L17 23l-1.6-3.4L12 18l3.4-1.6L17 13z" />
            </svg>
            Platform Features
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 lg:mb-4">
            Everything your travel team needs,
            <br />
            connected in one place.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm lg:text-lg">
            Triplla connects your sales, reservations, operations, suppliers,
            finance and reporting into one simple system. Your team can manage
            every inquiry, booking and tour with more speed, accuracy and
            visibility.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-8 lg:gap-16">
          {features.map((feat, idx) => (
            <div
              key={feat.title}
              className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-6 lg:gap-16`}
            >
              {/* Text */}
              <div className="flex-1 w-full max-w-lg">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 lg:mb-4 border"
                  style={{
                    backgroundColor: feat.bg,
                    color: feat.accent,
                    borderColor: feat.bg,
                  }}
                >
                  {feat.tag}
                </span>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-4">
                  {feat.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-xs sm:text-sm lg:text-base">
                  {feat.desc}
                </p>
                <h4 className="text-xs lg:text-sm font-semibold text-gray-900 mt-4 lg:mt-6 mb-1 lg:mb-2">
                  Why it matters
                </h4>
                <p className="text-gray-500 text-xs lg:text-sm">
                  {feat.whyItMatters}
                </p>

                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 mt-4 lg:mt-6 text-xs lg:text-sm font-semibold transition-colors"
                  style={{ color: feat.accent }}
                >
                  Learn more →
                </a>
              </div>

              {/* Visual — hidden on mobile, visible on sm and above */}
              <div className="hidden sm:block flex-1 w-full max-w-md">
                <div
                  className="rounded-2xl p-4 border"
                  style={{ backgroundColor: feat.bg, borderColor: feat.bg }}
                >
                  {feat.visual}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional feature grid */}
        <div className="mt-10 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {[
            {
              icon: <Brain className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />,
              title: "Smart Travel CRM",
              desc: "Manage customer profiles, travel history, preferences, communication and documents in one place.",
            },
            {
              icon: (
                <UserRoundArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />
              ),
              title: "Supplier Management",
              desc: "Organize hotels, guides, drivers, transport providers and activity suppliers with rates and booking details.",
            },
            {
              icon: (
                <ReceiptText className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />
              ),
              title: "Voucher & Invoice Automation",
              desc: "Generate professional vouchers and invoices from confirmed booking data without repeated manual typing.",
            },
            {
              icon: (
                <Handshake className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />
              ),
              title: "B2B & Customer Portals",
              desc: "Give agents and customers a smoother way to view proposals, bookings, documents and payment details.",
            },
            {
              icon: (
                <FolderTree className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />
              ),
              title: "Reports & Dashboard",
              desc: "See leads, bookings, payments, operations and profit performance through clear business dashboards.",
            },
            {
              icon: (
                <ChartCandlestick className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />
              ),
              title: "OTA Management",
              desc: "Manage bookings and inquiries from online travel channels such as Viator, GetYourGuide and other OTA platforms.",
            },
            {
              icon: <Cable className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />,
              title: "Website, Email & WhatsApp Integration",
              desc: "Connect your website, WhatsApp, email and digital lead sources to keep every inquiry under control.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl lg:rounded-2xl p-3 lg:p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <span className="mb-2 lg:mb-3 block">{item.icon}</span>
              <h4 className="text-xs font-bold text-gray-900 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed hidden sm:block">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
