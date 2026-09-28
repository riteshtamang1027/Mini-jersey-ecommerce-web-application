import { useEffect, useRef, useState } from "react";
import { CircleUser, Menu, Search, ShoppingCart, Truck, X } from "lucide-react";
import BrandMark from "../components/BrandMark";
import { Link, NavLink, useNavigate } from "react-router";
import { useCart } from "../features/cart/useCart.js";
import { products } from "../data/products.js";

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
  const [searchTerm, setSearchTerm] = useState("");
  const menuButtonRef = useRef(null);
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const submitSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;

    const matches = products.filter((product) =>
      `${product.name} ${product.category} ${product.season} ${product.league} ${product.jerseyType}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    const nationalOnly = matches.length > 0 && matches.every((product) =>
      product.category.toLowerCase().includes("national")
    );
    navigate(`${nationalOnly ? "/nationalTeam" : "/clubKits"}?search=${encodeURIComponent(query)}`);
    setIsMenuOpen(false);
  };

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
    <header className="border-b border-border/70 bg-background/95 shadow-lg shadow-black/10 backdrop-blur-xl">
      {/* upper header section */}
      <section className="w-full bg-surface font-archivo">
        <div className="flex items-center justify-between px-4 py-2 text-[10px] font-semibold text-muted-text sm:px-8 sm:text-xs lg:px-16 lg:py-1">
          <div className="flex items-center gap-2">
            <Truck size={16} />{" "}
            <span>KITHAUS FOOTBALL CULTURE · 2026</span>
          </div>
          <p className="hidden lg:block">NEW SEASON COLLECTION // 26–27</p>
          <p className="hidden lg:block">FRONTEND STORE DEMO · NO PAYMENTS</p>
        </div>
      </section>

      <nav className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-border px-4 py-3 sm:px-8 lg:flex-nowrap lg:gap-4 lg:px-16 lg:py-4">
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
          <form onSubmit={submitSearch} className="relative hidden w-max sm:block">
            <input
              className="h-9 w-36 rounded-full border border-border bg-surface-raised py-1 pl-3 pr-9 text-xs text-foreground placeholder:text-muted-text focus:border-secondary focus:outline-none md:w-44"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search kits..."
              aria-label="Search kits"
            />
            <button type="submit" aria-label="Submit search" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-text hover:text-secondary">
              <Search size={15} />
            </button>
          </form>

          <Link
            to="/account"
            aria-label="Account dashboard"
            className="text-foreground hover:text-secondary"
          >
            <CircleUser size={20} />
          </Link>
          <Link
            to="/cart"
            aria-label={`Shopping bag${
              itemCount ? `, ${itemCount} ${itemCount === 1 ? "item" : "items"}` : ""
            }`}
            className="relative text-foreground hover:text-secondary"
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
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:hidden"
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
            className={`absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col border-l border-border bg-surface px-6 py-6 shadow-2xl shadow-black/30 transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? "pointer-events-auto translate-x-0"
                : "pointer-events-none translate-x-full"
            }`}
          >
            <div className="mb-8 flex items-center justify-between border-b border-border pb-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-text">
                Navigation
              </span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={submitSearch} className="mb-5 flex items-center gap-2 rounded-lg border border-border px-3">
              <Search size={17} className="shrink-0 text-muted-text" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search kits"
                placeholder="Search jerseys..."
                className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
              <button type="submit" className="text-xs font-bold text-secondary">SEARCH</button>
            </form>

            <div className="flex flex-col">
              {navLink.map((item, index) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `border-b border-border py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      isActive
                        ? "text-secondary"
                        : "text-foreground hover:text-secondary"
                    }`
                  }
                >
                  <span className="mr-4 text-xs text-muted-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-border pt-5">
              <Link
                to="/account"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-md border border-border px-3 py-3 text-xs font-bold uppercase hover:border-secondary hover:text-secondary"
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
