// SERVER COMPONENTS
// Server components are components that are rendered on the server and sent to the client as HTML.
// Its not possible to use interactive features like event handlers, state, or effects in server components.

// To create a client component, you can use the client component API.
// "use client"

// import { useState } from "react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import Image from "next/image"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  // const [] = useState()

  // return <h1 className="bg-red mb-5 text-red-500">Red text</h1>

  // return <Button>Click me</Button>
  const barbershops = await db.barbershop.findMany({})

  console.log(barbershops[0])

  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* TEXTO */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Gustavo</h2>
        <p>Segunda-feira, 05 de Agosto.</p>

        {/* BUSCA */}
        <div className="flex items-center gap-2 space-x-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.svg"
            alt="Agende nos melhores lugares com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="gap2 flex items-center">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
