import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/components/site/Portfolio";

const title = "Designer Gráfica e Social Media Manager";
const description =
  "Designer Gráfica e Social Media Manager no Porto, Portugal";
const tools = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects",
  "Adobe InDesign", "Adobe Lightroom", "Adobe Substance 3D", "Figma", "CapCut", "Canva",
  "Meta Business Suite", "Notion",
];
const keywords = [
  "Inês Mota", "designer gráfica Porto", "graphic designer Porto", "social media manager",
  "identidade visual", "web design", "design editorial", "motion design", ...tools,
].join(", ");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: keywords },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Inês Mota",
          jobTitle: "Designer Gráfica & Social Media Manager",
          address: { "@type": "PostalAddress", addressLocality: "Porto", addressCountry: "PT" },
          email: "mailto:inesmota.design@gmail.com",
          knowsAbout: ["Design Gráfico", "Social Media", "Identidade Visual", "Web Design", ...tools],
          sameAs: ["https://www.behance.net/inesmotadesign"],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});
