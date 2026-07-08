import { Building, Home } from "lucide-react";
import PricingCards, { type PricingCardProps } from "./cards/PricingCards";

const pricingCards: PricingCardProps[] = [
  {
    type: "One-time setup",
    title: "Software Installation Package",
    desc: "Best for travel companies that prefer a complete setup with a one-time implementation cost.",
    price: "On Request",
    features: [
      "Full Triplla system setup",
      "Company branding and basic configuration",
      "User roles and team setup",
      "Core travel workflow modules",
      "Initial training and onboarding",
      "Support during launch period",
    ],
    buttontext: "Request Demo",
  },
  {
    type: "MONTHLY / YEARLY PLAN",
    title: "Subscription-Based Package",
    price: "On Request",
    desc: "Best for agencies that want a flexible plan with continuous updates, support and scalable access.",
    features: [
      "Access to selected Triplla modules",
      "Cloud-based travel management system",
      "Regular updates and improvements",
      "User and workflow configuration",
      "Ongoing support option",
      "Easy upgrade as your business grows",
    ],
    buttontext: "Request Pricing",
    popular: true,
  },
  {
    type: "CUSTOM SOLUTION",
    title: "Enterprise & DMC Package",
    price: "On Request",
    desc: "Best for growing DMCs, multi-branch agencies, B2B travel networks and companies with custom workflows.",
    features: [
      "Advanced workflow customization",
      "B2B agent portal",
      "Customer portal",
      "OTA management support",
      "API or website integration options",
      "Dedicated onboarding support",
    ],
    buttontext: "Talk to Sales",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-12 lg:py-16"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#fcb51b" }}
          >
            Pricing plans
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-gray-900 mb-2.5">
            Flexible pricing for every travel business.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Triplla is available with both one-time software installation &
            subscription-based pricing. <br /> Since every travel business has
            different workflows, team sizes and module requirements, pricing is
            provided on request. Book a demo and we will recommend the best
            Triplla setup for your agency, DMC or tour operation.
          </p>
        </div>

        {/* Interactive pricing cards (client component) */}
        <PricingCards cards={pricingCards} />

        {/* Custom solution banner */}
        <div className="max-w-5xl mx-auto mt-5">
          <div
            className="rounded-xl p-4 sm:p-5 border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}
          >
            <div className="flex items-start gap-3 max-w-2xl">
              {/* <span
                className="hidden md:block text-xl leading-none"
                style={{ color: "#b8860b" }}
              >
                <Home />
              </span> */}
              <div>
                <h4 className="font-bold text-gray-900 text-sm lg:text-md mb-0.5">
                  Need a Custom Solution?
                </h4>
                <p className="text-xs lg:text-sm text-gray-500">
                  Not sure which plan is right for your business? Book a free
                  demo and our team will understand your workflow, recommend the
                  best setup and provide a pricing proposal based on your actual
                  requirements.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="text-[13px] font-semibold whitespace-nowrap"
              style={{ color: "#b8860b" }}
            >
              Request a Free Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
