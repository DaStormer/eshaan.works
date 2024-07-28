import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGitlab,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiServerless, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const techStack = [
  {
    name: "JavaScript",
    icon: <FaJs size={30} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={30} />,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={30} />,
    color: "#3c873a",
  },
  {
    name: "React",
    icon: <FaReact size={30} />,
    color: "#00d8ff",
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs size={30} />,
  },
  {
    name: "AWS",
    icon: <FaAws size={30} />,
    color: "#ff9900",
  },
  {
    name: "Serverless",
    icon: <SiServerless size={30} />,
    color: "#fd5750",
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={30} />,
    color: "#0064a5",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={30} />,
    color: "#00ED64",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={30} />,
  },
  {
    name: "GitLab",
    icon: <FaGitlab size={30} />,
    color: "#fc6d26",
  },
  {
    name: "Docker",
    icon: <FaDocker size={30} />,
    color: "#0db7ed",
  },
  {
    name: "Linux",
    icon: <FaLinux size={30} />,
  },
  {
    name: "Stripe",
    icon: <FaStripe size={30} />,
    color: "#4379FF",
  },
];

export const projects = [
  {
    name: "StormBeatz",
    blurb: "150K+ communities | 15M+ users",
    desc: "An advanced Discord app with a full-fledged music system. Highly customizable with over 25 configurable settings and custom systems. Features include 25+ audio filters, playlists, lyrics, autoplay, last.fm integration, AI recommendations, dashboard and web player, and so much more.",
    tags: [
      "nodejs",
      "postgres",
      "express",
      "nextjs",
      "api",
      "gitlab",
      "docker",
      "stripe",
    ],
    image:
      "https://stormbeatz.org/_next/image?url=%2Fimages%2Fbot-icon.png&w=96&q=75",
    url: "https://stormbeatz.org",
  },
  {
    name: "HackRU Backend",
    blurb: "1000+ users yearly",
    desc: "Full backend system for HackRU to facilitate authorization, database, registration and user updates, discord integration, and various hackathon event management systems.",
    tags: [
      "nodejs",
      "mongodb",
      "express",
      "serverless",
      "aws lambda",
      "aws s3",
      "aws ses",
      "git",
    ],
    image: "https://avatars.githubusercontent.com/u/668181?s=200&v=4",
    url: "https://hackru.org",
    github: "https://github.com/HackRU/HackRU-Backend",
  },
  {
    name: "HackRU MentorQ",
    blurb: "1000+ users yearly",
    desc: "Discord bot application to facilitate a mentor queue ticketing system, live during hackathons.",
    tags: ["nodejs", "aws", "git"],
    image: "https://avatars.githubusercontent.com/u/668181?s=200&v=4",
    url: "https://hackru.org",
    github: "https://github.com/HackRU/MentorQ-Discord-Bot",
  },
  {
    name: "Guilded.js",
    blurb: "10,000+ downloads",
    desc: "Full API library for Guilded bot development written in TS.",
    tags: ["nodejs", "api", "wrapper", "library"],
    image: "https://avatars.githubusercontent.com/u/87669994?s=200&v=4",
    url: "https://guilded.js.org",
    github: "https://github.com/zaida04/guilded.js",
  },
  {
    name: "Portfolio Website",
    blurb: "You're here!",
    desc: "My personal portfolio website to showcase my skills and projects and share my socials.",
    tags: ["nextjs", "chakra ui", "framer motion"],
    image: "",
    url: "https://eshaan.works",
    github: "https://github.com/DaStormer/eshaan.works",
  },
];

export const titles = [
  "founder",
  "student",
  "software engineer",
  "bot developer",
  "product manager",
  "devops engineer",
  "system administrator",
  "IT consultant",
  "programmer",
  "tech enthusiast",
];
