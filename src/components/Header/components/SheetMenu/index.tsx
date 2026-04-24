import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { sessions } from "@/constants/navLinks"
import Link from "next/link"

type SheetMenuProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SheetMenu = ({ open, onOpenChange }: SheetMenuProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-blue-custom font-fancy text-2xl font-semibold">
            Letícia Moni
          </SheetTitle>

          <SheetDescription>
            Navegue para as seções da página usando o menu abaixo.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {sessions.map((session) => (
            <Link
              key={session.name}
              href={session.href}
              className="text-blue-custom border-blue-custom border-b pb-2"
            >
              {session.name}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="border-blue-custom text-blue-custom border bg-transparent">
              Fechar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetMenu
