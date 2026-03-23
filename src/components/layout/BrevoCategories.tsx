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
    description: "Design workflows, triggers, and customer journeys using Brevo's automation builder — from welcome flows to cart recovery.",
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
    description: "Segment contacts, sync CRMs, and build personalized journeys using Brevo's contacts and tagging features.",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
            Structured Email Marketing Education, Built on
            <span className="brevo-badge-pro ml-2">Brevo</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Learn every major Brevo capability through organized categories that simplify complex topics into practical, actionable steps.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {brevoCategories.map((category, index) => (
            <article
              key={index}
              style={{
                background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)",
                boxShadow: "0 8px 24px rgba(13, 165, 111, 0.35)",
                borderRadius: "18px",
                border: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                color: "#ffffff",
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
              <Link href={category.link} className="no-underline block h-full p-5" style={{ color: "#ffffff" }}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{
                      background: "rgba(255,255,255,0.2)",
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {category.icon}
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "#ffffff" }}
                      dangerouslySetInnerHTML={{
                        __html: category.title.replace(/Brevo/g, '<span style="color:#ffffff;font-weight:700;">Brevo</span>')
                      }}
                    />
                  </div>
                  <p className="text-sm leading-relaxed mb-3.5 flex-grow" style={{ color: "rgba(255,255,255,0.88)" }}>
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2.5 mt-auto">
                    <span className="font-bold" style={{ color: "#ffffff" }}>Explore →</span>
                    <small
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                      dangerouslySetInnerHTML={{
                        __html: category.tags.replace(/Brevo/g, '<span style="color:#ffffff;font-weight:700;">Brevo</span>')
                      }}
                    />
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