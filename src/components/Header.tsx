import { MenuItem } from "@/types/menuItem";
import { DesktopMenu } from "@/components/DesktopMenu";
import { Logo } from "@/components/Logo";
import { SearchShortcut } from "@/blocks/searchShortcut";
import { MobileMenu } from "@/components/mobileMenu";
import { ShoppingCart } from "@/blocks/shoppingCart";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  menuItems: MenuItem[];
}

export function Header({ menuItems }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary/90 backdrop-blur-sm z-50 px-2">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 gap-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <DesktopMenu menuItems={menuItems} />

          <div className="grid grid-cols-4 place-items-center gap-4">
            <LanguageSwitcher />

            <SearchShortcut />

            <ShoppingCart />

            <MobileMenu menuItems={menuItems} className="lg:hidden" />
          </div>
        </div>
      </nav>
    </header>
  )
}

