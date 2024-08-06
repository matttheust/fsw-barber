import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"



const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* banner */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
        <p>Segunda feira, 5 de agosto</p>
     
      {/* BUSCA */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative w-full h-[150px] mt-6">
          <Image src="/banner-01.png" fill className="rounded-xl object-cover"
            alt="Agende nos melhores com FSW Barber" />  
        </div>     
        
        {/* AGENDAMENTO */}

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 p-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex itens-center gap-2">
                <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                </Avatar>
                <p className="text-sm">
                  Barbearia FSW
                </p>
              </div>
            </div>

            {/* DIREITA */}

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home