import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import ProductCard from "../../features/products/ProductCard";
import { products } from "../../data/products.js";
import ProductGallery from "./productGallery/ProductGallery.jsx";
import ProductInfo from "./productInfo/ProductInfo.jsx";
import ProductTabs from "./productInfo/ProductTabs.jsx";

function JerseyProduct({ getProduct }) {
  const { productId } = useParams();
  const product = getProduct(productId);

  if (!product) {
    return <Navigate to="/clubKits" replace />;
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f5f6f3] text-[#161a18]">
      <div className="mx-auto max-w-[1440px] px-4 pt-5 sm:px-6 lg:px-10">
        <Link
          to={product.category.toLowerCase().includes("national") ? "/nationalTeam" : "/clubKits"}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase text-muted-text hover:text-secondary"
        >
          <ArrowLeft size={15} /> Back to {product.category.toLowerCase().includes("national") ? "national kits" : "club kits"}
        </Link>
      </div>

      <section className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <ProductGallery images={product.images} tag={product.category} />
          <ProductInfo product={product} image={product.image} />
        </div>
      </section>

      <ProductTabs product={product} />

      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mb-6 flex items-end justify-between gap-3 sm:mb-7">
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
              Complete the look
            </p>
            <h2 className="text-2xl font-black uppercase tracking-tight sm:text-4xl">
              More kits <span className="text-secondary">//</span> More history
            </h2>
          </div>
          <Link
            to={product.category.toLowerCase().includes("national") ? "/nationalTeam" : "/clubKits"}
            className="hidden items-center gap-2 text-xs font-bold uppercase text-secondary sm:flex"
          >
            View all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default JerseyProduct;
