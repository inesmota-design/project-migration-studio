import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterContextProvider } from "@tanstack/react-router";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { PortfolioPage } from "@/components/site/Portfolio";
import { SiteLanguageProvider } from "@/lib/site-language";
import { Route as HomeRoute } from "@/routes/index";
import { routeTree } from "@/routeTree.gen";

type HeadMeta = { title?: string; name?: string; content?: string };

function homeMeta(): HeadMeta[] {
  const head = (HomeRoute.options.head as unknown as () => { meta: HeadMeta[] })();
  return head.meta;
}

describe("Home page search metadata", () => {
  it("serves the title Inês asked for", () => {
    expect(homeMeta().find((m) => m.title !== undefined)?.title).toBe(
      "Inês Mota | Designer Gráfica e Social Media Manager",
    );
  });

  it("serves the description Inês asked for", () => {
    expect(homeMeta().find((m) => m.name === "description")?.content).toBe(
      "Designer gráfica no Porto, especialista em identidades visuais e gestão de redes sociais para marcas que querem crescer. Peça o seu orçamento.",
    );
  });

  it("has the full H1 sentence in the server HTML, with no animation running", () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
      context: { queryClient: new QueryClient() },
    });
    const html = renderToStaticMarkup(
      <RouterContextProvider router={router}>
        <SiteLanguageProvider>
          <PortfolioPage />
        </SiteLanguageProvider>
      </RouterContextProvider>,
    );
    const h1 = html.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? "";
    expect(h1).toContain("designer gráfica");
    expect(h1).toContain("social media manager");
  });
});
