import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import AuthLayout from "./ui/AuthLayout";

import ProductCatalogue from "./pages/ProductCatalogue";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Order from "./pages/Order";
import OrderDetails from "./pages/OrderDetails";
import CreateOrder from "./pages/CreateOrder";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";

import "./styles/css/style.css";
import ProtectedRoute from "./ui/ProtectedRoute";

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
              {/* AUTH */}
              <Route element={<AuthLayout />}>
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/login" element={<Login />} />
              </Route>

              {/*APP */}
              <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<ProductCatalogue />} />
                <Route path="/:productId" element={<ProductDetails />} />
                <Route
                  path="/shopping-cart"
                  element={
                    <ProtectedRoute>
                      <ShoppingCart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <Order />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/order/new"
                  element={
                    <ProtectedRoute>
                      <CreateOrder />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route
                path="/order/:orderId"
                element={
                  <ProtectedRoute>
                    <OrderDetails />
                  </ProtectedRoute>
                }
              />

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
                fontSize: "var(--font-size-tiny)",
                fontFamily: "var(--font-family)",
                fontWeight: "700",
                maxWidth: "var(--spacing-huge)",
                padding: "1.6rem 2.4rem",
                backgroundColor: "var(--color-primary-50)",
                color: "var(--color-primary-900)",
              },
            }}
          />
        </QueryClientProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
