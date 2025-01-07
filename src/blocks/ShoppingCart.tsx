"use client";

import { useState } from "react";
import Image from "next/image";
import shopIcon from "@/assets/svg/shop-icon.svg";
import { handleWithBlockScroll } from "@/utils/handleWithBlockScroll";

interface ShoppingCartProps {
  className?: string;
  children?: React.ReactNode;
}

export function ShoppingCart({ className, children }: ShoppingCartProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);

    handleWithBlockScroll(isOpen);
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <button
        className="flex items-center justify-between w-full"
        onClick={handleToggleMenu}
      >
        <Image src={shopIcon} className="w-11 h-11 max-w-[44px] max-h-[44px]" alt="Shop icon" />
      </button>

      <div
        className={`flex-w-full absolute inset-y-0 right-0 w-full bg-primary/90 backdrop-blur-sm min-h-screen border-l border-white/20 shadow-sm max-w-xs -top-4 p-2 z-[9999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between w-full text-white border-b border-white/20 pb-4">
          <button className="flex items-center justify-center mr-4 mt-1 text-white hover:bg-white/10 hover:text-gray-50 rounded-full p-2"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path stroke="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>

          <p className="text-2xl font-bold w-full text-center">
            Shopping Cart
          </p>
        </div>

        <div
          className={`flex flex-col items-center space-y-4 min-w-[17rem] pt-8 -mt-[5rem] min-h-full`}
        >
            {children}
        </div>

        <div className="flex items-center justify-center w-full bottom-12 -mt-6">
          <button className="bg-white text-primary hover:text-white px-4 py-2 w-full grid grid-cols-2 gap-2 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
            <span className="font-bold">
              $100.00
            </span>
            <span className="text-md font-bold">
              Checkout
            </span>
          </button>
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
