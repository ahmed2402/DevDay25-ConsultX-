import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const currentPath = window.location.pathname;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add Web3Forms access key
    formData.append("access_key", "816beb61-89ea-4f64-9677-8b00703ab985");

    try {
      toast({
        title: "Sending...",
        description: "Your message is being sent.",
        duration: 2000,
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you! I'll respond within 24 hours.",
          duration: 5000,
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="bg-consultant-navy py-24 text-white">
      <div className="section-container">
        <h2 className="section-title text-white text-center">Contact Me</h2>
        <p className="section-subtitle text-white/80 text-center mx-auto">
          Ready to transform your business? Let's start a conversation about
          your specific challenges and goals.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-2">
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Discuss Your Business Needs
              </h3>
              <p className="text-white/80 mb-8">
                I'm available for consulting engagements, speaking
                opportunities, and strategic partnerships. Feel free to reach
                out to discuss how we might work together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-consultant-blue/20 p-3 rounded-lg mr-4 text-consultant-blue">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a
                      href="mailto:ayanjawed.m@gmail.com"
                      className="text-white/80 hover:text-white"
                    >
                      ayanjawed.m@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-consultant-blue/20 p-3 rounded-lg mr-4 text-consultant-blue">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-white/80">+92 319 6852725</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-consultant-blue/20 p-3 rounded-lg mr-4 text-consultant-blue">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Office</h4>
                    <p className="text-white/80">
                      123 Business Ave, Suite 500
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="font-medium text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-consultant-blue/20 p-3 rounded-lg text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-3 ${
              currentPath === "/" ? "reveal-on-scroll" : ""
            }`}
          >
            <form
              onSubmit={onSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-consultant-navy"
                  >
                    Your Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="border-consultant-lightGray text-primary focus-visible:ring-consultant-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-consultant-navy"
                  >
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-consultant-lightGray text-primary focus-visible:ring-consultant-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-consultant-navy"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="border-consultant-lightGray text-primary focus-visible:ring-consultant-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-consultant-navy"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="border-consultant-lightGray text-primary focus-visible:ring-consultant-blue"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-consultant-navy"
                >
                  How can I help you?*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business needs and how I might be able to assist..."
                  required
                  className="border-consultant-lightGray text-primary focus-visible:ring-consultant-blue min-h-[150px]"
                />
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="privacy"
                  className="rounded border-consultant-lightGray text-consultant-blue focus:ring-consultant-blue"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-consultant-darkGray"
                >
                  I agree to the{" "}
                  <a href="#" className="text-consultant-blue hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted regarding my inquiry.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-consultant-blue hover:bg-consultant-navy text-white rounded-md"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
