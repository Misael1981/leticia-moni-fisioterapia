"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import SheetMenu from "../SheetMenu"

const ButtonSheetMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="lg:hidden">
      <Button className="bg-blue-custom" size="icon-lg" onClick={toggleMenu}>
        <HiMenuAlt3 />
      </Button>
      <SheetMenu open={isOpen} onOpenChange={setIsOpen} />
    </div>
  )
}

export default ButtonSheetMenu
