// Importing Router, Route, and Routes for routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'


function App() {
  return (
    // Setting up the router for handling navigation
    <Router>
      {/* Defining the routes for the application */}
      <Routes>
         {/* Route for the product list page, rendered at the root URL path */}
        <Route
          path="/"
          element={<ProductList />} // The ProductList component is rendered at the root path
        />
        {/* Route for the product detail page, rendered at /product/:id */}
        <Route
          path="/product/:id"
          element={<ProductDetail />} // The ProductDetail component is rendered for URLs matching /product/:id
        />
      </Routes>
    </Router>
  );
}

export default App
