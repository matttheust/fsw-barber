import { Avatar, AvatarImage } from "./ui/avatar"
import { HomeIcon, CalendarIcon, LogOutIcon } from "lucide-react"
import { quickSearchOptions } from "../_constants/search"
import { Button } from "./ui/button"
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
        </Avatar>

        <div>
          <p className="font-bold">Felipe Rocha</p>
          <p className="text-xs">felipe@fullstackclub.io</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 border-b border-solid py-5">
        <SheetClose asChild>
          <Link href="/" passHref>
            <Button className="justify-start gap-2" variant="ghost">
              <HomeIcon size={18} />
              Início
            </Button>
          </Link>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-1 border-b border-solid py-5">
        {quickSearchOptions.map(option => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-1 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
