import Header from "@/components/Header"

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="font-fancy text-3xl font-bold">Letícia Moni</h1>
      </div>
    </div>
  )
}
