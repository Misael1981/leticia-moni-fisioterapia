type DescriptionCardsProps = {
  children: React.ReactNode
}

const DescriptionCards = ({ children }: DescriptionCardsProps) => {
  return (
    <div className="border-blue-custom bg-cream w-full max-w-5xl flex-1 rounded-lg border-2 p-4">
      {children}
    </div>
  )
}

export default DescriptionCards
