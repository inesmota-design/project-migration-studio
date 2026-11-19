<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- The portfolio markup lives in `src/components/site/Portfolio.tsx` (home + Products pages), with routes in `src/routes/index.tsx` and `src/routes/produtos.tsx` as thin wrappers; why: one source for the ported single-page site.
- PT/EN language is held in `SiteLanguageProvider` (`src/lib/site-language.tsx`) mounted in the root route; why: the choice must survive moving between pages.
- Downloadable PDFs and site images stay in `public/assets/` (same-origin); why: the `download` filename attribute is ignored for cross-origin files.
- The home H1 carries its full sentence in a visually hidden `.hero-static-text` span and the typewriter effect only overlays it; why: search engines must read the whole heading without running the animation.
- In-page menu links scroll with `scrollToSection`/`clearSectionHash` and must never leave a `#section` hash in the address; why: a leftover hash makes the browser jump to that section every time the page is opened again.
