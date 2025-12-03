'use client';

import Link from "next/link";

export default function UsingCustomFieldsArticle() {
  return (
    <>
      <div className="bg-[#f8fdf8] font-sans text-[#0b1220]">
        <style jsx global>{`
          :root {
            --green: #16a34a;
            --dark: #064e3b;
            --muted: #6b7280;
            --surface: #f8fdf8;
            --shadow: 0 10px 30px rgba(2,6,23,0.06);
          }
          .fade-title {
            font-size: 2rem;
            font-weight: 800;
            color: var(--dark);
            opacity: 0;
            transform: translateY(12px);
            animation: fadeUp .9s ease forwards;
          }
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
        <div className="max-w-4xl mx-auto py-10 px-4">
          <h1 className="fade-title">Using Custom Fields in Brevo to Personalize Emails</h1>
          <div className="text-gray-500 text-sm mb-4">Category: <strong>Brevo CRM &amp; Contacts Management</strong> — Written by Email Educate</div>

          <div className="bg-white p-5 rounded-xl shadow-lg mb-5">
            <p className="text-lg leading-relaxed">
              <span className="float-left text-5xl leading-none text-green-600 font-bold mr-3" style={{ fontFamily: 'Georgia, serif' }}>P</span>
              ersonalization is the core of effective email marketing — it’s the difference between a generic broadcast and a message that feels hand-written, timely, and relevant. Inside Brevo, custom fields are the foundation of personalization. They store unique data about each subscriber: their interests, preferences, lifecycle stage, purchase behavior, and more. When used properly, custom fields unlock dynamic content, smart segmentation, and powerful automation — helping you send emails your audience actually cares about in 2026.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded-lg font-semibold text-green-900 my-5">
            Key Tip — Custom fields are not just data storage. They are personalization signals that drive segmentation, automation, targeting, and customer journey design inside Brevo.
          </div>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Why Custom Fields Matter in Email Personalization</h2>
            <p>Every inbox algorithm rewards relevance. Custom fields enable you to send more relevant emails by providing structured data about your subscribers.</p>
            <p>With custom fields you can:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>personalize greetings and message content</li>
              <li>send smarter and more accurate product recommendations</li>
              <li>segment subscribers based on preferences</li>
              <li>trigger automations based on user data</li>
              <li>track onboarding, behavior, and lifecycle</li>
              <li>boost engagement and inbox placement</li>
            </ul>
            <p>The more structured your data is, the more powerful your personalization becomes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">The 6 Types of Custom Fields You Should Create in Brevo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">1. Interest Fields</h4>
                <p className="text-sm">Track topic preferences (e.g., automation, ecommerce, templates).</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">2. Lead Source</h4>
                <p className="text-sm">Store acquisition origin for segmentation and ROI measurement.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">3. Personal Preferences</h4>
                <p className="text-sm">Content frequency, format preference (email vs video), etc.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">4. Lifecycle Fields</h4>
                <p className="text-sm">Subscriber → lead → customer → repeat customer.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">5. Behavioral Fields</h4>
                <p className="text-sm">Track quiz results, product category interests, and website activity.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">6. Metadata Fields</h4>
                <p className="text-sm">Fields like signup date, last purchase, last visit, or country.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 1 — Decide What Data You Actually Need</h2>
            <p>Collecting too much data creates noise and complexity. Only add custom fields that help you improve personalization, targeting, or automation.</p>
            <h4 className="font-bold mt-3">Essential fields for most users:</h4>
            <ul className="list-disc list-inside">
              <li><strong>First Name</strong> — personalization basics</li>
              <li><strong>Lead Source</strong> — tracks acquisition effectiveness</li>
              <li><strong>Interest Category</strong> — segmentation and targeting</li>
              <li><strong>Preferred Frequency</strong> — reduces unsubscribes</li>
              <li><strong>Lifecycle Stage</strong> — automation logic</li>
            </ul>
            <p>Start with essentials. Expand when automation requires deeper data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 2 — Capture Custom Field Data at Signup</h2>
            <p>The best time to collect custom field data is the moment someone joins your list. Brevo makes this easy with custom form fields and hidden tracking parameters.</p>
            <h4 className="font-bold mt-3">Best practices:</h4>
            <ul className="list-disc list-inside">
              <li>ask only one additional question in the signup form</li>
              <li>use dropdowns or radio buttons for clean data</li>
              <li>use hidden fields to capture UTM and referrer data</li>
              <li>store page URL where signup happened</li>
              <li>pre-fill based on intent (e.g., lead magnet topic)</li>
            </ul>
            <p>The cleaner the data at capture, the better your segmentation becomes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 3 — Use Custom Fields to Enhance Personalization</h2>
            <p>Brevo supports personalization through dynamic content, conditional blocks, and template variables. Custom fields allow you to tailor email content to each subscriber.</p>
            <h4 className="font-bold mt-3">Examples of personalization using custom fields:</h4>
            <ul className="list-disc list-inside">
              <li><strong>Name-based personalization:</strong> “Hi {"{{ contact.FIRSTNAME }}"}”</li>
              <li><strong>Interest-based recommendations:</strong> Display different content blocks based on interest field</li>
              <li><strong>Role-based CTA:</strong> Show different offers to founders vs marketers</li>
              <li><strong>Region-based send time:</strong> Trigger emails based on user timezone</li>
              <li><strong>Lifecycle-based emails:</strong> Customer fields trigger specific sequences</li>
            </ul>
            <p>Personalization is not just about names; it’s about sending the right message to the right person at the right time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 4 — Build Segments Using Custom Fields</h2>
            <p>Custom fields make segmentation more powerful by letting you filter subscribers based on detailed attributes.</p>
            <h4 className="font-bold mt-3">Useful segment examples:</h4>
            <ul className="list-disc list-inside">
              <li><strong>Interest-based:</strong> interest = “automation”</li>
              <li><strong>New subscribers:</strong> signup_date &gt; last 7 days</li>
              <li><strong>High-intent leads:</strong> quiz_intent = “high”</li>
              <li><strong>Returning customers:</strong> purchase_count &gt; 1</li>
              <li><strong>Inactive:</strong> last_engagement &gt; 90 days</li>
            </ul>
            <p>Segments should update automatically, giving you real-time targeting.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 5 — Trigger Automations Using Custom Field Updates</h2>
            <p>Custom fields can start, modify, or route users through different automation workflows.</p>
            <h4 className="font-bold mt-3">Examples:</h4>
            <ul className="list-disc list-inside">
              <li><strong>Interest field changes:</strong> Trigger different welcome sequences</li>
              <li><strong>Lead score updates:</strong> Notify sales or move to warm-lead automation</li>
              <li><strong>Lifecycle field updates:</strong> Move contact into customer sequence</li>
              <li><strong>Preference changes:</strong> Adjust frequency or content type automatically</li>
            </ul>
            <p>This is where custom fields become truly powerful — they automate personalization.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Real-World Use Cases for Custom Fields</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">Ecommerce</h4>
                <p className="text-sm">Store product category interest, size preferences, and purchase history to personalize emails.</p>
              </div>
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">SaaS</h4>
                <p className="text-sm">Track onboarding stage, feature interest, trial progress, and use-case fit.</p>
              </div>
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">Coaches &amp; Creators</h4>
                <p className="text-sm">Track topic preference and skill level for tailored content.</p>
              </div>
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">Service Businesses</h4>
                <p className="text-sm">Store client type, service tier, and project stage for targeted follow-ups.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Optimization Routine — Weekly, Monthly, Quarterly</h2>
            <h4 className="font-bold">Weekly</h4>
            <ul className="list-disc list-inside mb-3">
              <li>Monitor new field entries</li>
              <li>Fix incorrect values</li>
              <li>Review automation triggers</li>
            </ul>
            <h4 className="font-bold">Monthly</h4>
            <ul className="list-disc list-inside mb-3">
              <li>Audit fields for relevance</li>
              <li>Merge redundant fields</li>
              <li>Improve personalization logic</li>
            </ul>
            <h4 className="font-bold">Quarterly</h4>
            <ul className="list-disc list-inside">
              <li>Update field structure based on new campaigns</li>
              <li>Expand fields for deeper segmentation</li>
              <li>Refine lifecycle logic based on 2026 trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Common Mistakes to Avoid</h2>
            <ul className="list-disc list-inside">
              <li>creating too many fields without purpose</li>
              <li>mixing up tags and custom fields</li>
              <li>not cleaning invalid field entries</li>
              <li>collecting too much data upfront</li>
              <li>not using field changes as automation triggers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Pros &amp; Cons of Using Custom Fields</h2>
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[220px] p-4 rounded-lg bg-green-50 border border-green-900/10">
                <h4 className="font-bold">Pros</h4>
                <ul className="list-disc list-inside">
                  <li>better personalization</li>
                  <li>stronger segmentation</li>
                  <li>more powerful automations</li>
                  <li>improved relevance and engagement</li>
                  <li>cleaner CRM structure</li>
                  <li>aligned with Brevo’s strengths</li>
                </ul>
              </div>
              <div className="flex-1 min-w-[220px] p-4 rounded-lg bg-red-50 border border-red-700/10">
                <h4 className="font-bold">Cons</h4>
                <ul className="list-disc list-inside">
                  <li>requires planning and structure</li>
                  <li>wrong field design creates clutter</li>
                  <li>needs consistent maintenance</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Final Verdict</h2>
            <p>Custom fields are the backbone of personalization inside Brevo. They power segmentation, automation, targeting, dynamic content, and lifecycle management. When you structure your fields cleanly and use them in automations, your CRM becomes dramatically more powerful — and your email relevance increases instantly. Strong personalization is not a gimmick; it is the foundation of better engagement and inbox placement in 2026.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Recommendation</h2>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg font-bold text-green-900">
              Use Brevo custom fields to power every major automation and personalization workflow. Keep your field structure simple, consistent, and directly tied to your segmentation strategy. Let Brevo update fields dynamically through automation so your CRM stays clean, accurate, and ready for highly personalized campaigns throughout 2026.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Next Steps — Build Your Personalization System</h2>
            <p>Email Educate provides complete Brevo personalization templates, including field structures, automation triggers, and dynamic content models.</p>
            <div className="flex gap-4 flex-wrap mt-4">
              <Link href="/contact/" className="inline-block bg-green-600 text-white py-3 px-4 rounded-xl no-underline font-bold">Get Personalization Templates</Link>
              <Link href="/articles/brevo-crm-contacts/" className="inline-block border-2 border-green-600 text-green-900 py-2.5 px-4 rounded-xl no-underline font-bold bg-transparent">More CRM Guides</Link>
            </div>
            <div className="text-sm text-gray-500 mt-2">Pro tip: Collect only the data you actually need — clean personalization beats complicated systems.</div>
          </section>

          <div className="text-center text-gray-500 text-sm mt-6">
            © <strong>Email Educate</strong> — Personalization &amp; CRM strategy for 2026.
          </div>
        </div>
      </div>
    </>
  );
}
