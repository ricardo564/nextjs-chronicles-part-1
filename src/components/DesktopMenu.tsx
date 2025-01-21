import Link from "next/link";
import { getUniqueId } from "@/utils/getUniqueId";
import { menuItems } from "@/static/menuItems";
import { useTranslation } from "@/hooks/useTranslation";

interface DesktopMenuProps {
  className?: string;
}

export function DesktopMenu({ className }: DesktopMenuProps) {
  const { t } = useTranslation();

  return (
    <ul className={`hidden lg:flex items-center space-x-8 ${className}`}>
      {menuItems.map((menuItem, index) => (
        <li key={`${menuItem.menuItemKey}-${index}-desktop-menu-${getUniqueId()}`}>
          <Link
            href={menuItem.to}
            aria-label={menuItem.ariaLabel}
            className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            {t(menuItem.menuItemKey)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

