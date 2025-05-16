"use client"

import { useState } from "react"
import { Download, FileText, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    // Simulate download delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, you would use a real file URL
    const resumeUrl = "/resume.pdf"

    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "john-doe-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsDownloading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Resume</DialogTitle>
          <DialogDescription>
            Get a copy of my resume in PDF format to learn more about my experience and qualifications.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <div className="grid flex-1 gap-2">
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
              <FileText className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground text-center">john-doe-resume.pdf (1.2MB)</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleDownload} disabled={isDownloading} className="gap-2">
            {isDownloading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Download Resume
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

