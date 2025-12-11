
import Link from 'next/link';

const integrations = [
  {
    name: 'WordPress',
    description: 'CMS + Email Marketing. Transform your website into a customer-ready email engine.',
    link: 'https://www.brevo.com/integrations/wordpress/',
  },
  {
    name: 'WooCommerce',
    description: 'Ecommerce + Email Marketing. Sync customer data & recover abandoned carts.',
    link: 'https://www.brevo.com/integrations/woocommerce/',
  },
  {
    name: 'Shopify',
    description: 'Ecommerce + Automation. Trigger personalized campaigns via <span class="brevo-animated">Brevo</span>.',
    link: 'https://www.brevo.com/integrations/shopify/',
  },
  {
    name: 'BigCommerce',
    description: 'Scale your store with advanced workflows connected to <span class="brevo-animated">Brevo</span>.',
    link: 'https://www.brevo.com/integrations/bigcommerce/',
  },
  {
    name: 'PandaDoc',
    description: 'Auto-sync docs & contacts. Faster workflow automation.',
    link: 'https://www.brevo.com/integrations/pandadoc/',
  },
  {
    name: 'HubSpot',
    description: 'Two-way CRM + Marketing Sync. Connect HubSpot with <span class="brevo-animated">Brevo</span> for automated contact updates and smarter campaigns.',
    link: 'https://www.brevo.com/integrations/hubspot/',
  },
];

export function Marketplace() {
  return (
    <section className="py-16 px-6 bg-[#f3faf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Upgrade Your Stack With <span className="brevo-badge-pro">Brevo</span> Integrations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Discover seamless connections between <span className="brevo-auto">Brevo</span> and top platforms — helping you automate faster and manage your business with clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <Link 
              href={item.link} 
              key={index} 
              className="market-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <span className="brevo-badge-pro">Brevo</span>
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://www.brevo.com/integrations/"
            target="_blank"
            rel="noopener noreferrer"
            className="main-btn no-underline"
          >
            Explore All <span className="brevo-auto">Brevo</span> Integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}
