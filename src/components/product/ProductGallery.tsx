import { useState } from 'react';

interface ProductGalleryProps {
  mainImage: string;
  productName: string;
  additionalImages?: string[];
}

function ProductGallery({ mainImage, productName, additionalImages = [] }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  
  const allImages = [mainImage, ...additionalImages];
  const hasMultipleImages = allImages.length > 1;

  return (
    <div className="lg:sticky lg:top-8">
      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl bg-cream-peach shadow-product">
        <img
          src={selectedImage}
          alt={productName}
          className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[580px]"
        />
      </div>

      {/* Thumbnails */}
      {hasMultipleImages && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-xl transition ${
                selectedImage === image
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`${productName} view ${index + 1}`}
                className="h-20 w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Product Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          No Refined Sugar
        </span>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          No Preservatives
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          Homemade
        </span>
      </div>
    </div>
  );
}

export default ProductGallery;
