"use client";

import { FC, useEffect, useState } from "react";
import Button from "@/components/Button";

interface ScrollToTopProps {
  className?: string;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? (
    <Button
      className={`fixed bottom-4 right-4 z-50 bg-primary text-white !rounded-full w-16 h-16 ${className}`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path stroke-dasharray="20" stroke-dashoffset="20" d="M12 21l0 -17.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="20;0"
            />
          </path>
          <path
            stroke-dasharray="12"
            stroke-dashoffset="12"
            d="M12 3l7 7M12 3l-7 7"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="12;0"
            />
          </path>
        </g>
      </svg>
    </Button>
  ) : null;
};

export default ScrollToTop;
