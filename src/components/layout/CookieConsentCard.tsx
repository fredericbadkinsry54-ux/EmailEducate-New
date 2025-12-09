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
        <h3 className="cookie-title">We Use Cookies</h3>
        <p className="cookie-description">
          Our website uses cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking "Accept", you agree to our use of cookies.
        </p>
      </div>
      <div className="cookie-actions">
        <Button onClick={handleAccept} className="cookie-accept-btn">
          Accept
        </Button>
        <Button onClick={handleDecline} variant="ghost" className="cookie-decline-btn">
          Decline
        </Button>
        <Link href="/legal/cookie-policy" className="cookie-policy-link">
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
