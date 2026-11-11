export type Profile = {
  name: string;
  headline: string;
  role: string;
  location: string;
  coordinates: string;
  elevation: string;
  email: string;
  phone: string;
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
  certifications: {
    title: string;
    issuer: string;
    date: string;
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
  headline: "Software Engineering Undergraduate & Front-end Developer crafting tactile, resilient web systems",
  role: "Front-end & Web Developer",
  location: "Bogor, West Java, Indonesia",
  coordinates: "6.5971° S, 106.8060° E",
  elevation: "265 m",
  email: "giffasyaikhani2005@gmail.com",
  phone: "+62 877-8104-5812",
  about: {
    lead: "Software Engineering Technology undergraduate at IPB University with practical front-end and web development experience using Laravel, Angular, and Next.js.",
    paragraphs: [
      "I'm an undergraduate student at Sekolah Vokasi IPB University in Software Engineering Technology (TRPL), building upon a rigorous vocational foundation in Software & Game Development (PPLG) from SMK Wikrama Bogor.",
      "During my six-month developer internship at PT Hexaon Business Mitrasindo, I engineered front-end modules for internal fraud detection systems using Angular and developed ticketing/CRM web portals with Laravel and MySQL. I bridge complex client-side logic with backend REST APIs and translate design mockups into pixel-precise, responsive interfaces.",
      "From crafting geospatial accessibility directories for wheelchair users in AksesKota to building physical ESP8266 IoT attendance gates with strict automated KPI verification, I strive to make software that is tactile, performant, and purposeful.",
    ],
    stats: [
      { value: "69", label: "Public Repositories", verified: true },
      { value: "6th", label: "Semester at IPB University", verified: true },
      { value: "6 Mo", label: "Industry Internship at PT Hexaon", verified: true },
    ],
  },
  education: [
    {
      school: "IPB University (College of Vocational Studies)",
      program: "Bachelor of Applied Science (D4) - Software Engineering Technology (TRPL)",
      period: "Aug 2024 - Present",
      status: "Semester 6 Undergraduate",
      location: "Bogor, Indonesia",
    },
    {
      school: "SMK Wikrama Bogor",
      program: "Vocational High School Diploma - Software & Game Development (PPLG)",
      period: "2021 - 2024",
      status: "Graduated",
      location: "Bogor, Indonesia",
    },
  ],
  experience: [
    {
      org: "PT Hexaon Business Mitrasindo",
      role: "Front-end Developer Intern",
      period: "Jan 2023 - Jul 2023",
      type: "Work",
      summary:
        "Built internal fraud detection web modules using Angular, HTML, and CSS, and engineered full-stack ticketing & CRM web portals using Laravel and MySQL.",
      deliverables: [
        "Built front-end modules for internal enterprise fraud detection system using Angular, HTML, and CSS",
        "Developed ticketing and CRM web portals utilizing Laravel MVC architecture and MySQL relational databases",
        "Implemented client-side reactive logic with JavaScript and integrated with backend REST APIs",
        "Converted Figma design mockups into responsive, cross-browser web pages",
        "Participated in daily agile standups, task coordination, and technical code reviews with senior developers",
      ],
      verified: true,
    },
    {
      org: "AksesKota Collaborative Initiative",
      role: "Front-end Developer & UI Contributor",
      period: "2024",
      type: "Work",
      summary:
        "Contributed to front-end development and geospatial map visualization to deliver an accessible urban facility directory for Bogor residents with disabilities.",
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
  ],
  certifications: [
    {
      title: "Information Technology Specialist in HTML and CSS",
      issuer: "Certiport (Pearson VUE)",
      date: "Dec 2023",
    },
    {
      title: "Cyber Security Training 2022 Sub-Batch 2",
      issuer: "ADINUSA",
      date: "Oct 2022",
    },
    {
      title: "Industry Training in UI/UX & Mobile Development with Flutter",
      issuer: "SMK Wikrama Bogor",
      date: "2021 - 2024",
    },
  ],
  skills: [
    {
      category: "Front-end & UI",
      items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3"],
    },
    {
      category: "Back-end & Databases",
      items: ["Laravel", "PHP 8.1+", "Spring Boot (Java)", "MySQL", "RESTful APIs", "Blade Templates"],
    },
    {
      category: "Mobile, IoT & Hardware",
      items: ["ESP8266 NodeMCU", "MFRC522 RFID", "Flutter (Dart)", "Android SDK (Java)", "I2C Sensor Interfacing"],
    },
    {
      category: "Developer Tools",
      items: ["Git & GitHub", "Postman", "Figma", "VS Code", "Vercel", "Adobe Photoshop"],
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
      url: "https://www.linkedin.com/in/syaikhanigiffa",
      username: "syaikhanigiffa",
    },
    {
      label: "Email",
      url: "mailto:giffasyaikhani2005@gmail.com",
      username: "giffasyaikhani2005@gmail.com",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/giffaa_indr",
      username: "@giffaa_indr",
    },
  ],
};
