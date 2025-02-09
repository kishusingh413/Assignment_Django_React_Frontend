import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import { OrderProvider } from "./context/OrderContext"; // ✅ Import it

function App() {
  return (
    <OrderProvider> {/* ✅ Wrap routes inside OrderProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-order" element={<NewOrderPage />} />
          <Route path="/order-details" element={<OrderDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
