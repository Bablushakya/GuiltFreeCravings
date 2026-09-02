import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getProductById,
  type Product,
  type ProductVariant,
} from '../../api/productApi';
import { useCartStore } from '../../store/cartStore';
import ProductGallery from '../../components/product/ProductGallery';
import ProductTabs from '../../components/product/ProductTabs';
import RelatedProducts from '../../components/product/RelatedProducts';
import QuantitySelector from '../../components/common/QuantitySelector';
import { Button, Badge, Toast, LoadingSpinner } from '../../components/ui';
import { useToast } from '../../hooks/useToast';

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const addToCart = useCartStore((state) => state.addToCart);
  const { toast, success, hideToast } = useToast();

  const productId = Number(id);
  const isValidProductId = Number.isInteger(productId) && productId > 0;

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      if (!isValidProductId) {
        setProduct(null);
        setError('Invalid product ID.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');
        const data = await getProductById(productId);
        
        if (!isMounted) return;

        setProduct(data);
        if (data.variants.length > 0) {
          setSelectedVariant(data.variants[0]);
        }
      } catch (err) {
        console.error('Failed to fetch product:', err);
        if (!isMounted) return;
        setProduct(null);
        setError("We couldn't load this product. Please try again.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();
    return () => { isMounted = false; };
  }, [productId, isValidProductId]);

  const variants = useMemo(() => {
    if (!product) return [];
    return [...product.variants].sort((a, b) => {
      if (a.quantity !== b.quantity) return a.quantity - b.quantity;
      return a.packaging.localeCompare(b.packaging);
    });
  }, [product]);

  const formatQuantity = (variant: ProductVariant) => {
    return `${variant.quantity}${variant.unit}`;
  };

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;
    addToCart(product, selectedVariant, quantity);
    success(`${quantity} × ${product.name} added to cart!`);
  };

  // Loading State
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // Error/Not Found
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-6">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-slate-900">Product Not Found</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-600">{error || "The product you're looking for doesn't exist."}</p>
          <div className="mt-8 flex gap-3 justify-center">
            <Link to="/"><Button variant="primary">Back to Home</Button></Link>
            <Link to="/products"><Button variant="secondary">View Products</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  const hasVariants = variants.length > 0;

  // Product tabs content
  const tabs = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-8 text-slate-700">{product.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-cream-tan bg-white p-5">
              <h4 className="font-semibold text-slate-900">Quality Ingredients</h4>
              <p className="mt-2 text-sm text-slate-600">Made with thoughtfully selected, natural ingredients</p>
            </div>
            <div className="rounded-xl border border-cream-tan bg-white p-5">
              <h4 className="font-semibold text-slate-900">Homemade Goodness</h4>
              <p className="mt-2 text-sm text-slate-600">Prepared fresh in small batches with love and care</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ingredients',
      label: 'Ingredients',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-slate-900">What Goes In</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
              <span className="text-slate-700">Premium quality ingredients sourced with care</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
              <span className="text-slate-700">No refined sugar - sweetened naturally with jaggery and dates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
              <span className="text-slate-700">No preservatives or artificial additives</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
              <span className="text-slate-700">Fresh, wholesome ingredients you can trust</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'details',
      label: 'Product Details',
      content: (
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-slate-900">Storage</h4>
            <p className="mt-2 text-sm text-slate-600">Store in a cool, dry place. Best consumed fresh within recommended timeframe.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Shelf Life</h4>
            <p className="mt-2 text-sm text-slate-600">Made fresh to order. Please check product packaging for specific best before date.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Preparation</h4>
            <p className="mt-2 text-sm text-slate-600">Handcrafted in small batches with attention to every detail.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Packaging</h4>
            <p className="mt-2 text-sm text-slate-600">Packaged with care to maintain freshness and quality.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-cream">
      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onClose={hideToast} />
      
      <div className="section-container section-padding">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: Gallery */}
          <ProductGallery mainImage={product.image} productName={product.name} />

          {/* Right: Product Info */}
          <div>
            <Badge variant="primary">Featured Product</Badge>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {product.name}
            </h1>

            {selectedVariant && (
              <p className="mt-4 text-3xl font-bold text-primary">
                ₹{selectedVariant.price}
              </p>
            )}

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>

            {/* Variants */}
            {hasVariants && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">Choose Size</p>
                  {selectedVariant && (
                    <p className="text-sm text-slate-500 capitalize">{selectedVariant.packaging}</p>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {variants.map((variant) => {
                    const isSelected = selectedVariant?.id === variant.id;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => handleVariantChange(variant)}
                        className={`rounded-2xl border-2 p-4 text-left transition ${
                          isSelected
                            ? 'border-primary bg-primary/5'
                            : 'border-cream-tan bg-white hover:border-primary/50'
                        }`}
                      >
                        <span className={`block text-sm font-bold ${isSelected ? 'text-primary' : 'text-slate-900'}`}>
                          {formatQuantity(variant)}
                        </span>
                        <span className="mt-1 block font-semibold text-slate-700">₹{variant.price}</span>
                        <span className="mt-1 block text-xs capitalize text-slate-500">{variant.packaging}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            {hasVariants && selectedVariant && (
              <div className="mt-8">
                <p className="mb-3 font-semibold text-slate-900">Quantity</p>
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity(q => q + 1)}
                  onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                  size="md"
                />
              </div>
            )}

            {/* Total */}
            {hasVariants && selectedVariant && (
              <div className="mt-6 rounded-2xl border border-cream-tan bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">Selected</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {formatQuantity(selectedVariant)} · {selectedVariant.packaging}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Total</p>
                    <p className="mt-1 text-xl font-bold text-primary">
                      ₹{selectedVariant.price * quantity}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={!hasVariants || !selectedVariant}
                fullWidth
                className="sm:w-auto sm:min-w-[200px]"
              >
                Add to Cart
              </Button>
              <Link to="/cart" className="sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth>
                  View Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <ProductTabs tabs={tabs} />

        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} />
      </div>
    </main>
  );
}

export default ProductDetailsPage;
