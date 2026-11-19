export type ServiceDetail = {
  description: { pt: string; en: string };
  process: { pt: string[]; en: string[] };
  time: { pt: string; en: string };
  price?: number | undefined;
};

const d = (
  pt: string,
  en: string,
  timePt: string,
  timeEn: string,
  processPt: string[],
  processEn: string[],
  price?: number,
): ServiceDetail => ({ description: { pt, en }, process: { pt: processPt, en: processEn }, time: { pt: timePt, en: timeEn }, price });

const designPt = ["Briefing e pesquisa", "Conceito e primeiras propostas", "Revisões", "Entrega dos ficheiros finais"];
const designEn = ["Briefing and research", "Concept and first proposals", "Revisions", "Final file delivery"];
const socialPt = ["Análise da marca e do público", "Planeamento", "Produção e publicação", "Relatório e ajustes"];
const socialEn = ["Brand and audience analysis", "Planning", "Production and publishing", "Report and adjustments"];

/** Keyed by the Portuguese service name. */
export const serviceDetails: Record<string, ServiceDetail> = {
  "Identidade Visual": d(
    "Uma identidade visual é o conjunto de elementos que tornam a tua marca reconhecível: logótipo, cores, tipografia e regras de utilização. Envolve pesquisa, conceito, desenho do logótipo e um manual de normas para aplicar a marca com coerência.",
    "A visual identity is the set of elements that make your brand recognisable: logo, colours, typography and usage rules. It involves research, concept, logo design and a brand guidelines manual so the brand is applied consistently.",
    "3 a 5 semanas", "3 to 5 weeks",
    ["Briefing e pesquisa de mercado", "Conceito e propostas de logótipo", "Revisões e afinação", "Manual de normas e ficheiros finais"],
    ["Briefing and market research", "Concept and logo proposals", "Revisions and refinement", "Brand guidelines and final files"],
    370,
  ),
  "Cartazes Publicitários": d("Cartazes que comunicam uma mensagem de forma clara e impactante, para eventos, campanhas ou lojas, prontos para impressão ou digital.", "Posters that deliver a message clearly and with impact, for events, campaigns or stores, ready for print or digital.", "1 a 2 semanas", "1 to 2 weeks", designPt, designEn),
  Merchandising: d("Design de produtos de marca — t-shirts, sweats, sacos, canecas e outros — que levam a identidade para o dia a dia.", "Branded product design — t-shirts, sweatshirts, bags, mugs and more — bringing the identity into everyday life.", "1 a 2 semanas", "1 to 2 weeks", designPt, designEn),
  Packaging: d("Embalagens e rótulos que protegem, informam e destacam o produto na prateleira.", "Packaging and labels that protect, inform and make the product stand out on the shelf.", "2 a 4 semanas", "2 to 4 weeks", designPt, designEn),
  "Design Editorial & Cartazes": d("Paginação de revistas, catálogos, brochuras e relatórios com uma leitura clara e cuidada.", "Layout of magazines, catalogues, brochures and reports with clear, careful reading.", "2 a 4 semanas", "2 to 4 weeks", designPt, designEn),
  "Motion Design": d("Animações de logótipos, vídeos curtos e conteúdos animados para redes sociais e campanhas.", "Logo animations, short videos and animated content for social media and campaigns.", "1 a 3 semanas", "1 to 3 weeks", ["Briefing e guião", "Storyboard", "Animação", "Revisões e exportação"], ["Briefing and script", "Storyboard", "Animation", "Revisions and export"]),
  "Email Marketing": d("Newsletters e campanhas de email com design responsivo, alinhadas com a tua marca.", "Responsive newsletters and email campaigns aligned with your brand.", "1 semana", "1 week", designPt, designEn),
  "Web Design": d("Design de sites e landing pages pensados para a experiência do utilizador e para converter visitantes em clientes.", "Websites and landing pages designed for user experience and to turn visitors into clients.", "3 a 6 semanas", "3 to 6 weeks", ["Briefing e estrutura", "Wireframes", "Design das páginas", "Entrega para desenvolvimento"], ["Briefing and structure", "Wireframes", "Page design", "Hand-off for development"]),
  "Artes Finais": d("Preparação técnica de ficheiros para impressão, garantindo cores, medidas e margens corretas.", "Technical preparation of print files, ensuring correct colours, sizes and bleed.", "2 a 5 dias", "2 to 5 days", ["Receção dos ficheiros", "Verificação técnica", "Ajustes", "Entrega para gráfica"], ["File intake", "Technical check", "Adjustments", "Delivery to printer"]),
  "Captação de Conteúdos": d("Sessões de fotografia e vídeo para criar conteúdos próprios e autênticos para as tuas redes.", "Photo and video sessions to create original, authentic content for your channels.", "1 a 2 semanas", "1 to 2 weeks", ["Planeamento da sessão", "Captação", "Seleção", "Edição e entrega"], ["Session planning", "Shooting", "Selection", "Editing and delivery"]),
  "Edição de Imagem e Vídeo": d("Tratamento de fotografias e montagem de vídeos, reels e stories com ritmo e identidade.", "Photo retouching and editing of videos, reels and stories with rhythm and identity.", "3 a 7 dias", "3 to 7 days", ["Receção do material", "Edição", "Revisões", "Entrega"], ["Material intake", "Editing", "Revisions", "Delivery"]),
  "Planos Estratégicos": d("Estratégia de comunicação para redes sociais: objetivos, público, tom de voz, linhas de conteúdo e calendário.", "Social media communication strategy: goals, audience, tone of voice, content pillars and calendar.", "2 a 3 semanas", "2 to 3 weeks", socialPt, socialEn),
  "Análise de Resultados": d("Relatórios com as métricas mais importantes e recomendações claras para melhorar o desempenho.", "Reports with the key metrics and clear recommendations to improve performance.", "1 semana", "1 week", ["Recolha de dados", "Análise", "Relatório", "Recomendações"], ["Data collection", "Analysis", "Report", "Recommendations"]),
  "Gestão de Redes": d("Gestão mensal das tuas redes sociais: planeamento, criação, publicação e interação com a comunidade.", "Monthly management of your social channels: planning, creation, publishing and community engagement.", "Mensal (início em 1 a 2 semanas)", "Monthly (starts in 1 to 2 weeks)", socialPt, socialEn),
  "Design de Posts": d("Posts, carrosséis e stories com design consistente e pensado para cada plataforma.", "Posts, carousels and stories with consistent design tailored to each platform.", "3 a 7 dias", "3 to 7 days", designPt, designEn),
  Desenho: d("Desenhos e retratos feitos à mão, em grafite ou outras técnicas, por encomenda.", "Hand-made drawings and portraits, in graphite or other techniques, made to order.", "1 a 3 semanas", "1 to 3 weeks", ["Referências e formato", "Esboço", "Desenho final", "Entrega"], ["References and format", "Sketch", "Final drawing", "Delivery"]),
  "Ilustração": d("Ilustrações personalizadas para marcas, livros, produtos ou peças de comunicação.", "Custom illustrations for brands, books, products or communication pieces.", "1 a 3 semanas", "1 to 3 weeks", ["Briefing", "Esboços", "Ilustração final", "Entrega"], ["Briefing", "Sketches", "Final illustration", "Delivery"]),
  "Cerâmica": d("Peças de cerâmica feitas à mão, únicas ou em pequenas séries.", "Hand-made ceramic pieces, one-off or in small series.", "3 a 6 semanas", "3 to 6 weeks", ["Ideia e esboço", "Modelação", "Secagem e cozedura", "Vidragem e entrega"], ["Idea and sketch", "Modelling", "Drying and firing", "Glazing and delivery"]),
};
