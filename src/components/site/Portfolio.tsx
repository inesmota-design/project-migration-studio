import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";

import { useSiteLanguage } from "@/lib/site-language";

const BEHANCE = "https://www.behance.net/inesmotadesign";
type Project = { pt: string; en: string; href: string; image: string };
const projects: Project[] = [
  {
    pt: "Marina Póvoa de Varzim",
    en: "Marina Póvoa de Varzim",
    href: "https://www.behance.net/gallery/151991081/Identidade-Visual",
    image: "/assets/projects/marina.jpg",
  },
  {
    pt: "Merchandising",
    en: "Merchandising",
    href: "https://www.behance.net/gallery/181366963/Sweats-de-Curso",
    image: "/assets/projects/merchandising.webp",
  },
  {
    pt: "Sierra Cantabria",
    en: "Sierra Cantabria",
    href: "https://www.behance.net/gallery/203998583/Identidade-Visual-Vinho",
    image: "/assets/projects/sierra-cantabria.jpg",
  },
  {
    pt: "My Generation",
    en: "My Generation",
    href: "https://www.behance.net/gallery/151300417/Cartaz",
    image: "/assets/projects/my-generation.jpg",
  },
  {
    pt: "Poster Design",
    en: "Poster Design",
    href: "https://www.behance.net/gallery/152093875/Cartazes-Jazz",
    image: "/assets/projects/poster-design-jazz.webp",
  },
  {
    pt: "Poster Design",
    en: "Poster Design",
    href: "https://www.behance.net/gallery/243223967/Event-Visual-Identity",
    image: "/assets/projects/poster-design-event.webp",
  },
  {
    pt: "Ilustração",
    en: "Illustration",
    href: "https://www.behance.net/gallery/159899197/Polina-Bright-Inspiration",
    image: "/assets/projects/ilustracao.webp",
  },
  {
    pt: "Desenho",
    en: "Drawing",
    href: "https://www.behance.net/gallery/159898257/Retrato-em-grafite-A5",
    image: "/assets/projects/desenho.webp",
  },
];

const serviceGroups = [
  {
    number: "01",
    title: "Design Gráfico",
    items: [
      "Identidade Visual",
      "Cartazes Publicitários",
      "Merchandising",
      "Packaging",
      "Design Editorial & Cartazes",
      "Motion Design",
      "Email Marketing",
      "Web Design",
      "Artes Finais",
    ],
  },
  {
    number: "02",
    title: "Social Media",
    items: [
      "Captação de Conteúdos",
      "Edição de Imagem e Vídeo",
      "Planos Estratégicos",
      "Análise de Resultados",
      "Gestão de Redes",
      "Design de Posts",
    ],
  },
  {
    number: "03",
    title: "Artes Gráficas",
    items: ["Desenho", "Ilustração", "Cerâmica"],
  },
];

const brandLinks: Record<string, string> = {
  Solverde:
    "https://www.solverde.pt/casino?btag=654457_35b4a7ab33c74f58b1cdba48179284bd&gad_source=1&gad_campaignid=12312237515&gbraid=0AAAAADG5SrpmCqVHb16-AUtwXT2Ssk84B&gclid=Cj0KCQiA2frXBhC_ARIsAPTFcdMXophg_U8LMckc5GN0CZpvSMvkn_0WmgFDZtHGltG4Otnw-B07jrkaArewEALw_wcB",
  "Portal da Queixa": "https://portaldaqueixa.com/",
  Ogol: "https://www.ogol.com.br/",
  "Racing Post": "https://www.racingpost.com/online-casino/",
  "NextGen Mobility": "https://nextgenmobility.pt/",
  Bertha: "https://berthaproject.eu/",
  Vstyle: "https://www.instagram.com/vstyle_cabeleireiros/",
  "Incontro Bistrot": "https://www.instagram.com/incontro.bistrot/",
  "Cacau Wine Terrace": "https://www.instagram.com/cacauwineterrace/",
  "Aleia Treino Canino": "https://www.instagram.com/aleia_treinocanino/",
};

const career = [
  {
    period: { pt: "Desde 2024", en: "Since 2024" },
    company: "Clever Advertising",
    role: {
      pt: "Designer Gráfica & Social Media Manager",
      en: "Graphic Designer & Social Media Manager",
    },
    description: {
      pt: "Sou responsável pelo web design de diferentes sites e plataformas e pela comunicação nas redes sociais de várias marcas.",
      en: "I am responsible for the web design of different websites and platforms, as well as social media communication for several brands.",
    },
    names: ["Solverde", "Portal da Queixa", "Ogol", "Racing Post"],
  },
  {
    period: { pt: "2022", en: "2022" },
    company: "FI Group Portugal",
    role: { pt: "Designer Gráfica", en: "Graphic Designer" },
    description: {
      pt: "Integrei a equipa de Marketing, sendo responsável pela comunicação interna e externa da empresa, com especial destaque para a criação de identidades visuais de projetos europeus.",
      en: "I joined the Marketing team, where I was responsible for the company's internal and external communication, with a particular focus on creating visual identities for European projects.",
    },
    names: ["NextGen Mobility", "Bertha", "SmartCryolab", "Revive"],
  },
  {
    period: { pt: "Desde 2022", en: "Since 2022" },
    company: "Freelance",
    role: {
      pt: "Designer Gráfica & Social Media Manager",
      en: "Graphic Designer & Social Media Manager",
    },
    description: {
      pt: "Desenvolvo identidades visuais, publicidade, web design, design editorial e estratégias de marketing personalizadas, incluindo a gestão de redes sociais e a criação de planos estratégicos para cada cliente.",
      en: "I develop visual identities, advertising, web design, editorial design and tailored marketing strategies, including social media management and strategic planning for each client.",
    },
    names: ["Vstyle", "Incontro Bistrot", "Cacau Wine Terrace", "Aleia Treino Canino"],
  },
  {
    period: { pt: "2019 — 2022", en: "2019 — 2022" },
    company: "FMAD",
    role: {
      pt: "Licenciatura em Design Gráfico e Publicidade",
      en: "BA in Graphic Design and Advertising",
    },
    description: {
      pt: "Formação superior centrada em design gráfico, comunicação visual e publicidade.",
      en: "Higher education focused on graphic design, visual communication and advertising.",
    },
    names: [],
  },
];

const englishServiceGroups = [
  {
    title: "Graphic Design",
    items: [
      "Visual Identity",
      "Advertising Posters",
      "Merchandising",
      "Packaging",
      "Editorial Design & Posters",
      "Motion Design",
      "Email Marketing",
      "Web Design",
      "Print Production",
    ],
  },
  {
    title: "Social Media",
    items: [
      "Content Production",
      "Image & Video Editing",
      "Strategic Planning",
      "Performance Analysis",
      "Social Media Management",
      "Post Design",
    ],
  },
  { title: "Graphic Arts", items: ["Drawing", "Illustration", "Ceramics"] },
];

const tools = [
  { name: "Adobe Photoshop", src: "/assets/tools/photoshop.svg" },
  { name: "Adobe Illustrator", src: "/assets/tools/illustrator.svg" },
  { name: "Adobe Premiere Pro", src: "/assets/tools/premiere.svg" },
  { name: "Adobe After Effects", src: "/assets/tools/after-effects.svg" },
  { name: "Adobe InDesign", src: "/assets/tools/indesign.svg" },
  { name: "Adobe Lightroom", src: "/assets/tools/lightroom.svg" },
  { name: "Adobe Substance 3D", src: "/assets/tools/substance-3d.svg" },
  { name: "Figma", src: "/assets/tools/figma.png" },
  { name: "CapCut", src: "/assets/tools/capcut.webp" },
  { name: "Canva", src: "/assets/tools/canva.png" },
  { name: "Meta", src: "/assets/tools/meta.png" },
  { name: "Notion", src: "/assets/tools/notion.png" },
];

function Arrow({ direction = "right" }: { direction?: "right" | "down" | "up" }) {
  const rotations = { right: "0deg", down: "90deg", up: "-90deg" };
  return (
    <svg
      className="arrow-icon"
      style={{ transform: `rotate(${rotations[direction]})` }}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function ProductsPage() {
  const { isEnglish } = useSiteLanguage();
  const navigate = useNavigate();
  const onBack = () => {
    void navigate({ to: "/" }).then(() => window.scrollTo(0, 0));
  };
  return (
    <main className="products-page">
      <div className="pixel-grid" aria-hidden="true">
        {Array.from({ length: 120 }, (_, index) => (
          <span key={index} style={{ animationDelay: `${((index * 37) % 23) * 45}ms` }} />
        ))}
      </div>
      <button className="products-back" onClick={onBack}>
        <Arrow direction="up" />
        {isEnglish ? "Back to portfolio" : "Voltar ao portefólio"}
      </button>
      <div className="products-message">
        <p>{isEnglish ? "Products" : "Produtos"}</p>
        <h1>{isEnglish ? "New things coming soon..." : "Novidades em breve..."}</h1>
      </div>
    </main>
  );
}

export function PortfolioPage() {
  const { language, setLanguage } = useSiteLanguage();
  const visibleProjects = projects.map((project) => ({
    ...project,
    title: language === "EN" ? project.en : project.pt,
  }));
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedRole, setTypedRole] = useState("");
  const journeyRef = useRef<HTMLElement>(null);
  const isEnglish = language === "EN";

  const copy = isEnglish
    ? {
        nav: ["About", "Services", "Work", "Testimonials", "Products", "Contact"],
        menu: "Open menu",
        heroGreeting: "Hi! I'm Inês Mota",
        heroPrefix: "I am",
        heroRoles: ["a graphic designer", "a social media manager"],
        aboutLead: "Design with ",
        aboutAccent: "strategy",
        aboutEnd: " and a focus on results.",
        bio: "I am a graphic designer and social media manager with experience in visual identities, digital content and communication strategies. By combining creativity with strategic thinking, I develop consistent, relevant solutions focused on each brand's goals.",
        stats: [
          { label: "Years of Experience", value: "4+" },
          { label: "Brands", value: "+32" },
          { label: "Social Content", value: "+3,000" },
        ],
        journey: "My journey",
        selectedBrands: "Selected brands",
        downloadCv: "CV",
        services: "My services",
        selectedLead: "Selected",
        selectedEnd: "work",
        viewProject: "View project",
        projectLabel: "View",
        projectOnBehance: "on Behance",
        moreWork: "See more work",
        testimonialLead: "What they say about",
        testimonialEnd: "my work.",
        fabioQuote:
          "Inês stands out for her creativity, versatility and ability to transform ideas into high-quality visual solutions. She is a responsible professional, attentive to detail and highly motivated to keep evolving.",
        inesQuote:
          "It has been a privilege to work with Inês over the last 9 months. Her passion for design is evident in every project she takes on. Beyond her talent, her contagious energy is a real boost for any team she collaborates with.\n\nI highlight her dedication, creativity and ability to turn every challenge into an opportunity 👏🏻",
        sergioQuote:
          "Working with Inês on several projects has been a real privilege. She has enormous creativity and a rare ability to turn complex ideas into clear, appealing visual pieces that match each project's goals.\n\nBeyond the technical quality, she stands out for the way she shows up day to day: extremely dynamic, always willing to help, and able to solve any unexpected problem with contagious positive energy.\n\nShe is a first-class professional and makes all the difference in any team.",
        download: "Download letter",
        linkedin: "Read on LinkedIn",
        contactTitle: "Shall we work together?",
        phone: "PHONE",
        location: "LOCATION",
        rights: "All rights reserved.",
        top: "Back to top",
      }
    : {
        nav: ["Sobre mim", "Serviços", "Trabalhos", "Testemunhos", "Produtos", "Contatos"],
        menu: "Abrir menu",
        heroGreeting: "Olá! Eu sou a Inês Mota",
        heroPrefix: "sou",
        heroRoles: ["designer gráfica", "gestora de redes sociais"],
        aboutLead: "Design com ",
        aboutAccent: "estratégia",
        aboutEnd: " e foco em resultados.",
        bio: "Sou designer gráfica e social media manager, com experiência na criação de identidades visuais, conteúdos digitais e estratégias de comunicação. Aliando criatividade e pensamento estratégico, desenvolvo soluções consistentes, relevantes e orientadas para os objetivos de cada marca.",
        stats: [
          { label: "Anos de Experiência", value: "4+ " },
          { label: "Marcas", value: "+32" },
          { label: "Conteúdos Redes", value: "+3.000" },
        ],
        journey: "O meu percurso",
        selectedBrands: "Marcas selecionadas",
        downloadCv: "Currículo",
        services: "Os meus serviços",
        selectedLead: "Trabalho",
        selectedEnd: "selecionado",
        viewProject: "Ver projeto",
        projectLabel: "Ver",
        projectOnBehance: "no Behance",
        moreWork: "Ver mais trabalhos",
        testimonialLead: "O que dizem sobre",
        testimonialEnd: "o meu trabalho.",
        fabioQuote:
          "A Inês distingue-se pela sua criatividade, versatilidade e capacidade de transformar ideias em soluções visuais de elevada qualidade. É uma profissional responsável, atenta ao detalhe e com uma enorme vontade de evoluir.",
        inesQuote:
          "Foi um privilégio trabalhar com a Inês durante os últimos 9 meses. A sua paixão pelo design é evidente em cada projeto que abraça. Além do talento, a sua energia contagiante é um verdadeiro impulso para qualquer equipa com quem colabore.\n\nDestaco a sua dedicação, criatividade e capacidade de tornar cada desafio numa oportunidade 👏🏻",
        sergioQuote:
          "Trabalhar com a Inês em vários projetos tem sido um verdadeiro privilégio. Tem uma criatividade enorme e uma capacidade rara de transformar ideias complexas em peças visuais claras, apelativas e alinhadas com os objetivos de cada projeto.\n\nAlém da qualidade técnica, destaca-se pela postura no dia a dia, sendo extremamente dinâmica, prestável e capaz de resolver qualquer imprevisto com uma energia positiva contagiante.\n\nÉ uma profissional de mão-cheia e faz toda a diferença em qualquer equipa.",
        download: "Descarregar carta",
        linkedin: "Ler no LinkedIn",
        contactTitle: "Vamos trabalhar juntos?",
        phone: "TELEFONE",
        location: "LOCALIZAÇÃO",
        rights: "Todos os direitos reservados.",
        top: "Voltar ao topo",
      };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  useEffect(() => {
    const roles =
      language === "EN"
        ? ["a graphic designer", "a social media manager"]
        : ["designer gráfica", "gestora de redes sociais"];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setTypedRole(roles[0] ?? "");
      return;
    }

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeout = 0;

    const type = () => {
      const role = roles[roleIndex] ?? "";

      if (!deleting) {
        characterIndex += 1;
        setTypedRole(role.slice(0, characterIndex));

        if (characterIndex === role.length) {
          deleting = true;
          timeout = window.setTimeout(type, 1500);
          return;
        }
        timeout = window.setTimeout(type, 72);
        return;
      }

      characterIndex -= 1;
      setTypedRole(role.slice(0, characterIndex));

      if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = window.setTimeout(type, 320);
        return;
      }
      timeout = window.setTimeout(type, 38);
    };

    setTypedRole("");
    timeout = window.setTimeout(type, 450);

    return () => window.clearTimeout(timeout);
  }, [language]);

  useEffect(() => {
    let frame = 0;

    const section = journeyRef.current;
    const viewport = section?.querySelector<HTMLElement>(".career-viewport");
    if (!section || !viewport) return;

    const updateCards = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const viewportRect = viewport.getBoundingClientRect();
        const viewportCenter = viewportRect.left + viewportRect.width / 2;
        const cards = viewport.querySelectorAll<HTMLElement>(".career-row");
        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const offset = (cardRect.left + cardRect.width / 2 - viewportCenter) / viewportRect.width;
          const rotation = Math.max(-7, Math.min(7, offset * 12));
          const scale = 1 - Math.min(Math.abs(offset) * 0.08, 0.06);
          card.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        });

        const distance = Math.max(viewport.scrollWidth - viewport.clientWidth, 1);
        const progress = Math.min(Math.max(viewport.scrollLeft / distance, 0), 1);
        section.style.setProperty("--timeline-progress", String(progress));
      });
    };

    updateCards();
    viewport.addEventListener("scroll", updateCards, { passive: true });
    window.addEventListener("resize", updateCards);

    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener("scroll", updateCards);
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  return (
    <main id="top">
      <header className="site-header">
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label={isEnglish ? "Main navigation" : "Navegação principal"}
        >
          {["#sobre", "#servicos", "#trabalhos", "#testemunhos", "/produtos", "#contactos"].map(
            (href, index) =>
              href === "/produtos" ? (
                <Link key={href} to="/produtos" onClick={() => setMenuOpen(false)}>
                  {copy.nav[index]}
                </Link>
              ) : (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {copy.nav[index]}
                </a>
              ),
          )}
        </nav>
        <div className="header-actions">
          <div
            className="language-switch"
            aria-label={isEnglish ? "Select language" : "Selecionar idioma"}
          >
            {(["PT", "EN"] as const).map((item) => (
              <button
                key={item}
                className={language === item ? "active" : ""}
                onClick={() => setLanguage(item)}
                aria-pressed={language === item}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={copy.menu}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" aria-label={isEnglish ? "Introduction" : "Apresentação"}>
        <img
          className="hero-image"
          src="/assets/ines-metro.png"
          alt={
            isEnglish
              ? "Inês Mota at a metro station with a moving train"
              : "Inês Mota numa estação de metro com uma carruagem em movimento"
          }
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <h1
            className="animated-intro"
            aria-label={`${copy.heroGreeting}. ${copy.heroPrefix} ${copy.heroRoles.join(
              isEnglish ? " and " : " e ",
            )}`}
          >
            <span className="hero-greeting">{copy.heroGreeting}</span>
            <span className="hero-role-line" aria-hidden="true">
              <span className="hero-role-prefix">{copy.heroPrefix}</span>
              <span className="role-switcher">
                <span className="typed-role">{typedRole}</span>
              </span>
            </span>
          </h1>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="about-grid">
          <div className="portrait-wrap">
            <img
              src="/assets/ines-about.png"
              alt={
                isEnglish
                  ? "Portrait of Inês Mota sitting in an orange chair"
                  : "Retrato de Inês Mota sentada numa cadeira laranja"
              }
              style={{ opacity: 1 }}
            />
          </div>
          <div className="about-copy">
            <h2>
              {copy.aboutLead}
              <span className="about-accent">{copy.aboutAccent}</span>
              {copy.aboutEnd}
            </h2>
            <p className="bio">{copy.bio}</p>
            <div className="about-stats">
              {copy.stats.map((stat) => (
                <article key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="journey" id="percurso" ref={journeyRef}>
        <div className="journey-sticky">
          <div className="journey-heading">
            <h2>{copy.journey}</h2>
          </div>
          <div className="career-viewport">
            <div className="career-list">
              <div className="career-progress" aria-hidden="true" />
              {career.map((step) => (
                <article className="career-row" key={`${step.company}-${step.period.pt}`}>
                  <div className="career-period">
                    <span>{isEnglish ? step.period.en : step.period.pt}</span>
                  </div>
                  <div className="career-main">
                    <h3>{step.company}</h3>
                    <strong>{isEnglish ? step.role.en : step.role.pt}</strong>
                    <p>{isEnglish ? step.description.en : step.description.pt}</p>
                  </div>
                  {step.names.length > 0 && (
                    <div className="career-brands">
                      <small>{copy.selectedBrands}</small>
                      <div>
                        {step.names.map((name) =>
                          brandLinks[name] ? (
                            <a key={name} href={brandLinks[name]} target="_blank" rel="noreferrer">
                              {name}
                            </a>
                          ) : (
                            <span key={name}>{name}</span>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
          <div className="tools-showcase">
            <div className="tool-logos">
              {tools.map((tool) => (
                <div className="tool-logo" key={tool.name}>
                  <img src={tool.src} alt={tool.name} title={tool.name} />
                </div>
              ))}
            </div>
            <a
              className="cv-download"
              href={isEnglish ? "/assets/cv-inesmota-2026-en.pdf" : "/assets/cv-inesmota-2026-pt.pdf"}
              download={isEnglish ? "cv-inesmota-2026-en.pdf" : "cv-inesmota-2026-pt.pdf"}
            >
              {copy.downloadCv} <Arrow direction="down" />
            </a>
          </div>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="title-row">
          <h2>
            {isEnglish ? "My services" : "Os meus serviços"}
            <span className="fg-inline-italic" />
          </h2>
        </div>
        <div className="service-grid">
          {(isEnglish ? englishServiceGroups : serviceGroups).map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <span>↳</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="trabalhos">
        <div className="work-heading">
          <h2>
            {copy.selectedLead} {copy.selectedEnd}
            <span className="fg-inline-italic" />
          </h2>
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <a
              className="project-card"
              key={`${project.href}-${index}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${copy.projectLabel} ${project.title} ${copy.projectOnBehance}`}
            >
              <div className="project-art">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="project-overlay" aria-hidden="true" />
                <span className="view-project">
                  {copy.viewProject} <Arrow />
                </span>
              </div>
              <div className="project-meta">
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="work-more">
          <a href="https://www.behance.net/inesmotadesign" target="_blank" rel="noreferrer">
            {copy.moreWork} <Arrow />
          </a>
        </div>
      </section>

      <section className="section testimonials" id="testemunhos">
        <div className="testimonial-heading">
          <h2>
            {copy.testimonialLead}
            <br />
            <span>{copy.testimonialEnd}</span>
          </h2>
        </div>
        <div className="quote-grid">
          <article className="quote-card">
            <span className="quote-mark">“</span>
            <blockquote>{copy.fabioQuote}</blockquote>
            <div className="quote-footer">
              <div className="author">
                <span>FG</span>
                <div>
                  <strong>Fábio Gomes</strong>
                  <small>
                    Head of Marketing · FI Group Portugal
                  </small>
                </div>
              </div>
              <a
                className="testimonial-action"
                href="/assets/carta-recomendacao-fabio-gomes.pdf"
                download="Carta-de-Recomendacao-Fabio-Gomes.pdf"
              >
                {copy.download} <Arrow direction="down" />
              </a>
            </div>
          </article>
          <article className="quote-card">
            <span className="quote-mark">“</span>
            <blockquote>{copy.inesQuote}</blockquote>
            <div className="quote-footer">
              <div className="author">
                <span>IS</span>
                <div>
                  <strong>Inês Cristina Silva</strong>
                  <small>
                    Marketing Consultant
                    <br />
                    LinkedIn Recommendation
                  </small>
                </div>
              </div>
              <a
                className="testimonial-action"
                href="https://www.linkedin.com/in/inêsmotadesign/details/recommendations/"
                target="_blank"
                rel="noreferrer"
              >
                {copy.linkedin} <Arrow />
              </a>
            </div>
          </article>
          <article className="quote-card">
            <span className="quote-mark">“</span>
            <blockquote>{copy.sergioQuote}</blockquote>
            <div className="quote-footer">
              <div className="author">
                <span>SF</span>
                <div>
                  <strong>Sérgio Ferreira</strong>
                  <small>
                    SEO Specialist · iGaming · Growth Marketing
                    <br />
                    LinkedIn Recommendation
                  </small>
                </div>
              </div>
              <a
                className="testimonial-action"
                href="https://www.linkedin.com/in/in%C3%AAsmotadesign/details/recommendations/?detailScreenTabIndex=2"
                target="_blank"
                rel="noreferrer"
              >
                {copy.linkedin} <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section contact" id="contactos">
        <div className="contact-intro">
          <h2>
            {copy.contactTitle}
            <br />
            <span className="fg-inline-italic" />
          </h2>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <a href="mailto:inesmota.design@gmail.com">
              <span>EMAIL</span>
              <strong>inesmota.design@gmail.com</strong>
            </a>
            <a href="tel:+351914218101">
              <span>{copy.phone}</span>
              <strong>+351 914 218 101</strong>
            </a>
            <div>
              <span>{copy.location}</span>
              <strong>Porto, Portugal</strong>
            </div>
            <div className="socials">
              <span>SOCIAL</span>
              <a href="https://www.behance.net/inesmotadesign" target="_blank" rel="noreferrer">
                Behance ↗
              </a>
              <a href="https://www.linkedin.com/in/inêsmotadesign" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://www.instagram.com/inesmota.art" target="_blank" rel="noreferrer">
                Instagram art ↗
              </a>
              <a href="https://www.instagram.com/inesmota.design" target="_blank" rel="noreferrer">
                Instagram design ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Inês Mota. {copy.rights}</p>
        <a href="#top">
          {copy.top} <Arrow direction="up" />
        </a>
      </footer>
    </main>
  );
}
