"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const featuresDropdown = [
  {
    category: "Sales",
    items: [
      { label: "Inquiry Management", desc: "Capture and track travel leads" },
      { label: "Travel CRM", desc: " Manage customers and follow-ups" },
      { label: "Sales Pipeline", desc: "Move leads from inquiry to booking" },
    ],
  },
  {
    category: "Planning",
    items: [
      {
        label: "Itinerary Builder",
        desc: " Build day-by-day tour plans",
      },
      { label: "Quotation Management", desc: "Create accurate tour pricing" },
      { label: "Proposal Generator", desc: "Send branded travel offers" },
    ],
  },
  {
    category: "Operations",
    items: [
      {
        label: "Booking Management",
        desc: "Manage tours and reservations",
      },
      { label: "Tour Calendar", desc: "Track upcoming travel operations" },
      {
        label: "Voucher Automation",
        desc: "Generate service vouchers faster",
      },
    ],
  },
  {
    category: "Finance",
    items: [
      { label: "Invoice & Payments", desc: "Track billing and collections" },
      { label: "Supplier Ledger", desc: "Manage supplier balances" },
      { label: "Profit Reports", desc: " View profit per tour" },
    ],
  },
  {
    category: "Growth",
    items: [
      { label: "OTA Management", desc: "Manage online travel channels" },
      { label: "B2B Agent Portal", desc: "Support partner agents" },
      { label: "Reports Dashboard", desc: " See business performance clearly" },
    ],
  },
];

const solutionsDropdown = [
  { label: "Day Tour Operators", desc: "One-day excursions & cultural visits" },
  { label: "Safari Companies", desc: "Wildlife & nature expeditions" },
  { label: "Island Tour Agencies", desc: "Round-island & coastal tours" },
  { label: "Inbound Tour Operators", desc: "Foreign tourist management" },
  {
    label: "Multi-Destination Agencies",
    desc: "Complex itinerary specialists",
  },
];

export default function Navbar() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(e.target as Node)
      )
        setFeaturesOpen(false);
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target as Node)
      )
        setSolutionsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-32 h-16 rounded-lg flex items-center justify-center bg-slate-">
              <Image
                src="/logo2.png"
                alt="Triplla Logo"
                className="object-contain"
                height={120}
                width={120}
              />
            </div>
            {/* <span
              className="font-bold text-xl tracking-tight"
              style={{ color: "#0071cd" }}
            >
              Triplla<span style={{ color: "#fcb51b" }}>Suite</span>
            </span> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Features */}
            <div ref={featuresRef} className="relative">
              <button
                onClick={() => {
                  setFeaturesOpen(!featuresOpen);
                  setSolutionsOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                style={{ "--hover-color": "#0071cd" } as React.CSSProperties}
              >
                Features
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${featuresOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {featuresOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 p-5 grid grid-cols-3 gap-5">
                  {featuresDropdown.map((cat) => (
                    <div key={cat.category}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                        {cat.category}
                      </p>
                      <div className="flex flex-col gap-2">
                        {cat.items.map((item) => (
                          <a key={item.label} href="#" className="group">
                            <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                              {item.label}
                            </p>
                            <p className="text-xs text-gray-400">{item.desc}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Solutions */}
            <div ref={solutionsRef} className="relative">
              <button
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setFeaturesOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Solutions
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    By Agency Type
                  </p>
                  <div className="flex flex-col gap-3">
                    {solutionsDropdown.map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className="group flex items-start gap-3"
                      >
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center mt-0.5 flex-shrink-0"
                          style={{ backgroundColor: "#e8f4ff" }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#0071cd" }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#pricing"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              How it works
            </a>

            <a
              href="#pricing"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Resources
            </a>
            <a
              href="#resources"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Company
            </a>
            <a
              href="#testimonials"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Customer Feedbacks
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#demo"
              className="text-sm font-medium transition-colors"
              style={{ color: "#0071cd" }}
            >
              Request Demo
            </a>
            <a
              href="#login"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 shadow-sm"
              style={{ backgroundColor: "#0071cd" }}
            >
              Log In
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          <a
            href="#features"
            className="text-sm font-medium text-gray-700 py-2"
          >
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 py-2">
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-700 py-2"
          >
            Customer Feedbacks
          </a>
          <a
            href="#resources"
            className="text-sm font-medium text-gray-700 py-2"
          >
            Resources
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium text-gray-700 py-2"
          >
            Solutions
          </a>
          <a
            href="#demo"
            className="text-sm font-medium py-2"
            style={{ color: "#0071cd" }}
          >
            Request Demo
          </a>
          <a
            href="#login"
            className="text-sm font-semibold text-white py-2 px-4 rounded-lg text-center"
            style={{ backgroundColor: "#0071cd" }}
          >
            Log In
          </a>
        </div>
      )}
    </nav>
  );
}
