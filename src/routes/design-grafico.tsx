import { createFileRoute } from "@tanstack/react-router";

import { GraphicDesignPage } from "@/components/site/GraphicDesignPage";

const url = "https://inesmota-design.lovable.app/design-grafico";
const title = "Design Gráfico no Porto — Serviços | Inês Mota";
const description =
  "Serviços de design gráfico no Porto: identidade visual, cartazes, merchandising, packaging, design editorial e mais. Prazos, preços e exemplos de trabalho.";

export const Route = createFileRoute("/design-grafico")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: GraphicDesignPage,
});
