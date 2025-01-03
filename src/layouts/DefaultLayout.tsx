import { Header } from "@/components/Header";
import { menuItems } from "@/static/menuItems";
interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="bg-primary min-h-screen overflow-x-hidden">
      <Header menuItems={menuItems} />
      <main className="max-w-7xl mx-auto bg-red-500">
        {children}
      </main>
    </div>
  )
}
