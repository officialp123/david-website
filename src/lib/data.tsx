import { Github, Twitter, Figma, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoWebflow from "/public/images/logos/icon-webflow.svg";
import LogoWordpress from "/public/images/logos/icon-wordpress.svg";

import HelloME from "/public/images/logos/hellomeltd_logo.jpeg";
import TechIt from "/public/images/logos/techit.jpeg";
import Tjtek from "/public/images/logos/tjtek.jpeg";

import ProjectHallowen from "/public/images/hallowen.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectCosmetic from "/public/images/cosmetic-republic.png";
import ProjectCresent from "/public/images/cresent-university.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/officialp123",
  GITHUB_REPO: "https://github.com/officialp123",
  TWITTER: "",
  LINKEDIN: "",
  FIGMA: "",
  FIGMA_FILE: "#",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/officialp123",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/chiagozie-uchenna/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },

  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },

  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Webflow",
    logo: LogoWebflow,
    url: "https://webflow.com/",
  },

  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: TechIt,
    logoAlt: "Techit logo",
    position: "Senior Frontend Developer",
    startDate: new Date(2023, 7),
    endDate: new Date(2023, 10),
    summary: [
      "Ensured high code quality through thorough code reviews and automated testing, resulting in a 30% reduction in bugs and technical debt.",
      "Played a key role in streamlining warehouse workflows, enhancing operational efficiency and reducing processing times by 15%.",
      "Actively contributed to agile team practices, driving continuous improvements and fostering a collaborative team environment.",
    ],
  },
  {
    logo: HelloME,
    darkModeLogo: HelloME,
    logoAlt: "HelloME logo",
    position: "Contract Frontend Developer and Webflow Expert",
    startDate: new Date(2023, 6),
    endDate: new Date(2023, 7),
    summary: [
      "Successfully designed and developed over 20 web projects using Webflow, resulting in high client satisfaction and positive feedback.",
      "Collaborated with clients and cross-functional teams on 15+ projects, ensuring clear understanding of project requirements and seamless translation of design concepts into functional Webflow sites.",
      "Implemented responsive design principles on all projects, resulting in improved user experiences and increased mobile responsiveness, leading to a 30% decrease in bounce rate.",
    ],
  },
  {
    logo: Tjtek,
    darkModeLogo: Tjtek,
    logoAlt: "tjtek logo",
    position: "Senior Web Developer",
    startDate: new Date(2023, 0),
    endDate: new Date(2023, 5),
    summary: [
      "Led the development of 7 web applications using ReactJS and TypeScript stack, resulting in a 98% customer satisfaction rate.",
      "Collaborated with designers and backend developers on 10 projects to deliver seamless user experiences and reduce bounce rates by 18%.",
      "Successfully integrated RESTful APIs and Node.js backend technologies in 10+ projects, enabling seamless data exchange and reducing development time by 20%.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Halloween",
    description:
      "A personal project I developed to showcase a curated selection of Halloween products. The challenge was to create a visually engaging and user-friendly online store that captured the spirit of the season. I used React to build a dynamic and responsive interface ",
    url: "https://inquisitive-jelly-27604d.netlify.app/#",
    previewImage: ProjectHallowen,
    technologies: ["React", "Sass", "HTML", "Javascript"],
  },
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Styled Components",
      "Redux",
    ],
  },

  {
    name: "Cosmetics Republic",
    description:
      "Cosmetics Republic is a platform I built to connect hair care professionals with quality professional products and educational resources. The site features a curated selection of brands like Ladies Republic Hair Care, Bravo Professional Grooming, Salerm Cosmetics, and Incantodidonna, offering a wide range of products to meet the needs of stylists and beauty enthusiasts. The platform also provides opportunities for professional development, helping to foster a strong and connected community within the hair care industry.",
    url: "https://cosmeticsrepublic.com/",
    previewImage: ProjectCosmetic,
    technologies: [
      "React",
      "Typescript",
      "SASS",
      "Redux Toolkit",
      "React Query",
    ],
  },
  {
    name: "Cresent University",
    description:
      "Crescent University is a website I built using a combination of HTML, CSS, JavaScript, and a content management system (CMS). The project involved integrating various data sources, creating custom interactive elements, and optimizing the site for speed and performance. I also implemented a secure authentication system to protect sensitive user data. The result is a robust and dynamic website that effectively represents the university brand and mission.",
    url: "https://crescent-university.edu.ng/",
    previewImage: ProjectCresent,
    technologies: [
      "React",
      "Typescript",
      "SASS",
      "Redux Toolkit",
      "React Query",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Chiagozie and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Chiagozie was extremely easy and pleasant to work with and he truly cares about the project being a success. Chiagozie has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
