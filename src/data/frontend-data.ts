import { ResumeData } from "../types";

export const frontendData: ResumeData = {
  title: "Frontend Developer",
  summary:
    "As a frontend developer with six years of hands-on experience, I excel in client-side development. Driven by a profound passion for my craft, I remain dedicated to creating scalable and efficient solutions while maintaining clean architecture.",
  work: [
    {
      company: "Turing",
      link: "https://www.turing.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "Apr",
      end: "Nov 2024",
      description:
        "Trained and fine-tuned LLMs to improve frontend code-related task performance.",
      accomplishments: [
        "Trained and fine-tuned LLMs to improve frontend code-related task performance.",
        "Reviewed code and data submitted by other trainers to ensure they met the team's standards.",
        "Assisted in creating/modifying code-related data annotation guidelines that were adhered to by the team.",
      ],
    },
    {
      company: "Heyfood",
      link: "https://heyfood.africa/",
      badges: ["Hybrid"],
      title: "Frontend Developer",
      start: "Jan 2021",
      end: "Dec 2023",
      description:
        "Implemented a vast array of new features including an order assignment system, a notification system, a vendor payout system, several dashboards to mention a few. Led the team, developed deployment strategies for new features, carried-out migration from Mongodb to Postgresql, and many more. Technologies: TypeScript, Javascript, Node.js, Express.js, MongoDB, Postgresql, Redis, Firebase, AWS, React.js/Next.js and multiple integrations with third party APIs.",
      accomplishments: [
        "Cut vendor onboarding time by 50% by building the frontend for an automatic inventory ingestion system.",
        "Significantly improved SEO rankings for a range of food and location keywords.",
        "Developed a dashboard for vendors to manage their online stores.",
        "Developed a real-time monitoring dashboard for live orders.",
        "Built an extensive admin dashboard with role-based authorization to aid operations.",
      ],
    },
    {
      company: "Bluu Africa",
      link: "https://www.linkedin.com/company/bluu-africa/",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "Aug 2019",
      end: "Jan 2021",
      description:
        "Worked in a team of 3 to build a blog and an e-commerce website for the company. Technologies: Python, Django, React.js, Next.js, Javascript, PostgreSQL",
      accomplishments: [
        "Enhanced brand visibility by developing a company blog",
        "Contributed to revenue generation by building and maintaining a scalable e-commerce platform.",
      ],
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Material-UI",
    "Three.js",
    "GSAP",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Socket.io",
    "RabbitMQ",
    "Jest",
    "Docker",
    "AWS",
    "Firebase",
    "Azure",
    "Git",
    "Bitbucket",
    "Jira",
  ],
  projects: [
    {
      title: "Personal website",
      techStack: ["TypeScript", "React", "Next.js", "Three.js", "GSAP"],
      description:
        "My personal website featuring a 3D portfolio. Implemented using Three.js and GSAP.",
      shortDescription:
        "My personal website featuring a 3D portfolio. Implemented using Three.js and GSAP.",
      link: {
        href: "https://www.gopeh.com",
      },
    },
    {
      title: "Codewatch",
      techStack: [
        "TypeScript",
        "React",
        "TailwindCSS",
        "Node.js",
        "Postgresql",
        "Jest",
        "Express.js",
        "Nest.js",
      ],
      description:
        "An open source error logging and monitoring system for Node.js applications. It helps developers track errors and exceptions, making it easier to identify and fix issues.",
      shortDescription:
        "An open source error logging and monitoring system for Node.js applications.",
      link: {
        label: "https://github.com/gopeeey/codewatch",
        href: "https://github.com/gopeeey/codewatch",
      },
    },
    {
      title: "Bufferbus",
      techStack: [
        "AWS S3",
        "Google Cloud Storage",
        "Azure Blob Storage",
        "Firebase",
        "TypeScript",
        "Node.js",
      ],
      description:
        "An npm package that provides a simple interface for uploading files from a node.js application to major cloud storage platforms, including S3, Google Cloud Storage, Azure Blob Storage, Firebase, and Google Drive.",
      shortDescription:
        "An npm package for uploading files to S3, Google Cloud Storage, Azure Blob Storage, Firebase and Google Drive.",
      link: {
        label: "https://www.npmjs.com/package/bufferbus",
        href: "https://www.npmjs.com/package/bufferbus",
      },
    },
    // {
    //   title: "Git",
    //   techStack: ["C++"],
    //   description:
    //     "My C++ implementation of the popular version control system.",
    //   shortDescription:
    //     "My C++ implementation of the popular version control system.",
    //   link: {
    //     label: "https://github.com/gopeeey/git",
    //     href: "https://github.com/gopeeey/git",
    //   },
    // },
    // {
    //   title: "Paychip",
    //   techStack: ["TypeScript", "Node.js", "Postgresql", "Redis", "Jest"],
    //   description:
    //     "A platform for businesses to create and manage wallets for their users. It implements a RESTful API for creating, funding, and withdrawing from wallets while maintaining accurate transaction records, allowing businesses to focus on writing their business logic.",
    //   link: {
    //     href: "https://github.com/gopeeey/paychip",
    //   },
    // },
    // {
    //   title: "S.A.T.G",
    //   techStack: [
    //     "TypeScript",
    //     "JavaScript",
    //     "Socket.io",
    //     "RabbitMQ",
    //     "Mongodb",
    //     "Redis",
    //     "HTML",
    //     "CSS",
    //   ],
    //   description:
    //     "Short for Super Awesome Typing Game. A real-time multiplayer typing game",
    //   shortDescription:
    //     "Short for Super Awesome Typing Game. A real-time multiplayer typing game",
    //   link: {
    //     label: "satg.gopeh.com",
    //     href: "https://satg.gopeh.com/",
    //   },
    // },
    // {
    //   title: "U.O.D",
    //   techStack: ["JavaScript", "Node.js", "HTML", "CSS"],
    //   description:
    //     "Up Or Down. A simple application for monitoring the up or down status of a user's desired sites. It is built entirely in Node.js without third-party libraries (as an added challenge).",
    //   link: {
    //     href: "https://github.com/gopeeey/up_or_down",
    //   },
    // },
    // {
    //   title: "Irrational",
    //   techStack: ["Javascript", "HTML", "CSS"],
    //   description:
    //     "A simple demonstration of simple and complex patterns in rational and irrational numbers.",
    //   link: {
    //     href: "https://irrational.gopeh.com",
    //   },
    // },
  ],
};
