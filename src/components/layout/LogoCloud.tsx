

import {
  AmplitudeLogo,
  IntegrationsLogo,
  IntercomLogo,
  StripeLogo,
  YotpoLogo,
  ZendeskLogo,
  ZoomLogo,
} from "@/components/CompanyLogos";

const logos = [
    { name: 'Intercom', component: IntercomLogo },
    { name: 'Yotpo', component: YotpoLogo },
    { name: 'Zoom', component: ZoomLogo },
    { name: 'Zendesk', component: ZendeskLogo },
    { name: 'Integrations', component: IntegrationsLogo },
    { name: 'Stripe', component: StripeLogo },
    { name: 'Amplitude', component: AmplitudeLogo },
];

export function LogoCloud() {
    const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-background sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <p className="text-lg text-muted-foreground">
                Join 500,000+ customers around the world who trust Brevo
            </p>
        </div>
        <div className="mt-12 logo-scroller" data-animated="true">
          <div className="flex w-max space-x-20 scroller-inner items-center">
            {duplicatedLogos.map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <div key={index} className="flex-shrink-0">
                  <LogoComponent className="h-8 w-auto text-muted-foreground" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

    