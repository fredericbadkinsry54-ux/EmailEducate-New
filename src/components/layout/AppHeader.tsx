
"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import Script from "next/script";

export function AppHeader() {
  return (
    <>
      <header className="ee-nav">
        <div className="ee-nav-container">
          <a href="/" className="ee-logo">
            <Logo className="size-8" />
            <span>EmailEducate</span>
          </a>

          <nav className="ee-menu">
            <Link href="/" className="ee-link">
              Home
            </Link>
            <Link href="/legal/about-us" className="ee-link">
              About
            </Link>

            <div className="ee-dropdown">
              <button className="ee-drop-btn">Tools Comparison ▾</button>
              <div className="ee-drop-menu">
                <Link
                  href="/articles/tools-comparison/brevo-vs-mailchimp-2026"
                  className="ee-drop-item"
                >
                  Brevo vs Mailchimp
                </Link>
                <Link
                  href="/articles/tools-comparison/brevo-vs-mailerlite-2026"
                  className="ee-drop-item"
                >
                  Brevo vs MailerLite
                </Link>
                <Link
                  href="/articles/tools-comparison/brevo-vs-convertkit-2026"
                  className="ee-drop-item"
                >
                  Brevo vs ConvertKit
                </Link>
                <Link
                  href="/articles/tools-comparison/brevo-vs-getresponse-2026"
                  className="ee-drop-item"
                >
                  Brevo vs GetResponse
                </Link>
              </div>
            </div>

            <div className="ee-dropdown">
                <button className="ee-drop-btn">Tutorials ▾</button>
                <div className="ee-drop-menu">
                    <Link href="/articles/brevo-email-campaigns" className="ee-drop-item">Campaigns</Link>
                    <Link href="/articles/brevo-marketing-automation" className="ee-drop-item">Automation</Link>
                    <Link href="/articles/brevo-crm-contacts" className="ee-drop-item">CRM Setup</Link>
                    <Link href="/articles/brevo-deliverability" className="ee-drop-item">Inbox Placement</Link>
                </div>
            </div>


            <Link href="/legal/contact-us" className="ee-link">
              Contact
            </Link>
          </nav>

          <Link href="/signup" className="ee-nav-btn">
            Sign Up
          </Link>

          <button className="ee-mobile-toggle" onClick={() => {
              const menu = document.getElementById("mobileMenu");
              if (menu) {
                menu.style.display = menu.style.display === "flex" ? "none" : "flex";
              }
          }}>
            ☰
          </button>
        </div>

        <div className="ee-mobile-menu" id="mobileMenu">
          <Link href="/" className="ee-mobile-item">
            Home
          </Link>
          <Link href="/legal/about-us" className="ee-mobile-item">
            About
          </Link>
          <Link href="/blogs" className="ee-mobile-item">
            Insights
          </Link>
          <Link href="/legal/contact-us" className="ee-mobile-item">
            Contact
          </Link>
          <Link href="/signup" className="ee-mobile-btn">
            Sign Up
          </Link>
        </div>
      </header>
    </>
  );
}
