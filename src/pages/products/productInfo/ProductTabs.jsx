import { useEffect, useState } from "react";

const tabs = [
  ["description", "Description"],
  ["size", "Size Guide"],
  ["shipping", "Shipping & Returns"],
  ["reviews", "Reviews"],
];

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const openSizeGuide = () => {
      setActiveTab("size");
      document.getElementById("product-information")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    window.addEventListener("kithaus:open-size-guide", openSizeGuide);
    return () => window.removeEventListener("kithaus:open-size-guide", openSizeGuide);
  }, []);

  return (
    <section id="product-information" className="scroll-mt-28 border-y border-[#dfe3df] bg-white">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Navigation */}
        <div className="flex gap-6 overflow-x-auto border-b border-[#e1e5e1]">

          {tabs.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              aria-pressed={activeTab === key}
              className={`
                relative whitespace-nowrap py-4 text-[9px] font-black uppercase
                ${
                  activeTab === key
                    ? "text-secondary"
                    : "text-gray-500"
                }
              `}
            >
              {label}

              {activeTab === key && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-secondary" />
              )}
            </button>
          ))}

        </div>

        {/* Content */}
        <div className="max-w-4xl py-6">

          {activeTab === "description" && (
            <p className="text-xs leading-6 text-gray-500">
              {product.description}
            </p>
          )}

          {activeTab === "size" && (
            <div className="grid grid-cols-4 gap-px overflow-hidden rounded bg-gray-200 text-xs">

              {["Size", "Chest*", "Length*", "Shoulder*"].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-gray-100 p-3 font-black"
                  >
                    {item}
                  </div>
                )
              )}

              {product.sizes.map((size, index) => (
                <div key={size} className="contents">
                  <div className="bg-white p-3 font-bold">{size}</div>
                  <div className="bg-white p-3">{38 + index * 2}&quot;</div>
                  <div className="bg-white p-3">{27 + index}&quot;</div>
                  <div className="bg-white p-3">{17 + index}&quot;</div>
                </div>
              ))}
              <p className="col-span-4 bg-gray-100 p-3 text-[10px] text-gray-500">
                *Illustrative fit measurements only; this demo is not connected
                to a garment manufacturer.
              </p>
            </div>
          )}

          {activeTab === "shipping" && (
            <p className="text-xs leading-6 text-gray-500">
              This storefront is a frontend demo. It does not process payments,
              fulfill shipments, or accept returns.
            </p>
          )}

          {activeTab === "reviews" && (
            <p className="text-xs leading-6 text-gray-500">
              Reviews are not available for this demo product yet.
            </p>
          )}

        </div>
      </div>
    </section>
  );
}

export default ProductTabs;
