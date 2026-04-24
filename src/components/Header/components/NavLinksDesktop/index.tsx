"use client"

import { Button } from "@/components/ui/button"
import { sessions } from "@/constants/navLinks"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinksDesktop = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-4">
        {sessions.map((session) => {
          const isActive = pathname === session.href

          return (
            <li key={session.name}>
              <Link href={session.href}>
                <Button variant={isActive ? "default" : "secondary"}>
                  {session.name}
                </Button>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavLinksDesktop
