type Role = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
  accomplishments: string[];
};

type Project = {
  title: string;
  techStack: string[];
  description: string;
  shortDescription: string;
  link: {
    label?: string;
    href: string;
  };
};

export type ResumeData = {
  title: string;
  summary: string;
  work: Role[];
  skills: string[];
  projects: Project[];
};
