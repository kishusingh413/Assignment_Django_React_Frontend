import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewOrderPage from "./pages/NewOrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-order" element={<NewOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
