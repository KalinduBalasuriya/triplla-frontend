"use client";
import { useState } from "react";

export default function DemoCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    country: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="demo"
      className="py-12 lg:py-16"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: info */}
            <div
              className="p-6 lg:p-8"
              style={{
                background: "linear-gradient(135deg, #0071cd 0%, #0058a3 100%)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#fcb51b" }}
              >
                Request a Demo
              </p>
              <h2 className="text-xl lg:text-2xl font-extrabold text-white mb-2 lg:mb-3">
                See how Triplla can help your travel business.
              </h2>
              <p className="text-blue-200 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed hidden md:block">
                Book a short demo and discover how Triplla can make your daily
                work easier. We'll show you how to manage inquiries, quotations,
                bookings, suppliers, payments and reports in one simple
                platform.
              </p>

              <div className="flex flex-col gap-3 lg:gap-4">
                {[
                  {
                    icon: "🎯",
                    title: "Demo made for your business",
                    desc: "We show Triplla based on your agency type and workflow.",
                  },
                  {
                    icon: "⏱️",
                    title: "Quick walkthrough",
                    desc: "A simple 30-minute demo with the features that matter most.",
                  },
                  {
                    icon: "🤝",
                    title: "No pressure",
                    desc: "Ask questions, understand the system and decide later.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-lg hidden md:block">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-blue-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="p-6 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    ✅
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Request received!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Our team will reach out within 1 business day to schedule
                    your demo.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4">
                    Book your demo
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 lg:gap-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-lg px-3 py-1.5 lg:py-2 text-sm lg:text-base text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                          placeholder="Chamara Silva"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                          Agency Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.agency}
                          onChange={(e) =>
                            setForm({ ...form, agency: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-lg px-3 py-1.5 lg:py-2 text-sm lg:text-base text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                          placeholder="Emerald Isle Tours"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 lg:py-2 text-sm lg:text-base text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="chamara@emeraldisletours.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Mobile / WhatsApp number *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 lg:py-2 text-sm lg:text-base text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="+94712345678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Country *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.country}
                        onChange={(e) =>
                          setForm({ ...form, country: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 lg:py-2 text-sm lg:text-base text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Sri Lanka"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Number of employees *
                      </label>
                      <select className="w-full border border-gray-200 rounded-lg px-3 py-1.5 lg:py-2 text-sm lg:text-base text-gray-600 focus:outline-none focus:border-blue-400 transition-colors bg-white">
                        <option>Below 5</option>
                        <option>5-19</option>
                        <option>20-49</option>
                        <option>50-99</option>
                        <option>Over 100</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 lg:py-2.5 rounded-xl font-semibold text-white text-sm lg:text-base mt-1 transition-all hover:opacity-90 shadow-md"
                      style={{ backgroundColor: "#0071cd" }}
                    >
                      Request A Demo →
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      We'll reach out within 1 business day. No spam.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
