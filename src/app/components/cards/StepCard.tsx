type Step = {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export default function StepCard({ step, idx }: { step: Step; idx: number }) {
  const isLeft = idx % 2 === 0;

  return (
    /* Each row: full width, flex, center-aligned vertically */
    <div className="relative flex items-center justify-center w-full ">
      {/* ── LEFT CARD (even steps) ── */}
      <div
        className={`w-[calc(50%-2.5rem)] ${isLeft ? "flex justify-end pr-6" : "invisible"}`}
      >
        {isLeft && (
          <div className="bg-gray-50 rounded-2xl p-6 max-w-sm w-full text-right shadow-sm border border-gray-100 hover:shadow-md hover:border-1 hover:border-blue-100">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#fcb51b" }}
            >
              Step {step.number}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        )}
      </div>

      {/* ── ICON ON THE LINE ── */}
      <div
        className="flex-shrink-0 z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white"
        style={{ borderColor: "#0071cd", color: "#0071cd" }}
      >
        {step.icon}
      </div>

      {/* ── RIGHT CARD (odd steps) ── */}
      <div
        className={`w-[calc(50%-2.5rem)] ${!isLeft ? "flex justify-start pl-6" : "invisible"}`}
      >
        {!isLeft && (
          <div className="bg-gray-50 rounded-2xl p-6 max-w-sm w-full text-left shadow-sm border border-gray-100 hover:shadow-md hover:border-1 hover:border-blue-100">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#fcb51b" }}
            >
              Step {step.number}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
