import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio of products, research, and technical experiments."
        description="These case studies combine product thinking, technical execution, and communication design. TritonNav is the flagship app concept, while the rest of the work shows how I think across research, data, ML, and portfolio engineering."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
