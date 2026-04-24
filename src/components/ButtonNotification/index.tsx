import { PiPlant } from "react-icons/pi"
import { Button } from "../ui/button"

const ButtonNotification = () => {
  return (
    <div className="hidden lg:block">
      <Button className="text-blue-custom" variant="outline" size="icon-lg">
        <PiPlant className="h-7! w-7!" />
      </Button>
    </div>
  )
}

export default ButtonNotification
