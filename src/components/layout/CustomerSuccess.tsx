
"use client";

import Link from "next/link";

const stories = [
    {
        title: "SwissCommerce",
        description: "Boosted automation efficiency and scaled multi-brand communication.",
        link: "https://www.brevo.com/resources/success-story-swisscommerce/",
        delay: "200ms"
    },
    {
        title: "involve.me",
        description: "Improved customer onboarding and streamlined automated messaging.",
        link: "https://www.brevo.com/resources/success-story-involveme/",
        delay: "400ms"
    },
    {
        title: "Group22",
        description: "Centralized CRM + smarter workflows for high-volume operations.",
        link: "https://www.brevo.com/success-stories/group22/",
        delay: "600ms"
    },
    {
      title: "Monette",
      description: "Increased customer retention with targeted customer journeys.",
      link: "https://www.brevo.com/resources/success-story-monette/",
      delay: "800ms"
    },
];

export function CustomerSuccess() {
  return (
    <section className="w-full py-20 bg-[#f4fff8]">
      <div className="max-w-5xl mx-auto text-center mb-14 px-4">
        <h2 className="text-4xl font-bold text-[#0f5132] mb-3">
          Customer Success Stories Powered by <span className="text-green-600"><span className="brevo-auto">Brevo</span></span>
        </h2>
        <p className="text-gray-600 text-lg">
          Real businesses achieving better engagement, automation, and growth using <span className="brevo-auto">Brevo</span>’s 
          all-in-one marketing tools.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {stories.map((story, index) => (
          <Link href={story.link} target="_blank"
            key={index}
            className="block rounded-2xl bg-white border border-green-200 shadow-sm p-6 hover:shadow-lg hover:border-green-500 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: story.delay }}>
            <h3 className="text-lg font-semibold text-green-700 mb-2">{story.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {story.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="https://www.brevo.com/success-stories/" target="_blank"
          className="inline-block px-8 py-3 rounded-full border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300">
          View All <span className="brevo-auto">Brevo</span> Success Stories →
        </Link>
      </div>
    </section>
  );
}
