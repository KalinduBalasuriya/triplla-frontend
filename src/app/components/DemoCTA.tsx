"use client";
import { useState } from "react";

export default function DemoCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", agency: "", country: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="demo" className="py-20 lg:py-28" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: info */}
            <div className="p-8 lg:p-12" style={{ background: "linear-gradient(135deg, #0071cd 0%, #0058a3 100%)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#fcb51b" }}>Request a Demo</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                See TourHub running for your agency.
              </h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Book a 30-minute personalized walkthrough. We'll show you TourHub configured for agencies just like yours — with your type of tours, your team size, your workflow.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "🎯", title: "Tailored demo", desc: "We configure it for your agency type before the call" },
                  { icon: "⏱️", title: "30 minutes", desc: "No fluff, just the features that matter to you" },
                  { icon: "🤝", title: "No pressure", desc: "Get your questions answered, decide at your own pace" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-blue-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 lg:p-12">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: "#dcfce7" }}>✅</div>
                  <h3 className="text-xl font-bold text-gray-900">Request received!</h3>
                  <p className="text-gray-500 text-sm">Our team will reach out within 1 business day to schedule your demo.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Book your demo</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                          placeholder="Chamara Silva"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Agency Name *</label>
                        <input
                          required
                          type="text"
                          value={form.agency}
                          onChange={e => setForm({ ...form, agency: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                          placeholder="Emerald Isle Tours"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Work Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="chamara@emeraldisletours.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Country *</label>
                      <input
                        required
                        type="text"
                        value={form.country}
                        onChange={e => setForm({ ...form, country: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Sri Lanka"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">What type of tours do you offer?</label>
                      <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-blue-400 transition-colors bg-white">
                        <option>Day trips & excursions</option>
                        <option>Safari & wildlife tours</option>
                        <option>Island round trips</option>
                        <option>Multi-day packages</option>
                        <option>Mixed / multiple types</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-semibold text-white text-sm mt-2 transition-all hover:opacity-90 shadow-md"
                      style={{ backgroundColor: "#0071cd" }}
                    >
                      Request My Demo →
                    </button>
                    <p className="text-xs text-gray-400 text-center">We'll reach out within 1 business day. No spam.</p>
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
