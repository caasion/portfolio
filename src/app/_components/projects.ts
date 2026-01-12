import { ProjectCardProps } from "../projects/_components/ProjectCard";

interface Project extends ProjectCardProps {
    featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Holos",
    subtitle: "Plan and track across your commitments and week",
    description: "A weekly planning tool built with Svelte, TypeScript, and Esbuild, integrated into Obsidian. Features dynamic templates powered by Svelte 5 reactivity, Markdown-enabled cells via Milkdown, and custom data structures for managing tasks and daily actions. Designed for planning and tracking your progress.",
    tags: [
        {
            label: "Typescript",
            color: "blue"
        },
        {
            label: "Svelte",
            color: "red"
        },
        {
            label: "Esbuild",
            color: "yellow"
        },
        {
            label: "Obsidian API",
            color: "accent"
        },
    ],
    mediaSrc: "/images/projects/holos.png",
    mediaType: "image" as const,
    mediaPosition: "right" as const,
    featured: true,
  },
  {
    title: "AI Todo List",
    subtitle: "Plan and prioritize smarter",
    description: "An AI-assisted to-do list built with React, TypeScript, and Vite. Uses Firebase to embed a ChatGPT-like assistant that generates tasks and suggests plans based on energy levels, with core task management features and experiments in prompt engineering.",
    tags: [
        {
            label: "Typescript",
            color: "blue"
        },
        {
            label: "React",
            color: "red"
        },
        {
            label: "Vite",
            color: "accent"
        },
    ],
    mediaSrc: "/images/projects/ai-todo-list.mp4",
    mediaType: "video" as const,
    mediaPosition: "left" as const,
    featured: true,
  },
  // Add more projects...
];