
import { BarChart3, ShoppingCart, Users } from 'lucide-react'
import React from 'react'
import LineChartCus from './LineChart'

const Statistical = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-cyan-500 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 flex flex-col">
                <div className="text-4xl font-bold">1,578</div>
                <div className="text-lg">Khách hàng</div>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <div className="text-sm">Chi tiết</div>
                  <Users className="h-16 w-16 opacity-20" />
                </div>
              </div>
            </div>

            <div className="bg-green-500 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 flex flex-col">
                <div className="text-4xl font-bold">1,580,000</div>
                <div className="text-lg">
                  Doanh thu trong tháng <span className="text-sm">VND</span>
                </div>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <div className="text-sm">Chi tiết</div>
                  <BarChart3 className="h-16 w-16 opacity-20" />
                </div>
              </div>
            </div>

            <div className="bg-amber-500 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 flex flex-col">
                <div className="text-4xl font-bold">240,000</div>
                <div className="text-lg">
                  Doanh thu trong ngày <span className="text-sm">VND</span>
                </div>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <div className="text-sm">Chi tiết</div>
                  <BarChart3 className="h-16 w-16 opacity-20" />
                </div>
              </div>
            </div>

            <div className="bg-red-500 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 flex flex-col">
                <div className="text-4xl font-bold">65</div>
                <div className="text-lg">Đơn hàng chờ xử lý</div>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <div className="text-sm">Chi tiết</div>
                  <ShoppingCart className="h-16 w-16 opacity-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-6">Thống kê doanh thu</h3>
              <div className="h-80">
                {/* Biểu đồ sẽ được hiển thị ở đây khi cài đặt recharts */}
                <LineChartCus />
              </div>
            </div>
          </div>
        </main>
  )
}

export default Statistical