
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Financial Services Optimization",
      client: "Global Bank Corporation",
      description:
        "Transformed operational efficiency resulting in 35% cost reduction and improved customer satisfaction scores by 28%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      categories: ["Financial Services", "Process Optimization"]
    },
    {
      title: "Retail Expansion Strategy",
      client: "Urban Fashion Retailers",
      description:
        "Developed market entry strategy that led to successful expansion into 5 new markets with 22% above-projected first-year revenue.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      categories: ["Retail", "Market Strategy"]
    },
    {
      title: "Healthcare Operations Transformation",
      client: "Midwest Health Network",
      description:
        "Redesigned patient flow process, reducing wait times by 45% and increasing facility capacity by 30% without additional staffing.",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
      categories: ["Healthcare", "Operations"]
    },
  ];

  return (
    <section id="case-studies" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Case Studies</h2>
        <p className="section-subtitle text-center mx-auto">
          Explore how my consulting services have helped organizations overcome challenges and achieve measurable results.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "md:grid-cols-[3fr,2fr]" : "md:grid-cols-[2fr,3fr] md:[grid-template-areas:'image_content']"
              } gap-8 items-center reveal-on-scroll`}
            >
              <div 
                className={`md:${index % 2 === 0 ? "" : "[grid-area:image]"}`}
              >
                <div className="mb-6 md:mb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div 
                className={`md:${index % 2 === 0 ? "" : "[grid-area:content]"}`}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="bg-consultant-gray text-consultant-navy px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-consultant-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-consultant-blue font-medium mb-4">
                  {project.client}
                </p>
                <p className="text-consultant-darkGray mb-6">{project.description}</p>
                <Button
                  variant="outline"
                  className="border-consultant-navy text-consultant-navy hover:bg-consultant-navy hover:text-white group"
                >
                  View Case Study{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-consultant-blue hover:bg-opacity-90 text-white px-6 py-3"
          >
            View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
