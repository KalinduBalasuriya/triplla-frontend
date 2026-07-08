// Server Component (SSR) — no "use client"
import StepCard from "./cards/StepCard";

const steps = [
  {
    number: "01",
    title: "Capture Inquiry",
    desc: "Collect leads from WhatsApp, email, website forms, Meta Ads, Google Ads, chatbots and landing pages in one centralized lead inbox. Assign inquiries, set reminders and track every follow-up until the booking is won or lost.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build the Itinerary",
    desc: "Create professional day-by-day itineraries with hotels, transport, guides, activities, meals, images, travel notes, inclusions and exclusions. Reuse saved templates or customize each tour based on the client's request.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Prepare the Quotation",
    desc: "Calculate hotels, transport, activities, guide fees, visa charges, supplier costs, markups and margins in one place. Triplla helps your team send accurate quotations faster while keeping profit visible.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Send the Proposal",
    desc: "Share polished travel proposals with your branding through email, WhatsApp or a secure link. Give customers a clear, modern and professional experience before they confirm.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="9,11 12,14 22,4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Confirm the Booking",
    desc: "Manage hotel confirmations, transport reservations, supplier arrangements, customer approvals and booking status from one dashboard. Your team can see what is confirmed, pending or needs action.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10,8 16,12 10,16 10,8" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Run the Tour",
    desc: "Assign drivers, guides and vehicles. Manage guest details, pickup times, documents, service notes and operation tasks so your team can run each tour with fewer mistakes.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9L2.4 9.9C2.1 10.5 2 10.9 2 11v5c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Generate Vouchers & Invoices",
    desc: "Create service vouchers, supplier vouchers, invoices and payment records without retyping the same details again and again.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8a2 2 0 002-2V5a1 1 0 011-1h10a1 1 0 011 1v1a2 2 0 002 2 2 2 0 000 4 2 2 0 00-2 2v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1a2 2 0 00-2-2 2 2 0 010-4z" />
        <line x1="9" y1="4" x2="9" y2="20" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Track Profit & Performance",
    desc: "View revenue, supplier costs, margins, pending payments and profit or loss per tour. Triplla gives owners and managers the visibility needed to grow with control.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-10 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — font sizes unchanged from original */}
        <div className="text-center mb-8 lg:mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2 lg:mb-3"
            style={{ color: "#fcb51b" }}
          >
            From Inquiry to Invoice
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 lg:mb-4">
            Every Step Has
            <br />
            <span style={{ color: "#0071cd" }}>A Place In Triplla.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm lg:text-lg">
            Triplla replaces the chaos of manual management with a clear,
            end-to-end workflow purpose-built for travel agencies.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-11 left-1/2 -translate-x-1/2 w-[85%] h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, #e0edfa 10%, #e0edfa 90%, transparent)",
            }}
          />

          {/* 2 cols on mobile, 4 on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {steps.map((step, idx) => (
              <StepCard key={step.number} step={step} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
