"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Train, Search, Navigation, Users, AlertCircle, Filter, Star, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function PassengerDashboard() {
  const [locationEnabled, setLocationEnabled] = useState(false)

  const nearbyTrains = [
    {
      id: "T001",
      name: "Colombo Express",
      route: "Colombo Fort → Kandy",
      currentLocation: "Ragama",
      eta: "12 mins",
      occupancy: 75,
      status: "On Time",
    },
    {
      id: "T002",
      name: "Coastal Line",
      route: "Colombo → Galle",
      currentLocation: "Mount Lavinia",
      eta: "8 mins",
      occupancy: 45,
      status: "Delayed",
    },
    {
      id: "T003",
      name: "Hill Country",
      route: "Kandy → Badulla",
      currentLocation: "Peradeniya",
      eta: "25 mins",
      occupancy: 90,
      status: "On Time",
    },
  ]

  const myTrains = [
    {
      id: "T001",
      name: "Colombo Express",
      departure: "08:30 AM",
      arrival: "11:45 AM",
      platform: "Platform 2",
      status: "Boarding",
    },
    {
      id: "T004",
      name: "Evening Express",
      departure: "06:15 PM",
      arrival: "09:30 PM",
      platform: "Platform 1",
      status: "Scheduled",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Pasindu!</h1>
            <p className="text-gray-600">Track your trains and plan your journey</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={locationEnabled ? "default" : "outline"}
              onClick={() => setLocationEnabled(!locationEnabled)}
              className={
                locationEnabled ? "bg-green-600 hover:bg-green-700" : "border-red-200 text-red-700 hover:bg-red-50"
              }
            >
              <Navigation className="w-4 h-4 mr-2" />
              {locationEnabled ? "Location Enabled" : "Enable Location"}
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-600 to-red-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Nearby Trains</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Train className="w-8 h-8 text-red-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">My Trains Today</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <Clock className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Next Departure</p>
                  <p className="text-2xl font-bold text-gray-900">12m</p>
                </div>
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Avg. Occupancy</p>
                  <p className="text-2xl font-bold text-gray-900">70%</p>
                </div>
                <Users className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Map */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                Live Train Map
              </CardTitle>
              <CardDescription>Real-time locations of trains near you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500">Live train positions will appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Train Search */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-red-600" />
                Find Trains
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Input placeholder="From station" className="border-gray-200" />
                <Input placeholder="To station" className="border-gray-200" />
                <Input type="date" className="border-gray-200" />
              </div>
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                <Search className="w-4 h-4 mr-2" />
                Search Trains
              </Button>
              <Button variant="outline" className="w-full border-red-200 text-red-700 hover:bg-red-50">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Nearby Trains */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="w-5 h-5 text-red-600" />
                Nearby Trains
              </CardTitle>
              <CardDescription>Trains currently near your location</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {nearbyTrains.map((train) => (
                <div key={train.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{train.name}</h3>
                      <p className="text-sm text-gray-600">{train.route}</p>
                    </div>
                    <Badge variant={train.status === "On Time" ? "default" : "destructive"}>{train.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {train.currentLocation}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        ETA: {train.eta}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span
                        className={`font-medium ${train.occupancy > 80 ? "text-red-600" : train.occupancy > 60 ? "text-yellow-600" : "text-green-600"}`}
                      >
                        {train.occupancy}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* My Trains */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-red-600" />
                My Trains Today
              </CardTitle>
              <CardDescription>Your scheduled journeys for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {myTrains.map((train) => (
                <div key={train.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{train.name}</h3>
                      <p className="text-sm text-gray-600">{train.platform}</p>
                    </div>
                    <Badge variant={train.status === "Boarding" ? "default" : "secondary"}>{train.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span>Departure: {train.departure}</span>
                      <span>Arrival: {train.arrival}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-red-200 text-red-700 hover:bg-red-50">
                View All Bookings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <Card className="border-0 shadow-lg border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Service Alert</h3>
                <p className="text-gray-600">
                  Coastal Line services are experiencing delays due to track maintenance. Expected delays: 15-20
                  minutes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
