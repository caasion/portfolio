'use client';

import Link from "next/link";

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
  {
    label: "Passions",
    href: "/passions",
  },
  {
    label: "Digial Garden",
    href: "/notes",
  }
]

export default function NavBar() {

  return (
    <div className="flex justify-between text-4xl">
      <div>
        {/* Logo */}
        <Link href="/">Isaac Ng's BunOS</Link>
      </div>

      <div className="flex gap-2">
        {WEBSITE_SECTIONS.map(section => (
          <Link key={section.href} href={section.href}>{section.label}</Link>
        ))}
      </div>
    </div>
  )
}