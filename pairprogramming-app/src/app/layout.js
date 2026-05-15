import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://pairprogramming.com.ar"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon1", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-icon", sizes: "180x180", type: "image/png" },
  },
  verification: {
    google: "c0n5-H_sk_Zh-sKTmJ4OzTvdGp1xN2n5etlKXugPpF8",
  },
};

export default function RootLayout({ children }) {
  return children;
}
