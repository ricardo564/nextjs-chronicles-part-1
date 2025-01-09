"use client";

import Link from "next/link";
import { MenuItem } from "@/types/menuItem";
import { useState } from "react";
import Image from "next/image";
import menuIcon from "@/assets/svg/menu-icon.svg";
import { Logo } from "./Logo";
import { blockScroll } from "@/utils/handleWithBlockScroll";
import { getUniqueId } from "@/utils/getUniqueId";
import Button from "./Button";

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
      <Button
        className="flex items-center justify-between w-full h-16 border-none"
        onClick={handleToggleMenu}
      >
        <Image
          src={menuIcon}
          alt="Menu"
          width={24}
          height={24}
          className="md:w-11 md:h-11 max-w-[44px] max-h-[44px]"
        />
      </Button>

      <div
        className={`flex-w-full absolute inset-y-0 left-0 w-full bg-primary/90 backdrop-blur-sm min-h-screen border-r border-white/20 shadow-sm z-[6] max-w-xs -top-4 p-2 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between w-full">
          <Logo />

          <Button
            className="flex items-center justify-end mr-4 ml-24 mt-1 text-white hover:text-red-500/90 !rounded-full p-2 border-none transition-colors duration-200 hover:bg-transparent"
            onClick={handleToggleMenu}
          >
            <svg
              className="h-5 w-5 ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-dasharray="12"
                stroke-dashoffset="12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="12;0"
                />
              </path>
            </svg>
          </Button>
        </div>

        <div
          className={`flex flex-col items-center space-y-4 min-w-[17rem] pt-8 -mt-[5rem]`}
        >
          <ul className="flex flex-col items-center gap-2 w-full mt-24">
            {menuItems.map((item, index) => (
              <li
                key={`${item.label}-${index}-mobile-menu-${getUniqueId()}`}
                className="w-full"
              >
                <Link
                  href={item.to}
                  aria-label={item.ariaLabel}
                  className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white rounded-md transition-colors duration-200 hover:underline hover:text-white"
                  onClick={handleToggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        className={` min-w-screen min-h-screen bg-black/10 backdrop-blur-xs z-[5] -top-4 ${
          isOpen ? "absolute inset-0" : "hidden"
        } transition-transform duration-300`}
        onClick={handleToggleMenu}
      ></Button>
    </div>
  );
}
