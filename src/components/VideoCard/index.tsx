"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

type VideoCardProps = {
  videoUrl: string
  open: boolean
  onChange: () => void
  title: string
}

export function VideoCard({ videoUrl, open, onChange, title }: VideoCardProps) {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="bg-blue-custom max-w-[95%] overflow-hidden p-0">
        <div className="relative aspect-video">
          <DialogTitle className="-translate-y-2/4ext-center absolute top-2 left-2/4 -translate-x-2/4 text-white">
            {title}
          </DialogTitle>
          <video src={videoUrl} controls autoPlay className="h-full w-full" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
