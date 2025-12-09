
"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import { AppHeader } from "@/components/layout/AppHeader";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
       <AppHeader />
      <main className="flex-1 bg-muted/20">
        <div className="legal-container">
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">Official Version 2025</p>

          <section className="legal-card">
            <h2>Introduction</h2>
            <p>
              Welcome to EmailEducate. By accessing or using this website, you agree
              to comply with and be bound by these Terms of Service. If you do not
              agree with any part of these terms, please discontinue use.
            </p>
            <p>
              EmailEducate provides educational content focused on email marketing,
              automation, CRM, and deliverability to help users build better skills
              with modern marketing tools.
            </p>
          </section>

          <section className="legal-card">
            <h2>Use of Our Website</h2>
            <p>You agree to use EmailEducate only for lawful purposes. You must not:</p>
            <ul>
              <li>Misuse or attempt to disrupt website functionality</li>
              <li>Copy or distribute our content without written permission</li>
              <li>Share harmful, misleading, or illegal content</li>
            </ul>
          </section>

          <section className="legal-card">
            <h2>Intellectual Property Rights</h2>
            <p>
              All content, graphics, branding, and materials on EmailEducate are
              protected by copyright laws. You may not reproduce or distribute any
              content without authorization.
            </p>
          </section>

          <section className="legal-card">
            <h2>Content Disclaimer</h2>
            <p>
              Our content is for educational and informational purposes only. We do
              not guarantee that using any tools or strategies discussed on this
              website will lead to specific results.
            </p>
            <p>Your decisions and outcomes are entirely your responsibility.</p>
          </section>

          <section className="legal-card">
            <h2>External Links</h2>
            <p>
              EmailEducate may contain links to third-party platforms like Brevo or
              other marketing tools. We are not responsible for their content,
              policies, or services.
            </p>
            <p>Visiting third-party websites is at your own discretion.</p>
          </section>

          <section className="legal-card">
            <h2>Limitation of Liability</h2>
            <p>
              EmailEducate shall not be held liable for any direct or indirect
              damages arising from the use of our website or reliance on our
              information.
            </p>
          </section>

          <section className="legal-card">
            <h2>Changes to Our Services</h2>
            <p>
              We may modify, update, or discontinue any part of the website without
              notice. These Terms may also be updated as needed.
            </p>
          </section>

          <section className="legal-card">
            <h2>Termination</h2>
            <p>
              We reserve the right to suspend or restrict access to any user who
              violates these Terms or engages in harmful activity.
            </p>
          </section>

          <section className="legal-card">
            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of Pakistan (or your
              operating region). All disputes must be resolved under applicable
              jurisdiction.
            </p>
          </section>

          <section className="legal-card">
            <h2>Last Updated</h2>
            <p>Last updated: December 2025.</p>
          </section>

          <section className="legal-card">
            <h2>Contact Information</h2>
            <p>
              For questions regarding these Terms, contact us at:{" "}
              <strong>support@emaileducate.online</strong>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

    