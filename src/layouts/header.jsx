import { useEffect, useRef, useState } from "react";
import { CircleUser, Menu, ShoppingCart, Truck, X } from "lucide-react";
import BrandMark from "../components/BrandMark";
import { Link, NavLink } from "react-router";
import { useCart } from "../features/cart/useCart.js";

const navLink = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/clubKits",
    label: "Club Kits",
  },
  {
    link: "/nationalTeam",
    label: "National Teams",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const { itemCount } = useCart();

  const closeMenu = () => {
    menuButtonRef.current?.focus();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        menuButtonRef.current?.focus();
        setIsMenuOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className=" bg-gray-100">
      {/* upper header section */}
      <section className=" w-full bg-surface font-archivo">
        <div className="flex items-center justify-between px-4 py-2 text-[10px] font-semibold text-gray-600 sm:px-8 sm:text-xs lg:px-16 lg:py-1">
          <div className="flex items-center gap-2">
            <Truck size={16} />{" "}
            <span>FREE SHIPPING ON ALL ORDERS OVER $99</span>
          </div>
          <p className="hidden lg:block">
            USE CODE: KITHAUS10 FOR 10% OFF YOUR FIRST ORDER
          </p>
          <p className="hidden lg:block">LIVE SUPPORT // 24/7</p>
        </div>
      </section>

      <nav className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-gray-300 px-4 py-3 sm:px-8 lg:flex-nowrap lg:gap-4 lg:px-16 lg:py-4">
        {/* badge or logo */}

        <BrandMark />
        {/* actual pages nav links */}
        <div className="order-3 hidden w-full min-w-0 items-center gap-5 overflow-x-auto pb-1 lg:order-2 lg:flex lg:w-auto lg:gap-8 lg:overflow-visible lg:pb-0">
          {navLink.map((item) => (
            <NavLink key={item.link} to={item.link} className="shrink-0">
              <span className="text-sm font-semibold duration-300 hover:text-secondary lg:text-base">
                {item.label.toUpperCase()}
              </span>
            </NavLink>
          ))}
        </div>
        {/* alternative links */}
        <div className="order-2 ml-auto flex shrink-0 items-center gap-3 lg:order-3 lg:ml-0 lg:gap-4">
          {/* search section */}
          <div className="relative hidden w-max sm:block">
            <input
              className="border border-gray-400 rounded-full px-4 py-1 text-xs text-black/70 focus:outline-none cursor-pointer "
              type="text"
              placeholder="Search kits..."
            />
          </div>

          <Link
            to="/account"
            aria-label="Account dashboard"
            className="text-gray-800 hover:text-secondary"
          >
            <CircleUser size={20} />
          </Link>
          <Link
            to="/cart"
            aria-label={`Shopping bag${
              itemCount ? `, ${itemCount} ${itemCount === 1 ? "item" : "items"}` : ""
            }`}
            className="relative text-gray-800 hover:text-secondary"
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-secondary px-1 text-[9px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <>
        {isMenuOpen && (
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
          />
        )}
        <div
          className={`fixed inset-0 z-[70] overflow-hidden lg:hidden ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            aria-modal={isMenuOpen || undefined}
            inert={!isMenuOpen}
            role="dialog"
            className={`absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col bg-white px-6 py-6 shadow-2xl transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? "pointer-events-auto translate-x-0"
                : "pointer-events-none translate-x-full"
            }`}
          >
            <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-text">
                Navigation
              </span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col">
              {navLink.map((item, index) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `border-b border-gray-100 py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      isActive
                        ? "text-secondary"
                        : "text-gray-800 hover:text-secondary"
                    }`
                  }
                >
                  <span className="mr-4 text-xs text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-gray-200 pt-5">
              <Link
                to="/account"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-3 text-xs font-bold uppercase"
              >
                <CircleUser size={16} /> Account
              </Link>
              <Link
                to="/cart"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-md bg-secondary px-3 py-3 text-xs font-bold uppercase text-white"
              >
                <ShoppingCart size={16} /> Bag ({itemCount})
              </Link>
            </div>
          </nav>
        </div>
      </>
    </header>
  );
}
