import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Statistical from "./components/Statistical";
import UserForm from "./components/users/UserForm";
import ProductsPage from "./pages/ProductsPage";
import TablePage from "./pages/TablePage";
import OrderPage from "./pages/OrderPage";
import OrderDetail from "./components/order/OrderDetail";
import LineChartCus from "./components/LineChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={< Statistical/>} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/tables" element={<TablePage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/orders/:id" element={<OrderDetail />} />



        </Route>

      </Routes>
    </Router>
  );
}

export default App;
