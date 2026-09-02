import { useEffect, useState } from 'react';
import { getProducts, type Product } from '../../api/productApi';
import ProductCard from './ProductCard';
import { LoadingSpinner } from '../ui';

interface RelatedProductsProps {
  currentProductId: number;
}

function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        // Filter out current product and show up to 2 related products
        const related = data.filter((p) => p.id !== currentProductId).slice(0, 2);
        setProducts(related);
      } catch (error) {
        console.error('Failed to fetch related products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentProductId]);

  if (loading) {
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">You Might Also Like</h2>
        <div className="mt-6">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">You Might Also Like</h2>
        <span className="text-sm text-slate-500">{products.length} products</span>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
