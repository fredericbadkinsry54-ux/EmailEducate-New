"use client";

export function BrevoRecommendation() {
  return (
    <section style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-40px", right: "96px", width: "128px", height: "128px", background: "rgba(13,165,111,0.12)", borderRadius: "50%" }}></div>
      <div style={{ position: "absolute", bottom: "40px", right: "40px", width: "160px", height: "160px", background: "rgba(13,165,111,0.1)", borderRadius: "50%" }}></div>

      <div style={{ maxWidth: "1152px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>

        {/* Left */}
        <div>
          <p style={{ color: "#0DA56F", fontWeight: "600", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", fontSize: "13px" }}>
            Why EmailEducate Recommends <span className="brevo-auto">Brevo</span>
          </p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#ffffff", marginBottom: "24px", lineHeight: "1.2" }}>
            The Smarter, Modern Way to
            Grow Your Email Marketing
            With <span className="brevo-auto">Brevo</span>
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9", marginBottom: "32px" }}>
            <span className="brevo-auto">Brevo</span> gives you automation, CRM, deliverability, segmentation,
            and analytics in one powerful system. EmailEducate shows you exactly how to
            use these features to achieve long-term, scalable results — without complexity.
          </p>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "40px", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "All-in-one platform: Email, SMS, WhatsApp & workflows",
              "Simple automation that beginners can master",
              "Best-in-class inbox placement & deliverability tools",
              "Advanced segmentation and CRM features built-in",
              "More value and affordability than other tools",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", color: "rgba(255,255,255,0.85)", fontSize: "16px" }}>
                <span style={{ color: "#0DA56F", flexShrink: 0 }}>✔</span> {item}
              </li>
            ))}
          </ul>
          <a href="https://get.brevo.com/4o18rd1h33kd" style={{ display: "inline-block", padding: "14px 40px", background: "#0DA56F", color: "#ffffff", fontSize: "1.1rem", fontWeight: "600", borderRadius: "12px", boxShadow: "0 8px 24px rgba(13,165,111,0.4)", textDecoration: "none" }}>
            Start Learning Brevo
          </a>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {[
            { title: "Smart Automation", desc: "Create automated journeys, triggers, and workflows that scale effortlessly." },
            { title: "Inbox Performance", desc: "Improve deliverability with warm-up tools, dedicated IPs, and inbox analytics." },
            { title: "CRM & Segmentation", desc: "Organize contacts, build smart segments, and personalize communication." },
          ].map((card, i) => (
            <div key={i} style={{ background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(13,165,111,0.3)", transition: "transform 0.3s ease" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
            >
              <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>{card.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .recommendation-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}