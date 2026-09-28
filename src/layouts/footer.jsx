import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router";
import BrandMark from "../components/BrandMark";
import SocialMedia from "../components/SocialMedia";

const footerGroups = [
  {
    title: "SHOP KITS",
    links: [
      { label: "Club Jerseys", to: "/clubKits" },
      { label: "National Teams", to: "/nationalTeam" },
      { label: "Retro Vault", to: "/clubKits" },
      { label: "New Drops", to: "/clubKits?sort=newest" },
      { label: "Customizer Lab", info: "customizer" },
      { label: "Accessories", info: "accessories" },
    ],
  },
  {
    title: "CUSTOMER CARE",
    links: [
      { label: "Delivery & Returns", info: "delivery" },
      { label: "Size Advisor", info: "size" },
      { label: "Track Your Order", to: "/account" },
      { label: "Vapor Knit Care", info: "care" },
      { label: "Contact Us", info: "contact" },
      { label: "FAQ", info: "faq" },
    ],
  },
  {
    title: "KITHAUS",
    links: [
      { label: "Our Story", info: "story" },
      { label: "Terrace Culture Journal", to: "/clubKits" },
      { label: "Sustainability", info: "sustainability" },
      { label: "Partners & Teams", to: "/nationalTeam" },
      { label: "Affiliates", info: "contact" },
      { label: "Careers", info: "contact" },
    ],
  },
];

const infoContent = {
  customizer: {
    title: "Personalize your kit",
    body: "Open any product page and choose “Add Name & Number” to save a custom print with your bag. Personalization is a local demo feature.",
    to: "/clubKits",
    action: "Browse kits",
  },
  accessories: {
    title: "Accessories",
    body: "The current demo collection focuses on jerseys. Accessories are not available yet.",
  },
  delivery: {
    title: "Delivery & returns",
    body: "This is a frontend demo: orders are saved on this device only. No shipping, returns, or payment processing is connected.",
  },
  size: {
    title: "Size advisor",
    body: "Choose a product and open Size Guide beside the size selector to see the demo fit chart.",
    to: "/clubKits",
    action: "Find a jersey",
  },
  care: {
    title: "Jersey care",
    body: "Care requirements vary by garment. Check the sewn-in care label on your jersey before washing or ironing.",
  },
  contact: {
    title: "Contact KITHAUS",
    body: "Customer support is not connected in this demo. Orders, profile details, and newsletter signups are stored locally in your browser.",
  },
  faq: {
    title: "Frequently asked questions",
    body: "Checkout is a demo and does not take payment. Your bag and profile are saved in this browser. Product availability and fulfillment are not connected to a store system.",
  },
  story: {
    title: "KITHAUS football culture",
    body: "A curated concept for supporters who collect the shirts, colors, and stories that make football personal.",
  },
  sustainability: {
    title: "Product information",
    body: "This demo does not yet provide verified material or sustainability details for its sample jerseys.",
  },
};

export default function Footer() {
  const [activeInfo, setActiveInfo] = useState(null);
  const info = activeInfo ? infoContent[activeInfo] : null;

  useEffect(() => {
    if (!info) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveInfo(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [info]);

  return (
    <div className="mt-12 border-t border-border bg-surface font-archivo">
      <footer className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-8 sm:pt-12 lg:px-16">
        <section className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4 lg:gap-12">
          <div className="col-span-2 flex w-full flex-col items-start gap-4 lg:col-span-1">
            <BrandMark />
            <p className="max-w-md text-sm leading-6 text-muted-text lg:text-[13px]">
              A football culture shop concept for supporters and collectors.
              Browse the collection, choose your kit, and make it yours.
            </p>
            <SocialMedia />
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="w-full">
              <h3 className="mb-4 text-xs font-bold leading-none tracking-wide text-secondary sm:mb-5 sm:text-sm">
                {group.title}
              </h3>
              <ul className="space-y-3 sm:space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-xs leading-5 text-muted-text transition-colors duration-200 hover:text-secondary sm:text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveInfo(link.info)}
                        className="text-left text-xs leading-5 text-muted-text transition-colors duration-200 hover:text-secondary sm:text-sm"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border py-5 text-center sm:mt-12 sm:flex-row sm:text-left">
          <p className="text-[10px] leading-5 text-muted-text sm:text-xs">
            © 2026 KITHAUS. FRONTEND STORE DEMO.
          </p>
          <p className="text-[10px] leading-5 text-muted-text sm:text-xs">
            BUILT FOR THE LOVE OF THE GAME.
          </p>
        </section>
      </footer>

      {info && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/55 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveInfo(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-info-title"
            className="w-full max-w-md rounded-xl border border-border bg-surface p-6 shadow-2xl shadow-black/30"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="footer-info-title" className="text-xl font-black uppercase">
                {info.title}
              </h2>
              <button
                type="button"
                aria-label="Close information"
                onClick={() => setActiveInfo(null)}
                className="rounded p-1 text-muted-text hover:bg-surface-raised hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-text">{info.body}</p>
            {info.to && (
              <Link
                to={info.to}
                onClick={() => setActiveInfo(null)}
                className="mt-5 inline-flex min-h-10 items-center rounded bg-secondary px-4 text-xs font-bold uppercase text-white"
              >
                {info.action}
              </Link>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
