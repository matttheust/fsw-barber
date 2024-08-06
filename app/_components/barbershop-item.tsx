import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGEM */}
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
            alt="{barbershop.name}"
          />
        </div>
              
        {/* TEXTO */}
        <div className="py-3 px-1">
            <h3 className="truncate font-semibold">{barbershop.name}</h3>
            <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
            <Button variant="secondary" className="mt-3 w-full">Reservar</Button>
        </div>
              
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
