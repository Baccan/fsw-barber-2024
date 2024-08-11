import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"

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

            <SheetContent className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-3 border-b border-solid py-5">
                <Avatar>
                  <AvatarImage
                    src="https://plus.unsplash.com/premium_photo-1723054288056-9064fcc1e2ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar"
                  />
                </Avatar>

                <div>
                  <p className="font-bold">Gustavo Baccan Gomes</p>
                  <p className="text-xs">gustavobaccang@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                  <Button
                    className="justify-start gap-2"
                    variant="ghost"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon size={18} />
                      Início
                    </Link>
                  </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost">
                  <CalendarIcon size={18} />
                  Agendamentos
                </Button>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchOptions.map((option) => (
                  <Button
                    key={option.title}
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    <Image
                      src={option.imageUrl}
                      alt={option.title}
                      width={18}
                      height={18}
                    />
                    {option.title}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <Button variant="ghost" className="justify-start gap-2">
                  <LogOutIcon size={18} />
                  Sair da conta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
