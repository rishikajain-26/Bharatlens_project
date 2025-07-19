"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Languages } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function LanguagePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar currentPage="language" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Language Analysis</h1>
              <p className="text-gray-400">Linguistic analysis, sentiment detection, and pattern recognition</p>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Languages className="w-6 h-6" />
                  Text Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-12">
                <div className="text-6xl text-gray-400 mb-6">文A</div>
                <h3 className="text-xl font-semibold text-white mb-4">Language Analysis Module</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Analyze text patterns, sentiment, and linguistic markers for intelligence gathering
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
