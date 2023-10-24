"use client"

import { ArrowBigLeftIcon } from "lucide-react"
import { Button } from "./ui/button"

export default function BackButton() {
  return (
    <Button size="icon" onClick={() => {history.back()}}><ArrowBigLeftIcon /></Button>
  )
}
