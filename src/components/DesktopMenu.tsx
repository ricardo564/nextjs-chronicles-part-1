import Link from "next/link";
import { MenuItem } from "@/types/menuItem";
import { getUniqueId } from "@/utils/getUniqueId";

interface DesktopMenuProps {
  menuItems: MenuItem[];
  className?: string;
}

export function DesktopMenu({ menuItems, className }: DesktopMenuProps) {
  return (
    <ul className={`hidden md:flex items-center space-x-8 ${className}`}>
      {menuItems.map((item, index) => (
        <li key={`${item.label}-${index}-desktop-menu`}>
          <Link
            href={item.to}
            aria-label={item.ariaLabel + getUniqueId()}
            className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

