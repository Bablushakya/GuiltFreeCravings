import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import HomePage from "../pages/home-page/HomePage";
import ProductsPage from "../pages/products/ProductsPage";
import ProductDetailsPage from "../pages/product-details/ProductDetailsPage";
import CartPage from "../pages/cart-page/CartPage";
import CheckoutPage from "../pages/check-out/CheckoutPage";
import ReviewOrderPage from "../pages/review-order/ReviewOrderPage";
import PaymentPage from "../pages/payment-page/PaymentPage";
import OrderSuccessPage from "../pages/order-success/OrderSuccessPage";
import MyOrdersPage from "../pages/my-orders/MyOrdersPage";
import ProfilePage from "../pages/profile/ProfilePage";
import LoginPage from "../pages/login/LoginPage";
import AboutPage from "../pages/about/AboutPage";
import WhyChoosePage from "../pages/why-choose/WhyChoosePage";
import OurPromisePage from "../pages/our-promise/OurPromisePage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* =========================
          MAIN WEBSITE LAYOUT
          Navbar + Outlet + Footer
      ========================= */}
      <Route element={<MainLayout />}>

        {/* Home */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Products */}
        <Route
          path="/products"
          element={<ProductsPage />}
        />

        {/* Product Details */}
        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

        {/* Review Order */}
        <Route
          path="/checkout/review"
          element={<ReviewOrderPage />}
        />

        {/* Payment */}
        <Route
          path="/payment"
          element={<PaymentPage />}
        />

        {/* Order Success */}
        <Route
          path="/order-success"
          element={<OrderSuccessPage />}
        />

        {/* My Orders */}
        <Route
          path="/orders"
          element={<MyOrdersPage />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<ProfilePage />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* About Us */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* Why Choose Us */}
        <Route
          path="/why-choose"
          element={<WhyChoosePage />}
        />

        {/* Our Promise */}
        <Route
          path="/our-promise"
          element={<OurPromisePage />}
        />

      </Route>
    </Routes>
  );
};

export default AppRoutes;