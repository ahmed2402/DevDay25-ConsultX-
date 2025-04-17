
import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/mughees-subtain-17aab72ba/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.xom/__ahmvd_", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://web.facebook.com/ahmedraza000123?_rdc=1&_rdr#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/ahm4rfr/", label: "Instagram" },
    { icon: <Mail className="h-5 w-5" />, href: "mugheessubtain@gmail.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-consultant-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold">
                Consult<span className="text-consultant-blue">X</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Expert business consulting services to help your organization overcome challenges, optimize operations, and achieve sustainable growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-gray-700 hover:bg-consultant-blue p-2 rounded-full transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ConsultX. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
