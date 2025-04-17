
import React from "react";

const Skills = () => {
  const businessSkills = [
    { name: "Strategy Development", level: 95 },
    { name: "Financial Analysis", level: 90 },
    { name: "Market Research", level: 85 },
    { name: "Change Management", level: 88 },
    { name: "Risk Assessment", level: 92 },
  ];

  const industrySkills = [
    { name: "Financial Services", level: 90 },
    { name: "Healthcare", level: 85 },
    { name: "Technology", level: 88 },
    { name: "Retail", level: 82 },
    { name: "Manufacturing", level: 75 },
  ];
  
  const softSkills = [
    { name: "Leadership", level: 95 },
    { name: "Communication", level: 94 },
    { name: "Problem Solving", level: 92 },
    { name: "Project Management", level: 88 },
    { name: "Negotiation", level: 86 },
  ];

  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title text-center">My Expertise</h2>
        <p className="section-subtitle text-center mx-auto">
          With extensive experience across multiple disciplines and industries, I bring comprehensive expertise to every client engagement.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="consultant-card p-8 ">
            <h3 className="text-xl font-bold text-consultant-navy mb-6 flex items-center">
              <span className="bg-consultant-blue/10 text-consultant-blue p-2 rounded-lg mr-3">01</span>
              Business Skills
            </h3>

            <div className="space-y-6">
              {businessSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-consultant-navy">{skill.name}</span>
                    <span className="text-consultant-darkGray">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="consultant-card p-8 " style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold text-consultant-navy mb-6 flex items-center">
              <span className="bg-consultant-blue/10 text-consultant-blue p-2 rounded-lg mr-3">02</span>
              Industry Knowledge
            </h3>

            <div className="space-y-6">
              {industrySkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-consultant-navy">{skill.name}</span>
                    <span className="text-consultant-darkGray">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1 + 0.5}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="consultant-card p-8 " style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold text-consultant-navy mb-6 flex items-center">
              <span className="bg-consultant-blue/10 text-consultant-blue p-2 rounded-lg mr-3">03</span>
              Leadership Qualities
            </h3>

            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-consultant-navy">{skill.name}</span>
                    <span className="text-consultant-darkGray">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1 + 1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
