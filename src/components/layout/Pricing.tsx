
"use client";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Free",
        price: "300 emails/day",
        features: [
            "Drag & Drop Email Editor",
            "Email Templates",
            "Basic Reporting & Analytics",
            "AI Content Generator",
            "Basic Segmentation",
        ],
        borderColor: "border-green-200",
        priceColor: "text-teal-500",
        isPopular: false,
    },
    {
        name: "Starter",
        price: "$9/month",
        features: [
            "Everything in Free",
            "5,000 emails per month",
            "Forms & Email Support",
            "Advanced Segmentation",
            "No Brevo Logo",
        ],
        borderColor: "border-green-300",
        priceColor: "text-teal-500",
        isPopular: false,
    },
    {
        name: "Standard",
        price: "$18/month",
        features: [
            "Everything in Starter",
            "Marketing Automation",
            "A/B Testing",
            "Advanced Email Reporting",
            "Landing Pages",
            "Web + Event Tracking",
        ],
        borderColor: "border-green-500",
        priceColor: "text-teal-600",
        isPopular: true,
    },
    {
        name: "Professional",
        price: "$499/month",
        features: [
            "Everything in Standard",
            "Multi-Account Management",
            "Dedicated IP",
            "AI Data Analyst",
            "Custom Data Integrations",
            "Deliverability Specialist Support",
        ],
        borderColor: "border-emerald-400",
        priceColor: "text-teal-600",
        isPopular: false,
    },
];

export function Pricing() {
    return (
        <section className="py-16 px-5 bg-green-50/50">
            <h2 className="text-center text-3xl font-bold text-green-900 mb-2">
                Email Marketing Pricing (<span className="brevo-auto">Brevo</span> Style)
            </h2>
            <p className="text-center text-green-800/90 mb-10 text-lg max-w-2xl mx-auto">
                Choose the plan that fits your business — powered by <span className="brevo-auto">Brevo</span>’s real features & pricing.
            </p>

            <div className="flex flex-nowrap justify-start md:justify-center gap-[35px] w-full overflow-x-auto pb-2.5 max-w-6xl mx-auto px-4">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={cn(
                            "bg-white border-2 rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 w-[260px] min-w-[260px] flex-shrink-0",
                            plan.borderColor,
                            {
                                "shadow-2xl transform scale-105": plan.isPopular,
                            }
                        )}
                    >
                        <h3 className="text-green-800 text-2xl font-semibold">{plan.name}</h3>
                        <p className={cn("my-2 text-lg font-semibold", plan.priceColor)}>
                            {plan.price}
                        </p>
                        <ul className="list-none p-0 mt-5 text-slate-600 space-y-2 text-sm">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <span className="text-green-500 mr-2">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
