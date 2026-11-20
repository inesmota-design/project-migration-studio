import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/components/site/Portfolio";

const title = "Inês Mota | Designer Gráfica e Social Media Manager";
const description =
  "Designer gráfica no Porto, especialista em identidades visuais e gestão de redes sociais para marcas que querem crescer. Peça o seu orçamento.";
const url = "https://inesmotadesign.com/";
const ogImage = "https://inesmotadesign.com/assets/og-image.png";
const tools = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects",
  "Adobe InDesign", "Adobe Lightroom", "Adobe Substance 3D", "Figma", "CapCut", "Canva",
  "Meta Business Suite", "Notion",
];
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
    ],
    links: [
      { rel: "canonical", href: url },
      {
        rel: "preload",
        as: "image",
        href: "/assets/ines-metro-1200.webp",
        imageSrcSet:
          "/assets/ines-metro-480.webp 480w, /assets/ines-metro-768.webp 768w, /assets/ines-metro-1200.webp 1200w, /assets/ines-metro.webp 1366w",
        imageSizes: "100vw",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Inês Mota",
          url,
          image: "https://inesmotadesign.com/assets/ines-portrait.webp",
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
