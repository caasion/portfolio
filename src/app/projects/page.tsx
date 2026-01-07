import ProjectCard, { ProjectCardProps } from "./_components/ProjectCard";

const PROJECTS: ProjectCardProps[] = [
  {
    title: "Project Alpha",
    subtitle: "A Modern Web Application",
    description: "Built with Next.js and TypeScript, this project showcases advanced state management and real-time data synchronization. Features include user authentication, responsive design, and optimized performance.",
    mediaSrc: "/images/projects/project-alpha.png",
    mediaType: "image" as const,
    mediaPosition: "right" as const,
  },
  {
    title: "Project Beta",
    subtitle: "Mobile-First Experience",
    description: "An innovative mobile application that revolutionizes user interaction. Implements gesture controls, smooth animations, and offline-first architecture for seamless user experience.",
    mediaSrc: "/images/projects/project-beta.mp4",
    mediaType: "video" as const,
    mediaPosition: "left" as const,
  },
  // Add more projects...
];

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>

      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.title}
          {...project}
          mediaPosition={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </>
  )
}