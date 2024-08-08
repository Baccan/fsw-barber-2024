// SERVER COMPONENTS
// Server components are components that are rendered on the server and sent to the client as HTML.
// Its not possible to use interactive features like event handlers, state, or effects in server components.

// To create a client component, you can use the client component API.
"use client"

// import { useState } from "react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  // const [] = useState()

  // return <h1 className="bg-red mb-5 text-red-500">Red text</h1>

  // return <Button>Click me</Button>
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Gustavo</h2>
        <p>Segunda-feira, 05 de Agosto.</p>

        <div className="flex items-center gap-2 space-x-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.svg"
            alt="Agende nos melhores lugares com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
