import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon192() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 192,
          height: 192,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#010102",
          borderRadius: 38,
        }}
      >
        <svg
          width="148"
          height="148"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d4a017" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
            <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect
            x="56"
            y="56"
            width="400"
            height="400"
            rx="90"
            fill="none"
            stroke="#222"
            strokeWidth="18"
          />
          <path d="M200 150 h120 a80 80 0 0 1 0 160 h-120 z" fill="url(#g)" />
          <path
            d="M200 150 v260 a110 110 0 0 0 110 -110 a110 110 0 0 0 -110 -110 z"
            fill="url(#b)"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
