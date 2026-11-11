export type Profile = {
  name: string;
  headline: string;
  role: string;
  location: string;
  coordinates: string;
  elevation: string;
  about: {
    lead: string;
    paragraphs: string[];
    stats: { value: string; label: string; verified: boolean }[];
  };
  education: {
    school: string;
    program: string;
    period: string;
    status: string;
    location: string;
  }[];
  experience: {
    org: string;
    role: string;
    period: string;
    type: "Work" | "Organization" | "Community" | "Academic";
    summary: string;
    deliverables: string[];
    verified: boolean;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  socials: {
    label: string;
    url: string;
    username: string;
  }[];
};

export const profile: Profile = {
  name: "Syaikhani Giffa Indrawan",
  headline: "Web Developer & Front-end Specialist crafting intentional digital experiences",
  role: "Front-end & Web Developer",
  location: "Bogor, Indonesia",
  coordinates: "6.5971° S, 106.8060° E",
  elevation: "265 m",
  about: {
    lead: "A software engineering undergraduate from Bogor dedicated to building tactile, responsive, and resilient interfaces where design sensitivity meets pragmatic engineering.",
    paragraphs: [
      "Currently in my 6th semester pursuing a Bachelor of Applied Technology in Software Engineering Technology (Teknologi Rekayasa Perangkat Lunak) at Sekolah Vokasi IPB University, building upon a strong technical foundation cultivated at SMK Wikrama Bogor in Software & Game Development (PPLG).",
      "My development approach centers on clarity and craft: whether translating complex spatial data with Deck.gl and WebGIS, designing accessibility maps for wheelchair users in Bogor, or bridging physical microcontrollers with Laravel API gateways for industrial attendance and automated KPI validation.",
      "I prioritize semantic markup, high-framerate fluid choreography, and rock-solid systems that respect both user intent and hardware constraints.",
    ],
    stats: [
      { value: "69", label: "Public Repositories", verified: true },
      { value: "6th", label: "Semester at IPB University", verified: true },
      { value: "7+", label: "Verified Production & Academic Projects", verified: true },
    ],
  },
  education: [
    {
      school: "IPB University (Sekolah Vokasi)",
      program: "Bachelor of Applied Technology (D4) - Software Engineering Technology (TRPL)",
      period: "2022 - Present",
      status: "Semester 6 Undergraduate",
      location: "Bogor, Indonesia",
    },
    {
      school: "SMK Wikrama Bogor",
      program: "Software and Game Development (Pengembangan Perangkat Lunak & Gim - PPLG)",
      period: "2019 - 2022",
      status: "Graduated",
      location: "Bogor, Indonesia",
    },
  ],
  experience: [
    {
      org: "AksesKota Collaborative Project",
      role: "Front-end Developer & UI Contributor",
      period: "2024",
      type: "Work",
      summary:
        "Contributed to front-end redesign and geospatial map visualization to deliver an accessible urban facility directory for Bogor residents with disabilities.",
      deliverables: [
        "Redesigned the accessibility facility inspection map and interactive filter drawers",
        "Streamlined mobile interaction flow for wheelchair and pedestrian field reviews",
      ],
      verified: true,
    },
    {
      org: "Sekolah Vokasi IPB University Community Service",
      role: "Student Volunteer & Tech Mentor",
      period: "2024",
      type: "Community",
      summary:
        "Participated in student community outreach and educational sessions with children at Panti Asuhan PYI Heulang, Kota Bogor.",
      deliverables: [
        "Facilitated technology awareness and digital literacy workshops for youth",
      ],
      verified: true,
    },
    {
      org: "[ISI: dari LinkedIn - Organisasi / Magang]",
      role: "[ISI: Peran / Posisi]",
      period: "2023 - 2024",
      type: "Organization",
      summary:
        "Placeholder: Isi dengan pengalaman organisasi kampus (HIMATETA, BEM, panitia dies natalis) atau magang industri yang tercantum di LinkedIn.",
      deliverables: [
        "[ISI: Deliverable atau pencapaian kunci]",
        "[ISI: Tanggung jawab utama]",
      ],
      verified: false,
    },
  ],
  skills: [
    {
      category: "Front-end & UI",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "HTML5 & Semantic Web", "Deck.gl", "Mapbox GL"],
    },
    {
      category: "Back-end & Systems",
      items: ["Laravel 10", "PHP 8.1+", "MySQL", "REST API Design", "Spring Boot", "Laravel Sanctum"],
    },
    {
      category: "Mobile & Hardware",
      items: ["Android SDK (Java)", "ESP8266 NodeMCU", "MFRC522 RFID", "I2C Peripherals", "Retrofit 2"],
    },
    {
      category: "Engineering Tools",
      items: ["Git & GitHub", "Vercel", "Postman", "Linux/Bash", "VS Code", "Composer", "npm"],
    },
  ],
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/GiffaIndr",
      username: "GiffaIndr",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/syaikhanigiffa/",
      username: "syaikhanigiffa",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/giffaa_indr",
      username: "@giffaa_indr",
    },
  ],
};
