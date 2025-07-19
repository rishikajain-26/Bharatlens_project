"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, User, MapPin, Calendar, AlertTriangle } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

// Mock criminal database
const criminalDatabase = [
  {
    id: 1,
    name: "Aman Kumar Singh",
    age: 32,
    location: "Mumbai, Maharashtra",
    crimes: ["Theft", "Fraud"],
    suspicionRate: 85,
    lastSeen: "2024-01-15",
    status: "Wanted",
  },
  {
    id: 2,
    name: "Rekha Sharma",
    age: 28,
    location: "Delhi, NCR",
    crimes: ["Cybercrime", "Identity Theft"],
    suspicionRate: 92,
    lastSeen: "2024-01-10",
    status: "Under Investigation",
  },
  {
    id: 3,
    name: "Piyush Agarwal",
    age: 35,
    location: "Bangalore, Karnataka",
    crimes: ["Money Laundering", "Tax Evasion"],
    suspicionRate: 78,
    lastSeen: "2024-01-08",
    status: "Arrested",
  },
  {
    id: 4,
    name: "Aman Verma",
    age: 29,
    location: "Pune, Maharashtra",
    crimes: ["Drug Trafficking"],
    suspicionRate: 95,
    lastSeen: "2024-01-12",
    status: "Wanted",
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof criminalDatabase>([])
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      const results = criminalDatabase.filter((criminal) =>
        criminal.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 500)
  }

  const handleSelectCriminal = (criminal: (typeof criminalDatabase)[0]) => {
    // Store selected criminal data and navigate to dashboard
    localStorage.setItem("selectedCriminal", JSON.stringify(criminal))
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar currentPage="search" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Search Criminal Database</h1>
              <p className="text-gray-400">Search for individuals in the Indian criminal records database</p>
            </div>

            <Card className="bg-gray-800 border-gray-700 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-6 h-6 text-orange-500" />
                  <h2 className="text-xl font-semibold text-white">Criminal Records Search</h2>
                </div>

                <form onSubmit={handleSearch} className="flex gap-4">
                  <Input
                    type="text"
                    placeholder="Enter name (e.g., Aman, Rekha, Piyush...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                    disabled={isSearching}
                  >
                    {isSearching ? "Searching..." : "Search"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {searchResults.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Search Results ({searchResults.length})</h3>

                {searchResults.map((criminal) => (
                  <Card
                    key={criminal.id}
                    className="bg-gray-800 border-gray-700 hover:bg-gray-750 cursor-pointer transition-colors"
                    onClick={() => handleSelectCriminal(criminal)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-400" />
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-white">{criminal.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>Age: {criminal.age}</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {criminal.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Last seen: {criminal.lastSeen}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-400">Crimes:</span>
                              {criminal.crimes.map((crime, index) => (
                                <Badge key={index} variant="secondary" className="bg-red-900 text-red-200">
                                  {crime}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-right space-y-2">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            <span className="text-sm text-gray-400">Suspicion Rate</span>
                          </div>
                          <div className="text-2xl font-bold text-orange-500">{criminal.suspicionRate}%</div>
                          <Badge
                            variant={
                              criminal.status === "Wanted"
                                ? "destructive"
                                : criminal.status === "Arrested"
                                  ? "secondary"
                                  : "default"
                            }
                            className="text-xs"
                          >
                            {criminal.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {searchQuery && searchResults.length === 0 && !isSearching && (
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-400">No criminal records found for "{searchQuery}"</p>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
