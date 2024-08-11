import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SideBarSheet from "./sidebar-sheet"

const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image alt="FSW Barber" src="/Logo.svg" width={120} height={18} />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SideBarSheet />
          </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
