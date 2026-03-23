'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export function CookieConsentCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent-card">
      <div className="cookie-icon-wrapper">
        <Cookie className="cookie-icon" />
      </div>
      <div className="cookie-content">
        <h3 className="cookie-title">Your Privacy Matters</h3>
        <p className="cookie-description">
          We use cookies to enhance your experience and analyze site traffic. By clicking "Accept All", you agree to our use of cookies. Find out more in our{' '}
          <Link href="/legal/cookie-policy" className="font-medium text-[#0DA56F] hover:underline">
            Cookie Policy
          </Link>.
        </p>
      </div>
      <div className="cookie-actions">
        <Button onClick={handleDecline} variant="ghost" className="cookie-decline-btn">
          Decline
        </Button>
        <Button onClick={handleAccept} className="cookie-accept-btn font-bold px-6">
          Accept All
        </Button>
      </div>
    </div>
  );
}
