import { CircleUser, ShoppingCart, Truck } from "lucide-react";
import BrandMark from "../components/BrandMark";
import { NavLink } from "react-router";

const navLink = [
  {
    link: "#",
    label: "Home",
  },
  {
    link: "/clubKits",
    label: "Club Kits",
  },
  {
    link: "nationalTeam",
    label: "National Teams",
  },
  {
    link: "/vault",
    label: "The Vault",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export default function Header() {
  return (
    <header className=" bg-gray-100">
      {/* upper header section */}
      <section className=" w-full bg-surface font-archivo">
        <div className="flex items-center justify-between px-16 py-1 text-xs font-semibold text-gray-600">
          <div className="flex items-center gap-2">
            <Truck size={16} />{" "}
            <span>FREE SHIPPING ON ALL ORDERS OVER $99</span>
          </div>
          <p>USE CODE: KITHAUS10 FOR 10% OFF YOUR FIRST ORDER</p>
          <p>LIVE SUPPORT // 24/7</p>
        </div>
      </section>

      <nav className="flex items-center justify-between px-16 gap-4 py-4 border-b border-gray-300">
        {/* badge or logo */}

        <BrandMark />
        {/* actual pages nav links */}
        <div className="flex items-center gap-8">
          {navLink.map((item, ind) => (
            <NavLink key={ind} to={item.link}>
              <span className="font-semibold hover:text-secondary duration-300 text-base">{item.label.toUpperCase()}</span>
            </NavLink>
          ))}
        </div>
        {/* alternative links */}
        <div className="flex items-center gap-4">
          {/* search section */}
          <div className="relative w-max">
            <input
              className="border border-gray-400 rounded-full px-4 py-1 text-xs text-black/70 focus:outline-none cursor-pointer "
              type="text"
              placeholder="Search kits..."
            />
          </div>

          <CircleUser size={20} className="text-gray-800" />
          <ShoppingCart size={20} className="text-gray-800" />
        </div>
      </nav>
    </header>
  );
}
