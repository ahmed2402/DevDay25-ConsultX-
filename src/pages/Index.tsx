import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href !== "#") {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Initialize reveal on scroll animation
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;

        if (isVisible) {
          el.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    // Initial check
    setTimeout(handleScrollAnimation, 100);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
