"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, User, Eye } from "lucide-react"

export function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
            <Eye className="w-4 h-4 text-orange-500" />
          </div>
          <span className="text-lg font-semibold text-white">BharatLens</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-64 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>

          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
