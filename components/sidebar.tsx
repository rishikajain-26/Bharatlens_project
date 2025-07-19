"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Shield, MapPin, Languages, Search, Eye } from "lucide-react"

interface SidebarProps {
  currentPage?: string
}

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    id: "dashboard",
  },
  {
    name: "Deepfake Detection",
    href: "/deepfake",
    icon: Shield,
    id: "deepfake",
  },
  {
    name: "IP Tracing",
    href: "/ip-tracing",
    icon: MapPin,
    id: "ip-tracing",
  },
  {
    name: "Language Analysis",
    href: "/language",
    icon: Languages,
    id: "language",
  },
  {
    name: "Search User",
    href: "/search",
    icon: Search,
    id: "search",
  },
]

export function Sidebar({ currentPage }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">BharatLens</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = currentPage === item.id || pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
