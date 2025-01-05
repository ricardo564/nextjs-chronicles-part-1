"use client";

import Link from "next/link";
import { MenuItem } from "@/types/menuItem";
import { useState } from "react";
import Image from "next/image";
import menuIcon from "@/assets/svg/menu-icon.svg";

interface MobileMenuProps {
  menuItems: MenuItem[];
}

export function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        className="flex items-center justify-between w-full"
        onClick={handleToggleMenu}
      >
        <Image src={menuIcon} alt="Menu" width={24} height={24} />
      </button>

      <div
        className={`flex-w-full absolute inset-y-0 left-0 w-full bg-primary/90 backdrop-blur-sm min-h-screen border-r border-white shadow-sm z-[6] max-w-xs ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
          <div
            className={`flex flex-col items-center space-y-4 min-w-[17rem] `}
          >
            <ul className="flex flex-col items-center w-full mt-24">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.to}
                    aria-label={item.ariaLabel}
                    className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:underline w-full text-center pb-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
      <button
        className={` min-w-screen min-h-screen bg-black/10 backdrop-blur-xs z-[5] ${
          isOpen ? "absolute inset-0" : "hidden"
        } transition-transform duration-300`}
        onClick={handleToggleMenu}
      ></button>
    </div>
  );
}
