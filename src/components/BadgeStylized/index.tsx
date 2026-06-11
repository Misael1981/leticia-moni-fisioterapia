const BadgeStylized = ({ content }: { content: string }) => {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-sm">
      {content}
    </span>
  )
}

export default BadgeStylized
