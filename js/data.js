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
  // Google Analytics 4 measurement ID (looks like "G-XXXXXXXXXX"). Leave empty to switch analytics off.
  gaId: "G-6B0PZ4VCL2",
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
    { title: "Brand & Creative Design", text: "Identities and assets that give brands character and make them memorable.", tags: ["Brand identity", "Packaging design", "Campaign visuals", "Art direction", "3D product visuals"] },
    { title: "Digital Marketing", text: "Creative thinking plus digital strategy. More awareness, more engagement.", tags: ["Social media strategy", "Digital campaigns", "Content development", "Meta Ads", "Performance analytics"] },
    { title: "Communications & Storytelling", text: "Messages turned into stories people remember.", tags: ["Brand messaging", "Corporate communications", "Internal campaigns", "Creative storytelling", "Launch communications"] },
    { title: "Content & Visual Production", text: "Visual content from first concept to final frame.", tags: ["Photography", "Videography", "Video editing", "Motion content", "Creative direction"] }
  ],

  experience: [
    { years: "Jan 2020 – present", title: "Brand & Communications Designer", place: "HACO Industries Kenya Ltd, Nairobi",
      text: "Brand, packaging, campaigns and communication for AMARA, MIADI, SO-SOFT, ACE, Ashanti-Q and HACO.",
      points: ["Led the HACO website revamp from ideation to launch execution: 22,000+ visits in its first 30 days", "Digital execution of the AMARA OUD launch: 2.5M+ views", "Packaging design and renovation across homecare, skincare and haircare, including ACE Bleach, the AMARA Handwash revamp and MIADI styling products", "Visual identity systems and brand guidelines for five brands", "Corporate materials: the HACO Catalogue, TuQio newsletters, board presentations and brochures", "Briefing and coordinating external creative and digital agencies"] },
    { years: "Mar 2018 – Dec 2019", title: "Graphic Design Intern", place: "HACO Industries Kenya Ltd, Nairobi",
      text: "Social content, marketing materials, print layouts and file prep.", points: [] }
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
    tagline: "One clear home for a pan-African manufacturer: its story, brands and audiences.",
    role: ["Led the revamp from ideation to launch execution", "Content structure and brand presentation", "Launch"],
    tools: ["Google Analytics", "Search Console", "Photoshop", "Illustrator"],
    elements: ["Information architecture", "Brand portfolio pages", "Corporate storytelling", "Launch"],
    liveUrl: "https://www.haco.africa/",
    overview: "The corporate site for HACO Industries, maker of AMARA, MIADI, SO-SOFT, ACE, Ashanti-Q and HACO Plastics. It tells the group's story, shows the brands by category and gives partners, talent and press their own way in.",
    stats: [{ value: "22,000+", label: "website visits in the first 30 days after launch" }],
    images: [HW + "desktop-home0.webp"],
    caseStudy: {
      background: "HACO sells across East, Central and West Africa. One site serves shoppers, distributors, job seekers and press. The revamp put the corporate story and the brands under one roof.",
      objectives: ["Present HACO as a pan-African manufacturer with a heritage to be proud of", "Make every brand easy to find, grouped the way people shop: skin care, hair care, home care", "Give partners, talent and press a clear, direct route to what they need", "Keep the HACO identity, its black and gold, consistent from the first screen to the footer"],
      approach: ["Start with the audiences. Shape navigation around their questions.", "Lead with stories, not a static banner: heritage, the solar-powered factory, awards, press.", "Group brands by category: any product family in two clicks.", "Keep corporate content in one About section."],
      role: "I led the revamp from idea to launch: structure, content, brand presentation and stakeholders. The web development team built and coded the site.",
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
    tagline: "A new ACE product that still stands out.",
    role: ["Creative direction", "Product packaging"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Product identity", "Label design", "Product mockups", "Brand identity"],
    overview: "ACE moved into bleach. The pack had to say ACE and still own its shelf space.",
    challenge: "Link to the ACE range, stand apart as its own product, across SKUs, regulations and feedback rounds.",
    solution: "I set the concept and visual direction, then took it through production with clear variant cues on every SKU.",
    result: "Sits inside the ACE family. Still gets picked out first.",
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
    tagline: "A fresher, tighter range.",
    role: ["Creative direction", "Visual storytelling"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Product packaging", "Cinematic colour", "Atmospheric lighting", "Typography"],
    overview: "Amara handwash needed a modern look that still read as Amara.",
    challenge: "Modernise the range without losing loyal buyers.",
    solution: "I led the refresh: sharper hierarchy, modern expression, packs that read as one family.",
    result: "Cleaner, more cohesive, stronger on shelf.",
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
    tagline: "A premium fragrance launch, everywhere at once.",
    role: ["Creative direction", "Digital marketing"],
    tools: ["Meta Business Suite", "Meta Ads Manager"],
    elements: ["Digital campaign", "Product launch", "Content design", "Social media"],
    overview: "Digital roll-out for Amara OUD Body Lotions: campaign visuals, launch comms and seasonal promos.",
    challenge: "Make a body lotion feel like a fragrance launch, in every format.",
    solution: "Hero, teaser and always-on assets, optimised on live performance data.",
    result: "2.5M+ views and around 60% growth in engagement and reach.",
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
    tagline: "A familiar styling product, made to stand out.",
    role: ["Creative direction", "Brand design"],
    tools: ["Illustrator"],
    elements: ["Brand packaging", "Product design", "Visual hierarchy", "Brand identity"],
    overview: "Sheen Spray needed packaging that felt current and clearly Miadi.",
    challenge: "Fit the category, keep the brand, win attention.",
    solution: "Designed with the Moulding Gel and Firm Hold Gel: one visual language, distinct by function.",
    result: "A tighter styling range, with Sheen Spray holding its own.",
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
    tagline: "Introducing Amara to Ghana, in store.",
    role: ["Creative direction", "Art direction"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["POSM design", "Brand communication", "Retail activation", "Market entry"],
    overview: "Point-of-sale and retail communication for Amara's Ghana launch.",
    challenge: "Feel local in a new market. Stay unmistakably Amara.",
    solution: "A localised POSM kit for digital and print, built on the core identity.",
    result: "A consistent in-store presence that makes Amara easy to find.",
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
    tagline: "An identity for the people who sell the brand.",
    role: ["Creative direction", "Branding"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Brand identity", "Visual systems", "Brand activation", "Merchandise"],
    overview: "Identity and creative system for Amara Champions, a programme for the teams selling Amara in market.",
    challenge: "One identity for sales tools, POSM, certificates, uniforms, merch and events.",
    solution: "A DNA-inspired logo, geometric motifs and a flexible colour system, rolled out across toolkits, outlets, uniforms and certificates.",
    result: "One consistent experience, and a programme people are proud to wear.",
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
    tagline: "Positioning, said in one glance.",
    role: ["Creative development", "Packaging design"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Packaging direction", "Label system across variants", "Product mockups", "Launch communication"],
    overview: "Creative development for the Amara Deodorant & Antiperspirant launch, concept to commercialisation.",
    challenge: "Turn positioning into a pack that works on shelf and in launch comms.",
    solution: "Concepts, mockups and launch materials built together, so pack and campaign tell one story.",
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
    tagline: "ACE, in a new corner of the home.",
    role: ["Creative direction", "Product packaging"],
    tools: ["Photoshop", "Illustrator"],
    elements: ["Product packaging", "Six-fragrance variant system", "Label hierarchy", "Lifestyle mockups"],
    overview: "Packaging for the ACE Air Freshener range as ACE grows across homecare.",
    challenge: "Every fragrance distinct. Every pack clearly ACE.",
    solution: "A variant system on the ACE identity: colour and hierarchy carry the fragrance.",
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
    tagline: "HACO's internal magazine, made to be read.",
    role: ["Editorial design", "Corporate communication"],
    tools: ["InDesign", "Photoshop"],
    elements: ["Editorial layout", "Internal communication", "Photography direction"],
    overview: "TuQio, HACO's internal magazine, plus the HACO Catalogue and board presentations.",
    challenge: "Make long-form internal reading worth picking up.",
    solution: "A flexible editorial grid and a steady visual voice, issue after issue.",
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
    tagline: "Skincare built on softness, glow and sensory storytelling.",
    role: ["Brand identity", "Packaging design", "Campaign art direction"],
    tools: ["Illustrator", "Photoshop", "3D visualisation"],
    elements: ["Brand identity", "Luxury skincare packaging", "3D product visuals", "Campaign art direction", "PR box and merch", "Social and launch visuals"],
    overview: "BLAIRE: a skincare brand concept centred on softness and luminosity.",
    challenge: "Make packaging, campaign and launch feel like the same glow.",
    solution: "Identity, packaging family, 3D visuals, campaign art direction, PR boxes, merch and launch content.",
    result: "Immersive, refined and right for modern beauty culture.",
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
    tagline: "All Coffee. No Chaos. Decaf as a premium first choice.",
    role: ["Brand strategy", "Brand identity", "Packaging design"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Strategy-led branding", "Can packaging", "Campaign visuals", "Merchandise", "Digital applications"],
    overview: "Canned decaf for people who love coffee culture but skip the caffeine rush.",
    challenge: "Decaf usually plays second fiddle. The brand had to make it feel like a first choice.",
    solution: "One idea, All Coffee. No Chaos., carried across packaging, campaign, merch and digital.",
    result: "A commercially relevant identity. Challenges like this are how I beat creative block.",
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
    tagline: "Feeling first, function second.",
    role: ["Brand identity", "Packaging identity"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Brand identity", "Can packaging", "Character", "Colour system"],
    overview: "A DesignerBriefs brief for Oh Belly, a prebiotic soda concept.",
    challenge: "Gut-health drinks lead with science. This one leads with feeling.",
    solution: "Colour, character and composition make the can feel modern before you read a word.",
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
    tagline: "Compacts and oils floating in a summer sky. 3D stills from #100DaysofDesign.",
    role: ["3D design", "Product visualisation"],
    tools: ["Blender", "Photoshop"],
    elements: ["3D modelling", "Lighting", "Rendering"],
    overview: "3D stills from my #100DaysofDesignChallenge.",
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
    tagline: "Pre-packed ice cream. No fluff, all flavour.",
    role: ["Brand identity", "Packaging", "Merch design"],
    tools: ["Illustrator", "Photoshop"],
    elements: ["Wordmark with a swirl", "Packaging system", "Merch design", "Concept, tone and vibe"],
    overview: "A fictional ice cream brand for #100DaysofDesign. No weird extras, just texture and the melt.",
    challenge: "Keep it simple. Let the melt talk.",
    solution: "A swirl wordmark, plus packaging and merch as smooth as the product.",
    result: "Less really is more.",
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
    tagline: "A moisturising cream, rendered in 3D with a backdrop to match.",
    role: ["3D product visualisation", "Compositing"],
    tools: ["Blender", "Photoshop"],
    elements: ["3D modelling", "Product render", "Compositing"],
    overview: "Veloure moisturising cream: modelled, lit and rendered in Blender, then composited.",
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
