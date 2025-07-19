"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bell, CheckCircle, User, MapPin, Calendar, AlertTriangle, MapPinIcon } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

interface Criminal {
  id: number
  name: string
  age: number
  location: string
  crimes: string[]
  suspicionRate: number
  lastSeen: string
  status: string
}

export default function DashboardPage() {
  const [selectedCriminal, setSelectedCriminal] = useState<Criminal | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("selectedCriminal")
    if (stored) {
      setSelectedCriminal(JSON.parse(stored))
    }
  }, [])

  if (!selectedCriminal) {
    return (
      <div className="min-h-screen bg-gray-900 flex">
        <Sidebar currentPage="dashboard" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-400">No criminal selected. Please search for a criminal first.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar currentPage="dashboard" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Alerts Section */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-6 h-6 text-orange-500" />
                  <h2 className="text-xl font-semibold text-white">Alerts</h2>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center">
                    <Bell className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">3</div>
                    <div className="text-sm text-gray-400">ACTIVE</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Criminal Profile */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Criminal Profile - {selectedCriminal.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-400" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm text-gray-400">Name</label>
                        <p className="text-white font-medium">{selectedCriminal.name}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Age</label>
                        <p className="text-white font-medium">{selectedCriminal.age} years</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Status</label>
                        <Badge
                          variant={
                            selectedCriminal.status === "Wanted"
                              ? "destructive"
                              : selectedCriminal.status === "Arrested"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {selectedCriminal.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-400">Location</label>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <p className="text-white">{selectedCriminal.location}</p>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Last Seen</label>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <p className="text-white">{selectedCriminal.lastSeen}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-400">Criminal Activities</label>
                      <div className="flex gap-2 mt-1">
                        {selectedCriminal.crimes.map((crime, index) => (
                          <Badge key={index} variant="secondary" className="bg-red-900 text-red-200">
                            {crime}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Deepfake Detection */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Deepfake Detection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>

                    <div className="flex-1 ml-6">
                      <div className="bg-green-900 rounded-lg p-4 text-center">
                        <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-lg font-semibold text-green-400">NO</div>
                        <div className="text-sm text-green-300">MANIPULATION DETECTED</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Suspicion Rate */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Suspicion Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">{selectedCriminal.suspicionRate}%</div>
                    <div className="text-sm text-gray-400 mb-4">Overall Suspicion Rate</div>
                    <Progress value={selectedCriminal.suspicionRate} className="w-full h-3" />
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-4">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-400">
                      {selectedCriminal.suspicionRate > 80
                        ? "High Risk"
                        : selectedCriminal.suspicionRate > 60
                          ? "Medium Risk"
                          : "Low Risk"}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* IP Tracing */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5" />
                    IP Tracing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                      <MapPinIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="text-lg font-semibold text-white">IP Tracing Module</div>
                    <div className="text-sm text-gray-400">
                      Track and analyze IP addresses, network paths, and geolocation data
                    </div>
                    <div className="text-sm text-orange-500">Last IP: 192.168.1.{Math.floor(Math.random() * 255)}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Language Analysis */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Language Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <div className="text-4xl text-gray-400 mb-4">文A</div>
                    <div className="text-lg font-semibold text-white">Language Analysis Module</div>
                    <div className="text-sm text-gray-400">
                      Analyze text patterns, sentiment, and linguistic markers for intelligence gathering
                    </div>
                    <div className="text-sm text-orange-500">Primary Language: Hindi/English</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
