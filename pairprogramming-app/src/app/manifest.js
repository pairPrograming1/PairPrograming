export default function manifest() {
  return {
    name: "PairProgramming",
    short_name: "PairProg",
    description:
      "Desarrollo de software B2B SaaS, CRM, ERP y productos digitales escalables.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
