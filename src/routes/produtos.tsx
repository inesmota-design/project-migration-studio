import { createFileRoute } from "@tanstack/react-router";

import { ProductsPage } from "@/components/site/Portfolio";

const title = "Produtos — Inês Mota";
const description = "Novos produtos de Inês Mota, designer gráfica no Porto. Novidades em breve.";

export const Route = createFileRoute("/produtos")({
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
  component: ProductsPage,
});
