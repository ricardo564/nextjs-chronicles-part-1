"use client";

import Link from "next/link";
import { MenuItem } from "@/types/menuItem";
import { useState } from "react";
import Image from "next/image";
import menuIcon from "@/assets/svg/menu-icon.svg";
import { Logo } from "./Logo";
import { blockScroll } from "@/utils/handleWithBlockScroll";
import { getUniqueId } from "@/utils/getUniqueId";

interface MobileMenuProps {
  menuItems: MenuItem[];
  className?: string;
}

export function MobileMenu({ menuItems, className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);

    blockScroll(isOpen);
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <button
        className="flex items-center justify-between w-full"
        onClick={handleToggleMenu}
      >
        <Image src={menuIcon} alt="Menu" width={24} height={24} />
      </button>

      <div
        className={`flex-w-full absolute inset-y-0 left-0 w-full bg-primary/90 backdrop-blur-sm min-h-screen border-r border-white/20 shadow-sm z-[6] max-w-xs -top-4 p-2 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between w-full">
          <Logo />

          <button
            className="flex items-center justify-center mr-4 mt-1 hover:bg-white/10 hover:text-red-500 rounded-full p-2"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeDasharray="12"
                strokeDashoffset="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
              >
                <animate
                  fill="freeze"
                  attributeName="strokeDashoffset"
                  dur="0.3s"
                  values="12;0"
                />
              </path>
            </svg>
          </button>
        </div>

        <div
          className={`flex flex-col items-center space-y-4 min-w-[17rem] pt-8 -mt-[5rem]`}
        >
          <ul className="flex flex-col items-center w-full mt-24">
            {menuItems.map((item, index) => (
              <li key={`${item.label}-${index}-mobile-menu-${getUniqueId()}`}>
                <Link
                  href={item.to}
                  aria-label={item.ariaLabel}
                  className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:underline w-full text-center pb-2"
                  onClick={handleToggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className={` min-w-screen min-h-screen bg-black/10 backdrop-blur-xs z-[5] -top-4 ${
          isOpen ? "absolute inset-0" : "hidden"
        } transition-transform duration-300`}
        onClick={handleToggleMenu}
      ></button>
    </div>
  );
}
