import Link from "next/link";
import { MenuItem } from "@/types/menuItem";

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

export function DesktopMenu({ menuItems }: DesktopMenuProps) {
  return (
    <ul className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <li key={item.label}>
          <Link
            href={item.to}
            aria-label={item.ariaLabel}
            className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

