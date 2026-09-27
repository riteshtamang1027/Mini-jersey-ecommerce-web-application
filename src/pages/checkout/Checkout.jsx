import { ArrowLeft, CheckCircle2, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link, Navigate } from "react-router";
import { useCart } from "../../features/cart/useCart.js";

const formatPrice = (price) => `$${price.toFixed(2)}`;

function Checkout() {
  const { items, subtotal, profile, placeOrder } = useCart();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash-on-delivery");

  if (items.length === 0 && !order) {
    return <Navigate to="/cart" replace />;
  }

  const submitOrder = (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const customer = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      address: String(formData.get("address") ?? ""),
      city: String(formData.get("city") ?? ""),
      postalCode: String(formData.get("postalCode") ?? ""),
    };

    try {
      setOrder(placeOrder({ customer, paymentMethod }));
    } catch (checkoutError) {
      setError(checkoutError.message);
    }
  };

  if (order) {
    return (
      <main className="min-h-[60vh] bg-[#f5f6f3] px-4 py-14 sm:px-8">
        <section className="mx-auto max-w-xl rounded-xl border border-gray-200 bg-white px-5 py-10 text-center sm:px-10">
          <CheckCircle2 className="mx-auto text-secondary" size={52} />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Order received
          </p>
          <h1 className="mt-2 text-3xl font-black uppercase">
            Thanks, {order.customer.name.split(" ")[0]}!
          </h1>
          <p className="mt-3 text-sm leading-6 text-muted-text">
            Your demo order has been saved to this device. No payment was
            processed.
          </p>
          <div className="mt-6 rounded-lg bg-gray-50 p-4 text-left text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-text">Order number</span>
              <span className="font-bold">{order.id}</span>
            </div>
            <div className="mt-3 flex justify-between gap-4">
              <span className="text-muted-text">Total</span>
              <span className="font-bold">{formatPrice(order.total)}</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/account"
              className="rounded-md bg-secondary px-5 py-3 text-sm font-bold text-white hover:bg-secondary/90"
            >
              View your account
            </Link>
            <Link
              to="/"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-bold hover:border-secondary hover:text-secondary"
            >
              Back to store
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-[60vh] bg-[#f5f6f3] px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-text hover:text-secondary"
        >
          <ArrowLeft size={16} /> Back to bag
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <h1 className="text-3xl font-black uppercase sm:text-4xl">
            Checkout
          </h1>
          <LockKeyhole className="text-secondary" size={18} />
        </div>
        <p className="mt-2 text-sm text-muted-text">
          Demo checkout only — no real payment is collected.
        </p>

        <form
          onSubmit={submitOrder}
          className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]"
        >
          <div className="space-y-6">
            <section className="rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
              <h2 className="text-lg font-black uppercase">
                Contact and delivery
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold sm:col-span-2">
                  Full name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    defaultValue={profile.name}
                    className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </label>
                <label className="text-xs font-semibold">
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
                <label className="text-xs font-semibold">
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    defaultValue={profile.phone}
                    className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </label>
                <label className="text-xs font-semibold sm:col-span-2">
                  Street address
                  <input
                    required
                    name="address"
                    autoComplete="street-address"
                    className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </label>
                <label className="text-xs font-semibold">
                  City
                  <input
                    required
                    name="city"
                    autoComplete="address-level2"
                    className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </label>
                <label className="text-xs font-semibold">
                  Postal code
                  <input
                    required
                    name="postalCode"
                    autoComplete="postal-code"
                    className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
              <h2 className="text-lg font-black uppercase">Payment method</h2>
              <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-lg border border-secondary/40 bg-secondary/5 p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  checked={paymentMethod === "cash-on-delivery"}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                  className="mt-0.5 accent-secondary"
                />
                <span>
                  <span className="block text-sm font-bold">
                    Cash on delivery
                  </span>
                  <span className="mt-1 block text-xs text-muted-text">
                    Demo selection only. No payment will be processed.
                  </span>
                </span>
              </label>
            </section>
          </div>

          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-black uppercase">Your order</h2>
            <ul className="mt-4 space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between gap-4 text-sm">
                  <span className="min-w-0">
                    <span className="block font-semibold">{item.name}</span>
                    <span className="text-xs text-muted-text">
                      Qty {item.quantity}
                    </span>
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
            <div className="mt-5 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-text">Shipping</span>
                <span>{subtotal >= 99 ? "Free" : "Calculated later"}</span>
              </div>
              <div className="mt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>
            {error && (
              <p role="alert" className="mt-4 text-sm font-semibold text-red-600">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="mt-6 h-12 w-full rounded-md bg-secondary px-4 text-sm font-bold uppercase text-white transition hover:bg-secondary/90"
            >
              Place demo order
            </button>
          </aside>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
