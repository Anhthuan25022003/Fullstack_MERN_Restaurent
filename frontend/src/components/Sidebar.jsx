import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ChevronDown,
  Home,
  Menu,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Tag,
  Box,
  ChartBarIcon,
} from "lucide-react";
import Header from "./Header";
import Statistical from "./Statistical";

// Dữ liệu mẫu cho biểu đồ

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-slate-800 text-white ${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-700 group "
              >
                <Home className="h-5 w-5 mr-3" />
                {sidebarOpen && (
                  <span className="hover:text-red-500 ">Trang chủ</span>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-700 group hover:text-red-500 "
              >
                <Users className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>Quản lý người dùng</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-  hover:text-red-500 group"
              >
                <Package className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>Quản lí sản phẩm</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/tables"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-  hover:text-red-500 group"
              >
                <ChartBarIcon className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>Quản lí bàn</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-  hover:text-red-500 group"
              >
                <Tag className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>Loại hàng</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-  hover:text-red-500 group"
              >
                <Box className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>Quản lí</span>}
              </Link>
            </li>
            <li>
              <div className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-  hover:text-red-500 cursor-pointer group">
                <ShoppingCart className="h-5 w-5 mr-3" />
                {sidebarOpen && (
                  <>
                    <span>Quản lý bán hàng</span>
                    <ChevronDown className="h-4 w-4 ml-auto" />
                  </>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/orders"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-  hover:text-red-500 group pl-12"
              >
                <FileText className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>Danh mục đơn hàng</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 text-sm rounded-md hover:bg-slate-  hover:text-red-500 group pl-12"
              >
                <FileText className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>Lập đơn hàng</span>}
              </Link>
            </li>
          </ul>
        </nav>
        <div className=""></div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-500  hover:text-red-500 text-xs">
          Copyright © 2024 LST
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
