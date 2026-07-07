import {
  Clipboard,
  MessagesSquare,
  Repeat,
  Spotlight,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "Faster",
    label: "Quote turnaround",
    desc: "Prepare accurate tour quotations without starting from Excel every time.",
  },
  {
    value: "More",
    label: "Bookings converted",
    desc: "Follow up on every inquiry and move leads smoothly toward confirmation.",
  },
  {
    value: "Zero",
    label: "Missed lead chaos",
    desc: "Every inquiry is captured, assigned and tracked in one dashboard.",
  },
  {
    value: "One system",
    label: "For your team",
    desc: "Sales, reservations, operations and finance work from the same platform.",
  },
];

const salesFeatures = [
  {
    title: "Respond before your competitor does",
    desc: "Tour inquiries can go cold quickly. Triplla helps your team capture leads from WhatsApp, email, website forms, ads and agents, so you can reply with the right details faster.",
    icon: <Zap className="w-5 h-5 text-brand-yellow" />,
  },
  {
    title: "Stop losing leads to poor follow-up",
    desc: "Triplla tracks every inquiry from the first message to the final booking. Your team can set reminders, check lead status and know exactly which customer needs attention next.",
    icon: <Spotlight className="w-5 h-5 text-brand-yellow" />,
  },
  {
    title: "Quote professionally and win with confidence",
    desc: "Create branded quotations and travel proposals with itinerary details, images, pricing, inclusions and clear terms. Give customers a professional reason to trust your agency.",
    icon: <Clipboard className="w-5 h-5 text-brand-yellow" />,
  },
  {
    title: "Turn happy travelers into repeat customers",
    desc: "Keep customer profiles, travel history, preferences and communication records in one CRM. Triplla helps your team build stronger relationships and bring past customers back again.",
    icon: <Repeat className="w-5 h-5 text-brand-yellow" />,
  },
];

export default function AccelerateSales() {
  return (
    <section
      className="py-10 sm:py-14 lg:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0071cd 0%, #0058a3 100%)",
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full opacity-10 bg-white" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full opacity-5 bg-white" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-amber-400 opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-7 sm:mb-10 lg:mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#fcb51b" }}
          >
            RESPOND FASTER. SELL BETTER.
          </p>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
            Turn more travel inquiries
            <br className="hidden sm:block" /> into confirmed bookings.
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Travel inquiries move fast. When your team takes too long to reply,
            checks prices manually, or misses follow-ups, bookings can easily go
            to another agency.
            <br className="hidden sm:block" /> Triplla helps travel agencies,
            DMCs and tour operators respond faster, send professional
            quotations, track every lead and manage the full sales workflow from
            one platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-7 sm:mb-10 lg:mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 text-center"
            >
              <p
                className="font-black text-white mb-0.5 leading-tight"
                style={{
                  color: s.value === "Zero" ? "#fcb51b" : "white",
                  fontSize: s.value.length > 4 ? "1.1rem" : "1.6rem",
                }}
              >
                {s.value}
              </p>
              <p className="text-xs font-semibold text-blue-100 mb-0.5">
                {s.label}
              </p>
              <p className="text-xs text-blue-300 leading-relaxed hidden sm:block">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {salesFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <span className="hidden mb-2 sm:mb-3 lg:block">{f.icon}</span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-7 sm:mt-10">
          <a
            href="#demo"
            className="inline-block w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-gray-900 text-sm shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
            style={{
              backgroundColor: "#fcb51b",
              boxShadow: "0 4px 20px rgba(252, 181, 27, 0.4)",
            }}
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
