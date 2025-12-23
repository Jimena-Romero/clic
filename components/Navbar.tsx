import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="CLIC"
            width={80}
            height={32}
            priority
          />
        </Link>

        {/* LINKS */}
        <div className="flex gap-6 text-sm text-[#110083]">
          <Link
            href="/"
            className="hover:text-[#110083]/70 transition"
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className="hover:text-[#110083]/70 transition"
          >
            Servicios
          </Link>

          <Link
            href="/proyectos"
            className="hover:text-[#110083]/70 transition"
          >
            Proyectos
          </Link>

          <Link
            href="/contacto"
            className="hover:text-[#110083]/70 transition"
          >
            Contacto
          </Link>
        </div>

      </nav>
    </header>
  );
}
