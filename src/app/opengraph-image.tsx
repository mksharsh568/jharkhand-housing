import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OAO Property Dekho – Real Estate in Jharkhand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#111111",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial Black, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orange glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,69,0,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Orange glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,69,0,0.2) 0%, transparent 70%)",
          }}
        />

        {/* OAO Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
            marginBottom: "24px",
          }}
        >
          {/* Left O */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "20px solid #FF4500",
              background: "transparent",
              marginRight: "-20px",
            }}
          />

          {/* A shape */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <svg
              width="110"
              height="130"
              viewBox="0 0 110 130"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left leg */}
              <polygon points="55,5 80,118 68,118 55,35" fill="white" />
              {/* Right leg */}
              <polygon points="55,5 30,118 42,118 55,35" fill="white" />
              {/* Crossbar */}
              <rect x="30" y="78" width="50" height="14" rx="2" fill="white" />
            </svg>
          </div>

          {/* Right O */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "20px solid #FF4500",
              background: "transparent",
              marginLeft: "-20px",
            }}
          />
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "10px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            OAO
          </span>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FF4500",
              letterSpacing: "2px",
            }}
          >
            PROPERTY DEKHO
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#AAAAAA",
            marginBottom: "28px",
            letterSpacing: "1px",
          }}
        >
          Jharkhand&apos;s Most Trusted Real Estate Platform
        </div>

        {/* Districts */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          {["Ranchi", "Dhanbad", "Bokaro", "Hazaribag", "Deoghar", "Ramgarh"].map((d) => (
            <div
              key={d}
              style={{
                background: "rgba(255,69,0,0.15)",
                border: "1px solid rgba(255,69,0,0.4)",
                color: "#FF6633",
                fontSize: "16px",
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "999px",
              }}
            >
              📍 {d}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "500px",
            height: "1px",
            background: "rgba(255,255,255,0.1)",
            marginBottom: "20px",
          }}
        />

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <span style={{ color: "#666666", fontSize: "15px" }}>
            OAOprop Infrastructure Pvt. Ltd.
          </span>
          <span style={{ color: "#FF4500", fontSize: "15px", fontWeight: 700 }}>
            oao-property-dekho.com
          </span>
          <span style={{ color: "#666666", fontSize: "15px" }}>
            📞 93341 68597
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
