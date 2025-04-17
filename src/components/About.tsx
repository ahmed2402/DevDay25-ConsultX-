import React from "react";
import { BadgeCheck, Award, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-consultant-blue" />,
      title: "MBA, Business Strategy",
      description: "Harvard Business School",
    },
    {
      icon: <Award className="h-8 w-8 text-consultant-blue" />,
      title: "Certified Consultant",
      description: "International Consulting Association",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-consultant-blue" />,
      title: "15+ Years Experience",
      description: "Working with Fortune 500 companies",
    },
  ];

  const currentPath = window.location.pathname;

  return (
    <section id="about" className="bg-white py-24">
      <div
        className={`section-container ${
          currentPath === "/" ? "reveal-on-scroll" : ""
        }`}
      >
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center mx-auto">
          I'm a strategic business consultant with over 15 years of experience
          helping organizations achieve sustainable growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="consultant-card p-2">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop"
                  alt="Professional headshot of Consult X"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5">
                <div className="bg-consultant-blue p-4 rounded-lg shadow-lg text-white">
                  <p className="text-sm font-semibold">Consult X</p>
                  <p className="text-xs text-white/80">
                    Business Strategy Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 ">
            <h3 className="text-2xl font-bold text-consultant-navy mb-6">
              My Approach to Consulting
            </h3>
            <p className="text-consultant-darkGray mb-6">
              I believe in a data-driven, results-oriented approach to business
              consulting. My methodology combines rigorous analysis with
              practical implementation strategies that drive measurable outcomes
              for my clients.
            </p>
            <p className="text-consultant-darkGray mb-8">
              Having worked with organizations across various industries
              including technology, finance, healthcare, and retail, I bring a
              wealth of cross-sector insights that enable innovative
              problem-solving and effective strategy development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {achievements.map((item, index) => (
                <div key={index} className="consultant-card p-6 hover-lift">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-consultant-navy mb-2">
                    {item.title}
                  </h4>
                  <p className="text-consultant-darkGray text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-consultant-lightGray">
              <h4 className="text-xl font-bold text-consultant-navy mb-4">
                Areas of Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-consultant-blue mr-2"></div>
                  <span className="text-consultant-darkGray">
                    Strategic Planning
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-consultant-blue mr-2"></div>
                  <span className="text-consultant-darkGray">
                    Operational Optimization
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-consultant-blue mr-2"></div>
                  <span className="text-consultant-darkGray">
                    Growth Strategy
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-consultant-blue mr-2"></div>
                  <span className="text-consultant-darkGray">
                    Digital Transformation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-consultant-blue mr-2"></div>
                  <span className="text-consultant-darkGray">
                    Market Entry Analysis
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-consultant-blue mr-2"></div>
                  <span className="text-consultant-darkGray">
                    Business Model Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
