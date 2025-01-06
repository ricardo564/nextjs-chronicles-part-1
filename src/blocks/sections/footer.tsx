import React from "react";
import { Logo } from "@/components/Logo";
import { quickLinks, socialLinks } from "@/static/footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo
                imageClassName="w-[12rem]"
              />
            </div>
            <p className="text-gray-300 max-w-md">
              Discover the perfect plants for your space at Planto. We offer a
              carefully curated selection of indoor and outdoor plants, expert
              care guides, and sustainable gardening solutions for plant
              enthusiasts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Link&apos;s</h3>
            <nav>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive care tips, special offers, and updates about
              new plant arrivals.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-transparent border border-gray-600 rounded px-4 py-2 flex-grow"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-white text-dark-green px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={`Follow us on ${social.label}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-300">
            © {new Date().getFullYear()} Planto. All rights reserved. Bringing
            nature indoors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
