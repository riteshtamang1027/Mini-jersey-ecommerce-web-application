import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Minus,
  Plus,
  ShoppingBag,
  SlidersHorizontal,
  Star,
} from "lucide-react";

const galleryImages = [
  {
    src: "/products/ac-milan-front.jpg",
    alt: "AC Milan Home Jersey",
  },
  {
    src: "/products/ac-milan-back.jpg",
    alt: "AC Milan Jersey Back",
  },
  {
    src: "/products/ac-milan-detail.jpg",
    alt: "AC Milan Jersey Detail",
  },
  {
    src: "/products/ac-milan-model.jpg",
    alt: "AC Milan Jersey Model",
  },
];

const relatedProducts = [
  {
    name: "LONDON FC",
    subtitle: "2026 Away Jersey · Vapor Edition",
    price: "$125.00",
    image: "/products/london-fc.jpg",
    tag: "VAPOR ELITE",
  },
  {
    name: "MÜNCHEN ATHLETIC",
    subtitle: "1994 Retro Classic Long-Sleeve",
    price: "$140.00",
    image: "/products/munchen.jpg",
    tag: "TIME VAULT",
  },
  {
    name: "TOKYO SHIBUYA",
    subtitle: "2026 Special Edition Custom Kit",
    price: "$115.00",
    image: "/products/tokyo.jpg",
    tag: "SPECIAL EDITION",
  },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colors = [
  {
    name: "Rossoneri",
    value: "#E31B35",
  },
  {
    name: "Black",
    value: "#181818",
  },
  {
    name: "Gold",
    value: "#F2A900",
  },
];

import React from 'react'

export default function JerseyProduct() {
 const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("XL");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <main className="min-h-screen bg-[#f5f6f3] text-[#161a18]">
      {/* =========================
          PRODUCT SECTION
      ========================== */}

      <section className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* =========================
              LEFT - IMAGE GALLERY
          ========================== */}

          <div className="flex flex-col-reverse gap-4 md:flex-row">

            {/* Thumbnails */}
            <div className="flex gap-3 md:w-[82px] md:flex-col">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    group relative h-[68px] w-[68px]
                    overflow-hidden rounded-md border-2
                    bg-white transition-all
                    md:h-[76px] md:w-[76px]
                    ${
                      selectedImage === index
                        ? "border-[#b8ff00]"
                        : "border-[#d9ddd8] hover:border-[#8f9791]"
                    }
                  `}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-lg border border-[#dfe3df] bg-white sm:min-h-[550px] lg:min-h-[640px]">

              {/* Product label */}
              <div className="absolute left-5 top-5 z-10">
                <span className="inline-flex bg-[#b8ff00] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-black">
                  Vapor Elite Match Jersey
                </span>
              </div>

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="h-full w-full object-cover"
              />

              {/* Image navigation */}
              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage - 1 + galleryImages.length) %
                      galleryImages.length
                  )
                }
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9ddd8] bg-white/90 shadow-sm backdrop-blur transition hover:bg-[#b8ff00]"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage + 1) % galleryImages.length
                  )
                }
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9ddd8] bg-white/90 shadow-sm backdrop-blur transition hover:bg-[#b8ff00]"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* =========================
              RIGHT - PRODUCT INFO
          ========================== */}

          <div className="flex flex-col justify-center">

            {/* Category */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rotate-45 bg-[#b8ff00]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d756f]">
                AC Milan · Serie A
              </span>
            </div>

            {/* Product title */}
            <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              AC Milan
              <br />
              Home Kit
              <br />
              <span className="text-[#707870]">2026/27</span>
            </h1>

            {/* Price */}
            <div className="mt-7 flex items-center gap-4">
              <span className="text-3xl font-black text-[#81bd00]">
                $110.00
              </span>

              <span className="rounded bg-[#e7ebe5] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-[#59605b]">
                In stock / Ships next day
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#69716b]">
              Engineered with our signature breathable AeroMesh fabric,
              featuring custom sleeve weave collars, woven team crests,
              and vintage tournament-ready trims.
            </p>

            <div className="my-7 h-px bg-[#dfe3df]" />

            {/* Color */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Colorway Selector
                </span>

                <span className="text-xs font-medium text-[#737b75]">
                  {colors[selectedColor].name}
                </span>
              </div>

              <div className="flex gap-3">
                {colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(index)}
                    aria-label={color.name}
                    className={`
                      flex h-8 w-8 items-center justify-center rounded-full
                      border-2 transition-all
                      ${
                        selectedColor === index
                          ? "border-[#b8ff00]"
                          : "border-transparent"
                      }
                    `}
                  >
                    <span
                      className="h-5 w-5 rounded-full border border-black/10"
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-7">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Select Size (US/EU)
                </span>

                <button className="text-[10px] font-black uppercase text-[#78ad00] underline underline-offset-4">
                  Size Advisor
                </button>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      h-11 rounded-sm text-xs font-black transition-all
                      ${
                        selectedSize === size
                          ? "bg-[#b8ff00] text-black"
                          : "bg-[#e8ebe7] text-[#323733] hover:bg-[#dce0db]"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-7 grid grid-cols-[110px_1fr] gap-3">

              <div className="flex h-12 items-center justify-between rounded-sm border border-[#d4d9d4] bg-white px-3">
                <button
                  onClick={decreaseQuantity}
                  className="text-[#636a64] transition hover:text-black"
                >
                  <Minus size={15} />
                </button>

                <span className="text-sm font-black">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="text-[#636a64] transition hover:text-black"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#b8ff00] text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#a9eb00]">
                <ShoppingBag size={16} />
                Add to Bag
              </button>
            </div>

            {/* Customize */}
            <button className="mt-3 flex h-12 items-center justify-center gap-2 rounded-sm border-2 border-[#161a18] bg-transparent text-xs font-black uppercase tracking-wide transition hover:bg-[#161a18] hover:text-white">
              <SlidersHorizontal size={15} />
              Customize This Jersey
            </button>

            {/* Shipping information */}
            <div className="mt-7 grid grid-cols-3 border-y border-[#dfe3df] py-5">
              <div>
                <p className="text-[9px] font-black uppercase">
                  Shipping
                </p>
                <p className="mt-1 text-xs text-[#747b75]">
                  1–3 business days
                </p>
              </div>

              <div className="border-x border-[#dfe3df] px-4">
                <p className="text-[9px] font-black uppercase">
                  Returns
                </p>
                <p className="mt-1 text-xs text-[#747b75]">
                  30 day returns
                </p>
              </div>

              <div className="pl-4">
                <p className="text-[9px] font-black uppercase">
                  Authentic
                </p>
                <p className="mt-1 text-xs text-[#747b75]">
                  Official product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DESCRIPTION SECTION
      ========================== */}

      <section className="border-y border-[#dce1dc] bg-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

          {/* Tabs */}
          <div className="flex gap-7 overflow-x-auto border-b border-[#e0e4e0]">
            {[
              ["description", "Description"],
              ["size", "Size Guide"],
              ["shipping", "Shipping & Returns"],
              ["reviews", "Reviews (128)"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  relative whitespace-nowrap py-5 text-xs font-black uppercase tracking-wide
                  ${
                    activeTab === key
                      ? "text-[#78ad00]"
                      : "text-[#777f79]"
                  }
                `}
              >
                {label}

                {activeTab === key && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#b8ff00]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="max-w-4xl py-8">
            {activeTab === "description" && (
              <>
                <p className="text-sm leading-7 text-[#616962]">
                  Inspired by the roaring terrace culture of Milan,
                  the AC Milan 2026/27 Home Kit marries absolute
                  heritage with modern sportswear design. Featuring
                  the legendary vertical Rossoneri stripes structured
                  by custom diamond knit textures, the jersey is
                  crafted using 100% recycled high-performance
                  polyester fibers.
                </p>

                <p className="mt-4 text-xs leading-6 text-[#858c86]">
                  Tournament standard moisture-wicking technology,
                  lightweight AeroMesh construction, and custom
                  woven crest details complete the kit.
                </p>
              </>
            )}

            {activeTab === "size" && (
              <div className="overflow-hidden rounded-lg border border-[#e1e5e1]">
                <div className="grid grid-cols-4 bg-[#f3f5f2] px-4 py-3 text-xs font-black uppercase">
                  <span>Size</span>
                  <span>Chest</span>
                  <span>Length</span>
                  <span>Shoulder</span>
                </div>

                {["S", "M", "L", "XL"].map((size, index) => (
                  <div
                    key={size}
                    className="grid grid-cols-4 border-t border-[#e1e5e1] px-4 py-3 text-sm"
                  >
                    <span className="font-bold">{size}</span>
                    <span>{38 + index * 2}"</span>
                    <span>{27 + index}"</span>
                    <span>{17 + index}"</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <p className="text-sm leading-7 text-[#616962]">
                Orders are processed within 1 business day.
                Standard delivery typically takes 1–3 business days.
                Items may be returned within 30 days in accordance
                with the store's return policy.
              </p>
            )}

            {activeTab === "reviews" && (
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black">4.8</span>

                <div>
                  <div className="flex text-[#b8ff00]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-xs text-[#777f79]">
                    Based on 128 reviews
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================
          RELATED PRODUCTS
      ========================== */}

      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">

        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#78ad00]">
              Complete the look
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Matching Capsules
              <span className="text-[#78ad00]"> // </span>
              Related Gems
            </h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7ebe6] transition hover:bg-[#dce1dc]">
              <ArrowLeft size={15} />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b8ff00] transition hover:bg-[#a9eb00]">
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-lg border border-[#dce1dc] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product image */}
              <div className="relative aspect-[1.25/1] overflow-hidden bg-[#eef0ed]">

                <span className="absolute left-3 top-3 z-10 bg-[#b8ff00] px-2 py-1 text-[8px] font-black uppercase text-black">
                  {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product details */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-black uppercase">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-[10px] text-[#818881]">
                      {product.subtitle}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-sm font-black text-[#78ad00]">
                    {product.price}
                  </span>
                </div>

                <button className="mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-sm bg-[#b8ff00] text-[10px] font-black uppercase transition hover:bg-[#a9eb00]">
                  <Plus size={13} />
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
