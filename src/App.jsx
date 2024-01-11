import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import AuthLayout from "./ui/AuthLayout";

import ProductCatalogue from "./pages/ProductCatalogue";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Order from "./pages/Order";
import OrderDetails from "./pages/OrderDetails";
import CreateOrder from "./pages/CreateOrder";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";

import "./styles/css/style.css";

// sets up cache behind the scenes
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              {/* HOME */}
              <Route path="/" element={<Homepage />} />

              {/* AUTH */}
              <Route element={<AuthLayout />}>
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/login" element={<Login />} />
              </Route>

              {/*APP */}
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/app/products" element={<ProductCatalogue />} />
                <Route
                  path="/app/products/:productId"
                  element={<ProductDetails />}
                />
                <Route path="/app/shopping-cart" element={<ShoppingCart />} />
                <Route path="/app/orders" element={<Order />} />
                <Route path="/app/order/:orderId" element={<OrderDetails />} />
                <Route path="/app/order/new" element={<CreateOrder />} />
              </Route>

              {/*PAGE NOT FOUND */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "0.8rem" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-secondary-dark)",
                color: "var(--color-grey-light-1)",
              },
            }}
          />
        </QueryClientProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
