'use client';

import Link from "next/link";

export function BrevoAiConnect() {
  return (
    <section className="w-full py-24 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 text-center md:text-left relative overflow-hidden px-5"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pointerEvents: "none",
      }}>
        <span style={{
          fontSize: "220px",
          fontWeight: "900",
          color: "rgba(13,165,111,0.05)",
          letterSpacing: "-6px",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}>BREVO</span>
      </div>

      <div className="max-w-xl z-10">
        <span style={{
          fontSize: "13px",
          fontWeight: "700",
          background: "rgba(13,165,111,0.2)",
          border: "1px solid rgba(13,165,111,0.3)",
          color: "#0DA56F",
          padding: "6px 16px",
          borderRadius: "50px",
          display: "inline-block",
        }}>
          BREVO MCP SERVER
        </span>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight" style={{ color: "#ffffff" }}>
          Connect Your AI Tools <br /> Directly to <span className="brevo-auto">Brevo</span>
        </h2>

        <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          Brevo's MCP Server lets your existing AI assistants talk directly to Brevo.
          This gives your tools the context they need to analyze data,
          manage contacts, run reports, and handle campaigns — all inside your preferred AI environment.
        </p>

        <ul className="mt-8 space-y-3 text-left max-w-md mx-auto md:mx-0">
          {[
            "Contact and company management",
            "Deals, pipelines, and tasks",
            "Contact attributes and smart segmentation",
            "Campaign creation + A/B testing",
            "Cross-channel analytics",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3" style={{ color: "rgba(255,255,255,0.85)" }}>
              <span style={{ color: "#0DA56F", marginTop: "2px" }}>✔</span> {item}
            </li>
          ))}
        </ul>

        <Link
          href="https://get.brevo.com/4o18rd1h33kd/features/ai/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "32px",
            background: "#0DA56F",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(13,165,111,0.35)",
          }}
        >
          Find out more
        </Link>
      </div>

      <div className="relative z-10" style={{
        width: "350px",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "24px",
        background: "rgba(13,165,111,0.04)",
        border: "1px solid rgba(13,165,111,0.1)",
        flexShrink: 0,
      }}>
        <div style={{
          transform: "rotate(-30deg)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}>
          {["BREVO", "BREVO", "BREVO", "BREVO", "BREVO", "BREVO"].map((text, i) => (
            <div key={i} style={{
              fontSize: "48px",
              fontWeight: "900",
              color: "rgba(13,165,111,0.12)",
              letterSpacing: "10px",
              marginBottom: "12px",
              lineHeight: "1",
            }}>{text} {text} {text}</div>
          ))}
        </div>

        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}>
          <Link href="https://get.brevo.com/4o18rd1h33kd/" target="_blank" rel="noopener noreferrer">
            <div className="brevo-main-button">
              <span>Brevo</span>
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}