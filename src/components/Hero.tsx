import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-consultant-navy text-white"
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-[0]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 text-sm text-white">
              Business Strategy Consultant
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Businesses with{" "}
              <span className="text-consultant-blue">Strategic Solutions</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-lg">
              I help businesses optimize operations, drive growth, and navigate
              complex challenges with data-driven strategies and practical
              solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-consultant-blue hover:bg-opacity-90 text-white px-6 py-6 text-lg rounded-md group">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg rounded-md"
              >
                <Download className="mr-2 h-5 w-5" />
                <a href="../../constants/Ayan Mirza.pdf" download>
                  Download
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="consultant-card p-6 ml-auto max-w-md relative z-10">
              <h3 className="text-xl font-bold text-consultant-navy mb-4">
                Proven Results
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-consultant-blue text-xl font-bold mr-2">
                    ✓
                  </span>
                  <span className="text-consultant-darkGray">
                    30% average revenue increase for clients
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-consultant-blue text-xl font-bold mr-2">
                    ✓
                  </span>
                  <span className="text-consultant-darkGray">
                    25+ successful business transformations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-consultant-blue text-xl font-bold mr-2">
                    ✓
                  </span>
                  <span className="text-consultant-darkGray">
                    45% operational efficiency improvements
                  </span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-consultant-lightGray">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/86.jpg"
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/22.jpg"
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                  <span className="ml-4 text-sm text-consultant-darkGray">
                    Trusted by industry leaders
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-64 w-64 bg-consultant-blue/10 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="animate-bounce p-2 bg-white/5 rounded-full border border-white/10"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
