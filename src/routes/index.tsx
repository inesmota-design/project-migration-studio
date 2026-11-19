import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/components/site/Portfolio";

const title = "Inês Mota | Designer Gráfica e Social Media Manager";
const description =
  "Designer gráfica Porto, especialista em identidades visuais e gestão de redes sociais para marcas que querem crescer. Peça o seu orçamento.";
const url = "https://inesmota-design.lovable.app/";
const ogImage = "https://inesmota-design.lovable.app/assets/og-image.png";
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
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: keywords },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Inês Mota",
          url,
          image: "https://inesmota-design.lovable.app/assets/ines-portrait.png",
          jobTitle: "Designer Gráfica & Social Media Manager",
          address: { "@type": "PostalAddress", addressLocality: "Porto", addressCountry: "PT" },
          email: "mailto:inesmota.design@gmail.com",
          knowsAbout: ["Design Gráfico", "Social Media", "Identidade Visual", "Web Design", ...tools],
          sameAs: [
            "https://www.linkedin.com/in/in%C3%AAsmotadesign",
            "https://www.instagram.com/inesmota.art",
            "https://www.instagram.com/inesmota.design",
            "https://www.behance.net/inesmotadesign",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});
