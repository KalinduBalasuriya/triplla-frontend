"use client";

import { useState } from "react";

export interface PricingCardProps {
  type: string;
  title: string;
  desc?: string;
  price: string;
  features: string[];
  buttontext: string;
  popular?: boolean; // marks the recommended plan + seeds the default selection
}

type CubeVariant = "blue" | "light" | "gold";

const cubeColors: Record<
  CubeVariant,
  { top: string; left: string; right: string }
> = {
  blue: { top: "#7db6ea", left: "#2f8fd8", right: "#0071cd" },
  light: { top: "#ffffff", left: "#cfe4fb", right: "#aecff3" },
  gold: { top: "#fdd77a", left: "#fbbf3d", right: "#e0a410" },
};

// Cube colour for each card while it is NOT selected.
// A selected card sits on a blue background, so it always uses the light cube.
const baseCubeVariants: CubeVariant[] = ["blue", "gold", "blue"];

function CubeIcon({ variant }: { variant: CubeVariant }) {
  const c = cubeColors[variant];
  return (
    <svg
      width="42"
      height="42"
      viewBox="8 4 64 60"
      fill="none"
      aria-hidden="true"
    >
      {/* base cube */}
      <path d="M32 24 L46 31 L32 38 L18 31 Z" fill={c.top} />
      <path d="M18 31 L18 45 L32 52 L32 38 Z" fill={c.left} />
      <path d="M46 31 L46 45 L32 52 L32 38 Z" fill={c.right} />
      {/* top cube */}
      <path d="M32 10 L46 17 L32 24 L18 17 Z" fill={c.top} />
      <path d="M18 17 L18 31 L32 38 L32 24 Z" fill={c.left} />
      <path d="M46 17 L46 31 L32 38 L32 24 Z" fill={c.right} />
      {/* front-right cube */}
      <path d="M46 31 L60 38 L46 45 L32 38 Z" fill={c.top} />
      <path d="M32 38 L32 52 L46 59 L46 45 Z" fill={c.left} />
      <path d="M60 38 L60 52 L46 59 L46 45 Z" fill={c.right} />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span
      className="flex-none w-[18px] h-[18px] rounded-full inline-flex items-center justify-center mt-0.5"
      style={{ backgroundColor: "#dcfce7" }}
    >
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
        <path
          d="M13 4.5 6.5 11 3.5 8"
          stroke="#16a34a"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function PricingCards({ cards }: { cards: PricingCardProps[] }) {
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const i = cards.findIndex((c) => c.popular);
    return i === -1 ? 0 : i;
  });

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
      {cards.map((card, index) => (
        <PricingCard
          key={index}
          pricingCardProps={card}
          baseCubeVariant={baseCubeVariants[index]}
          selected={selectedIndex === index}
          onSelect={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
}

function PricingCard({
  pricingCardProps,
  baseCubeVariant,
  selected,
  onSelect,
}: {
  pricingCardProps: PricingCardProps;
  baseCubeVariant: CubeVariant;
  selected: boolean;
  onSelect: () => void;
}) {
  const { type, title, desc, price, features, buttontext, popular } =
    pricingCardProps;

  const cubeVariant: CubeVariant = selected ? "light" : baseCubeVariant;

  const eyebrowColor = selected
    ? "rgba(255,255,255,0.85)"
    : baseCubeVariant === "gold"
      ? "#b8860b"
      : "#0071cd";

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`relative flex flex-col rounded-2xl p-5 lg:p-7 cursor-pointer select-none outline-none transition-all duration-200 ${
        selected ? "" : "bg-white border hover:-translate-y-1"
      }`}
      style={
        selected
          ? {
              backgroundColor: "#0071cd",
              boxShadow: "0 20px 40px -18px rgba(0,113,205,0.5)",
            }
          : {
              borderColor: "#eef2f7",
              boxShadow: "0 8px 24px -14px rgba(16,24,40,0.14)",
            }
      }
    >
      {/* Most Popular badge */}
      {popular && (
        <span
          className="absolute top-4 right-4 lg:top-5 lg:right-5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
          style={
            selected
              ? { backgroundColor: "rgba(255,255,255,0.22)", color: "#ffffff" }
              : { backgroundColor: "#e8f4ff", color: "#0071cd" }
          }
        >
          Most Popular
        </span>
      )}

      {/* Icon — larger on desktop */}
      <div className="hidden md:block mb-2.5 lg:mb-4">
        <CubeIcon variant={cubeVariant} />
      </div>

      {/* Plan category */}
      <p
        className="mb-1.5 mt-8 md:mt-0 text-xs lg:text-sm font-bold uppercase tracking-widest"
        style={{ color: eyebrowColor }}
      >
        {type}
      </p>

      {/* Title */}
      <h3
        className="mb-1.5 lg:mb-2 text-lg lg:text-xl font-extrabold leading-tight"
        style={{ color: selected ? "#ffffff" : "#0f172a" }}
      >
        {title}
      </h3>

      {/* Description */}
      {desc && (
        <p
          className="mb-2 lg:mb-3 text-sm leading-relaxed"
          style={{ color: selected ? "rgba(255,255,255,0.82)" : "#64748b" }}
        >
          {desc}
        </p>
      )}

      {/* Price */}
      <div className="mb-3 lg:mb-5">
        <span
          className="font-extrabold leading-none"
          style={{ color: selected ? "#ffffff" : "#0f172a" }}
        >
          <span className="text-base lg:text-lg">Price : {price}</span>
        </span>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-1.5 lg:gap-2.5 mb-4 lg:mb-6">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2">
            <CheckIcon />
            <span
              className="text-sm lg:text-base leading-snug"
              style={{ color: selected ? "#ffffff" : "#475569" }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      {/* CTA */}

      <a
        href="#demo"
        className="block text-center py-2.5 lg:py-3 rounded-lg lg:rounded-xl font-bold text-sm lg:text-base transition-opacity hover:opacity-90"
        style={
          selected
            ? { backgroundColor: "#ffffff", color: "#0071cd" }
            : { backgroundColor: "#e8f4ff", color: "#0071cd" }
        }
      >
        {buttontext}
      </a>
    </div>
  );
}
