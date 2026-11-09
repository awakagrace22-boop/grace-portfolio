/* =========================================================
   SITE DATA — edit this file to update the whole website.
   ---------------------------------------------------------
   IMAGES: every image on the site comes from this file.
   To use your own, drop files into /assets/images/ and
   replace a URL with e.g. "assets/images/ace-cover.jpg".
   A project with an empty `images` list shows a playful
   placeholder until you add pictures.
   ========================================================= */

window.SITE = {
  name: "Grace Awaka",
  role: "Brand & Communications Designer",
  city: "Nairobi",
  timezone: "Africa/Nairobi",
  email: "otsimigrace@gmail.com",
  // Paste your real Cal.com / Calendly link here:
  bookingUrl: "https://cal.com",
  resume: "assets/Grace_Awaka_Resume.pdf",
  available: true, // shows the "Open to freelance" badge
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/designs_by_awaka" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/grace-awaka-25556112a/" },
    { label: "Behance", url: "https://www.behance.net/Awakagrace" }
  ],
  // Contact form delivery (free, no account): https://formsubmit.co
  // The first message sends you a one-time "activate" email. Click it once.
  formEndpoint: "https://formsubmit.co/ajax/otsimigrace@gmail.com",

  images: {
    heroSticker: "https://framerusercontent.com/images/ig65PO1wKhGCAeLZKTV0gRDHtdo.png",
    portrait: "https://framerusercontent.com/images/YMOAZyEK3weBvr1hcV11uiguk4w.jpeg",
    share: "https://framerusercontent.com/images/nToqo86CpaT30ANDvFVBVNams.png"
  },

  brands: ["Amara", "Miadi", "SoSoft", "ACE", "Ashanti-Q", "HACO"],

  receipt: [
    { item: "Amara OUD launch views", qty: "2.5M+" },
    { item: "HACO website visits, first 30 days", qty: "22,000+" },
    { item: "ACE followers, from 1,500", qty: "29,000+" },
    { item: "Campaign reach across brands", qty: "3M+" },
    { item: "Avg. engagement growth, brand pages", qty: "40%" },
    { item: "Fewer agency revision cycles", qty: "80%" },
    { item: "Projects delivered every year", qty: "30+" },
    { item: "Brand systems looked after", qty: "5" }
  ],

  services: [
    { title: "Brand & Creative Design", text: "Building visual identities and creative assets that give brands character, consistency and a reason to be remembered.", tags: ["Brand identity", "Packaging design", "Campaign visuals", "Art direction", "3D product visuals"] },
    { title: "Digital Marketing", text: "Connecting creative thinking with digital strategy to build awareness, engage audiences and make brands more visible.", tags: ["Social media strategy", "Digital campaigns", "Content development", "Meta Ads", "Performance analytics"] },
    { title: "Communications & Storytelling", text: "Turning messages into stories people understand, remember and want to engage with.", tags: ["Brand messaging", "Corporate communications", "Internal campaigns", "Creative storytelling", "Launch communications"] },
    { title: "Content & Visual Production", text: "Bringing ideas to life through visual content, from the first concept to the final frame.", tags: ["Photography", "Videography", "Video editing", "Motion content", "Creative direction"] }
  ],

  experience: [
    { years: "Jan 2020 – present", title: "Brand & Communications Designer", place: "HACO Industries Kenya Ltd, Nairobi",
      text: "Brand, packaging, campaigns, digital and corporate communication for AMARA, MIADI, SO-SOFT, ACE, Ashanti-Q and the HACO corporate brand.",
      points: ["Led the HACO website revamp from ideation to launch execution: 22,000+ visits in its first 30 days", "Digital execution of the AMARA OUD launch: 2.5M+ views", "Packaging design and renovation across homecare, skincare and haircare, including ACE Bleach, the AMARA Handwash revamp and MIADI styling products", "Visual identity systems and brand guidelines for five brands", "Corporate materials: the HACO Catalogue, TuQio newsletters, board presentations and brochures", "Briefing and coordinating external creative and digital agencies"] },
    { years: "Mar 2018 – Dec 2019", title: "Graphic Design Intern", place: "HACO Industries Kenya Ltd, Nairobi",
      text: "Social content, marketing materials, print layouts, image editing and file preparation for the brand and marketing teams.", points: [] }
  ],
  capabilities: [
    { title: "Creative", items: ["Brand identity", "Packaging design", "Creative direction", "Campaign development", "Art direction", "3D product visualisation"] },
    { title: "Marketing & communications", items: ["Social media and community management", "Digital campaign execution", "Content storytelling", "Corporate and internal communication", "Performance monitoring with Meta Insights, Google Analytics and Search Console"] },
    { title: "Delivery", items: ["Product development support", "Agency briefing and management", "Creative quality control", "Brand governance", "Cross-functional stakeholder coordination"] }
  ],
  toolGroups: [
    { title: "Design & production", items: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro", "Lightroom", "Canva", "CapCut"] },
    { title: "Marketing & analytics", items: ["Meta Business Suite", "Meta Ads Manager", "Google Analytics", "Search Console", "Google Business Profile"] },
    { title: "Workflow", items: ["Notion", "Trello", "Microsoft Office", "Google Workspace"] }
  ],

  education: [
    { title: "Diploma in Digital Marketing", place: "Zetech University", when: "Jan 2026 – present", status: "In progress" },
    { title: "Certificate in Digital Marketing", place: "Zetech University", when: "2025" },
    { title: "Digital Marketing Masterclass", place: "Strathmore Business School", when: "2025" },
    { title: "Diploma in Graphic Design", place: "Nairobits School of Digital Design and ICT", when: "2018 – 2019" },
    { title: "Certificate in Internet Research", place: "Nairobits School of Digital Design and ICT", when: "2017" },
    { title: "Certificate in Graphic Design", place: "Nairobits School of Digital Design", when: "2016" },
    { title: "Fundamentals of Digital Marketing", place: "Google", when: "Certification" },
    { title: "Meta Blueprint", place: "Meta", when: "Certification" }
  ],

  tools: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro", "Lightroom", "Canva", "CapCut", "Meta Business Suite", "Meta Ads Manager", "Google Analytics", "Search Console", "Notion", "Trello"],

  offClock: [
    { title: "Ocean sunrises", text: "The best colour palettes I know show up before 7am." },
    { title: "Galleries", text: "Walking slowly past other people's ideas." },
    { title: "Reading", text: "Usually two books at once, one of them about design." },
    { title: "Quiet spaces", text: "Thoughtful design starts with thoughtful living." }
  ]
};

/* Shared Framer image prefix, just to keep the list short */
const F = "https://framerusercontent.com/images/";

const I = "assets/images/projects/";
const HW = "assets/images/haco-web/";

window.PROJECTS = [
  {
    slug: "haco-website",
    title: "HACO Industries — Corporate Website Redesign",
    subtitle: "Corporate website redesign",
    brand: "HACO Industries",
    year: "2026",
    category: "Digital & Social Media",
    kind: "Digital Experience · Corporate Branding · UX/UI",
    color: "#191719",
    featured: true,
    tagline: "A corporate home for a pan-African manufacturer: its story, its brands and the people it wants to reach, in one clear structure.",
    role: ["Led the revamp from ideation to launch execution", "Content structure and brand presentation", "Launch"],
    tools: ["Google Analytics", "Search Console", "Photoshop", "Illustrator"],
    elements: ["Information architecture", "Brand portfolio pages", "Corporate storytelling", "Launch"],
    liveUrl: "https://www.haco.africa/",
    overview: "The corporate website for HACO Industries, the Nairobi-based maker of AMARA, MIADI, SO-SOFT, ACE, Ashanti-Q and HACO Plastics. The revamped site at haco.africa tells the group's story, presents the brand portfolio by category and gives partners, talent and press their own routes in.",
    stats: [{ value: "22,000+", label: "website visits in the first 30 days after launch" }],
    images: [HW + "desktop-home0.webp"],
    caseStudy: {
      background: "HACO sells across East, Central and West Africa, and its website has to work for very different visitors at once: shoppers looking for a brand, partners and distributors, job seekers, journalists and the wider business community. The revamp brought the corporate story and the consumer brands under one roof.",
      objectives: ["Present HACO as a pan-African manufacturer with a heritage to be proud of", "Make every brand easy to find, grouped the way people shop: skin care, hair care, home care", "Give partners, talent and press a clear, direct route to what they need", "Keep the HACO identity, its black and gold, consistent from the first screen to the footer"],
      approach: ["Start from the audiences, then shape the navigation around the questions each one arrives with.", "Lead the homepage with stories rather than a static banner: heritage, the African standard, the solar-powered factory, awards and international press.", "Organise brands by category so a visitor can move from the group to a single product family in two clicks.", "Keep corporate content (story, founder's legacy, leadership, awards, sustainability) in one About section."],
      role: "I led the HACO website revamp from ideation to launch execution: shaping the structure and content, steering how the brands and the corporate story are presented, coordinating stakeholders and seeing it through to launch. The site was built and coded by the web development team; I did not write its code.",
      ia: [
        { label: "Home" },
        { label: "About Us", children: ["Our Story", "Our Founder's Legacy", "Advisory Board", "Executive Team", "Awards and Recognition"] },
        { label: "Our Brands", children: ["Skin Care: Amara", "Home Care: ACE, SoSoft, HACO Plastics", "Hair Care: Ashanti-Q, Miadi"] },
        { label: "News & Press" }, { label: "Careers" }, { label: "Sustainability" }, { label: "The MD's Lens" }, { label: "Contact Us" }, { label: "Become a Partner" }
      ],
      journeys: [
        { who: "A shopper", path: ["Home", "Our Brands", "Skin Care", "Amara"] },
        { who: "A distributor", path: ["Home", "Become a Partner", "Contact Us"] },
        { who: "A job seeker", path: ["Home", "Careers"] },
        { who: "A journalist", path: ["Home", "News & Press", "The MD's Lens"] }
      ],
      homeOrder: ["Navigation with the HACO crest and a one-line brand promise", "Hero stories slider: five rotating stories with a clear call to explore the brands", "Key figures and the African footprint, country by country", "Crafting Excellence Since Day One: the heritage story", "Our Brand Portfolio: skin care, hair care and home care", "Become a partner", "Footer with customer service, quick links and every brand's socials"],
      screens: [
        { src: HW + "desktop-home0.webp", device: "desktop", caption: "Homepage: navigation, brand promise strip and the hero story slider", pins: [[50, 15, "Primary navigation"], [62, 22.5, "Brand promise strip"], [36, 47, "Hero story"], [18, 77, "Call to explore the brands"], [50, 90, "Five rotating stories"]] },
        { src: HW + "desktop-brands0.webp", device: "desktop", caption: "Homepage: the brand portfolio, grouped by category", pins: [[50, 10, "Portfolio introduction"], [8, 58, "Category tiles"], [33, 97, "A direct route to each brand"]] }
      ],
      mobile: [],
      results: "The new site launched in 2026 and recorded more than 22,000 visits in its first 30 days."
    }
  },
  {
    slug: "ace-bleach",
    title: "ACE Bleach",
    subtitle: "Product packaging",
    brand: "ACE",
    year: "2025",
    category: "Brand Identity & Packaging",
    color: "#191719",
    featured: true,
    tagline: "Bringing a new product into the ACE family without losing it in the crowd.",
    role: ["Creative direction", "Product packaging"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Product identity", "Label design", "Product mockups", "Brand identity"],
    overview: "ACE Bleach extended the ACE brand into a new category. The pack had to be recognisably ACE while giving bleach its own identity and a strong presence on shelf.",
    challenge: "Keep a clear visual link to the existing ACE range, stand apart as a distinct product, and do it across several SKUs, regulatory requirements and rounds of stakeholder feedback.",
    solution: "I developed the packaging concept and visual direction, then carried it through rollout and production with clear variant communication across every SKU.",
    result: "A packaging identity that sits comfortably inside the ACE portfolio and still gets picked out first on shelf.",
    stats: [],
    images: [F + "5HyqW0nK2pDyPAXCEEaVGJ7rlg.png", F + "PxrdRVbQaYmQHy2k8QLCKu5JCZ4.png", F + "wOKDqTX0JghsECYbyzl7clL7qRc.png", F + "Ed3NekPlgWpSqzrcFTUUqCsWMtA.png", F + "SFXl20IblLidiLBY6bPzihYqih8.png"]
  },
  {
    slug: "amara-handwash",
    title: "Amara Handwash",
    subtitle: "Packaging redesign",
    brand: "Amara",
    year: "2026",
    category: "Brand Identity & Packaging",
    color: "#E9E4E1",
    featured: true,
    tagline: "Giving an existing range a fresher, more cohesive presence.",
    role: ["Creative direction", "Visual storytelling"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Product packaging", "Cinematic colour", "Atmospheric lighting", "Typography"],
    overview: "The Amara antibacterial handwash range needed a more contemporary look to stand out on shelf while staying recognisably Amara.",
    challenge: "Modernise the whole range without losing the brand recognition loyal buyers rely on.",
    solution: "I led the visual refresh: a sharper hierarchy, a more modern brand expression across every variant, and packs designed to read as one family.",
    result: "A cleaner, more cohesive range with clearer pack-level communication and stronger shelf appeal.",
    stats: [],
    images: [F + "NuPM9z9jvihgHMYUydale5MUw.png", F + "yMv0uFFIcKzUZ0p5I7UJFTl8MA.png", F + "aFDTtAkRfHqIyjXk0yI1MwjwY.png", F + "TXIxdQvOEBUQWshJyZ6T0PIep5E.png", F + "gOo7ML6mfJmbx5PFvoPvM3khX1s.png", F + "opie5wMXXD4TsY51ZDflETrPQ.png"]
  },
  {
    slug: "oud-digital",
    title: "Amara OUD",
    subtitle: "Digital roll-out",
    brand: "Amara",
    year: "2025",
    category: "Campaigns & Creative Direction",
    color: "#6D2038",
    featured: true,
    tagline: "A premium fragrance launch, built to be seen everywhere at once.",
    role: ["Creative direction", "Digital marketing"],
    tools: ["Meta Business Suite", "Meta Ads Manager"],
    elements: ["Digital campaign", "Product launch", "Content design", "Social media"],
    overview: "The digital creative roll-out for Amara OUD Body Lotions: a campaign visual system, launch communication and seasonal promotional assets that carried the product's premium fragrance story across digital platforms.",
    challenge: "Make a body lotion feel like a fragrance launch, and keep that premium feel consistent across every format and placement.",
    solution: "A launch visual system with a clear hierarchy of hero, teaser and always-on assets, planned and optimised against performance data as the campaign ran.",
    result: "Over 2.5 million views and around 60% growth in engagement, reach and campaign performance.",
    stats: [{ value: "2.5M+", label: "views" }, { value: "60%", label: "growth in engagement & reach" }],
    images: [F + "J3mlrvJu7TigO0KwtAhBWzGmGE.png", F + "JJXysjeDC8zlykdVthYSNeLfws.png", F + "9sFSkaltYrG2EUMCkOJovZ2n0GA.png", F + "yOhwtOHZ3DgaQjIXZWvFkGwn2cs.png", F + "nCxdgNDl1rQudmEWFYhQBT529k.png", F + "IvhhH1rKPth5EDykrVWsqP8Ofak.png"]
  },
  {
    slug: "miadi-sheen-spray",
    title: "Miadi Sheen Spray",
    subtitle: "Styling range packaging",
    brand: "Miadi",
    year: "2025",
    category: "Brand Identity & Packaging",
    color: "#D8C5B7",
    featured: true,
    tagline: "Giving a familiar haircare product a stronger visual presence.",
    role: ["Creative direction", "Brand design"],
    tools: ["Illustrator"],
    elements: ["Brand packaging", "Product design", "Visual hierarchy", "Brand identity"],
    overview: "The Sheen Spray needed packaging that felt current in the styling category but still clearly belonged to Miadi.",
    challenge: "Balance category relevance with brand recognition, and give the product enough presence to stand out.",
    solution: "I designed the pack alongside the Miadi Moulding Gel and Firm Hold Styling Gel, so all three share one visual language while staying distinct by function.",
    result: "A more cohesive styling portfolio, and a Sheen Spray with its own presence and a stronger link to the wider Miadi range.",
    stats: [{ value: "3", label: "products, one visual language" }],
    images: [F + "Fw1nWU4mvruZONuovTzic976JP8.png", F + "wXP06UinWSIQLt18ff5E74kdAQ.png", F + "N6OQqO3IuXkf6L1J7wOGAqlVVQY.png", F + "uCD20CEvk82qW6CmGRlA0atLWGo.png", F + "9WKgLTO32vK1aGk3ly67stK6cxg.png", F + "dKWIV6vlVLnYhISUKRw98dLv5k.png"]
  },
  {
    slug: "amara-ghana",
    title: "Amara Ghana",
    subtitle: "Market entry",
    brand: "Amara",
    year: "2026",
    category: "Campaigns & Creative Direction",
    color: "#191719",
    featured: true,
    tagline: "Retail and promotional touchpoints introducing Amara to Ghana.",
    role: ["Creative direction", "Art direction"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["POSM design", "Brand communication", "Retail activation", "Market entry"],
    overview: "Point-of-sale materials and retail communication for Amara's entry into the Ghanaian market.",
    challenge: "Adapt the brand's identity and messaging for a new market so it feels local and relevant, while staying unmistakably Amara.",
    solution: "A localised POSM and retail communication kit across digital and print, built from the core Amara identity.",
    result: "A cohesive brand presence in store that introduces Amara and makes the products easy to find.",
    stats: [],
    images: [F + "5oaBosx73VyXlk0Jaek7X2pPV4.png", F + "IK5WTOBZuSJV7D9MbFnUqiYm2RA.png", F + "KJrGlnUKI21wOmtxxftziIoFkTs.png", F + "VzPcKiaSGf2oRhEXmKuLKAuriAY.png", F + "f2Hz1g7yKPfbqAOf7hsGWnwm1A.png", F + "bM9x6Tj69dSrfcI0GEkRECBMs8.jpg"]
  },
  {
    slug: "amara-champions",
    title: "Amara Champions",
    subtitle: "Programme identity",
    brand: "Amara",
    year: "2026",
    category: "Corporate & Brand Communications",
    color: "#E9E4E1",
    featured: true,
    tagline: "An identity for the people who drive the brand in market.",
    role: ["Creative direction", "Branding"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Brand identity", "Visual systems", "Brand activation", "Merchandise"],
    overview: "A visual identity and creative system for Amara Champions, a people-led movement that recognises and empowers the teams selling the brand in market.",
    challenge: "Build one identity flexible enough for sales tools, POSM, certificates, uniforms, merchandise and events, without it falling apart.",
    solution: "A DNA-inspired logo, geometric motifs and a flexible colour system, extended into sales toolkits, outlet visibility, champion uniforms, certificates and communication assets.",
    result: "A consistent experience for internal and external audiences, and a programme people are proud to wear.",
    stats: [],
    images: [F + "u6CqweAJ3qvSTnXrrS1epopP8.png", F + "kyw8x6CrqFW1udIWqn8rw4sHysI.jpg", F + "cVE78ApLzjGg3eTNQFbW1ZA58A.jpg", F + "k5IvPmomkMMVKy9vwQocfBf3s.jpg", F + "4IJbtwSNgrdRsSRwRKdacreDQ.png", F + "SStwnczExfJgs3ASMZkVZPB9wk.png"]
  },
  {
    slug: "amara-deodorant",
    title: "Amara Deodorant",
    subtitle: "Deodorant & antiperspirant launch",
    brand: "Amara",
    year: "2025",
    category: "Brand Identity & Packaging",
    color: "#D8C5B7",
    featured: true,
    tagline: "From product positioning to a pack that says it in one glance.",
    role: ["Creative development", "Packaging design"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Packaging direction", "Label system across variants", "Product mockups", "Launch communication"],
    overview: "Creative development for the Amara Deodorant & Antiperspirant launch, managed from concept through to commercialisation.",
    challenge: "Translate the product's positioning into packaging direction that works on shelf and in launch communication.",
    solution: "Packaging concepts, mockups and launch materials developed together, so the pack and the campaign tell the same story.",
    result: "",
    stats: [],
    images: [I + "amara-deo-01.webp", I + "amara-deo-02.webp", I + "amara-deo-03.webp", I + "amara-deo-04.webp"]
  },
  {
    slug: "ace-air-freshener",
    title: "ACE Air Freshener",
    subtitle: "Product & packaging design",
    brand: "ACE",
    year: "2025",
    category: "Brand Identity & Packaging",
    color: "#191719",
    featured: true,
    tagline: "Taking ACE into a new corner of the home.",
    role: ["Creative direction", "Product packaging"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Product packaging", "Six-fragrance variant system", "Label hierarchy", "Lifestyle mockups"],
    overview: "Packaging for the ACE Air Freshener range, part of extending the ACE brand across new homecare categories.",
    challenge: "Make each fragrance easy to tell apart while keeping the whole range recognisably ACE.",
    solution: "A variant system built on the ACE identity, with colour and hierarchy doing the work of fragrance communication.",
    result: "",
    stats: [],
    images: [I + "ace-air-01.webp", I + "ace-air-02.webp", I + "ace-air-03.webp"],
    range: [
      { src: I + "ace-air-v1.webp", name: "Citrus Rush" }, { src: I + "ace-air-v2.webp", name: "Amber Bloom" }, { src: I + "ace-air-v3.webp", name: "Berry Whisper" },
      { src: I + "ace-air-v4.webp", name: "Enchanted Forest" }, { src: I + "ace-air-v5.webp", name: "Oud Mystique" }, { src: I + "ace-air-v6.webp", name: "Tropical Allure" }
    ]
  },
  {
    slug: "tuqio-magazine",
    title: "TuQio Magazine",
    subtitle: "Internal communications & publishing",
    brand: "HACO",
    year: "2025",
    category: "Corporate & Brand Communications",
    color: "#6D2038",
    featured: true,
    tagline: "HACO's internal magazine: company news, people and stories, designed to be picked up and read.",
    role: ["Editorial design", "Corporate communication"],
    tools: ["InDesign", "Photoshop"],
    elements: ["Editorial layout", "Internal communication", "Photography direction"],
    overview: "Design of TuQio, HACO's internal magazine and newsletter, alongside other corporate materials including the HACO Catalogue and board presentations.",
    challenge: "Keep a long-form internal publication readable, on-brand and something people actually want to pick up.",
    solution: "A flexible editorial grid and a consistent visual voice that adapts to each issue's stories.",
    result: "",
    stats: [],
    images: [I + "tuqio-01.webp", I + "tuqio-02.webp", I + "tuqio-03.webp"]
  }
];


/* =========================================================
   EXPLORATIONS: freelance work, briefs and design challenges.
   Add a new one by copying a block below. Images live in
   assets/images/explorations/. Each one gets its own page at
   project.html?p=<slug>.
   ========================================================= */
const X = "assets/images/explorations/";
const xs = (name, n) => Array.from({ length: n }, (_, i) => X + name + "-" + String(i + 1).padStart(2, "0") + ".webp");

window.EXPLORATIONS = [
  {
    slug: "blaire",
    title: "BLAIRE",
    subtitle: "Skincare brand concept",
    brand: "BLAIRE",
    year: "2026",
    kind: "Freelance",
    category: "Independent Explorations",
    color: "#6D2038",
    tagline: "Beauty in its softest form: a skincare brand built on softness, luminosity and sensory storytelling.",
    role: ["Brand identity", "Packaging design", "Campaign art direction"],
    tools: ["Illustrator", "Photoshop", "3D visualisation"],
    elements: ["Brand identity", "Luxury skincare packaging", "3D product visuals", "Campaign art direction", "PR box and merch", "Social and launch visuals"],
    overview: "BLAIRE is a modern skincare and beauty brand concept centred on softness, luminosity and elevated sensory storytelling.",
    challenge: "Build a cohesive beauty experience across many touchpoints, where the packaging, the campaign and the launch all feel like the same glow.",
    solution: "A creative direction that sits where skincare, luxury packaging and editorial imagery meet: brand identity, a packaging family, 3D product visuals, campaign art direction, PR boxes, merch and launch content.",
    result: "A brand that feels immersive, refined and emotionally connected to modern beauty culture, where glow, texture, light and form become part of the story.",
    stats: [],
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7460237047987970048/",
    images: xs("blaire", 15)
  },
  {
    slug: "nocaff",
    title: "NOCAFF",
    subtitle: "Canned decaf coffee brand",
    brand: "NOCAFF",
    year: "2026",
    kind: "Design challenge",
    category: "Independent Explorations",
    color: "#191719",
    tagline: "All Coffee. No Chaos. Repositioning decaf from the back-up option to a premium lifestyle product.",
    role: ["Brand strategy", "Brand identity", "Packaging design"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Strategy-led branding", "Can packaging", "Campaign visuals", "Merchandise", "Digital applications"],
    overview: "NOCAFF is a modern canned decaf coffee brand for people who love coffee culture, taste and ritual, but would rather skip the caffeine rush.",
    challenge: "Decaf usually plays second fiddle. The brand had to make it feel like a first choice.",
    solution: "A complete visual system built around one idea, All Coffee. No Chaos., carried across packaging, campaign visuals, merch and digital.",
    result: "A cohesive, commercially relevant identity, and a reminder of why I enjoy designing in the first place. I do challenges like this whenever I hit a creative block.",
    stats: [],
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454541190097485824/",
    images: xs("nocaff", 9)
  },
  {
    slug: "oh-belly",
    title: "Oh Belly",
    subtitle: "Prebiotic soda identity",
    brand: "Oh Belly",
    year: "2026",
    kind: "DesignerBriefs brief",
    category: "Independent Explorations",
    color: "#6D2038",
    tagline: "A soda-first identity that communicates feeling before function.",
    role: ["Brand identity", "Packaging identity"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Brand identity", "Can packaging", "Character", "Colour system"],
    overview: "A DesignerBriefs brief for Oh Belly, a prebiotic soda concept.",
    challenge: "Gut-health drinks often lead with the science. This one needed to lead with how it feels.",
    solution: "A soda-first identity built from colour, character and composition, so the can feels approachable and modern before you read a word.",
    result: "",
    stats: [],
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7419631498569633792/",
    images: xs("ohbelly", 7)
  },
  {
    slug: "3d-stills",
    title: "3D Still Shots",
    subtitle: "3D beauty stills",
    brand: "Personal",
    year: "2025",
    kind: "100 Days of Design",
    category: "3D & Creative Production",
    color: "#191719",
    tagline: "Compacts and oils floating in a summer sky: still shots from a 3D beauty project for my 100 Days of Design challenge.",
    role: ["3D design", "Product visualisation"],
    tools: ["Blender", "Photoshop"],
    elements: ["3D modelling", "Lighting", "Rendering"],
    overview: "Still shots from a 3D project I worked on for my #100DaysofDesignChallenge.",
    challenge: "",
    solution: "",
    result: "",
    stats: [],
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7345796572284096512/",
    images: xs("stills", 4)
  },
  {
    slug: "melto-ice-cream",
    title: "Melto",
    subtitle: "Ice cream brand identity",
    brand: "Melto",
    year: "2025",
    kind: "100 Days of Design",
    category: "Independent Explorations",
    color: "#E9E4E1",
    tagline: "A pre-packed ice cream that skips the fluff and leans into flavour.",
    role: ["Brand identity", "Packaging", "Merch design"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Wordmark with a swirl", "Packaging system", "Merch design", "Concept, tone and vibe"],
    overview: "Melto is a fictional pre-packed ice cream brand made for my #100DaysofDesignChallenge. The idea is simple: no weird extras, just great texture and that perfect melty moment.",
    challenge: "Keep it simple. Let the product, the texture and the melt do the talking.",
    solution: "A clean wordmark with a swirl, then a packaging and merch system that feels as smooth and creamy as the ice cream itself.",
    result: "A reminder that sometimes, less is definitely more.",
    stats: [],
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7330588780166381568/",
    images: xs("melto", 8)
  },
  {
    slug: "veloure",
    title: "Veloure",
    subtitle: "3D product visualisation",
    brand: "Veloure",
    year: "2024",
    kind: "3D visualisation",
    category: "3D & Creative Production",
    color: "#191719",
    tagline: "A moisturising cream, rendered in 3D and given a backdrop that matches its personality.",
    role: ["3D product visualisation", "Compositing"],
    tools: ["Blender", "Photoshop"],
    elements: ["3D modelling", "Product render", "Compositing"],
    overview: "Back to some 3D product visualisation: Veloure Cosmetic Moisturising Cream, modelled, lit and rendered in Blender, then composited.",
    challenge: "",
    solution: "",
    result: "",
    stats: [],
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7235186671695085568/",
    images: xs("veloure", 2)
  }
];

/* Portfolio categories, in the order they appear on the Work page */
window.CATEGORIES = [
  "Brand Identity & Packaging",
  "Campaigns & Creative Direction",
  "Digital & Social Media",
  "Corporate & Brand Communications",
  "3D & Creative Production",
  "Independent Explorations"
];

/* Strongest work first (homepage track and Work page) */
(function () {
  const order = ["haco-website", "oud-digital", "ace-air-freshener", "amara-deodorant", "ace-bleach", "amara-handwash", "miadi-sheen-spray", "amara-ghana", "amara-champions", "tuqio-magazine"];
  window.PROJECTS.sort((a, b) => (order.indexOf(a.slug) + 1 || 99) - (order.indexOf(b.slug) + 1 || 99));
})();
