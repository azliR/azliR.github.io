import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function SelectedWorkSection() {
  const featuredProject = projects.find((p) => p.isFeatured);
  const regularProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section id="work" className="py-24 lg:py-28 border-t border-border">
      <Container>
        <AnimatedSection>
          <SectionHeading
            kicker="Selected Work"
            title="A showcase of production systems, platforms, and products built for real users."
          />
        </AnimatedSection>

        <div className="flex flex-col gap-6 w-full">
          {featuredProject && (
            <AnimatedSection delay={0.1}>
              <ProjectCard
                title={featuredProject.title}
                description={featuredProject.description}
                tags={featuredProject.tags}
                href={featuredProject.href}
                isFeatured={true}
                builtItems={featuredProject.builtItems}
                impact={featuredProject.impact}
                ctaText={featuredProject.ctaText}
              />
            </AnimatedSection>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {regularProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.2 + index * 0.08}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  href={project.href}
                  isFeatured={false}
                  ctaText={project.ctaText}
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
