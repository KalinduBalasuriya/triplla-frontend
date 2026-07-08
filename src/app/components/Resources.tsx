import {
  Book,
  BookmarkCheck,
  Check,
  SquareChartGantt,
  Video,
} from "lucide-react";

const resources = [
  {
    type: "Guide",
    title: "The Complete Guide to Managing Tourist Inquiries",
    desc: "A practical handbook for travel agencies on how to capture, respond, and convert tourist inquiries efficiently.",
    color: "#0071cd",
    bg: "#e8f4ff",
    icon: <Book className="w-5 h-5 text-brand-blue" />,
    readTime: "8 min read",
  },
  {
    type: "Checklist",
    title: "Tour Package Setup Checklist",
    desc: "Everything you need to configure accommodations, transport, guides, pricing before you launch a new package.",
    color: "#16a34a",
    bg: "#dcfce7",
    icon: <BookmarkCheck className="w-5 h-5 text-green-500" />,
    readTime: "3 min read",
  },
  {
    type: "Case Study",
    title: "How Emerald Isle Tours 3× Their Bookings",
    desc: "A Sri Lankan travel agency went from spreadsheets to TourHub. Here's exactly what changed and how.",
    color: "#fcb51b",
    bg: "#fffbeb",
    icon: <SquareChartGantt className="w-5 h-5 text-yellow-500" />,
    readTime: "5 min read",
  },
  {
    type: "Webinar",
    title: "Live Demo: TourHub for Safari Operators",
    desc: "Watch a live walkthrough of TourHub configured for a wildlife safari company with multi-day packages.",
    color: "#7c3aed",
    bg: "#f3e8ff",
    icon: <Video className="w-5 h-5 text-purple-500" />,
    readTime: "45 min video",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#fcb51b" }}
            >
              Resources
            </p>
            <h2 className="text-xl sm:text-4xl font-extrabold text-gray-900">
              Learn & grow with Triplla.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold whitespace-nowrap"
            style={{ color: "#0071cd" }}
          >
            View all resources →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r) => (
            <a
              href="#"
              key={r.title}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-5 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded-full"
                    style={{ backgroundColor: r.bg, color: r.color }}
                  >
                    {r.type}
                  </span>
                  <span className="text-2xl">{r.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                  {r.desc}
                </p>
              </div>
              <div className="px-5 py-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400">{r.readTime}</span>
                <span
                  className="text-xs font-semibold transition-colors"
                  style={{ color: r.color }}
                >
                  Read →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
