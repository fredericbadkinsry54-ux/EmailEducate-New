"use client";
import Link from "next/link";

const stories = [
    { title: "SwissCommerce", description: "Boosted automation efficiency and scaled multi-brand communication.", link: "https://www.brevo.com/resources/success-story-swisscommerce/", delay: "200ms" },
    { title: "involve.me", description: "Improved customer onboarding and streamlined automated messaging.", link: "https://www.brevo.com/resources/success-story-involveme/", delay: "400ms" },
    { title: "Group22", description: "Centralized CRM + smarter workflows for high-volume operations.", link: "https://www.brevo.com/success-stories/group22/", delay: "600ms" },
    { title: "Monette", description: "Increased customer retention with targeted customer journeys.", link: "https://www.brevo.com/resources/success-story-monette/", delay: "800ms" },
];

export function CustomerSuccess() {
  return (
    <section className="w-full py-20" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
      <div className="max-w-5xl mx-auto text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: "#ffffff" }}>
          How Businesses Grow Faster With
          <span className="brevo-badge-pro ml-2">Brevo</span>
        </h2>
        <p className="text-base sm:text-lg text-center max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
          Explore real examples of brands using Brevo automation, segmentation, and CRM features to boost performance and scale smarter.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {stories.map((story, index) => (
          <Link href={story.link} target="_blank" key={index}
            className="block rounded-2xl p-6 animate-fade-in transition-all duration-300"
            style={{
              animationDelay: story.delay,
              background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)",
              boxShadow: "0 8px 24px rgba(13, 165, 111, 0.35)",
              borderRadius: "18px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 32px rgba(13, 165, 111, 0.45)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(13, 165, 111, 0.35)";
            }}
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#ffffff" }}>{story.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>{story.description}</p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="https://www.brevo.com/success-stories/" target="_blank"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            borderRadius: "50px",
            border: "1px solid rgba(13,165,111,0.5)",
            color: "#0DA56F",
            fontWeight: "600",
            textDecoration: "none",
            transition: "0.25s ease",
          }}
        >
          View All Brevo Success Stories →
        </Link>
      </div>
    </section>
  );
}