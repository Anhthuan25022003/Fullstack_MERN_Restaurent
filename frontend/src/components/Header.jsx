import { Menu } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-6 justify-between">
        <div className="flex items-center p-4 h-16 border-b border-slate-700">
          <h1 className="text-xl font-bold">LSTAdmin</h1>
        </div>
    <h2 className="text-xl font-semibold text-gray-800">Quản lý bán hàng</h2>

    <div className="flex items-center">
      <div className="relative">
        <button className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="font-medium text-sm">LST</span>
        </button>
      </div>
    </div>
  </header>
  )
}

export default Header