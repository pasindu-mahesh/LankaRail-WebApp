"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, MapPin, Search, Star, Train, FileText, Users, Route, BarChart3, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  userType: "passenger" | "driver" | "admin"
}

export function Sidebar({ className, userType }: SidebarProps) {
  const pathname = usePathname()

  const getMenuItems = () => {
    switch (userType) {
      case "passenger":
        return [
          { icon: Home, label: "Home", href: "/dashboard/passenger" },
          { icon: MapPin, label: "Map", href: "/dashboard/passenger/map" },
          { icon: Search, label: "Train Search", href: "/dashboard/passenger/search" },
          { icon: Star, label: "My Trains", href: "/dashboard/passenger/trains" },
        ]
      case "driver":
        return [
          { icon: Home, label: "Home", href: "/dashboard/driver" },
          { icon: MapPin, label: "Map", href: "/dashboard/driver/map" },
          { icon: Train, label: "Update Train", href: "/dashboard/driver/update" },
          { icon: FileText, label: "Notes", href: "/dashboard/driver/notes" },
        ]
      case "admin":
        return [
          { icon: BarChart3, label: "Dashboard", href: "/dashboard/admin" },
          { icon: Users, label: "Users", href: "/dashboard/admin/users" },
          { icon: Train, label: "Trains", href: "/dashboard/admin/trains" },
          { icon: Route, label: "Routes", href: "/dashboard/admin/routes" },
          { icon: FileText, label: "Logs", href: "/dashboard/admin/logs" },
        ]
      default:
        return []
    }
  }

  const menuItems = getMenuItems()

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <Train className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">TrainTrack LK</span>
          </div>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            {userType.charAt(0).toUpperCase() + userType.slice(1)} Portal
          </h2>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === item.href && "bg-red-600 text-white hover:bg-red-700",
                )}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Account</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
