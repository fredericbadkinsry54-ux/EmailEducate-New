import { AppHeader } from "@/components/layout/AppHeader";
import { Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
      <AppHeader />
      <main className="flex-1">

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "64px 24px 48px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
          <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>LEGAL</span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px" }}>
            Privacy <span style={{ color: "#0DA56F" }}>Policy</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem" }}>Your privacy is important to us.</p>
        </div>

        <div className="legal-container">

          <div className="legal-card">
            <h2>Information We Collect</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "12px" }}>At EmailEducate, your privacy matters. We are committed to keeping your personal information secure, transparent, and confidential.</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Your name and email address (when you subscribe or contact us).", "Any preferences or feedback you voluntarily share with us."].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}><span style={{ color: "#0DA56F", flexShrink: 0 }}>✔</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="legal-card">
            <h2>How We Use Your Information</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Sharing marketing insights, newsletters, and helpful updates.", "Improving our content and overall site experience.", "Responding to your inquiries and communication requests."].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}><span style={{ color: "#0DA56F", flexShrink: 0 }}>✔</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="legal-card">
            <h2>Data Retention & Security</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["We retain your information only as long as necessary to provide our services or comply with legal requirements.", "Your data is stored securely, and we take all reasonable measures to prevent unauthorized access or misuse."].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}><span style={{ color: "#0DA56F", flexShrink: 0 }}>✔</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="legal-card">
            <h2>Your Rights</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["You have full control over your personal information.", "You may request access, correction, deletion, or withdrawal of communication consent at any time."].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}><span style={{ color: "#0DA56F", flexShrink: 0 }}>✔</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="legal-card">
            <h2>Contact Us</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "16px" }}>If you have any questions about this Privacy Policy, feel free to reach out:</p>
            <a href="mailto:contact@emaileducate.online" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff", padding: "10px 18px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              <Mail size={14} /> contact@emaileducate.online
            </a>
          </div>

          <div className="legal-card">
            <h2>Policy Updates</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "10px" }}>We may update this Privacy Policy as needed to reflect changes in our practices or for legal compliance.</p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>Last updated: March 22, 2026</p>
          </div>

        </div>
      </main>
    </div>
  );
}