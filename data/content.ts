export interface PersonalInfo {
  name: string;
  tagline: string;
  github: string;
  linkedin: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
}

export interface Project {
  name: string;
  tech: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export const personal: PersonalInfo = {
  name: "Richard Nguyen",
  tagline: "CS @ McMaster | Backend & AI/ML",
  github: "https://github.com/richnguyenn",
  linkedin: "https://linkedin.com/in/richnguyenn",
};

export const experience: ExperienceEntry[] = [
  {
    company: "Ericsson",
    role: "AI & Automation Scripting Co-op",
    period: "Sept 2025–Present",
    location: "Ottawa, ON",
  },
  {
    company: "McMaster University",
    role: "NLP Research Assistant",
    period: "Sept 2025–Present",
    location: "Remote",
  },
  {
    company: "Bond Brand Loyalty",
    role: "Data Engineer Co-op",
    period: "May–Aug 2025",
    location: "Toronto, ON",
  },
  {
    company: "Weever",
    role: "Software Engineer Co-op",
    period: "May–Aug 2024",
    location: "Hamilton, ON",
  },
];

export const projects: Project[] = [
  {
    name: "Charting Exoplanet Habitability",
    tech: ["Python", "PyTorch", "NumPy", "Scikit-learn", "Pandas"],
  },
  {
    name: "gotchi.ai @ UofTHacks 11",
    tech: ["React.js", "Node.js", "Express.js", "Cohere", "MongoDB"],
  },
];

export const skills: Skills = {
  languages: ["Python", "Rust", "SQL", "JavaScript", "Bash", "C"],
  frameworks: [
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "PySpark",
    "React",
    "Node.js",
    "Express.js",
  ],
  tools: ["Docker", "Snowflake", "Databricks", "PostgreSQL", "Git", "Jira"],
};
