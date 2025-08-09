// NAVIGATION ITEM
export const navItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "Skills",
    url: "#skills",
  },
  {
    id: 5,
    title: "Experience",
    url: "#experience",
  },
  {
    id: 6,
    title: "Contact",
    url: "#contact",
  },
];

// HERO ITEM
export const heroItem = {
  id: 1,
  image_url: "/me.png",
  title: "hero",
  name: "Hello, I'm Muhammad Hassan Iqbal",
  designation: "Software Engineer",
  experience: "2 years",
  focus: "React.js ,Next.js & TypeScript",
  contact: {
    title: "Contact me here",
    url: "#contact",
  },
  cv: {
    title: "Download CV",
    url: "https://drive.google.com/file/d/127XPE1WuJLvKdgmwj_6A_UM62MjyXWiv/view?usp=drive_link",
  },
  iconOne: {
    title: "GitHub",
    image_url: "",
    url: "https://github.com/Hassan-awan01",
  },
  iconTwo: {
    title: "Linkedin",
    image_url: "",
    url: "https://www.linkedin.com/in/hassan-awan01",
  },
};

// ABOUT ITEM
export const aboutItem = {
  title: "About Me",
  btnTitle: "Know More About Me",
  url: "https://www.linkedin.com/in/hassan-awan01",
  description:
    "👋 Hey there! I'm Muhammad Hassan Iqbal, a software engineer specializing in MERN and PERN stacks. I work with TypeScript, JavaScript, React, Next.js, Redux, Node.js, Express.js, MongoDB, PostgreSQL, and more. Passionate about creating helpful applications and assisting fellow developers. Let's connect and build impactful software solutions together.",
};

// PROJECTS ITEM
export const projectsItem = {
  title: "My Projects",
  url: "/projects",
  btnTitle: "All Projects",
  projects: [
    {
      id: 1,
      title: "E-Study – Frontend and Backend Development",
      image_url: "/LMS.png",
      description:
        "Built with Next.js, React, Clerk, PostgreSQL, Prisma, Tailwind CSS, and Shadcn/UI. Developed 20+ UI components and implemented 5+ relational models (User, Course, Chapter, etc.). Integrated Mux for secure video upload, streaming, and real-time playback status. Secured platform using JWT-based auth and role-based access via Clerk. Fully responsive and optimized for desktop and mobile users.",
      date: new Date(2025, 5, 1),
      projectLink: "https://e-study-ten.vercel.app/",
      github: "https://github.com/Hassan-awan01/e-study",
      technology: [
        { id: 1, title: "React.js" },
        { id: 2, title: "Next.js" },
        { id: 3, title: "Clerk" },
        { id: 4, title: "PostgreSQL" },
        { id: 5, title: "Prisma" },
        { id: 6, title: "Tailwind CSS" },
        { id: 7, title: "Shadcn/UI" },
        { id: 8, title: "Mux" },
      ],
    },
    {
      id: 2,
      title: "Slack Clone – Frontend and Backend Development",
      image_url: "/Slack.png",
      description:
        "React.js + Next.js App Router project with 15+ components styled using Tailwind CSS and Shadcn/UI. Backend built with Bun runtime and Convex handling 20+ real-time server functions. Implemented Auth.js with JWT sessions and multiple OAuth providers (Google, GitHub). Convex Database with reactive sync across 5+ schema models. Features rich text editing with Quill, Slack-style channels and threads, and a fully responsive layout.",
      date: new Date(2025, 6, 1),
      projectLink: "https://slack-joe7.vercel.app/",
      github: "https://github.com/Hassan-awan01/Slack",
      technology: [
        { id: 1, title: "React.js" },
        { id: 2, title: "Next.js" },
        { id: 3, title: "Auth.js" },
        { id: 4, title: "Bun" },
        { id: 5, title: "Quill" },
        { id: 6, title: "Convex Database" },
        { id: 7, title: "Shadcn/UI" },
        { id: 8, title: "Tailwind CSS" },
      ],
    },
    {
      id: 3,
      title:
        "Audio Classification and Visualization – Frontend and Backend Development",
      image_url: "/Audio CNN.png",
      description:
        "Trained an audio CNN with PyTorch using Mel Spectrograms for accurate sound classification. Built a FastAPI backend and deployed serverless inference via Modal for scalable performance. Developed an interactive frontend with Next.js, React, and Tailwind CSS, integrated with Shadcn/UI for modern styling and smooth UX.",
      date: new Date(2024, 4, 1),
      projectLink: "https://audioclassifier-nu.vercel.app/",
      github: "https://github.com/Hassan-awan01/audioclassifier",
      technology: [
        { id: 1, title: "TypeScript" },
        { id: 2, title: "PyTorch" },
        { id: 3, title: "FastAPI" },
        { id: 4, title: "Next.js" },
        { id: 5, title: "React" },
        { id: 6, title: "Tailwind CSS" },
        { id: 7, title: "Shadcn/UI" },
        { id: 8, title: "Modal" },
      ],
    },
    {
      id: 4,
      title: "Personal Portfolio – Frontend Development",
      image_url: "/portfolio.png",
      description:
        "Built a personal portfolio website using Next.js, React, and Tailwind CSS to showcase my projects, skills, and experience. Integrated EmailJS for a functional contact form, React Icons for rich iconography, and React Toastify for user-friendly notifications. Fully responsive and optimized for performance, accessibility, and SEO to provide a professional online presence.",
      date: new Date(2025, 0, 1),
      projectLink: "https://your-portfolio-live-link.com/",
      github: "https://github.com/Hassan-awan01/your-portfolio-repo",
      technology: [
        { id: 1, title: "Next.js" },
        { id: 2, title: "React" },
        { id: 3, title: "Tailwind CSS" },
        { id: 4, title: "TypeScript" },
        { id: 5, title: "EmailJS" },
        { id: 6, title: "React Icons" },
        { id: 7, title: "React Toastify" },
      ],
    },
    {
      id: 5,
      title: "GreenYasin – Website Development",
      image_url: "/Greenyasin.png",
      description:
        "Developed a modern, responsive website for GreenYasin using Next.js, React, and Tailwind CSS. Implemented a structured navigation system with desktop and mobile menus, integrated Framer Motion for smooth animations, and designed multiple sections following consistent layout and styling. Integrated EmailJS for contact form handling, and built the backend using Convex with Convex Auth for secure authentication. The site is optimized for environmental service presentation, SEO, and cross-device performance.",
      date: new Date(2024, 7, 1),
      projectLink: "https://www.greenyasin.pk/GreenYasin/",
      github: "",
      technology: [
        { id: 1, title: "Next.js" },
        { id: 2, title: "React" },
        { id: 3, title: "Tailwind CSS" },
        { id: 4, title: "Framer Motion" },
        { id: 5, title: "EmailJS" },
        { id: 6, title: "Convex" },
        { id: 7, title: "Convex Auth" },
      ],
    },
    {
      id: 6,
      title: "Neurix Solution – Company Website Development",
      image_url: "/neurixsolution.png",
      description:
        "Designed and developed the official website for Neurix Solution, focusing on automation and AI-driven services for environmental and sustainability-focused companies. Built with Next.js, React, and Tailwind CSS for a modern, responsive interface. Implemented a Node.js + Express.js backend with Cloudinary integration for media management and Nodemailer for secure and efficient contact form handling. The site is fully optimized for performance, SEO, and cross-device compatibility.",
      date: new Date(2024, 6, 1),
      projectLink: "https://neurixsolution.tech/",
      github: "",
      technology: [
        { id: 1, title: "Next.js" },
        { id: 2, title: "React" },
        { id: 3, title: "Tailwind CSS" },
        { id: 4, title: "Node.js" },
        { id: 5, title: "Express.js" },
        { id: 6, title: "Cloudinary" },
        { id: 7, title: "Nodemailer" },
      ],
    },
  ],
};

// SKILLS ITEM
export const skillsItem = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "JavaScript" },
  { id: 4, title: "TypeScript" },
  { id: 21, title: "C" },
  { id: 22, title: "C++" },
  { id: 5, title: "React.js" },
  { id: 6, title: "Next.js" },
  { id: 7, title: "jQuery" },
  { id: 8, title: "Node.js" },
  { id: 9, title: "Express.js" },
  { id: 10, title: "MongoDB" },
  { id: 11, title: "PostgreSQL" },
  { id: 12, title: "SCSS" },
  { id: 13, title: "Bootstrap" },
  { id: 14, title: "Tailwind CSS" },
  { id: 15, title: "Linux" },
  { id: 16, title: "Git" },
  { id: 17, title: "GitHub" },
  { id: 18, title: "Prisma" },
  { id: 19, title: "FastApi" },
  { id: 20, title: "Python" },
  { id: 23, title: "Firebase" },
  { id: 24, title: "Azure" },
  { id: 25, title: "AWS" },
  { id: 26, title: "Docker" },
  { id: 27, title: "REST API" },
  { id: 28, title: "GraphQL" },
  { id: 29, title: "LangChain" },
  { id: 30, title: "LangGraph" },
  { id: 31, title: "WebSockets" },
  { id: 32, title: "Cloudinary" },
  { id: 33, title: "Convex" },
  { id: 34, title: "Chart.js" },
  { id: 35, title: "Inngest" },
];

// EXPERIENCE ITEM
export const experienceItem = [
  {
    id: 1,
    company: "NeurixSolution · Self Employed",
    role: "Co-Founder and Full Stack Developer",
    from: new Date(2025, 3, 1).getFullYear(),
    to: "",
    description:
      "At Neurix Solution, I have been serving as Founder and Lead Developer since 2024. Focusing on automation and AI-driven solutions, I lead the development of innovative tools that streamline business processes for environmental and sustainability-focused companies. Overseeing both technical implementation and strategic direction, I design, build, and deploy scalable web applications, automation workflows, and AI integrations that help clients enhance efficiency and reach their goals. Through my leadership, Neurix Solution has positioned itself as a forward-thinking tech partner in the environmental sector.",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JAVASCRIPT",
      },
      {
        id: 4,
        title: "TYPESCRIPT",
      },
      {
        id: 5,
        title: "REACT.JS",
      },
      {
        id: 6,
        title: "NEXT.JS",
      },
      {
        id: 7,
        title: "JQUERY",
      },
      {
        id: 8,
        title: "NODE.JS",
      },
      {
        id: 9,
        title: "EXPRESS.JS",
      },
      {
        id: 10,
        title: "MONGODB",
      },
      {
        id: 11,
        title: "POSTGRESQL",
      },
      {
        id: 12,
        title: "SCSS",
      },
      {
        id: 13,
        title: "BOOTSTRAP",
      },
      {
        id: 14,
        title: "TAILWIND CSS",
      },
      {
        id: 15,
        title: "LINUX",
      },
      {
        id: 16,
        title: "GIT",
      },
      {
        id: 17,
        title: "GITHUB",
      },
      {
        id: 18,
        title: "PRISMA",
      },
    ],
  },
  {
    id: 2,
    company: "Fiverr & Upwork · Freelance",
    role: "Freelance Web Developer",
    from: new Date(2023, 0, 1).getFullYear(),
    to: "",
    description:
      "As a freelance Web Developer on Fiverr and Upwork, I have been delivering high-quality web solutions to clients worldwide. My work involves creating responsive, user-friendly websites and web applications tailored to diverse business needs. Through effective communication and problem-solving, I ensure client satisfaction while adhering to deadlines and project requirements. Leveraging my technical skills and creative approach, I continue to build a strong reputation in the freelance marketplace.",
    stack: [
      { id: 1, title: "HTML" },
      { id: 2, title: "CSS" },
      { id: 3, title: "JavaScript" },
      { id: 4, title: "React.js" },
      { id: 5, title: "Next.js" },
      { id: 6, title: "Node.js" },
      { id: 7, title: "Express.js" },
      { id: 8, title: "MongoDB" },
      { id: 9, title: "Tailwind CSS" },
      { id: 10, title: "Responsive Web Design" },
    ],
  },
];

// CONTACT ITEM
export const contactItem = {
  title: "Contact Me",
  description:
    "Have questions or want to get in touch?\nFeel free to reach out! I'm always eager to connect and discuss exciting new opportunities.\nYou can also use the contact form below to send me a message. I'll get back to you as soon as possible.\nLooking forward to hearing from you!",
  contact_items: [
    {
      id: 1,
      title: "Email Me",
      url: "mailto:hassanawan7349@gmail.com",
    },
    {
      id: 2,
      title: "Call Me",
      url: "tel:+92-326-6319502",
    },
    {
      id: 3,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/hassan-awan01",
    },
  ],
};
// COPYRIGHT ITEM
export const copyrightItem = {
  name: "Muhammad Hassan Iqbal",
  url: "https://www.linkedin.com/in/hassan-awan01",
};
