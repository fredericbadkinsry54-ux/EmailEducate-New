
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { AppHeader } from "@/components/layout/AppHeader";

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 bg-muted/20">
        <div className="min-h-screen bg-[#F4FAF7] py-16 px-6">
          <div className="max-w-3xl mx-auto">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Cookie Policy
            </h1>

            <p className="text-sm text-gray-500 mb-8">
              Last updated: December 2025
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Cookies are small text files stored on your device to improve your browsing
              experience. They help websites function properly, load faster, and offer a
              more personalized experience.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How We Use Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to:
            </p>

            <ul className="list-disc ml-6 text-gray-700 mt-3 mb-8 space-y-1">
              <li>Remember your preferences</li>
              <li>Improve overall website speed and usability</li>
              <li>Analyze traffic and understand user behavior</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Types of Cookies We Use
            </h2>

            <ul className="list-disc ml-6 text-gray-700 mb-8 space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Allow the website to function correctly.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us analyze usage and improve performance.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Store your settings and site preferences.
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Your Choices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              You can accept or decline cookies through your browser settings.
              Most browsers allow you to delete stored cookies or block future cookies
              if you prefer greater privacy.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Cookie Policy, you can email us at:
              <br />
              <span className="text-[#008964] font-medium">
                support@emaileducate.com
              </span>
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}

    