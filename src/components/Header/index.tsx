import Image from "next/image"
import ButtonSheetMenu from "./components/ButtonSheetMenu"

const Header = () => {
  return (
    <header className="bg-cream flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="relative h-12 w-12">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="font-fancy text-blue-custom text-2xl font-semibold">
          Letícia Moni
        </h1>
      </div>
      <ButtonSheetMenu />
    </header>
  )
}

export default Header
