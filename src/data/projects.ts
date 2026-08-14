export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  process: string[];
  tools: string[];
  outcome: string;
  futureImprovements: string[];
  tags: string[];
  year: string;
  role: string;
  featured: boolean;
  links?: ProjectLink[];
};

export const PROJECTS: PortfolioProject[] = [
  {
    slug: "multiclass-softmax-classifier",
    title: "Multiclass Softmax Classifier From Scratch",
    category: "Machine learning fundamentals",
    summary:
      "A NumPy implementation of multiclass Softmax regression that classifies Iris flower species from petal measurements without relying on a prebuilt classifier.",
    problem:
      "The goal was to understand multiclass classification from the inside out by building the training loop, Softmax probabilities, cross-entropy loss, gradients, and evaluation workflow directly rather than treating a model library as a black box.",
    process: [
      "Located the original COGS181 coursework notebook and verified the Iris setup: 150 samples, 3 species, 105 training samples, and 45 held-out test samples.",
      "Cleaned the implementation into a focused Python project using vectorized NumPy operations for logits, Softmax probabilities, loss, gradients, and gradient descent.",
      "Generated portfolio-ready visualizations for the training loss, learned decision regions, and test-set confusion matrix.",
    ],
    tools: ["Python", "NumPy", "Matplotlib", "scikit-learn datasets"],
    outcome:
      "Published a dedicated GitHub repository with a reproducible from-scratch classifier that reaches 100% accuracy on the deterministic 45-sample Iris test split.",
    futureImprovements: [
      "Add a short companion notebook that walks through the math step by step.",
      "Compare the from-scratch implementation against a library baseline for context.",
      "Extend the implementation with regularization and randomized train/test splits.",
    ],
    tags: ["Machine Learning", "NumPy", "Softmax", "Iris Dataset"],
    year: "2026",
    role: "ML implementation and documentation",
    featured: true,
    links: [
      {
        label: "View GitHub",
        href: "https://github.com/dcordovarodriguez/multiclass-softmax-classifier",
        external: true,
      },
    ],
  },
  {
    slug: "tritonnav",
    title: "TritonNav",
    category: "Campus navigation MVP",
    summary:
      "A UCSD wayfinding concept that helps first-years, transfers, and visitors find exact buildings, entrances, and rooms faster than generic map apps.",
    problem:
      "UCSD is physically large, multi-level, and hard to parse for people who are new to campus. Standard maps can get users close, but they often fail at the last mile: the right entrance, lecture hall, or side of the building.",
    process: [
      "Synthesized prototype ideas from Figma, Lovable, Claude, and prior campus observations into one MVP product direction.",
      "Defined the minimum useful data model for campus navigation: buildings, entrances, rooms, and area context.",
      "Designed a route structure that lets the product work both as a polished portfolio project and as a real Next.js app with reusable data-driven pages.",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Vercel"],
    outcome:
      "Built a deployable Next.js product showcase with a searchable building directory and route-generated building pages that are easy to extend over time.",
    futureImprovements: [
      "Add real UCSD map data, floor plans, and accessibility notes.",
      "Introduce walking routes between buildings and lecture halls.",
      "Test the product with first-years, transfers, and campus visitors.",
    ],
    tags: ["Product Design", "UX Strategy", "Wayfinding", "App Router"],
    year: "2026",
    role: "Product designer and frontend builder",
    featured: true,
    links: [
      { label: "Explore TritonNav", href: "/tritonnav" },
      { label: "View GitHub", href: "https://github.com/dcordovarodriguez", external: true },
    ],
  },
  {
    slug: "bci-flappy-bird",
    title: "BCI Flappy Bird EEG Classifier",
    category: "Brain-computer interface",
    summary:
      "A real-time EEG interaction project that classifies blink activity and converts predictions into Flappy Bird jump commands.",
    problem:
      "Most people only see machine learning as abstract math. I wanted to build an interaction where signal processing, feature extraction, and classification directly changed what the user experienced in real time.",
    process: [
      "Collected EEG blink data with OpenBCI and isolated the frequency band most useful for blink detection.",
      "Segmented blink and rest states, then used CSP and log-variance features for signal representation.",
      "Trained an LDA classifier and mapped model predictions to a game mechanic that made the system feel tangible.",
    ],
    tools: ["Python", "OpenBCI", "CSP", "LDA", "scikit-learn", "Signal Processing"],
    outcome:
      "Produced a technical demo that connects neural signal processing, machine learning, and interaction design in a memorable, portfolio-friendly format.",
    futureImprovements: [
      "Improve classification robustness across longer play sessions.",
      "Expand beyond binary blink/rest control into richer interaction vocabulary.",
      "Wrap the pipeline in a cleaner front-end dashboard for demos.",
    ],
    tags: ["BCI", "Machine Learning", "EEG", "Interaction Design"],
    year: "2026",
    role: "Research, signal processing, ML implementation",
    featured: true,
    links: [
      { label: "BCI inspiration repo", href: "https://github.com/mahdibeit/EEG-BasedBCI", external: true },
    ],
  },
  {
    slug: "bic-lab",
    title: "Bilingualism in Context Cognitive Science Lab",
    category: "Research operations",
    summary:
      "Research support work focused on bilingual verbal data, annotation workflows, and collaborative dataset cleanup for cognitive science studies.",
    problem:
      "Research teams often lose time to inconsistent annotations, fragmented spreadsheets, and repeated manual cleanup that weakens reliability across collaborators.",
    process: [
      "Standardized language-tagging workflows across bilingual verbal description data.",
      "Supported collaborative cleanup and debugging across multiple dataset versions.",
      "Focused on improving traceability so downstream analysis was easier for the full research team.",
    ],
    tools: ["Excel", "Data Cleaning", "Research Collaboration", "Annotation Systems"],
    outcome:
      "Strengthened the reliability and usability of research data while building experience in cognition-focused human data workflows.",
    futureImprovements: [
      "Automate portions of the annotation QA workflow.",
      "Create dashboards for tracking annotation consistency over time.",
    ],
    tags: ["Research", "Data Ops", "Cognitive Science"],
    year: "2025",
    role: "Research assistant",
    featured: false,
  },
  {
    slug: "jpmorgan-simulation",
    title: "JPMorgan Chase Analytics Simulation",
    category: "Finance and analytics",
    summary:
      "A project-based simulation centered on structured analysis, business communication, and translating raw financial information into cleaner decision support.",
    problem:
      "Data is only helpful when it becomes clear enough to support decisions. The challenge was to interpret structured business information quickly while communicating it in a concise, decision-ready way.",
    process: [
      "Worked through simulation tasks involving analytical reasoning and communication under business constraints.",
      "Focused on turning rough inputs into organized, presentation-ready findings.",
      "Treated the work as practice for communicating insight, not just producing calculations.",
    ],
    tools: ["Excel", "Business Analysis", "Presentation Framing"],
    outcome:
      "Built stronger habits for turning technical or quantitative work into concise narratives that stakeholders can act on.",
    futureImprovements: [
      "Turn the work into a more visual story with supporting dashboards.",
      "Pair the analytical framing with a cleaner decision memo format.",
    ],
    tags: ["Analytics", "Finance", "Communication"],
    year: "2025",
    role: "Simulation participant",
    featured: false,
  },
  {
    slug: "portfolio-migration",
    title: "Wix to Next.js Portfolio Migration",
    category: "Portfolio engineering",
    summary:
      "A migration of diegocordova.net from a site-builder workflow into a code-based Next.js portfolio that is easier to maintain, extend, and deploy.",
    problem:
      "Wix Studio is fast for launching, but it limits long-term flexibility when I want to iterate on UI, add richer product concepts like TritonNav, and update the site with code tools over time.",
    process: [
      "Defined a scalable route structure that could support both personal portfolio pages and app-style product content.",
      "Built reusable components and data-driven dynamic routes to satisfy class requirements while keeping the codebase maintainable.",
      "Prepared the project for Vercel deployment and ongoing iteration through GitHub.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    outcome:
      "Created a portfolio foundation that works for class submission now and can continue evolving as a real professional site later.",
    futureImprovements: [
      "Add richer case studies, writing, and visual assets from completed work.",
      "Connect the final Vercel deployment to diegocordova.net.",
    ],
    tags: ["Portfolio", "Frontend", "Migration", "Deployment"],
    year: "2026",
    role: "Designer and developer",
    featured: true,
  },
];
