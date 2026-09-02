import { Link } from 'react-router-dom';
import { Button } from '../ui';

interface OrderSummaryProps {
  subtotal: number;
  deliveryFee?: number;
  discount?: number;
  total: number;
  onCheckout: () => void;
  isCheckoutDisabled?: boolean;
}

function OrderSummary({
  subtotal,
  deliveryFee,
  discount = 0,
  total,
  onCheckout,
  isCheckoutDisabled = false,
}: OrderSummaryProps) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="card">
        <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

        <div className="mt-6 space-y-4">
          {/* Subtotal */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-slate-900">₹{subtotal}</span>
          </div>

          {/* Discount */}
          {discount > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Discount</span>
              <span className="font-semibold text-green-600">-₹{discount}</span>
            </div>
          )}

          {/* Delivery */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Delivery</span>
            {deliveryFee !== undefined ? (
              <span className="font-semibold text-slate-900">₹{deliveryFee}</span>
            ) : (
              <span className="text-slate-500">Calculated at checkout</span>
            )}
          </div>

          <div className="border-t border-slate-200" />

          {/* Total */}
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-slate-900">Total</span>
            <span className="text-2xl font-bold text-primary">₹{total}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={onCheckout}
            disabled={isCheckoutDisabled}
          >
            Proceed to Checkout
          </Button>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">
          Secure checkout. Payment options available at next step.
        </p>

        {/* Continue Shopping */}
        <Link
          to="/products"
          className="mt-4 block text-center text-sm font-semibold text-primary transition hover:text-primary-hover"
        >
          Continue Shopping
        </Link>

        {/* Trust Indicators */}
        <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Secure payment processing</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Fresh, quality products</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Careful packaging</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default OrderSummary;
