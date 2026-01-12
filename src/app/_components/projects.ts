import { ProjectCardProps } from "../projects/_components/ProjectCard";

interface Project extends ProjectCardProps {
    featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    subtitle: "A Modern Web Application",
    description: "Built with Next.js and TypeScript, this project showcases advanced state management and real-time data synchronization. Features include user authentication, responsive design, and optimized performance.",
    mediaSrc: "/images/projects/project-alpha.png",
    mediaType: "image" as const,
    mediaPosition: "right" as const,
    featured: true,
  },
  {
    title: "Project Beta",
    subtitle: "Mobile-First Experience",
    description: "An innovative mobile application that revolutionizes user interaction. Implements gesture controls, smooth animations, and offline-first architecture for seamless user experience.",
    mediaSrc: "/images/projects/project-beta.mp4",
    mediaType: "video" as const,
    mediaPosition: "left" as const,
    featured: true,
  },
  // Add more projects...
];