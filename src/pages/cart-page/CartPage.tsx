import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';
import OtpAuthModal from '../../components/auth/OtpAuthModal';
import CartItem from '../../components/cart/CartItem';
import OrderSummary from '../../components/cart/OrderSummary';
import { EmptyState } from '../../components/ui';

function CartPage() {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const getCartTotal = useCartStore((state) => state.getCartTotal);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const cartTotal = getCartTotal();

  const handleProceedToCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
      return;
    }
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    navigate('/checkout');
  };

  // Empty Cart State
  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-cream px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <EmptyState
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2m0 0L7 15h10l3-10H5.4ZM7 15l-1 2h12M9 20h.01M17 20h.01"
                />
              </svg>
            }
            title="Your Cart is Empty"
            description="Looks like you haven't added anything to your cart yet. Explore our delicious homemade cravings and find something you love."
            actionLabel="Explore Products"
            onAction={() => navigate('/products')}
          />
        </div>
      </main>
    );
  }

  // Cart with Items
  return (
    <>
      <main className="min-h-screen bg-cream px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </Link>

            <div className="mt-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Your Selection
              </span>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Shopping Cart
              </h1>
              <p className="mt-2 text-slate-600">
                {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>

          {/* Cart Layout */}
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            {/* Cart Items */}
            <section className="space-y-4" aria-label="Shopping cart items">
              {items.map((item) => (
                <CartItem
                  key={`${item.product.id}-${item.variant.id}`}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}

              {/* Clear Cart Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm font-semibold text-slate-500 transition hover:text-red-600"
                >
                  Clear Cart
                </button>
              </div>
            </section>

            {/* Order Summary */}
            <OrderSummary
              subtotal={cartTotal}
              total={cartTotal}
              onCheckout={handleProceedToCheckout}
            />
          </div>
        </div>
      </main>

      {/* OTP Auth Modal */}
      {isAuthModalOpen && (
        <OtpAuthModal
          onClose={() => setIsAuthModalOpen(false)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}

export default CartPage;
