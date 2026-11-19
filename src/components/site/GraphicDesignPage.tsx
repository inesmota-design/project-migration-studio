import { Link } from "@tanstack/react-router";

import { Arrow, categoryLabels, projects, serviceGroups } from "./Portfolio";
import { serviceDetails } from "./service-details";

const designServices = serviceGroups[0]?.items ?? [];
const examples = projects.filter((p) => p.category !== "art");

export function GraphicDesignPage() {
  return (
    <main className="gd-page" lang="pt">
      <header className="gd-hero section">
        <Link to="/" className="gd-back">
          <Arrow direction="up" /> Voltar ao portefólio
        </Link>
        <p className="eyebrow">Design gráfico · Porto</p>
        <h1>Design gráfico para marcas que querem crescer</h1>
        <p className="gd-lead">
          Sou a Inês Mota, designer gráfica no Porto. Crio identidades visuais, cartazes, merchandising,
          packaging e outros materiais para que a tua marca seja reconhecida e transmita confiança — no
          papel e no digital.
        </p>
        <a className="primary-button" href="mailto:inesmota.design@gmail.com?subject=Pedido%20de%20or%C3%A7amento%20%E2%80%94%20Design%20gr%C3%A1fico">
          Pedir orçamento <Arrow />
        </a>
      </header>

      <section className="section services" aria-labelledby="gd-services">
        <div className="title-row">
          <h2 id="gd-services">Serviços de design gráfico</h2>
        </div>
        <div className="gd-service-grid">
          {designServices.map((name) => {
            const d = serviceDetails[name];
            if (!d) return null;
            return (
              <article className="service-card" key={name}>
                <h3>{name}</h3>
                <p>{d.description.pt}</p>
                <ul>
                  {d.deliverables.pt.map((i) => (
                    <li key={i}>↳ {i}</li>
                  ))}
                </ul>
                <dl>
                  <div><dt>Prazo*</dt><dd>{d.time.pt}</dd></div>
                  <div><dt>Preço</dt><dd>{d.price.pt}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
        <p className="gd-note">*Prazos consoante disponibilidade.</p>
      </section>

      <section className="section work" aria-labelledby="gd-work">
        <div className="work-heading">
          <h2 id="gd-work">Exemplos de trabalho</h2>
        </div>
        <div className="project-grid">
          {examples.map((p) => (
            <a className="project-card" key={p.href} href={p.href} target="_blank" rel="noreferrer">
              <div className="project-art">
                <img src={p.image} alt={`${p.pt} — ${categoryLabels[p.category].pt}`} loading="lazy" />
                <div className="project-overlay" />
                <span className="view-project">Ver projeto <Arrow /></span>
              </div>
              <div className="project-meta">
                <h3>{p.pt}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section gd-cta">
        <h2>Tens um projeto em mente?</h2>
        <p>Conta-me o que precisas e envio-te uma proposta.</p>
        <a className="primary-button" href="mailto:inesmota.design@gmail.com?subject=Pedido%20de%20or%C3%A7amento%20%E2%80%94%20Design%20gr%C3%A1fico">
          Pedir orçamento <Arrow />
        </a>
      </section>
    </main>
  );
}
