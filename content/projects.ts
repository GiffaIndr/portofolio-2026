export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  category: "Web" | "Mobile" | "IoT" | "Fullstack";
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  status: "live" | "repo-only";
  links: { live?: string; repo: string };
  cover: string;
  gallery: { src: string; alt: string; caption?: string }[];
  featured: boolean;
  accent: "sky" | "meadow" | "butter" | "terracotta";
  architecture?: {
    nodes: { title: string; subtitle: string; tech: string }[];
    flow: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "rfid-absence-system",
    title: "RFID Absence & Task KPI System v2",
    year: "2024 - 2025",
    role: "Fullstack & IoT Engineer",
    category: "IoT",
    tagline: "Smart hardware attendance verification coupled with strict task completion KPI gates.",
    problem:
      "Traditional office attendance systems only track physical clock-in/clock-out timestamps without verifying daily deliverables or output, allowing clock-outs even when critical assignments remain unaddressed.",
    solution:
      "Engineered an integrated IoT and web platform where ESP8266 hardware verifies physical RFID cards, communicates over a secured REST API with Laravel 10, and strictly gates tap-out privileges behind a $\\ge 70\\%$ daily task completion threshold with automated monthly KPI scoring.",
    features: [
      "Hardware tap-in & tap-out with ESP8266 NodeMCU, MFRC522 RFID reader, and 16x2 I2C LCD",
      "Strict tap-out verification gate: staff cannot tap-out unless daily task progress reaches at least 70%",
      "Automated monthly KPI score calculation with dynamic configurable thresholds for HRD managers",
      "Smart task carry-over: incomplete Friday tasks automatically roll over to Monday skipping weekends",
      "Dual authenticated portal (HRD Executive & Employee) with automated Maatwebsite Excel reporting",
    ],
    stack: [
      "Laravel 10",
      "PHP 8.1+",
      "ESP8266 NodeMCU",
      "MFRC522 RFID",
      "MySQL 8",
      "Tailwind CSS",
      "Vite",
      "Spatie Permission",
      "Laravel Sanctum",
    ],
    status: "repo-only",
    links: {
      repo: "https://github.com/GiffaIndr/RFID_absence_system_v2",
    },
    cover: "/projects/rfid-absence-system/cover.webp",
    gallery: [
      {
        src: "/projects/rfid-absence-system/arch-diagram.svg",
        alt: "IoT to Laravel Architecture and Data Flow Diagram",
        caption: "End-to-end IoT sensor to Laravel API telemetry pipeline",
      },
      {
        src: "/projects/rfid-absence-system/circuit-mockup.webp",
        alt: "ESP8266 NodeMCU and RFID MFRC522 Circuit schematic",
        caption: "Hardware wiring and LCD prompt interface",
      },
      {
        src: "/projects/rfid-absence-system/dashboard-mockup.webp",
        alt: "HRD Management Portal and KPI Analysis",
        caption: "Employee attendance and automated KPI scoring dashboard",
      },
    ],
    featured: true,
    accent: "terracotta",
    architecture: {
      nodes: [
        { title: "Physical RFID Card", subtitle: "Mifare 1K UID Tag", tech: "RFID 13.56 MHz" },
        { title: "IoT Station", subtitle: "NodeMCU + RC522 + LCD", tech: "ESP8266 C++" },
        { title: "REST API Gateway", subtitle: "JSON + X-API-KEY Auth", tech: "Laravel 10 Sanctum" },
        { title: "Business Logic", subtitle: "70% Gate + KPI Engine", tech: "PHP 8.1 Services" },
        { title: "Data Storage", subtitle: "Attendances & KPI Matrix", tech: "MySQL 8.0" },
        { title: "Executive Portal", subtitle: "Live Roster & Task Desk", tech: "Tailwind + Vite" },
      ],
      flow: [
        "Employee taps RFID card onto the hardware terminal.",
        "ESP8266 reads UID, flashes status LED, and sends signed HTTP POST to /api/rfid/checkin.",
        "Server validates employee identity, schedule constraints (e.g. 08:30 threshold), and pending tasks.",
        "For tap-out, the system audits task_completions: if progress < 70%, clock-out is denied with buzzer alert.",
        "At month-end, the KPI engine aggregates attendance fidelity and task delivery into exportable matrices.",
      ],
    },
  },
  {
    slug: "akseskota",
    title: "AksesKota",
    year: "2024",
    role: "Front-end Developer & UI Redesign (Team Project)",
    category: "Web",
    tagline: "Interactive accessibility map enabling mobility transparency for public facilities in Bogor.",
    problem:
      "Persons with disabilities, wheelchair users, and senior citizens frequently arrive at public spaces only to encounter insurmountable physical barriers such as steep steps and lack of ramps.",
    solution:
      "Collaborated on AksesKota to overhaul the front-end interface, creating an intuitive geo-spatial explorer that categorizes ramp availability, tactile paving, wheelchair accessibility, and accessible restrooms across Bogor.",
    features: [
      "Interactive map visualizer detailing ramp grades, accessible entrances, and accessible restrooms",
      "Crowdsourced accessibility condition reporting and community verification workflow",
      "Redesigned intuitive 'Jelajahi' (Explore) and 'Cara Kerja' (Methodology) informational tabs",
      "Fully responsive, mobile-first design optimized for on-the-go navigation in Bogor city",
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Leaflet / Mapbox",
      "Express.js",
      "PostgreSQL / PostGIS",
      "Vercel",
    ],
    status: "live",
    links: {
      live: "https://akseskota-web.vercel.app/",
      repo: "https://github.com/aldopsr/AksesKota",
    },
    cover: "/projects/akseskota/cover.webp",
    gallery: [
      {
        src: "/projects/akseskota/desktop-home.webp",
        alt: "AksesKota interactive map interface",
        caption: "Map overview showing accessibility points in Bogor",
      },
      {
        src: "/projects/akseskota/mobile-home.webp",
        alt: "AksesKota mobile responsive view",
        caption: "Mobile drawer interface for exploring facility reviews",
      },
    ],
    featured: true,
    accent: "meadow",
  },
  {
    slug: "railuma",
    title: "Railuma",
    year: "2024",
    role: "Front-end & Integration Engineer",
    category: "Web",
    tagline: "AI-powered Braille reader and workspace translating tactile patterns into natural language.",
    problem:
      "Educators, families, and sighted peers assisting visually impaired students often cannot read embossed Braille notation without specialized slow manual translation.",
    solution:
      "Built a modern web workspace backed by a custom YOLO object detection model (`best.pt`) that recognizes Braille dot cell structures from uploaded camera frames and converts them into validated Indonesian text with KBBI dictionary checking.",
    features: [
      "Automated optical Braille recognition from photo input via computer vision inference",
      "Indonesian linguistic validation with integrated KBBI dictionary reference engine",
      "Dual transcription workspace with editable text output and audio synthesis capability",
      "High-contrast, accessible UI tuned for visually impaired and low-vision accessibility",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Python",
      "YOLO Computer Vision",
      "KBBI Engine",
      "Vercel",
    ],
    status: "live",
    links: {
      live: "https://railuma.vercel.app",
      repo: "https://github.com/GiffaIndr/Railuma",
    },
    cover: "/projects/railuma/cover.webp",
    gallery: [
      {
        src: "/projects/railuma/desktop-home.webp",
        alt: "Railuma Braille workspace homepage",
        caption: "Braille scanner workspace and live transliteration area",
      },
    ],
    featured: true,
    accent: "butter",
  },
  {
    slug: "sadar-edu",
    title: "SADAR-EDU",
    year: "2024",
    role: "Front-end & WebGIS Developer",
    category: "Web",
    tagline: "High-performance WebGIS spatial analytics platform for environmental and educational awareness.",
    problem:
      "Spatial environmental datasets are often locked inside cumbersome desktop GIS software that everyday students and public stakeholders cannot readily visualize or comprehend.",
    solution:
      "Crafted an interactive WebGIS dashboard utilizing Deck.gl and Mapbox GL with React 19, enabling seamless 60fps rendering of multi-layered geographic data, thematic overlays, and educational modules.",
    features: [
      "Interactive 3D geospatial layer visualization rendered via WebGL and Deck.gl",
      "Dynamic data layer toggling: regional boundaries, environmental zones, and school catchment areas",
      "Framer Motion fluid transitions and responsive spatial query sidebars",
      "Modern React 19 and Vite architecture for optimal client-side load performance",
    ],
    stack: [
      "React 19",
      "Deck.gl",
      "Mapbox GL",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Vercel",
    ],
    status: "live",
    links: {
      live: "https://sadar-edu-v1.vercel.app",
      repo: "https://github.com/GiffaIndr/SADAR-EDU-V1",
    },
    cover: "/projects/sadar-edu/cover.webp",
    gallery: [
      {
        src: "/projects/sadar-edu/desktop-home.webp",
        alt: "SADAR-EDU WebGIS platform interface",
        caption: "Deck.gl spatial layers and interactive environmental mapping",
      },
    ],
    featured: true,
    accent: "sky",
  },
  {
    slug: "one-percent-mobile",
    title: "1% Better Mobile",
    year: "2024",
    role: "Android Developer",
    category: "Mobile",
    tagline: "Native Android habit self-improvement app built on incremental daily compound growth.",
    problem:
      "Users struggling to build lasting habits frequently lose momentum without visual streak accountability, peer support, and verifiable progress documentation.",
    solution:
      "Developed a native Android app in Java implementing atomic habit loops, photo proof verification for completed tasks, friend search, social 'pokes', and competitive leaderboards.",
    features: [
      "Daily habit challenge cards with streak tracking and dynamic celebration milestones",
      "Camera photo upload system allowing users to submit verifiable proof for completed tasks",
      "Social accountability hub: friend following, leaderboard rankings, and reminder 'pokes'",
      "Secure Google OAuth sign-in and session persistence with Retrofit REST client",
    ],
    stack: [
      "Android SDK",
      "Java",
      "Retrofit 2",
      "Material Components",
      "Google Auth",
      "RESTful API",
    ],
    status: "repo-only",
    links: {
      repo: "https://github.com/GiffaIndr/one-Percent-mobile-V1",
    },
    cover: "/projects/one-percent-mobile/cover.webp",
    gallery: [
      {
        src: "/projects/one-percent-mobile/mockup.webp",
        alt: "1% Mobile Android app screens",
        caption: "Habit challenges, streaks, and proof upload workflows",
      },
    ],
    featured: false,
    accent: "butter",
  },
  {
    slug: "kac-play",
    title: "KAC Play Management",
    year: "2023 - 2024",
    role: "Fullstack Web Developer",
    category: "Fullstack",
    tagline: "Complete event management, child enrollment, and payment portal for Kids Activity Club.",
    problem:
      "Coordinating weekend children's workshops, tracking mentor assignments, and reconciling manual transfer receipts created significant administrative friction.",
    solution:
      "Architected a comprehensive Laravel web application managing public event catalogs, child registrant rosters, payment verification, and automated mentor assignment scheduling with Excel reports.",
    features: [
      "Public event discovery and registration portal for parents and guardians",
      "Child participant profile directory with emergency contact and allergy logging",
      "Integrated payment verification pipeline with automated invoice and receipt logging",
      "Exportable mentor, member, and payment rosters via Maatwebsite Excel",
    ],
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "Maatwebsite Excel",
    ],
    status: "repo-only",
    links: {
      repo: "https://github.com/GiffaIndr/KAC-PLAY-V1",
    },
    cover: "/projects/kac-play/cover.webp",
    gallery: [],
    featured: false,
    accent: "terracotta",
  },
  {
    slug: "p5-control-system",
    title: "P5 Control System",
    year: "2023",
    role: "Front-end Developer",
    category: "Web",
    tagline: "School project tracking and campus cleanliness monitoring system.",
    problem:
      "Tracking student participation and inspection scores across numerous classrooms in national P5 initiatives was disorganized and lacked accountability.",
    solution:
      "Created a centralized Next.js web application for campus inspectors and educators to log daily cleanliness ratings, review class assignments, and monitor real-time compliance.",
    features: [
      "Classroom sanitation rating desk with multi-metric evaluation criteria",
      "Student project progression overview and milestone submission tracking",
      "Dynamic dashboard with animated status visuals powered by Anime.js",
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Anime.js",
      "Axios",
    ],
    status: "repo-only",
    links: {
      repo: "https://github.com/GiffaIndr/P5-CONTROL-SYSTEM",
    },
    cover: "/projects/p5-control-system/cover.webp",
    gallery: [],
    featured: false,
    accent: "meadow",
  },
];
