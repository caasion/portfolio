import { PROJECTS } from "../_components/projects";
import ProjectCard from "./_components/ProjectCard";

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