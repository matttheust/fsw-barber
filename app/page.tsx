import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"


const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* banner */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
        <p>Segunda feira, 5 de agosto</p>
     
      
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />

          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image src="/banner-01.png" fill className="rounded-xl object-cover"
            alt="Agende nos melhores com FSW Barber" />  
        </div>     
        
      </div>
    </div>
  )
}

export default Home