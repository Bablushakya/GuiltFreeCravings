import { useEffect, useState } from 'react';
import {
  getAdminDashboard,
  type AdminDashboardStats,
  type AdminRecentOrder,
} from '../../../api/adminDashboardApi';
import StatCard from '../../../components/admin/StatCard';
import DataTable from '../../../components/admin/DataTable';
import { Badge, LoadingSpinner, Button } from '../../../components/ui';

interface DashboardData {
  stats: AdminDashboardStats;
  recentOrders: AdminRecentOrder[];
}

function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    const loadDashboard = async () => {
      try {
        setIsLoading(true);
        setError('');
        const result = await getAdminDashboard();
        if (mounted) setData(result);
      } catch (error: any) {
        console.error('Failed to load admin dashboard:', error);
        if (mounted) {
          setError(
            error?.response?.data?.message || 
            error?.message || 
            'Unable to load dashboard.'
          );
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    void loadDashboard();
    return () => { mounted = false; };
  }, []);

  if (isLoading) {
    return (
      <main className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex min-h-[60vh] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <div className="card text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">Unable to Load Dashboard</h2>
            <p className="mt-2 text-sm text-red-600">{error}</p>
            <Button variant="primary" className="mt-6" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </main>
    );
  }

  if (!data) return null;

  const { stats, recentOrders } = data;

  const formatCurrency = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const getStatusVariant = (status: string): 'success' | 'warning' | 'error' | 'neutral' => {
    const normalized = status.toUpperCase();
    if (['PAID', 'COMPLETED', 'CONFIRMED'].includes(normalized)) return 'success';
    if (['PENDING', 'PROCESSING'].includes(normalized)) return 'warning';
    if (['FAILED', 'CANCELLED'].includes(normalized)) return 'error';
    return 'neutral';
  };

  const orderColumns = [
    {
      key: 'orderNumber',
      label: 'Order',
      render: (order: AdminRecentOrder) => (
        <span className="font-semibold text-slate-900">{order.orderNumber}</span>
      ),
    },
    {
      key: 'customer',
      label: 'Customer',
      render: (order: AdminRecentOrder) => (
        <div>
          <p className="font-semibold text-slate-800">{order.customerName}</p>
          <p className="text-xs text-slate-500">{order.customerPhone}</p>
        </div>
      ),
    },
    {
      key: 'amount',
      label: 'Amount',
      render: (order: AdminRecentOrder) => (
        <span className="font-bold text-slate-900">{formatCurrency(order.totalAmount)}</span>
      ),
    },
    {
      key: 'orderStatus',
      label: 'Order Status',
      render: (order: AdminRecentOrder) => (
        <Badge variant={getStatusVariant(order.orderStatus)}>{order.orderStatus}</Badge>
      ),
    },
    {
      key: 'paymentStatus',
      label: 'Payment',
      render: (order: AdminRecentOrder) => (
        <Badge variant={getStatusVariant(order.paymentStatus)}>{order.paymentStatus}</Badge>
      ),
    },
    {
      key: 'date',
      label: 'Date',
      render: (order: AdminRecentOrder) => (
        <span className="text-sm text-slate-600">{formatDate(order.createdAt)}</span>
      ),
    },
  ];

  return (
    <main className="px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Overview
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-600">
            Monitor your store's performance and latest activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            label="Total Products"
            value={stats.totalProducts}
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
          />
          <StatCard
            label="Active Products"
            value={stats.activeProducts}
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
          />
          <StatCard
            label="Total Orders"
            value={stats.totalOrders}
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            }
          />
          <StatCard
            label="Pending Orders"
            value={stats.pendingOrders}
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            label="Total Customers"
            value={stats.totalCustomers}
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          <StatCard
            label="Paid Orders"
            value={stats.paidOrders}
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
        </div>

        {/* Recent Orders */}
        <section className="mt-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
              <p className="mt-1 text-sm text-slate-600">Latest orders from customers</p>
            </div>
            <Button variant="secondary" size="sm">
              View All →
            </Button>
          </div>

          <DataTable
            columns={orderColumns}
            data={recentOrders}
            keyExtractor={(order) => order.id}
            emptyMessage="No orders found"
          />
        </section>
      </div>
    </main>
  );
}

export default AdminDashboardPage;
