import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductList />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App
