import { Link } from 'react-router-dom';
import type { CartItem as CartItemType } from '../../store/cartStore';
import QuantitySelector from '../common/QuantitySelector';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, variantId: number, quantity: number) => void;
  onRemove: (productId: number, variantId: number) => void;
}

function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const itemSubtotal = item.variant.price * item.quantity;
  const variantLabel = `${item.variant.quantity}${item.variant.unit}`;

  return (
    <article className="card">
      <div className="flex gap-4 sm:gap-6">
        {/* Product Image */}
        <Link
          to={`/products/${item.product.id}`}
          className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-cream-peach sm:h-32 sm:w-32"
        >
          <img
            src={item.product.image}
            alt={item.product.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Product Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <Link
                to={`/products/${item.product.id}`}
                className="block text-base font-bold text-slate-900 transition hover:text-primary sm:text-lg"
              >
                {item.product.name}
              </Link>

              {/* Variant Info */}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="badge badge-primary">
                  {variantLabel}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-medium capitalize text-slate-500">
                  {item.variant.packaging}
                </span>
              </div>

              {/* Price */}
              <p className="mt-3 text-sm font-semibold text-primary">
                ₹{item.variant.price} each
              </p>
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => onRemove(item.product.id, item.variant.id)}
              className="shrink-0 text-slate-400 transition hover:text-red-600"
              aria-label={`Remove ${item.product.name} from cart`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quantity and Subtotal */}
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                Quantity
              </p>
              <QuantitySelector
                quantity={item.quantity}
                onIncrease={() => onUpdateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                onDecrease={() => onUpdateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                size="sm"
              />
            </div>

            <div className="text-right">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Subtotal
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                ₹{itemSubtotal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
