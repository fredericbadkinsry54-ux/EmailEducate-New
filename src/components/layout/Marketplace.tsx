import Link from 'next/link';

const integrations = [
  { name: 'WordPress', description: 'CMS + Email Marketing. Transform your website into a customer-ready email engine.', link: 'https://get.brevo.com/4o18rd1h33kd/integrations/wordpress/' },
  { name: 'WooCommerce', description: 'Ecommerce + Email Marketing. Sync customer data & recover abandoned carts.', link: 'https://get.brevo.com/4o18rd1h33kd/integrations/woocommerce/' },
  { name: 'Shopify', description: 'Ecommerce + Automation. Trigger personalized campaigns via Brevo.', link: 'https://get.brevo.com/4o18rd1h33kd/integrations/shopify/' },
  { name: 'BigCommerce', description: 'Scale your store with advanced workflows connected to Brevo.', link: 'https://get.brevo.com/4o18rd1h33kd/integrations/bigcommerce/' },
  { name: 'PandaDoc', description: 'Auto-sync docs & contacts. Faster workflow automation.', link: 'https://get.brevo.com/4o18rd1h33kd/integrations/pandadoc/' },
  { name: 'HubSpot', description: 'Two-way CRM + Marketing Sync. Connect HubSpot with Brevo for automated contact updates and smarter campaigns.', link: 'https://get.brevo.com/4o18rd1h33kd/integrations/hubspot/' },
];

export function Marketplace() {
  return (
    <section className="py-16 px-6" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: "#ffffff" }}>
            Upgrade Your Stack With <span className="brevo-badge-pro">Brevo</span> Integrations
          </h2>
          <p className="text-base sm:text-lg text-center max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Discover seamless connections between <span className="brevo-auto">Brevo</span> and top platforms — helping you automate faster and manage your business with clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)",
                boxShadow: "0 8px 24px rgba(13, 165, 111, 0.35)",
                borderRadius: "18px",
                border: "none",
                padding: "24px",
                color: "#ffffff",
                textDecoration: "none",
                display: "block",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
              <span style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.25)",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "12px",
                padding: "3px 12px",
                borderRadius: "20px",
                marginBottom: "10px",
              }}>Brevo</span>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#ffffff", marginBottom: "8px" }}>{item.name}</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", lineHeight: "1.6", margin: 0 }}>{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://get.brevo.com/4o18rd1h33kd/integrations/" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "13px 32px",
              background: "#0DA56F",
              color: "#ffffff",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(13,165,111,0.35)",
              transition: "0.25s ease",
            }}
          >
            Explore All Brevo Integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}