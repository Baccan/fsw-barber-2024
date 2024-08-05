// SERVER COMPONENTS
// Server components are components that are rendered on the server and sent to the client as HTML.
// Its not possible to use interactive features like event handlers, state, or effects in server components.

// To create a client component, you can use the client component API.
"use client"

// import { useState } from "react"
import { Button } from "./_components/ui/button"

const Home = () => {
  // const [] = useState()

  // return <h1 className="bg-red mb-5 text-red-500">Red text</h1>

  return <Button>Click me</Button>
}

export default Home
