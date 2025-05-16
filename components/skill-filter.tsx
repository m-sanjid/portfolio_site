"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SkillFilterProps {
  onFilter: (query: string) => void
}

export default function SkillFilter({ onFilter }: SkillFilterProps) {
  const [filterQuery, setFilterQuery] = useState("")

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setFilterQuery(query)
    onFilter(query)
  }

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input type="text" placeholder="Search skills..." value={filterQuery} onChange={handleFilter} className="pl-10" />
    </div>
  )
}

