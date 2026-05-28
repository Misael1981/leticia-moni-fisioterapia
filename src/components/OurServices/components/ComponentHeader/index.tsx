import Image from "next/image"

const ComponentHeader = () => {
  return (
    <div className="text-blue-custom space-y-2">
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-blue-custom text-xl font-bold">Nossos Serviços</h2>
      </div>
      <p className="text-sm">
        Atuo na reabilitação de disfunções relacionadas a face, cabeça e pescoço
        com uma abordagem integrativa, individualizada e centrada na causa do
        problema.
      </p>
    </div>
  )
}

export default ComponentHeader
