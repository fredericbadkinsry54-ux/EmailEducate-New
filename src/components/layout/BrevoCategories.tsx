
import Link from "next/link";
import { BrevoCampaignIcon } from "./icons/BrevoCampaignIcon";
import { BrevoAutomationIcon } from "./icons/BrevoAutomationIcon";
import { BrevoDeliverabilityIcon } from "./icons/BrevoDeliverabilityIcon";
import { BrevoCrmIcon } from "./icons/BrevoCrmIcon";
import { BrevoToolsComparisonIcon } from "./icons/BrevoToolsComparisonIcon";

const brevoCategories = [
  {
    icon: <BrevoCampaignIcon />,
    title: "Brevo Email Campaigns",
    description: "Create high-converting campaigns with Brevo templates, A/B tests, personalization, and analytics-driven improvements.",
    link: "/articles/brevo-email-campaigns",
    tags: "(Campaigns & Templates)",
  },
  {
    icon: <BrevoAutomationIcon />,
    title: "Brevo Marketing Automation",
    description: "Design workflows, triggers, and customer journeys using Brevo’s automation builder — from welcome flows to cart recovery.",
    link: "/articles/brevo-marketing-automation",
    tags: "(Workflows & Triggers)",
  },
  {
    icon: <BrevoDeliverabilityIcon />,
    title: "Brevo Deliverability & Inbox Success",
    description: "Improve inbox placement with Brevo best-practices: domain setup, warm-up, dedicated IPs, and list hygiene.",
    link: "/articles/brevo-deliverability",
    tags: "(Inbox placement & Warm-up)",
  },
  {
    icon: <BrevoCrmIcon />,
    title: "Brevo CRM & Contacts Management",
    description: "Segment contacts, sync CRMs, and build personalized journeys using Brevo’s contacts and tagging features.",
    link: "/articles/brevo-crm-contacts",
    tags: "(Segmentation & Integrations)",
  },
  {
    icon: <BrevoToolsComparisonIcon />,
    title: "Tools Comparison",
    description: "Compare Brevo with popular email marketing tools like Mailchimp, MailerLite, ConvertKit, ActiveCampaign, and more — learn which tool fits which type of user.",
    link: "/articles/tools-comparison",
    tags: "(Brevo vs Competitors)",
  },
];

export function BrevoCategories() {
  return (
    <section id="brevo-categories" className="py-14 px-4 bg-green-50/50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-7">
          <h2 className="text-3xl font-bold text-green-900 leading-tight">
            Learn Email Marketing — The <span className="brevo-auto">Brevo</span> Way
          </h2>
          <p className="mt-2.5 text-green-800/90 max-w-3xl mx-auto">
            Focused learning paths centered on <span className="brevo-auto">Brevo</span> features: campaigns, automation, deliverability, and CRM. Each category contains step-by-step lessons and practical examples.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {brevoCategories.map((category, index) => (
            <article
              key={index}
              className="bg-white rounded-xl p-5 shadow-md border border-green-900/5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg group"
            >
              <Link href={category.link} className="no-underline text-inherit block h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-b from-green-50 to-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-green-900" dangerouslySetInnerHTML={{ __html: category.title.replace(/Brevo/g, '<span class="brevo-auto">Brevo</span>') }}></h3>
                  </div>
                  <p className="text-sm text-green-900/80 leading-relaxed mb-3.5 flex-grow" dangerouslySetInnerHTML={{ __html: category.description.replace(/Brevo/g, '<span class="brevo-auto">Brevo</span>') }} />
                  <div className="flex items-center gap-2.5 mt-auto">
                    <span className="font-bold text-green-700 group-hover:underline">Explore →</span>
                    <small className="text-green-800/80 text-xs" dangerouslySetInnerHTML={{ __html: category.tags.replace(/Brevo/g, '<span class="brevo-auto">Brevo</span>') }}></small>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <p className="text-center mt-5 text-sm text-green-800/90">
          Want these categories converted to article pages? I can generate SEO-ready article templates next.
        </p>
      </div>
    </section>
  );
}
