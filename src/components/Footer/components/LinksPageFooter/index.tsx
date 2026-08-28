import { linksPage } from "@/constants/navLinks"
import Link from "next/link"

const LinksPageFooter = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold">Links da Página</h4>

      <nav>
        <ul className="space-y-2 text-sm opacity-90">
          {linksPage.map((link) => (
            <li key={link.id} className="hover:bg-blue-custom rounded-md p-1">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default LinksPageFooter
