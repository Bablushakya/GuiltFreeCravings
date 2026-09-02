import { useEffect, useState } from 'react';
import { getProducts, type Product } from '../../api/productApi';
import ProductCard from '../../components/product/ProductCard';
import { LoadingSpinner, EmptyState } from '../../components/ui';
import { products as localProducts } from '../../components/data/products';

// Helper function to transform local products to API format
const transformLocalProduct = (product: typeof localProducts[0], index: number): Product => ({
  id: product.id,
  name: product.name,
  description: product.description,
  image: product.image,
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  variants: [
    {
      id: index * 2 + 1,
      productId: product.id,
      quantity: 250,
      unit: 'g',
      packaging: 'box',
      price: product.price250,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: index * 2 + 2,
      productId: product.id,
      quantity: 500,
      unit: 'g',
      packaging: 'box',
      price: product.price500,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
});

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [usingLocalData, setUsingLocalData] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');
        setUsingLocalData(false);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products from API, using local data:', err);
        // Fallback to local products when API fails
        const transformedProducts = localProducts.map(transformLocalProduct);
        setProducts(transformedProducts);
        setUsingLocalData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="border-b border-cream-tan bg-white">
        <div className="section-container py-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Collection
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Discover Our Products
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Delicious treats crafted with quality ingredients and made with love
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 sm:max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-11"
            />
          </div>

          {/* Product Count */}
          {!loading && !error && (
            <p className="text-sm text-slate-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex min-h-[400px] items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <EmptyState
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Unable to load products"
            description={error}
            actionLabel="Try Again"
            onAction={() => window.location.reload()}
          />
        )}

        {/* Products Grid */}
        {!loading && !error && filteredProducts.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Empty Search Results */}
        {!loading && !error && filteredProducts.length === 0 && products.length > 0 && (
          <EmptyState
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
            title="No products found"
            description="Try adjusting your search to find what you're looking for"
            actionLabel="Clear Search"
            onAction={() => setSearchQuery('')}
          />
        )}

        {/* No Products */}
        {!loading && !error && products.length === 0 && (
          <EmptyState
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            }
            title="No products available yet"
            description="Check back soon for delicious treats"
          />
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
