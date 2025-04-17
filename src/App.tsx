
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Add SEO meta tags and schema markup
  useEffect(() => {
    // Update page title and meta description
    document.title = "Alex Parker | Business Strategy Consultant";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Alex Parker is a business strategy consultant specializing in operational optimization, growth strategies, and digital transformation for leading organizations."
      );
    }
    
    // Add schema markup for Person and Service
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": window.location.origin + "#consultant",
          "name": "Alex Parker",
          "jobTitle": "Business Strategy Consultant",
          "description": "Business strategy consultant specializing in growth and optimization",
          "url": window.location.origin,
          "sameAs": [
            "https://linkedin.com/in/alexparker",
            "https://twitter.com/alexparker"
          ],
          "knowsAbout": [
            "Strategic Planning", 
            "Operational Optimization", 
            "Growth Strategy", 
            "Digital Transformation"
          ]
        },
        {
          "@type": "Service",
          "@id": window.location.origin + "#consulting",
          "name": "Business Strategy Consulting",
          "description": "Professional consulting services to optimize operations and drive business growth",
          "provider": {
            "@id": window.location.origin + "#consultant"
          },
          "serviceType": "Business Consulting",
          "areaServed": "Global"
        }
      ]
    });
    
    document.head.appendChild(schemaScript);
    
    return () => {
      if (document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
