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
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  // const [] = useState()

  // return <h1 className="bg-red mb-5 text-red-500">Red text</h1>

  // return <Button>Click me</Button>
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      // rating: "desc",
      name: "desc",
    },
  })

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

        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={14}
                height={16}
              />
              {option.title}
            </Button>
          ))}
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
        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
