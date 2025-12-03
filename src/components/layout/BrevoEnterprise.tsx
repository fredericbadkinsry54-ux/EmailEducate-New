
'use client';
import Link from 'next/link';

export function BrevoEnterprise() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-16 px-4 md:px-10 bg-green-50/50 gap-10 text-center md:text-left">
      <div className="w-full md:w-[45%]">
        <span className="text-sm bg-green-100 py-1 px-2.5 rounded-md text-green-900 font-semibold">
          <span className="brevo-auto">BREVO</span> ENTERPRISE
        </span>

        <h2 className="text-4xl font-extrabold text-green-900 my-5 leading-tight">
          Supercharge your
          <br />
          Enterprise Marketing
        </h2>

        <ul className="list-none p-0 mt-5">
          <li className="mb-3.5 text-base text-green-900/90 flex items-start gap-2.5">
            <span className="text-primary text-xl mr-1.5">✔</span>
            <strong>All-in-one platform:</strong> Omnichannel marketing, data, and
            automation in one place.
          </li>
          <li className="mb-3.5 text-base text-green-900/90 flex items-start gap-2.5">
            <span className="text-primary text-xl mr-1.5">✔</span>
            <strong>AI-powered and easy to use:</strong> Launch faster with tools
            your whole team can master.
          </li>
          <li className="mb-3.5 text-base text-green-900/90 flex items-start gap-2.5">
            <span className="text-primary text-xl mr-1.5">✔</span>
            <strong>Enterprise-ready:</strong> Scalable, secure, and built to
            flex with your needs.
          </li>
        </ul>

        <Link
          href="https://www.brevo.com/?ref=emaileducate"
          className="inline-block mt-6 py-3.5 px-6 bg-green-800 text-white rounded-xl text-base font-semibold transition ease-in-out hover:bg-green-900 hover:-translate-y-0.5"
        >
          Get a demo
        </Link>
      </div>

      <div className="w-full md:w-[55%] flex justify-center items-center h-96">
        <div className="relative w-96 h-96">
          <div className="absolute w-36 h-36 bg-primary rounded-full flex justify-center items-center text-white text-5xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Link
              href="https://www.brevo.com"
              target="_blank"
              className="brevo-main-btn"
            >
              Brevo
            </Link>
          </div>
          
          <div className="absolute top-1/2 left-1/2 w-52 bg-card rounded-2xl p-4 shadow-lg animate-float-1">
            <h3 className="font-bold text-lg mb-2 text-primary">
              Marketing Features
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
              <li>Email</li>
              <li>SMS</li>
              <li>WhatsApp</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          <div className="absolute top-1/2 left-1/2 w-52 bg-card rounded-2xl p-4 shadow-lg animate-float-2">
            <h3 className="font-bold text-lg mb-2 text-primary">
              Commerce Tools
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
              <li>Loyalty Programs</li>
              <li>Wallet</li>
              <li>Ecommerce Integration</li>
            </ul>
          </div>

          <div className="absolute top-1/2 left-1/2 w-52 bg-card rounded-2xl p-4 shadow-lg animate-float-3">
            <h3 className="font-bold text-lg mb-2 text-primary">
              Sales Features
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
              <li>Deal Pipeline</li>
              <li>Task Notes</li>
              <li>Contact Management</li>
            </ul>
          </div>

          <div className="absolute top-1/2 left-1/2 w-52 bg-card rounded-2xl p-4 shadow-lg animate-float-4">
            <h3 className="font-bold text-lg mb-2 text-primary">
              Customer Insights
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
              <li>Reports</li>
              <li>Analytics</li>
              <li>Segmentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
