import Link from "next/link";

export default function Menu() {
    return (
        <nav className="mt-2">
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Sobre</Link></li>
              <li><Link href="/impactos">Impactos</Link></li>
              <li><Link href="/calculo">Cálculo</Link></li>
              <li><Link href="/nasa">Nasa</Link></li>
            </ul>
          </nav>
    );
}