import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.webp";

export function Logo() {
  return (
    <Link
      href="/"
      className="block transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
    >
      <Image
        src={logo}
        alt="Logo"
        width={128}
        height={128}
        className="w-32 h-auto object-contain drop-shadow-md hover:drop-shadow-lg transition-shadow"
        priority
      />
    </Link>
  )
}

