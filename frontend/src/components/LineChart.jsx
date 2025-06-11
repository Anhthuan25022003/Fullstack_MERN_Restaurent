import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Dữ liệu mẫu cho biểu đồ

const LineChartCus = () => {
    const data = [
        { name: "T1", value: 50000000 },
        { name: "T2", value: 75000000 },
        { name: "T3", value: 125000000 },
        { name: "T4", value: 100000000 },
        { name: "T5", value: 45000000 },
        { name: "T6", value: 180000000 },
        { name: "T7", value: 75000000 },
        { name: "T8", value: 225000000 },
      ]
      
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        {/* <CartesianGrid strokeDasharray="4 4" vertical={false} /> */}
        <XAxis dataKey="name" axisLine={true} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value.toString()}`} />
        <Tooltip
          formatter={(value) => [`${value.toLocaleString()} VND`, "Doanh thu"]}
          labelFormatter={(label) => `Tháng ${label}`}
        />
        <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  )
};
export default LineChartCus
