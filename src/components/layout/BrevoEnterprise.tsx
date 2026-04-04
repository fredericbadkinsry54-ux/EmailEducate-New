'use client';
import Link from 'next/link';

const cardStyle = {
  background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)",
  boxShadow: "0 8px 24px rgba(13, 165, 111, 0.35)",
  borderRadius: "18px",
  border: "none",
  color: "#ffffff",
  padding: "16px",
};

const cardTitleStyle = {
  fontWeight: "700",
  fontSize: "1rem",
  marginBottom: "8px",
  color: "#ffffff",
};

const cardListStyle = {
  color: "rgba(255,255,255,0.88)",
  fontSize: "14px",
};

export function BrevoEnterprise() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-16 px-4 md:px-10 gap-10 text-center md:text-left"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}
    >
      <div className="w-full md:w-[45%]">
        <span style={{
          fontSize: "13px",
          background: "rgba(13,165,111,0.2)",
          border: "1px solid rgba(13,165,111,0.3)",
          padding: "4px 12px",
          borderRadius: "6px",
          color: "#0DA56F",
          fontWeight: "700",
        }}>
          BREVO ENTERPRISE
        </span>

        <h2 style={{
          fontSize: "2.2rem",
          fontWeight: "800",
          color: "#ffffff",
          margin: "20px 0",
          lineHeight: "1.25",
        }}>
          Supercharge your
          <br />
          Enterprise Marketing
        </h2>

        <ul className="list-none p-0 mt-5">
          <li className="mb-3.5 flex items-start gap-2.5">
            <span style={{ color: "#0DA56F", fontSize: "20px", marginRight: "6px" }}>✔</span>
            <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "15px" }}>
              <strong style={{ color: "#ffffff" }}>All-in-one platform:</strong> Omnichannel marketing, data, and automation in one place.
            </span>
          </li>
          <li className="mb-3.5 flex items-start gap-2.5">
            <span style={{ color: "#0DA56F", fontSize: "20px", marginRight: "6px" }}>✔</span>
            <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "15px" }}>
              <strong style={{ color: "#ffffff" }}>AI-powered and easy to use:</strong> Launch faster with tools your whole team can master.
            </span>
          </li>
          <li className="mb-3.5 flex items-start gap-2.5">
            <span style={{ color: "#0DA56F", fontSize: "20px", marginRight: "6px" }}>✔</span>
            <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "15px" }}>
              <strong style={{ color: "#ffffff" }}>Enterprise-ready:</strong> Scalable, secure, and built to flex with your needs.
            </span>
          </li>
        </ul>

        <Link
          href="https://get.brevo.com/4o18rd1h33kd/"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "24px",
            padding: "12px 28px",
            background: "#0DA56F",
            color: "#ffffff",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(13,165,111,0.35)",
            transition: "0.25s ease",
          }}
        >
          Signup Free
        </Link>
      </div>

      <div className="w-full md:w-[55%] flex justify-center items-center h-96">
        <div className="relative w-96 h-96">
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
            <Link href="https://get.brevo.com/4o18rd1h33kd" target="_blank">
              <div className="brevo-main-button">Brevo</div>
            </Link>
          </div>

          <div className="absolute top-1/2 left-1/2 w-52 rounded-2xl animate-float-1" style={cardStyle}>
            <h3 style={cardTitleStyle}>Marketing Features</h3>
            <ul className="list-disc list-inside text-sm space-y-1" style={cardListStyle}>
              <li>Email</li>
              <li>SMS</li>
              <li>WhatsApp</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          <div className="absolute top-1/2 left-1/2 w-52 rounded-2xl animate-float-2" style={cardStyle}>
            <h3 style={cardTitleStyle}>Commerce Tools</h3>
            <ul className="list-disc list-inside text-sm space-y-1" style={cardListStyle}>
              <li>Loyalty Programs</li>
              <li>Wallet</li>
              <li>Ecommerce Integration</li>
            </ul>
          </div>

          <div className="absolute top-1/2 left-1/2 w-52 rounded-2xl animate-float-3" style={cardStyle}>
            <h3 style={cardTitleStyle}>Sales Features</h3>
            <ul className="list-disc list-inside text-sm space-y-1" style={cardListStyle}>
              <li>Deal Pipeline</li>
              <li>Task Notes</li>
              <li>Contact Management</li>
            </ul>
          </div>

          <div className="absolute top-1/2 left-1/2 w-52 rounded-2xl animate-float-4" style={cardStyle}>
            <h3 style={cardTitleStyle}>Customer Insights</h3>
            <ul className="list-disc list-inside text-sm space-y-1" style={cardListStyle}>
              <li>Reports</li>
              <li>Analytics</li>
              <li>Segmentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}