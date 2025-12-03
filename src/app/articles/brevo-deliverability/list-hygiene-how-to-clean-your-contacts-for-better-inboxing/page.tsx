'use client';

import Link from "next/link";

export default function ListHygieneArticle() {
  return (
    <>
      <div className="bg-[#f8fdf8] font-sans text-[#0b1220]">
        <style jsx global>{`
          :root {
            --green: #16a34a;
            --dark: #064e3b;
            --muted: #6b7280;
            --surface: #f8fdf8;
            --radius: 14px;
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
          <h1 className="fade-title">List Hygiene: How to Clean Your Contacts for Better Inboxing</h1>
          <div className="text-gray-500 text-sm mb-4">Category: <strong>Brevo Deliverability & Inbox Success</strong> — Written by Email Educate</div>

          <div className="bg-white p-5 rounded-xl shadow-lg mb-5">
            <p className="text-lg leading-relaxed">
              <span className="float-left text-5xl leading-none text-green-600 font-bold mr-3" style={{ fontFamily: 'Georgia, serif' }}>L</span>
              ist hygiene is one of the most overlooked, yet most powerful factors influencing email deliverability. Even with perfect domain authentication, beautiful email templates, and strong automation, your inbox placement collapses if your contact list is filled with inactive, bounced, or low-quality addresses. In this guide, you’ll learn a complete, actionable approach to cleaning and maintaining your list using Brevo — all based on 2026 deliverability standards and industry-tested best practices.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded-lg font-semibold text-green-900 my-5">
            Key Tip — A clean list is more important than a large list. Quality improves inboxing, engagement, and sender reputation faster than any other deliverability tactic.
          </div>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Why List Hygiene Is Critical for Inbox Placement</h2>
            <p>Mailbox providers evaluate your sender reputation based on how real subscribers interact with your emails. If a large portion of your contacts never open, never click, bounce frequently, or were added without consent, mailbox algorithms mark you as a risky sender.</p>
            <p>Poor list hygiene directly causes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>lower inbox placement</li>
              <li>higher spam filtering</li>
              <li>reduced engagement</li>
              <li>inconsistent deliverability</li>
              <li>weakened domain reputation</li>
            </ul>
            <p>Brevo gives you everything you need to maintain a clean, healthy contact list — you just need the right process.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">The 6 Core Pillars of Proper List Hygiene</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">1. Strong Subscriber Consent</h4>
                <p className="text-sm">Real subscribers must opt in intentionally. Forced or purchased contacts destroy deliverability.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">2. Accurate Contact Data</h4>
                <p className="text-sm">Correct formatting, active inboxes, no typos, and no spam-trap risky submissions.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">3. Ongoing Inactivity Monitoring</h4>
                <p className="text-sm">Contacts who never open emails drag down your reputation.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">4. Bounce & Complaint Reduction</h4>
                <p className="text-sm">Hard bounces and spam reports must be suppressed immediately.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">5. Segmentation & Engagement Tracking</h4>
                <p className="text-sm">Healthy lists are divided by recency, activity, and intent.</p>
              </div>
              <div className="bg-green-50/30 p-4 rounded-xl border border-green-900/10">
                <h4 className="font-bold text-green-900">6. Brevo Automation for Cleanup</h4>
                <p className="text-sm">Brevo workflows remove bad data and keep your list fresh automatically.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 1 — Ensure Proper Consent for All Contacts</h2>
            <p>No deliverability strategy can work if your contacts were collected improperly.</p>
            <h4 className="font-bold mt-3">Acceptable consent sources:</h4>
            <ul className="list-disc list-inside">
              <li>newsletter opt-in forms</li>
              <li>lead magnet downloads</li>
              <li>webinar signups</li>
              <li>checkout opt-ins</li>
              <li>event registrations</li>
            </ul>
            <h4 className="font-bold mt-3">Unacceptable sources (never use):</h4>
            <ul className="list-disc list-inside">
              <li>purchased lists</li>
              <li>scraped emails</li>
              <li>third-party “databases”</li>
              <li>emails collected without permission</li>
            </ul>
            <p>If your list contains any of these risky contacts, clean them before sending anything.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 2 — Clean Contact Data for Accuracy</h2>
            <p>Small formatting mistakes hurt deliverability. Fix these early:</p>
            <h4 className="font-bold mt-3">Remove or correct:</h4>
            <ul className="list-disc list-inside">
              <li>typos (gmial.com, hotmial.com…)</li>
              <li>duplicate contacts</li>
              <li>role-based emails (info@, admin@)</li>
              <li>temporary emails created for downloads</li>
              <li>obviously fake addresses</li>
            </ul>
            <h4 className="font-bold mt-3">Brevo tools that help:</h4>
            <ul className="list-disc list-inside">
              <li>Contact filtering</li>
              <li>Advanced search conditions</li>
              <li>Bounce handling automation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 3 — Identify Unengaged Contacts</h2>
            <p>Mailbox providers track user engagement to determine sender reputation. If too many contacts ignore your emails, your inbox placement collapses.</p>
            <h4 className="font-bold mt-3">Solve this with engagement segmentation:</h4>
            <ul className="list-disc list-inside">
              <li><strong>Active Contacts:</strong> opened or clicked in last 30 days</li>
              <li><strong>Warm Contacts:</strong> opened in 31–60 days</li>
              <li><strong>Cold Contacts:</strong> no opens in 61–90 days</li>
              <li><strong>Dead Contacts:</strong> no opens in 90+ days</li>
            </ul>
            <p>Your goal is simple: prune the coldest segments regularly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 4 — Run a Re-Engagement Campaign</h2>
            <p>A re-engagement workflow helps you save inactive contacts before suppressing them.</p>
            <h4 className="font-bold mt-3">Recommended 3-email re-engagement sequence:</h4>
            <ul className="list-disc list-inside">
              <li>Email 1 — “Are you still interested?” soft reminder</li>
              <li>Email 2 — Value-packed resource or guide</li>
              <li>Email 3 — Final confirmation: stay or leave</li>
            </ul>
            <p>If the contact does not open or click ANY of these emails — suppress them.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 5 — Suppress Non-Responders & Risky Contacts</h2>
            <p>Suppression protects your domain reputation. These contacts should be suppressed immediately:</p>
            <ul className="list-disc list-inside">
              <li>hard bounces</li>
              <li>complaint reporters</li>
              <li>cold contacts beyond 90 days</li>
              <li>temporary email domains</li>
              <li>spam-trap-risky contacts</li>
            </ul>
            <p>Brevo automatically suppresses many of these, but you should add your own logic using automation.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Step 6 — Automate List Hygiene with Brevo Workflows</h2>
            <p>Brevo automation eliminates manual cleanup entirely.</p>
            <h4 className="font-bold mt-3">Recommended automation actions:</h4>
            <ul className="list-disc list-inside">
              <li>Tag contacts after each activity</li>
              <li>Move inactive contacts into “re-engagement” segment</li>
              <li>Mark cold contacts with a “Cold-90” tag</li>
              <li>Suppress contacts after re-engagement failure</li>
              <li>Remove hard bounces automatically</li>
            </ul>
            <p>This keeps your list clean every week without extra work.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">When List Hygiene Makes the Biggest Difference</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">Brand-New Senders</h4>
                <p className="text-sm">Clean lists protect domain reputation during warm-up.</p>
              </div>
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">Ecommerce Stores</h4>
                <p className="text-sm">Transactional and promotional emails require consistent inboxing.</p>
              </div>
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">Businesses with Old Databases</h4>
                <p className="text-sm">Legacy lists often contain outdated or inactive contacts.</p>
              </div>
              <div className="bg-white border border-green-900/10 p-4 rounded-lg">
                <h4 className="font-bold">High-Volume Senders</h4>
                <p className="text-sm">Large lists amplify deliverability risks — cleaning is essential.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Optimization Routine — Weekly, Monthly, Quarterly</h2>
            <h4 className="font-bold">Weekly</h4>
            <ul className="list-disc list-inside mb-3">
              <li>Monitor bounce rates</li>
              <li>Suppress newly inactive contacts</li>
              <li>Track complaint spikes</li>
            </ul>
            <h4 className="font-bold">Monthly</h4>
            <ul className="list-disc list-inside mb-3">
              <li>Run re-engagement automation</li>
              <li>Clean cold contacts</li>
              <li>Review engagement segments</li>
            </ul>
            <h4 className="font-bold">Quarterly</h4>
            <ul className="list-disc list-inside">
              <li>Audit consent sources</li>
              <li>Remove unused tags</li>
              <li>Refresh list segmentation structure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Common Mistakes That Hurt List Hygiene</h2>
            <ul className="list-disc list-inside">
              <li>Sending to inactive contacts too often</li>
              <li>Skipping re-engagement campaigns</li>
              <li>Ignoring bounce and complaint patterns</li>
              <li>Using list “bulk cleaners” with inflated accuracy claims</li>
              <li>Never suppressing risky or outdated contacts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Pros & Cons of Strict List Hygiene</h2>
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[220px] p-4 rounded-lg bg-green-50 border border-green-900/10">
                <h4 className="font-bold">Pros</h4>
                <ul className="list-disc list-inside">
                  <li>Massive improvement in inbox placement</li>
                  <li>Higher open rates</li>
                  <li>Better engagement signals</li>
                  <li>Reduced spam complaints</li>
                  <li>Supported fully by Brevo automation</li>
                </ul>
              </div>
              <div className="flex-1 min-w-[220px] p-4 rounded-lg bg-red-50 border border-red-700/10">
                <h4 className="font-bold">Cons</h4>
                <ul className="list-disc list-inside">
                  <li>Total list size becomes smaller</li>
                  <li>Requires ongoing maintenance</li>
                  <li>You must be strict with suppressions</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Final Verdict</h2>
            <p>Clean lists win. Dirty lists fail — it’s that simple. If you want strong inbox placement in 2026, you must treat list hygiene as a core part of your email strategy. With regular suppression, re-engagement workflows, accurate data, and Brevo’s automation tools, your list stays healthy automatically. A smaller, cleaner list always beats a large, inactive one.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Recommendation</h2>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg font-bold text-green-900">
              Use Brevo automation to handle list hygiene weekly. Let Brevo tag inactive users, suppress cold contacts, remove bounces, and maintain clean engagement segments. This Brevo-centered list hygiene system strengthens inbox placement, improves engagement, and protects long-term sender reputation throughout 2026.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-900 mb-3">Next Steps — Keep Your List Clean Automatically</h2>
            <p>Email Educate provides complete templates for re-engagement workflows, list cleanup routines, and Brevo automation logic to keep your contacts healthy year-round.</p>
            <div className="flex gap-4 flex-wrap mt-4">
              <Link href="/contact/" className="inline-block bg-green-600 text-white py-3 px-4 rounded-xl no-underline font-bold">Get List Hygiene Templates</Link>
              <Link href="/articles/brevo-deliverability/" className="inline-block border-2 border-green-600 text-green-900 py-2.5 px-4 rounded-xl no-underline font-bold bg-transparent">More Deliverability Guides</Link>
            </div>
            <div className="text-sm text-gray-500 mt-2">Pro tip: If bounce rate exceeds 2%, or spam complaints exceed 0.1%, clean your list immediately.</div>
          </section>

          <div className="text-center text-gray-500 text-sm mt-6">
            © <strong>Email Educate</strong> — Deliverability & list hygiene guidance for 2026.
          </div>
        </div>
      </div>
    </>
  );
}
