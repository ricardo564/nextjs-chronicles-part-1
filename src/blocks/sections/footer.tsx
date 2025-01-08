import React from "react";
import { Logo } from "@/components/Logo";
import { quickLinks, socialLinks } from "@/static/footer";
import { getRandomLinkForRedirection } from "@/utils/getRandomLinkForRedirection";
import { getUniqueId } from "@/utils/getUniqueId";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 w-screen mx-auto">
      <div className="flex flex-col md:flex-row justify-between mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start md:justify-between gap-8 w-full">
          <div className="space-y-4 max-w-[30rem] lg:max-w-[40rem] w-full">
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

          <div className="flex flex-col gap-4 w-full max-w-[25rem] md:ml-auto">
            <div className="md:mx-auto">
              <h3 className="text-xl font-semibold mb-4">Quick Link&apos;s</h3>
              <nav>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={`${link.id}-${index}-footer-quick-link-${getUniqueId()}`}>
                      <a
                        href={getRandomLinkForRedirection()}
                        className="text-gray-300 hover:text-white transition-colors"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-[25rem] md:ml-auto">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive care tips, special offers, and updates about
              new plant arrivals.
            </p>
            <form className="flex gap-2 flex-wrap md:flex-nowrap">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full md:w-auto"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-2 border border-white text-black hover:text-white bg-white rounded-lg hover:bg-white/10 transition-all duration-300 text-center uppercase font-semibold w-full md:w-auto"
              >
                subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto px-4">
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={`${social.id}-${getUniqueId()}`}
              href={getRandomLinkForRedirection()}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label={`Follow us on ${social.label}`}
              rel="noopener noreferrer"
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
    </footer>
  );
};

export default Footer;
