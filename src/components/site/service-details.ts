type L = { pt: string; en: string };
export type ServiceDetail = {
  description: L;
  deliverables: { pt: string[]; en: string[] };
  time: L;
  price: L;
};

const rev = { pt: "2 rondas de revisão incluídas", en: "2 rounds of revisions included" };
const s = (
  description: L,
  items: [string, string][],
  time: L,
  price: L,
): ServiceDetail => ({
  description,
  deliverables: { pt: items.map((i) => i[0]), en: items.map((i) => i[1]) },
  time,
  price,
});
const R: [string, string] = [rev.pt, rev.en];

/** Keyed by the Portuguese service name. Copy and prices supplied by Inês. */
export const serviceDetails: Record<string, ServiceDetail> = {
  "Identidade Visual": s(
    { pt: "A criação da imagem da tua marca: logótipo, cores, tipografia e a forma como tudo funciona em conjunto. Serve para a tua marca ser reconhecida e transmitir confiança.", en: "Creating your brand's image: logo, colours, typography and how it all works together, so your brand is recognised and builds trust." },
    [["Briefing e pesquisa de referências", "Briefing and reference research"], ["Logótipo (versões principal, secundária e símbolo)", "Logo (primary, secondary and symbol versions)"], ["Paleta de cores e tipografia", "Colour palette and typography"], ["Mini manual de identidade (PDF)", "Mini brand guidelines (PDF)"], ["Ficheiros finais para impressão e digital", "Final files for print and digital"], R],
    { pt: "2 a 4 semanas", en: "2 to 4 weeks" },
    { pt: "A partir de 450€", en: "From €450" },
  ),
  "Cartazes Publicitários": s(
    { pt: "Cartazes pensados para captar atenção e comunicar uma mensagem de forma imediata, seja para um evento, campanha ou promoção.", en: "Posters designed to grab attention and deliver a message instantly, for an event, campaign or promotion." },
    [["Conceito e composição gráfica", "Concept and layout"], ["Adaptação a vários formatos (impressão e digital)", "Adaptation to several formats (print and digital)"], ["Ficheiros prontos para gráfica", "Print-ready files"], R],
    { pt: "3 a 7 dias úteis", en: "3 to 7 working days" },
    { pt: "A partir de 70€", en: "From €70" },
  ),
  Merchandising: s(
    { pt: "Design de peças que levam a tua marca para o mundo físico: t-shirts, sweats, tote bags, canecas, brindes e afins.", en: "Design of items that take your brand into the physical world: t-shirts, sweatshirts, tote bags, mugs, giveaways and more." },
    [["Conceito e design da(s) peça(s)", "Concept and design of the item(s)"], ["Mockups para aprovação", "Mockups for approval"], ["Ficheiros de produção para o fornecedor", "Production files for the supplier"], R],
    { pt: "1 a 2 semanas", en: "1 to 2 weeks" },
    { pt: "A partir de 120€ (por linha de produto)", en: "From €120 (per product line)" },
  ),
  Packaging: s(
    { pt: "Design de embalagens e rótulos que protegem o produto, mas também o vendem. É o primeiro contacto físico do cliente com a tua marca.", en: "Packaging and label design that protects the product and also sells it — the customer's first physical contact with your brand." },
    [["Conceito e direção visual", "Concept and visual direction"], ["Design da embalagem ou rótulo (planificação)", "Packaging or label design (dieline)"], ["Mockups realistas", "Realistic mockups"], ["Ficheiros finais para produção, com especificações de impressão", "Final production files with print specifications"], R],
    { pt: "2 a 4 semanas", en: "2 to 4 weeks" },
    { pt: "A partir de 250€ (por produto ou rótulo)", en: "From €250 (per product or label)" },
  ),
  "Design Editorial & Cartazes": s(
    { pt: "Layout de materiais com mais conteúdo, como menus, folhetos, brochuras, catálogos, revistas e apresentações, com hierarquia clara e leitura agradável.", en: "Layout for content-rich materials such as menus, flyers, brochures, catalogues, magazines and presentations, with clear hierarchy and pleasant reading." },
    [["Estrutura e grelha de paginação", "Structure and layout grid"], ["Design e paginação completa", "Full design and layout"], ["Tratamento de imagens e texto", "Image and text treatment"], ["Ficheiros finais para impressão e/ou digital", "Final files for print and/or digital"], R],
    { pt: "1 a 3 semanas, conforme o número de páginas", en: "1 to 3 weeks, depending on page count" },
    { pt: "A partir de 180€", en: "From €180" },
  ),
  "Motion Design": s(
    { pt: "Animação gráfica para dar vida à tua marca: animação de logótipo, vídeos curtos, anúncios e conteúdos animados para redes sociais.", en: "Motion graphics that bring your brand to life: logo animation, short videos, ads and animated social media content." },
    [["Guião visual simples (storyboard)", "Simple visual script (storyboard)"], ["Animação final em formato MP4 (e adaptações para os formatos necessários)", "Final animation in MP4 (plus required format adaptations)"], ["Música ou som de biblioteca livre de direitos, quando aplicável", "Royalty-free music or sound, when applicable"], R],
    { pt: "1 a 2 semanas", en: "1 to 2 weeks" },
    { pt: "A partir de 150€ (animação até 15 segundos)", en: "From €150 (animation up to 15 seconds)" },
  ),
  "Email Marketing": s(
    { pt: "Design de newsletters e emails que se leem bem em qualquer dispositivo e levam o leitor a agir.", en: "Newsletter and email design that reads well on any device and moves the reader to act." },
    [["Template personalizado com a tua identidade", "Custom template with your identity"], ["Design adaptado a desktop e mobile", "Design adapted to desktop and mobile"], ["Preparação para a tua plataforma (Mailchimp, Brevo, etc.)", "Setup for your platform (Mailchimp, Brevo, etc.)"], R],
    { pt: "3 a 7 dias úteis", en: "3 to 7 working days" },
    { pt: "A partir de 90€ (por template)", en: "From €90 (per template)" },
  ),
  "Web Design": s(
    { pt: "Design de sites e landing pages pensados na experiência do utilizador e no objetivo do negócio: ser encontrado, transmitir confiança e gerar contactos.", en: "Websites and landing pages designed around user experience and business goals: being found, building trust and generating leads." },
    [["Estrutura e wireframes", "Structure and wireframes"], ["Design de interface em desktop e mobile", "Interface design for desktop and mobile"], ["Sistema visual (cores, tipografia, componentes)", "Visual system (colours, typography, components)"], ["Implementação ou entrega dos ficheiros de design, conforme combinado", "Build or design file hand-off, as agreed"], ["Recomendações base de SEO", "Basic SEO recommendations"], R],
    { pt: "2 a 6 semanas, conforme o número de páginas", en: "2 to 6 weeks, depending on page count" },
    { pt: "A partir de 600€ (landing page ou site de uma página)", en: "From €600 (landing page or one-page site)" },
  ),
  "Artes Finais": s(
    { pt: "Preparação técnica dos ficheiros para impressão, para que tudo saia como foi desenhado: sangrias, margens, cores e resolução.", en: "Technical preparation of print files so everything comes out as designed: bleed, margins, colours and resolution." },
    [["Verificação e ajuste técnico", "Technical check and adjustment"], ["Conversão de cor (CMYK/Pantone, se aplicável)", "Colour conversion (CMYK/Pantone, if applicable)"], ["Ficheiros finais em PDF e formatos de produção", "Final PDF and production files"], ["Contacto com a gráfica, se necessário", "Liaison with the printer, if needed"]],
    { pt: "1 a 3 dias úteis", en: "1 to 3 working days" },
    { pt: "A partir de 40€", en: "From €40" },
  ),
  "Captação de Conteúdos": s(
    { pt: "Fotografia e vídeo feitos de propósito para as tuas redes, com estilo coerente com a marca e prontos a publicar.", en: "Photo and video made specifically for your channels, consistent with your brand and ready to post." },
    [["Preparação da sessão (ideias e lista de planos)", "Session prep (ideas and shot list)"], ["Sessão de captação no local", "On-location shoot"], ["Seleção e tratamento básico das melhores imagens e vídeos", "Selection and basic editing of the best images and videos"], ["Entrega em alta resolução", "High-resolution delivery"]],
    { pt: "Sessão agendada em 1 a 2 semanas; entrega em 3 a 5 dias úteis após a captação", en: "Session booked within 1 to 2 weeks; delivery 3 to 5 working days after the shoot" },
    { pt: "A partir de 120€ (por sessão de meio dia, na zona do Porto)", en: "From €120 (per half-day session, Porto area)" },
  ),
  "Edição de Imagem e Vídeo": s(
    { pt: "Tratamento profissional de fotografias e edição de vídeos, desde reels e stories até vídeos promocionais curtos.", en: "Professional photo retouching and video editing, from reels and stories to short promo videos." },
    [["Edição e correção de cor", "Editing and colour correction"], ["Cortes, legendas, música e transições (vídeo)", "Cuts, captions, music and transitions (video)"], ["Formatos adaptados a cada rede social", "Formats adapted to each platform"], R],
    { pt: "2 a 5 dias úteis por conteúdo", en: "2 to 5 working days per piece" },
    { pt: "A partir de 35€ (por vídeo) e a partir de 8€ (por imagem)", en: "From €35 (per video) and from €8 (per image)" },
  ),
  "Planos Estratégicos": s(
    { pt: "Um plano claro para as tuas redes sociais: o que comunicar, a quem, com que tom e com que frequência, ligado aos teus objetivos de negócio.", en: "A clear plan for your social media: what to say, to whom, in what tone and how often, tied to your business goals." },
    [["Análise da presença atual e da concorrência", "Analysis of current presence and competitors"], ["Definição de público-alvo, tom de voz e pilares de conteúdo", "Target audience, tone of voice and content pillars"], ["Calendário editorial do primeiro mês", "First-month editorial calendar"], ["Recomendações de formatos e frequência", "Format and frequency recommendations"], ["Documento final em PDF e reunião de apresentação", "Final PDF and presentation meeting"]],
    { pt: "1 a 2 semanas", en: "1 to 2 weeks" },
    { pt: "A partir de 250€", en: "From €250" },
  ),
  "Análise de Resultados": s(
    { pt: "Perceber o que está a funcionar e o que não está. Transformo os números das tuas redes em decisões concretas.", en: "Understand what is working and what isn't. I turn your social media numbers into concrete decisions." },
    [["Relatório com as principais métricas (alcance, engagement, crescimento)", "Report with key metrics (reach, engagement, growth)"], ["Análise dos conteúdos com melhor e pior desempenho", "Analysis of best and worst performing content"], ["Recomendações de melhoria", "Improvement recommendations"], ["Apresentação dos resultados (opcional)", "Results presentation (optional)"]],
    { pt: "3 a 5 dias úteis", en: "3 to 5 working days" },
    { pt: "A partir de 90€ (relatório pontual) · incluído nos planos de gestão mensal", en: "From €90 (one-off report) · included in monthly management plans" },
  ),
  "Gestão de Redes": s(
    { pt: "Cuido das tuas redes sociais do início ao fim, para que possas concentrar-te no teu negócio e manter uma presença consistente e profissional.", en: "I look after your social media end to end, so you can focus on your business while keeping a consistent, professional presence." },
    [["Planeamento mensal de conteúdos", "Monthly content planning"], ["Criação de design e legendas", "Design and caption creation"], ["Publicação e agendamento", "Publishing and scheduling"], ["Interação e moderação (comentários e mensagens), se acordado", "Engagement and moderation (comments and messages), if agreed"], ["Relatório mensal de resultados", "Monthly results report"]],
    { pt: "Arranque em 1 a 2 semanas; serviço contínuo mensal", en: "Starts in 1 to 2 weeks; ongoing monthly service" },
    { pt: "A partir de 300€/mês (1 rede social, cerca de 12 publicações)", en: "From €300/month (1 platform, around 12 posts)" },
  ),
  "Design de Posts": s(
    { pt: "Design de publicações para Instagram, Facebook e LinkedIn com identidade coerente, que se reconhece à primeira vista.", en: "Post design for Instagram, Facebook and LinkedIn with a consistent identity that's recognisable at first glance." },
    [["Templates personalizados com a tua identidade", "Custom templates with your identity"], ["Design de posts, carrosséis e stories", "Posts, carousels and stories"], ["Ficheiros finais prontos a publicar", "Final files ready to post"], R],
    { pt: "2 a 4 dias úteis por pack", en: "2 to 4 working days per pack" },
    { pt: "A partir de 12€ por post (pack de 8 posts a partir de 90€)", en: "From €12 per post (pack of 8 posts from €90)" },
  ),
  Desenho: s(
    { pt: "Retratos e desenhos feitos à mão, em grafite ou outras técnicas, por encomenda. Ideais para oferecer ou decorar.", en: "Hand-made portraits and drawings in graphite or other techniques, made to order. Ideal as gifts or decoration." },
    [["Desenho original em papel de qualidade", "Original drawing on quality paper"], ["Digitalização do original (opcional)", "Scan of the original (optional)"], ["Embalagem para oferta (opcional)", "Gift packaging (optional)"]],
    { pt: "1 a 3 semanas, conforme o tamanho e a complexidade", en: "1 to 3 weeks, depending on size and complexity" },
    { pt: "A partir de 40€ (retrato em grafite A5)", en: "From €40 (A5 graphite portrait)" },
  ),
  "Ilustração": s(
    { pt: "Ilustrações originais para marcas, editorial, redes sociais ou projetos pessoais, com um estilo próprio.", en: "Original illustrations for brands, editorial, social media or personal projects, with a distinctive style." },
    [["Esboços para aprovação", "Sketches for approval"], ["Ilustração final em formato digital", "Final digital illustration"], ["Direitos de utilização acordados", "Agreed usage rights"], R],
    { pt: "1 a 3 semanas", en: "1 to 3 weeks" },
    { pt: "A partir de 80€", en: "From €80" },
  ),
  "Cerâmica": s(
    { pt: "Peças em cerâmica feitas à mão, únicas ou em pequenas séries, para decoração, oferta ou brindes personalizados.", en: "Hand-made ceramic pieces, one-off or in small series, for decoration, gifts or custom giveaways." },
    [["Peça criada à mão e personalizada", "Hand-made, personalised piece"], ["Embalagem cuidada", "Careful packaging"], ["Envio ou entrega combinada", "Shipping or arranged delivery"]],
    { pt: "3 a 6 semanas, conforme o processo de secagem e cozedura", en: "3 to 6 weeks, depending on drying and firing" },
    { pt: "A partir de 25€ (por peça)", en: "From €25 (per piece)" },
  ),
};
