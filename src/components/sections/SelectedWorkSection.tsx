import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { useLanguage } from "../layout/LanguageProvider";

export default function SelectedWorkSection() {
  const { t } = useLanguage();
  const featuredProject = projects.find((p) => p.isFeatured);
  const regularProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section id="work" className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <AnimatedSection>
          <SectionHeading kicker={t("workKicker")} title={t("workTitle")} />
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-t border-border w-full">
        {featuredProject && (
          <AnimatedSection className="col-span-1 md:col-span-2">
            <ProjectCard
              title={featuredProject.title}
              description={featuredProject.description}
              tags={featuredProject.tags}
              href={featuredProject.href}
              isFeatured={true}
              builtItems={featuredProject.builtItems}
              impact={featuredProject.impact}
              ctaText={featuredProject.ctaText}
              className="border-0 h-full"
            />
          </AnimatedSection>
        )}

        {regularProjects.map((project, index) => (
          <AnimatedSection key={project.id} delay={0.1 + index * 0.1} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={project.href}
              isFeatured={false}
              ctaText={project.ctaText}
              className="border-0 h-full"
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
