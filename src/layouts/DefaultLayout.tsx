import { Header } from "@/components/Header";
import { menuItems } from "@/static/menuItems";

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="bg-primary min-h-screen overflow-x-hidden grid">
      <Header menuItems={menuItems} />

      <main className="grid max-w-7xl mx-auto pt-16">
        {children}
      </main>

    </div>
  )
}
