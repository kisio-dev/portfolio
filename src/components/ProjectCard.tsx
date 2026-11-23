import { Code2, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card rounded-2xl border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <Code2 size={24} />
        </div>

        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-800">
          {project.status === 'completed'
            ? 'Completado'
            : 'En desarrollo'}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-semibold text-black">
        {project.title}
      </h3>

      <p className="mb-5 min-h-20 text-sm leading-6 text-zinc-800">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-500"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-blue-800"
        >
          <Code2 size={16} />
          Código
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-red-800"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </article>
  )
}