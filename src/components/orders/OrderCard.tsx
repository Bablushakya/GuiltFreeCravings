import { useNavigate } from 'react-router-dom';
import type { Order } from '../../api/orderApi';
import { Badge, Button } from '../ui';

interface OrderCardProps {
  order: Order;
}

function OrderCard({ order }: OrderCardProps) {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return 'Date unavailable';
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  const getOrderStatusVariant = (status: Order['orderStatus']) => {
    switch (status) {
      case 'CONFIRMED':
        return 'primary';
      case 'PROCESSING':
        return 'warning';
      case 'COMPLETED':
        return 'success';
      case 'CANCELLED':
        return 'error';
      default:
        return 'neutral';
    }
  };

  const getPaymentStatusVariant = (status: Order['paymentStatus']) => {
    switch (status) {
      case 'PAID':
        return 'success';
      case 'FAILED':
        return 'error';
      case 'REFUNDED':
        return 'primary';
      default:
        return 'warning';
    }
  };

  const totalItems = order.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <article className="card card-hover">
      {/* Order Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Order Number
          </p>
          <h3 className="mt-2 break-all text-lg font-bold text-slate-900">
            {order.orderNumber}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Placed on {formatDate(order.createdAt)}
          </p>
        </div>

        {/* Status Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant={getOrderStatusVariant(order.orderStatus)}>
            {order.orderStatus.toLowerCase().replace(/_/g, ' ')}
          </Badge>
          <Badge variant={getPaymentStatusVariant(order.paymentStatus)}>
            {order.paymentStatus.toLowerCase().replace(/_/g, ' ')}
          </Badge>
        </div>
      </div>

      <div className="my-6 border-t border-slate-100" />

      {/* Order Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-cream-peach p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Items
          </p>
          <p className="mt-2 text-sm font-bold text-slate-800">
            {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
          </p>
        </div>

        <div className="rounded-xl bg-cream-peach p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Customer
          </p>
          <p className="mt-2 truncate text-sm font-bold text-slate-800">
            {order.customerName}
          </p>
        </div>

        <div className="rounded-xl bg-cream-peach p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Total
          </p>
          <p className="mt-2 text-lg font-bold text-primary">
            ₹{order.totalAmount}
          </p>
        </div>
      </div>

      {/* Order Items Preview */}
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Products
        </p>
        <div className="mt-3 space-y-2">
          {order.items.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-cream-tan px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {item.productName}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {item.variantQuantity}{item.variantUnit} • Qty: {item.quantity}
                </p>
              </div>
              <p className="shrink-0 text-sm font-semibold text-slate-900">
                ₹{item.subtotal}
              </p>
            </div>
          ))}
          {order.items.length > 3 && (
            <p className="pt-1 text-xs text-slate-400">
              + {order.items.length - 3} more{' '}
              {order.items.length - 3 === 1 ? 'item' : 'items'}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <p className="text-xs text-slate-500">
          Payment: <span className="font-semibold capitalize">{order.paymentStatus.toLowerCase().replace(/_/g, ' ')}</span>
        </p>
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate(`/orders/${order.id}`)}
        >
          View Details →
        </Button>
      </div>
    </article>
  );
}

export default OrderCard;
