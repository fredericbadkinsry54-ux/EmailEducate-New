"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {

    // === STYLE 20: Apply to all section h2 headings ===
    const applyStyle20 = (el: HTMLElement) => {
      if (el.dataset.styled) return;
      el.dataset.styled = "true";

      // Replace "Brevo" word with split color version
      el.innerHTML = el.innerHTML
        .replace(/\bBrevo\b/g, '<span class="brevo-split"><span class="brevo-split-bre">Bre</span><span class="brevo-split-vo">vo</span></span>')
        .replace(/\bBREVO\b/g, '<span class="brevo-split"><span class="brevo-split-bre">BRE</span><span class="brevo-split-vo">VO</span></span>');

      el.classList.add("s20-heading");
    };

    // === CARD FADE IN on scroll ===
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sa-visible");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // === HEADING observer ===
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyStyle20(entry.target as HTMLElement);
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all section h2 headings
    const headings = document.querySelectorAll("section h2");
    headings.forEach((h) => {
      headingObserver.observe(h);
    });

    // Observe cards
    const cards = document.querySelectorAll(
      ".feature-card, .pricing-card, .market-card, .cat-card, .article-card, .legal-card"
    );
    cards.forEach((card) => {
      card.classList.add("sa-card");
      cardObserver.observe(card);
    });

    return () => {
      cardObserver.disconnect();
      headingObserver.disconnect();
    };
  }, []);

  return null;
}