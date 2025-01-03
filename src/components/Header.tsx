import { MenuItem } from "@/types/menuItem";
import { DesktopMenu } from "@/components/DesktopMenu";
import { Logo } from "@/components/Logo";

interface HeaderProps {
  menuItems: MenuItem[];
}

export function Header({ menuItems }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary/90 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <DesktopMenu menuItems={menuItems} />

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

