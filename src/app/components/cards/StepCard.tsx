"use client";

import { useState } from "react";

type Step = {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const StepCard = ({ step, idx }: { step: Step; idx: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isEven = idx % 2 === 0;

  // Show first 60 characters as preview on mobile
  const previewLength = 50;
  const isLong = step.desc.length > previewLength;
  const preview = step.desc.slice(0, previewLength).trimEnd() + "...";

  return (
    <div className="relative group h-full">
      <div className="bg-white rounded-xl p-3 lg:p-4 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full flex flex-col">
        {/* Icon + title */}
        <div className="flex items-start gap-2 mb-2">
          <div className="relative flex-shrink-0">
            <div
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg md:flex items-center justify-center transition-all duration-300 group-hover:scale-110 hidden"
              style={{ backgroundColor: isEven ? "#e8f4ff" : "#fffbeb" }}
            >
              <div style={{ color: isEven ? "#0071cd" : "#fcb51b" }}>
                {step.icon}
              </div>
            </div>
            <span
              className="bg-transparent sm:bg-brand-blue text-brand-blue absolute -top-1.5 -right-1.5 font-black sm:text-white w-4 h-4 rounded-full flex items-center justify-center"
              style={{ fontSize: "8px" }}
            >
              {step.number}
            </span>
          </div>
          <h3 className="text-xs lg:text-base font-bold text-gray-900 leading-snug mt-1">
            {step.title}
          </h3>
        </div>

        {/* Description
            - Mobile: shows preview text, expands to full on toggle
            - sm and above: always full text, no toggle */}
        <div className="flex flex-col flex-1">
          <p className="text-xs lg:text-base text-gray-500 leading-relaxed">
            {/* Mobile: preview or full based on expanded state */}
            <span className="sm:hidden">
              {isLong && !expanded ? preview : step.desc}
            </span>
            {/* Desktop: always full */}
            <span className="hidden sm:inline">{step.desc}</span>
          </p>

          {/* Read more / Show less — mobile only, only if text is long */}
          {isLong && (
            <button
              className="sm:hidden mt-1.5 text-left text-xs font-semibold self-start"
              style={{ color: "#0071cd" }}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
