
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
    description: 'Ecommerce + Automation. Trigger personalized campaigns via Brevo.',
    link: 'https://www.brevo.com/integrations/shopify/',
  },
  {
    name: 'BigCommerce',
    description: 'Scale your store with advanced workflows connected to Brevo.',
    link: 'https://www.brevo.com/integrations/bigcommerce/',
  },
  {
    name: 'PandaDoc',
    description: 'Auto-sync docs & contacts. Faster workflow automation.',
    link: 'https://www.brevo.com/integrations/pandadoc/',
  },
  {
    name: 'EmailOctopus',
    description: 'CMS + Email Sync. Use Brevo analytics for better segmentation.',
    link: 'https://www.brevo.com/integrations/emailoctopus/',
  },
];

export function Marketplace() {
  return (
    <section className="py-16 px-6 bg-[#f3faf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Welcome to EmailEducate Marketplace
          </h2>
          <p className="text-center text-gray-600">
            Integrate your favorite tools with <span className="brevo-inline-large"><span className="brevo-auto">Brevo</span></span> — from CMS to ecommerce and workflow automation.
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
                <span className="brevo-pill"><span className="brevo-auto">BREVO</span></span>
                <h3 className="title mt-2">{item.name}</h3>
                <p className="desc">{item.description}</p>
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
