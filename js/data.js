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
    { title: "Packaging design", text: "Labels, pack families, mockups and prototypes that hold their own on a crowded shelf, built to pass regulatory checks and go straight to print." },
    { title: "Brand & campaigns", text: "Campaign visual systems, launch kits and seasonal promos that turn a business goal into something people notice, from concept to rollout." },
    { title: "Digital & social", text: "Content planning, community management and performance tracking across Meta, Google Analytics and Search Console, so the work keeps getting better." },
    { title: "Identity systems", text: "Logos, guidelines and flexible visual systems that stay consistent across packaging, print, trade, merch and events." },
    { title: "Corporate communication", text: "Catalogues, newsletters, board decks and internal campaigns that make big companies sound like one team." }
  ],

  experience: [
    { years: "2020 – now", title: "Brand & Communications Designer", place: "HACO Industries Kenya", text: "Brand, packaging, campaigns and digital for Amara, Miadi, SoSoft, ACE, Ashanti-Q and the HACO corporate brand." },
    { years: "2018 – 2019", title: "Graphic Design Intern", place: "HACO Industries Kenya", text: "Social content, print layouts, image editing and file prep for the brand and marketing teams." },
    { years: "2016 – 2019", title: "Graphic design training", place: "Nairobits School of Digital Design", text: "Certificate and then Diploma in Graphic Design, plus a certificate in internet research." }
  ],

  education: [
    { title: "Diploma in Digital Marketing", place: "Zetech University", when: "2026 – present" },
    { title: "Certificate in Digital Marketing", place: "Zetech University", when: "2025" },
    { title: "Digital Marketing Masterclass", place: "Strathmore Business School", when: "2025" },
    { title: "Diploma in Graphic Design", place: "Nairobits", when: "2018 – 2019" },
    { title: "Fundamentals of Digital Marketing", place: "Google", when: "Certified" },
    { title: "Meta Blueprint", place: "Meta", when: "Certified" }
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

window.PROJECTS = [
  {
    slug: "ace-bleach",
    title: "ACE Bleach",
    subtitle: "Product packaging",
    brand: "ACE",
    year: "2025",
    category: "Packaging",
    color: "#0F3D3A",
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
    category: "Packaging",
    color: "#F5DABF",
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
    category: "Campaign",
    color: "#6C151E",
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
    category: "Packaging",
    color: "#E9C2A0",
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
    category: "Market entry",
    color: "#0F3D3A",
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
    category: "Identity",
    color: "#F5DABF",
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
    subtitle: "Product launch packaging",
    brand: "Amara",
    year: "2025",
    category: "Packaging",
    color: "#E9C2A0",
    featured: false,
    tagline: "From product positioning to a pack that says it in one glance.",
    role: ["Creative development", "Packaging design"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Packaging direction", "Launch communication", "Product mockups"],
    overview: "Creative development for the Amara Deodorant & Antiperspirant launch, managed from concept through to commercialisation.",
    challenge: "Translate the product's positioning into packaging direction that works on shelf and in launch communication.",
    solution: "Packaging concepts, mockups and launch materials developed together, so the pack and the campaign tell the same story.",
    result: "",
    stats: [],
    images: []
  },
  {
    slug: "ace-air-freshener",
    title: "ACE Air Freshener",
    subtitle: "Product packaging",
    brand: "ACE",
    year: "2025",
    category: "Packaging",
    color: "#0F3D3A",
    featured: false,
    tagline: "Taking ACE into a new corner of the home.",
    role: ["Creative direction", "Product packaging"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Product packaging", "Variant system", "Brand identity"],
    overview: "Packaging for the ACE Air Freshener range, part of extending the ACE brand across new homecare categories.",
    challenge: "Make each fragrance easy to tell apart while keeping the whole range recognisably ACE.",
    solution: "A variant system built on the ACE identity, with colour and hierarchy doing the work of fragrance communication.",
    result: "",
    stats: [],
    images: []
  },
  {
    slug: "tuqio-magazine",
    title: "TuQio Magazine",
    subtitle: "Editorial design",
    brand: "HACO",
    year: "2025",
    category: "Editorial",
    color: "#6C151E",
    featured: false,
    tagline: "The internal newsletter that helps a big company feel like one team.",
    role: ["Editorial design", "Corporate communication"],
    tools: ["InDesign", "Photoshop"],
    elements: ["Editorial layout", "Internal communication", "Photography direction"],
    overview: "Design of TuQio, HACO's internal magazine and newsletter, alongside other corporate materials including the HACO Catalogue and board presentations.",
    challenge: "Keep a long-form internal publication readable, on-brand and something people actually want to pick up.",
    solution: "A flexible editorial grid and a consistent visual voice that adapts to each issue's stories.",
    result: "",
    stats: [],
    images: []
  },
  {
    slug: "melto-ice-cream",
    title: "Melto Ice Cream",
    subtitle: "Brand identity",
    brand: "Melto",
    year: "2026",
    category: "Identity",
    color: "#F5DABF",
    featured: false,
    tagline: "A brand identity for an ice cream that wants to be noticed.",
    role: ["Brand identity", "Packaging"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Logo design", "Colour system", "Packaging"],
    overview: "A brand identity for Melto Ice Cream: logo, colour system and packaging. (Add your full case study text here.)",
    challenge: "",
    solution: "",
    result: "",
    stats: [],
    images: []
  }
];
