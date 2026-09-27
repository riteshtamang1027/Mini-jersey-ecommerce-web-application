import { useState } from "react";
import { PackageCheck, UserRound } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../../features/cart/useCart.js";

const formatPrice = (price) => `$${price.toFixed(2)}`;

function AccountDashboard() {
  const { profile, orders, updateProfile } = useCart();
  const [saved, setSaved] = useState(false);

  const saveProfile = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateProfile({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
    });
    setSaved(true);
  };

  return (
    <main className="min-h-[60vh] bg-[#f5f6f3] px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          KITHAUS member space
        </p>
        <h1 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
          Account dashboard
        </h1>
        <p className="mt-2 text-sm text-muted-text">
          Your profile and order history are saved on this device.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          <section className="h-fit rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <UserRound size={21} />
              </span>
              <div>
                <h2 className="font-black uppercase">Profile details</h2>
                <p className="text-xs text-muted-text">Local demo profile</p>
              </div>
            </div>

            <form onSubmit={saveProfile} className="mt-5 space-y-4">
              <label className="block text-xs font-semibold">
                Full name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  defaultValue={profile.name}
                  className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </label>
              <label className="block text-xs font-semibold">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={profile.email}
                  className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </label>
              <label className="block text-xs font-semibold">
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  defaultValue={profile.phone}
                  className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </label>
              {saved && (
                <p role="status" className="text-xs font-semibold text-secondary">
                  Profile saved on this device.
                </p>
              )}
              <button
                type="submit"
                className="h-11 w-full rounded-md bg-secondary px-4 text-sm font-bold uppercase text-white hover:bg-secondary/90"
              >
                Save profile
              </button>
            </form>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-black uppercase">Order history</h2>
                <p className="mt-1 text-xs text-muted-text">
                  {orders.length} {orders.length === 1 ? "order" : "orders"}
                </p>
              </div>
              <PackageCheck className="text-secondary" size={23} />
            </div>

            {orders.length === 0 ? (
              <div className="mt-6 rounded-lg bg-gray-50 px-4 py-10 text-center">
                <p className="font-semibold">No orders yet</p>
                <p className="mt-2 text-sm text-muted-text">
                  Once you place a demo order, it will appear here.
                </p>
                <Link
                  to="/clubKits"
                  className="mt-5 inline-flex rounded-md bg-secondary px-4 py-2.5 text-sm font-bold text-white hover:bg-secondary/90"
                >
                  Browse kits
                </Link>
              </div>
            ) : (
              <div className="mt-5 space-y-4">
                {orders.map((order) => (
                  <article
                    key={order.id}
                    className="rounded-lg border border-gray-200 p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-bold">{order.id}</p>
                        <p className="mt-1 text-xs text-muted-text">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                        {order.status}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                      {order.items.map((item) => (
                        <li
                          key={`${order.id}-${item.id}`}
                          className="flex justify-between gap-4 text-sm"
                        >
                          <span>
                            {item.name} × {item.quantity}
                            {item.personalization && (
                              <span className="block text-xs text-muted-text">
                                Print: {[item.personalization.name, item.personalization.number]
                                  .filter(Boolean)
                                  .join(" · ")}
                              </span>
                            )}
                          </span>
                          <span className="shrink-0 font-semibold">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-between border-t border-gray-100 pt-4 text-sm font-bold">
                      <span>Total</span>
                      <span>{formatPrice(order.total)}</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default AccountDashboard;
