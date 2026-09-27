import { useState } from "react";

const tabs = [
  ["description", "Description"],
  ["size", "Size Guide"],
  ["shipping", "Shipping & Returns"],
  ["reviews", "Reviews (128)"],
];

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="border-y border-[#dfe3df] bg-white">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Navigation */}
        <div className="flex gap-6 overflow-x-auto border-b border-[#e1e5e1]">

          {tabs.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
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
              Inspired by the roaring terrace culture of Milan,
              the AC Milan 2026/27 Home Kit marries absolute
              heritage with modern sportswear design. Featuring
              the legendary vertical Rossoneri stripes structured
              by custom diamond knit textures.
            </p>
          )}

          {activeTab === "size" && (
            <div className="grid grid-cols-4 gap-px overflow-hidden rounded bg-gray-200 text-xs">

              {["Size", "Chest", "Length", "Shoulder"].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-gray-100 p-3 font-black"
                  >
                    {item}
                  </div>
                )
              )}

              {["S", "M", "L", "XL"].map((size, index) => (
                <>
                  <div className="bg-white p-3 font-bold">
                    {size}
                  </div>

                  <div className="bg-white p-3">
                    {38 + index * 2}"
                  </div>

                  <div className="bg-white p-3">
                    {27 + index}"
                  </div>

                  <div className="bg-white p-3">
                    {17 + index}"
                  </div>
                </>
              ))}

            </div>
          )}

          {activeTab === "shipping" && (
            <p className="text-xs leading-6 text-gray-500">
              Orders are processed within 1 business day.
              Standard delivery takes approximately 1–3
              business days. Returns are accepted within
              30 days.
            </p>
          )}

          {activeTab === "reviews" && (
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black">
                4.8
              </span>

              <div>
                <div className="text-secondary">
                  ★★★★★
                </div>

                <p className="text-[10px] text-gray-500">
                  128 reviews
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default ProductTabs;
