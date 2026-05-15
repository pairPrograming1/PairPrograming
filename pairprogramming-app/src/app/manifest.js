export default function manifest() {
  return {
    name: "PairProgramming",
    short_name: "PairProg",
    description:
      "Desarrollo de software B2B SaaS, CRM, ERP y productos digitales escalables.",
    start_url: "/",
    display: "browser",
    background_color: "#010102",
    theme_color: "#5e6ad2",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon1",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
