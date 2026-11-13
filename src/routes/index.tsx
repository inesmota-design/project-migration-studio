import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/components/site/Portfolio";

const title = "Inês Mota — Designer Gráfica & Social Media Manager";
const description =
  "Explore Porto-based designer Inês Mota’s graphic design and social media portfolio, discover her services and client work, and get in touch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
