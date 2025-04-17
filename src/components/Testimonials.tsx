
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechGrowth Inc.",
      company: "TechGrowth Inc.",
      logo: "https://via.placeholder.com/150x50?text=TechGrowth",
      content:
        "Working with Alex was transformative for our business. His strategic insights helped us pivot during a challenging market period and emerge stronger than before. The ROI on our consulting engagement exceeded our expectations by 300%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CFO, Global Finance Group",
      company: "Global Finance",
      logo: "https://via.placeholder.com/150x50?text=GlobalFinance",
      content:
        "I was impressed by Alex's thorough analysis and practical recommendations. We implemented the suggested strategy and saw a 40% improvement in operational efficiency within the first quarter. I highly recommend his services.",
      rating: 5,
    },
    {
      name: "Elizabeth Reyes",
      position: "COO, Retail Solutions",
      company: "Retail Solutions",
      logo: "https://via.placeholder.com/150x50?text=RetailSolutions",
      content:
        "The consulting engagement delivered exceptional value. Alex quickly identified key areas for improvement and provided a clear, actionable roadmap. Six months later, we've increased market share by 15% and reduced overhead by 22%.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-consultant-gray py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Client Testimonials</h2>
        <p className="section-subtitle text-center mx-auto">
          Don't just take my word for it - here's what clients have to say about working with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg reveal-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-consultant-navy">{testimonial.name}</h3>
                    <p className="text-consultant-darkGray text-sm">{testimonial.position}</p>
                  </div>
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className="h-8"
                  />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-consultant-darkGray italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 reveal-on-scroll">
          <h3 className="text-xl font-bold text-center text-consultant-navy mb-8">
            Trusted By Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((index) => (
              <img
                key={index}
                src={`https://via.placeholder.com/150x50?text=Client${index}`}
                alt={`Client ${index} logo`}
                className="h-12 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
