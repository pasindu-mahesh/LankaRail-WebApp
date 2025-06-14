"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  Train,
  AlertTriangle,
  TrendingUp,
  Plus,
  Search,
  Download,
  Edit,
  Trash2,
  Eye,
  Filter,
} from "lucide-react"
import { useState } from "react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalUsers: 12847,
    activeTrains: 45,
    activePassengers: 3421,
    systemAlerts: 3,
  }

  const users = [
    {
      id: "U001",
      name: "Priya Perera",
      email: "priya@email.com",
      type: "Passenger",
      status: "Active",
      joinDate: "2024-01-15",
    },
    {
      id: "U002",
      name: "Kasun Silva",
      email: "kasun@email.com",
      type: "Driver",
      status: "Active",
      joinDate: "2024-02-20",
    },
    {
      id: "U003",
      name: "Amara Fernando",
      email: "amara@email.com",
      type: "Passenger",
      status: "Inactive",
      joinDate: "2024-03-10",
    },
  ]

  const trains = [
    {
      id: "T001",
      name: "Colombo Express",
      route: "Colombo Fort → Kandy",
      driver: "Kasun Silva",
      status: "Active",
      occupancy: 75,
    },
    {
      id: "T002",
      name: "Coastal Line",
      route: "Colombo → Galle",
      driver: "Nimal Perera",
      status: "Active",
      occupancy: 45,
    },
    {
      id: "T003",
      name: "Hill Country",
      route: "Kandy → Badulla",
      driver: "Sunil Fernando",
      status: "Maintenance",
      occupancy: 0,
    },
  ]

  const routes = [
    {
      id: "R001",
      name: "Main Line",
      from: "Colombo Fort",
      to: "Kandy",
      distance: "116 km",
      stations: 12,
      status: "Active",
    },
    {
      id: "R002",
      name: "Coastal Line",
      from: "Colombo",
      to: "Galle",
      distance: "119 km",
      stations: 15,
      status: "Active",
    },
    {
      id: "R003",
      name: "Northern Line",
      from: "Colombo",
      to: "Jaffna",
      distance: "398 km",
      stations: 28,
      status: "Maintenance",
    },
  ]

  const logs = [
    {
      id: "L001",
      timestamp: "2024-01-20 14:30:25",
      user: "Kasun Silva",
      action: "Location Updated",
      details: "Train T001 location updated to Ragama",
      type: "Info",
    },
    {
      id: "L002",
      timestamp: "2024-01-20 14:25:10",
      user: "System",
      action: "Alert Generated",
      details: "High occupancy detected on T002",
      type: "Warning",
    },
    {
      id: "L003",
      timestamp: "2024-01-20 14:20:45",
      user: "Admin",
      action: "User Created",
      details: "New passenger account created for Priya Perera",
      type: "Info",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users, trains, routes, and system operations</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-600 to-red-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Total Users</p>
                  <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-red-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Active Trains</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeTrains}</p>
                </div>
                <Train className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Active Passengers</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activePassengers.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">System Alerts</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.systemAlerts}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="trains">Trains</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest system activities and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {logs.slice(0, 5).map((log) => (
                    <div key={log.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          log.type === "Warning" ? "bg-yellow-500" : "bg-blue-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-gray-900">{log.action}</p>
                          <span className="text-xs text-gray-500">{log.timestamp.split(" ")[1]}</span>
                        </div>
                        <p className="text-sm text-gray-600">{log.details}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* System Health */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Current system status and performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Database</span>
                    <Badge className="bg-green-600">Healthy</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">API Services</span>
                    <Badge className="bg-green-600">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-yellow-800">GPS Tracking</span>
                    <Badge className="bg-yellow-600">Degraded</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Notifications</span>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage passenger and driver accounts</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search users..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.type === "Driver" ? "default" : "secondary"}>{user.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trains" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Train Management</CardTitle>
                    <CardDescription>Monitor and manage train operations</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Train
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search trains..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Train ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Driver</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Occupancy</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trains.map((train) => (
                      <TableRow key={train.id}>
                        <TableCell className="font-medium">{train.id}</TableCell>
                        <TableCell>{train.name}</TableCell>
                        <TableCell>{train.route}</TableCell>
                        <TableCell>{train.driver}</TableCell>
                        <TableCell>
                          <Badge variant={train.status === "Active" ? "default" : "secondary"}>{train.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-red-600 h-2 rounded-full"
                                style={{ width: `${train.occupancy}%` }}
                              ></div>
                            </div>
                            <span className="text-sm">{train.occupancy}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="routes" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Route Management</CardTitle>
                    <CardDescription>Manage train routes and stations</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Route
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search routes..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Route ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Distance</TableHead>
                      <TableHead>Stations</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {routes.map((route) => (
                      <TableRow key={route.id}>
                        <TableCell className="font-medium">{route.id}</TableCell>
                        <TableCell>{route.name}</TableCell>
                        <TableCell>{route.from}</TableCell>
                        <TableCell>{route.to}</TableCell>
                        <TableCell>{route.distance}</TableCell>
                        <TableCell>{route.stations}</TableCell>
                        <TableCell>
                          <Badge variant={route.status === "Active" ? "default" : "secondary"}>{route.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>System Logs</CardTitle>
                    <CardDescription>View and export system activity logs</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                      <Download className="w-4 h-4 mr-2" />
                      Export CSV
                    </Button>
                    <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                      <Download className="w-4 h-4 mr-2" />
                      Export PDF
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search logs..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {logs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.timestamp}</TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>{log.action}</TableCell>
                        <TableCell>{log.details}</TableCell>
                        <TableCell>
                          <Badge variant={log.type === "Warning" ? "destructive" : "default"}>{log.type}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
