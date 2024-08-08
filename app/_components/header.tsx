import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image alt="FSW Barber" src="/Logo.svg" width={120} height={18} />
        </CardContent>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </Card>
    </div>
  )
}

export default Header
