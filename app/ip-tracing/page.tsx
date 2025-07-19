"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function IPTracingPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar currentPage="ip-tracing" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">IP Tracing</h1>
              <p className="text-gray-400">Advanced geolocation and network analysis tools</p>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Network Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-12">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">IP Tracing Module</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Track and analyze IP addresses, network paths, and geolocation data
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
