'use client';

import ThemeToggle from "@/components/ThemeSelector";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { GiRabbit } from "react-icons/gi";

const WEBSITE_SECTIONS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  // {
  //   label: "Passions",
  //   href: "/passions",
  // },
  // {
  //   label: "Digial Garden",
  //   href: "/notes",
  // },
]

export default function NavBar() {

  return (
    <div className="flex justify-between font-display mb-8 md:mb-1">
      <Link href="/" className="flex items-center gap-2 text-3xl" >
        <div className="text-base">Isaac Ng's</div>
        <div className="text-accent flex gap-2">
          <GiRabbit />
          BunOS
        </div>
      </Link>

      <div className="flex gap-4 text-lg items-center">
        {WEBSITE_SECTIONS.map(section => (
          <Link key={section.href} href={section.href}>{section.label}</Link>
        ))}
        <BiSearchAlt />
        <ThemeToggle />
      </div>
    </div>
  )
}