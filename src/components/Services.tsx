
import React from "react";
import { 
  BarChart4, 
  Users, 
  TrendingUp, 
  FileSpreadsheet,
  Lightbulb,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <BarChart4 className="h-10 w-10 text-consultant-blue mb-4" />,
      title: "Strategic Planning",
      description:
        "Comprehensive business strategy development to align your organization's capabilities with market opportunities.",
      price: "$5,000",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-consultant-blue mb-4" />,
      title: "Growth Consulting",
      description:
        "Data-driven approaches to identify and capitalize on growth opportunities in your market.",
      price: "$4,500",
    },
    {
      icon: <Users className="h-10 w-10 text-consultant-blue mb-4" />,
      title: "Organizational Design",
      description:
        "Optimize your organizational structure to improve efficiency, communication, and performance.",
      price: "$6,000",
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-consultant-blue mb-4" />,
      title: "Financial Analysis",
      description:
        "In-depth analysis of financial performance with actionable recommendations for improvement.",
      price: "$3,500",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-consultant-blue mb-4" />,
      title: "Innovation Workshops",
      description:
        "Facilitated sessions to generate innovative solutions and strategies for your business challenges.",
      price: "$2,500",
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-consultant-blue mb-4" />,
      title: "Executive Coaching",
      description:
        "One-on-one coaching for executives to enhance leadership skills and drive organizational success.",
      price: "$7,500",
    },
  ];

  return (
    <section id="services" className="bg-consultant-gray py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">My Services</h2>
        <p className="section-subtitle text-center mx-auto">
          I offer a comprehensive range of consulting services designed to address your specific business challenges and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-bold text-consultant-navy mb-3">{service.title}</h3>
              <p className="text-consultant-darkGray mb-4 flex-grow">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-consultant-blue">{service.price}</span>
                <Button variant="outline" className="border-consultant-blue text-consultant-blue hover:bg-consultant-blue hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-consultant-darkGray mb-6">
            Looking for a customized solution for your specific business challenge?
          </p>
          <Button className="bg-consultant-navy hover:bg-opacity-90 text-white px-8 py-6 text-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
