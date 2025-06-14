"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Navigation, Train, Users, Clock, AlertCircle, CheckCircle, FileText, RefreshCw } from "lucide-react"
import { useState } from "react"

export default function DriverDashboard() {
  const [locationEnabled, setLocationEnabled] = useState(true)
  const [occupancy, setOccupancy] = useState([65])
  const [destination, setDestination] = useState("")
  const [notes, setNotes] = useState("")

  const trainInfo = {
    id: "T001",
    name: "Colombo Express",
    route: "Colombo Fort → Kandy",
    currentLocation: "Ragama",
    nextStation: "Gampaha",
    eta: "8 mins",
    speed: "45 km/h",
    status: "On Time",
  }

  const recentUpdates = [
    {
      time: "14:30",
      action: "Location Updated",
      details: "Ragama Station",
    },
    {
      time: "14:25",
      action: "Occupancy Updated",
      details: "65% capacity",
    },
    {
      time: "14:20",
      action: "Note Added",
      details: "Slight delay due to passenger boarding",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Kannangara!</h1>
            <p className="text-gray-600">Manage your train and keep passengers informed</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="default" className="bg-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              On Duty
            </Badge>
            <Button
              variant={locationEnabled ? "default" : "outline"}
              onClick={() => setLocationEnabled(!locationEnabled)}
              className={
                locationEnabled ? "bg-green-600 hover:bg-green-700" : "border-red-200 text-red-700 hover:bg-red-50"
              }
            >
              <Navigation className="w-4 h-4 mr-2" />
              {locationEnabled ? "GPS Active" : "Enable GPS"}
            </Button>
          </div>
        </div>

        {/* Train Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-600 to-red-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Current Speed</p>
                  <p className="text-2xl font-bold">{trainInfo.speed}</p>
                </div>
                <Train className="w-8 h-8 text-red-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Occupancy</p>
                  <p className="text-2xl font-bold text-gray-900">{occupancy[0]}%</p>
                </div>
                <Users className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Next Station</p>
                  <p className="text-2xl font-bold text-gray-900">{trainInfo.eta}</p>
                </div>
                <Clock className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="text-lg font-bold text-green-600">{trainInfo.status}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Route Map */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                Route Map
              </CardTitle>
              <CardDescription>Your current position and route to destination</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Train className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Route Visualization</p>
                  <p className="text-sm text-gray-500">Current: {trainInfo.currentLocation}</p>
                  <p className="text-sm text-gray-500">Next: {trainInfo.nextStation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Updates */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-red-600" />
                Quick Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination">Set Destination</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kandy">Kandy</SelectItem>
                    <SelectItem value="gampaha">Gampaha</SelectItem>
                    <SelectItem value="negombo">Negombo</SelectItem>
                    <SelectItem value="galle">Galle</SelectItem>
                    <SelectItem value="matara">Matara</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Occupancy */}
              <div className="space-y-3">
                <Label>Update Occupancy: {occupancy[0]}%</Label>
                <Slider value={occupancy} onValueChange={setOccupancy} max={100} step={5} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Empty</span>
                  <span>Full</span>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Add Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any delays, issues, or passenger information..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                Update All Information
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Train Information */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="w-5 h-5 text-red-600" />
                Train Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-gray-600">Train ID</Label>
                  <p className="font-semibold">{trainInfo.id}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Train Name</Label>
                  <p className="font-semibold">{trainInfo.name}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Route</Label>
                  <p className="font-semibold">{trainInfo.route}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Current Location</Label>
                  <p className="font-semibold">{trainInfo.currentLocation}</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Next Station ETA</span>
                  <Badge variant="outline">{trainInfo.eta}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-600" />
                Recent Updates
              </CardTitle>
              <CardDescription>Your latest system updates and actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">{update.action}</p>
                      <span className="text-xs text-gray-500">{update.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{update.details}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-red-200 text-red-700 hover:bg-red-50">
                View All Updates
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Alert */}
        <Card className="border-0 shadow-lg border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Emergency Protocols</h3>
                <p className="text-gray-600 mb-3">
                  In case of emergency, immediately contact control center and follow safety procedures.
                </p>
                <Button variant="destructive" size="sm">
                  Emergency Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
