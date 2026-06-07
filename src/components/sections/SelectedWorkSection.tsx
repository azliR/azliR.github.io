import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function SelectedWorkSection() {
  const featuredProject = projects.find((p) => p.isFeatured);
  const regularProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section id="work" className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <SectionHeading
          kicker="Selected Work"
          title="A showcase of production systems, platforms, and products built for real users."
        />
      </div>

      <div className="flex flex-col divide-y divide-border border-t border-border bg-card/10">
        {featuredProject && (
          <ProjectCard
            title={featuredProject.title}
            description={featuredProject.description}
            tags={featuredProject.tags}
            href={featuredProject.href}
            isFeatured={true}
            builtItems={featuredProject.builtItems}
            impact={featuredProject.impact}
            ctaText={featuredProject.ctaText}
            className="border-0 bg-transparent"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {regularProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={project.href}
              isFeatured={false}
              ctaText={project.ctaText}
              className="border-0 bg-transparent h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
