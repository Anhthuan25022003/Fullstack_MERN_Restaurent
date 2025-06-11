
import { useState } from "react"
import { Link } from "react-router-dom"

import {
  BarChart3,
  ChevronDown,
  Home,
  Menu,
  Package,
  ShoppingCart,
  Users,
  Truck,
  User,
  FileText,
  Tag,
  Box,
  
} from "lucide-react"
import Header from "./Header"
import Statistical from "./Statistical"
import Sidebar from "./Sidebar"

// Dữ liệu mẫu cho biểu đồ

const Dashboard=({children})=> {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex justify-start">
    <Header/>
        {children}

    <Sidebar/>
    </div>
  )
}
export default Dashboard


