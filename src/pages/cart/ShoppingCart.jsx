import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../../features/cart/useCart.js";
import StoreImage from "../../components/StoreImage";

const formatPrice = (price) => `$${price.toFixed(2)}`;

function ShoppingCart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <main className="min-h-[60vh] px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Your selection
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-black uppercase sm:text-4xl">
            Shopping bag
          </h1>
          <span className="text-sm text-muted-text">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        {items.length === 0 ? (
          <section className="mt-8 flex flex-col items-center rounded-xl border border-border bg-surface px-5 py-14 text-center shadow-lg shadow-black/10">
            <ShoppingBag className="text-secondary" size={36} />
            <h2 className="mt-5 text-xl font-bold">Your bag is waiting</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-text">
              Browse the latest kits and add a favorite to get started.
            </p>
            <Link
              to="/clubKits"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-secondary/90"
            >
              Explore kits <ArrowRight size={16} />
            </Link>
          </section>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="divide-y divide-border rounded-xl border border-border bg-surface px-4 shadow-lg shadow-black/10 sm:px-6">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center"
                >
                  <StoreImage
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-full rounded-lg bg-surface-raised object-cover sm:w-28"
                  />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-bold uppercase">{item.name}</h2>
                    <p className="mt-1 text-sm text-muted-text">
                      {[item.season, item.size, item.color]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    {item.personalization && (
                      <p className="mt-1 text-xs font-semibold text-muted-text">
                        Print: {[item.personalization.name, item.personalization.number]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                    <p className="mt-3 font-bold text-secondary">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <div className="flex h-9 items-center rounded-md border border-border">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2.5 text-muted-text hover:text-secondary"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-7 text-center text-sm font-bold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2.5 text-muted-text hover:text-secondary"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-text hover:text-red-400"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <aside className="h-fit rounded-xl border border-border bg-surface p-5 shadow-lg shadow-black/10 sm:p-6">
              <h2 className="text-lg font-black uppercase">Order summary</h2>
              <div className="mt-5 flex justify-between text-sm">
                <span className="text-muted-text">Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-muted-text">Shipping</span>
                <span className="font-semibold">
                  {subtotal >= 99 ? "Free" : "Calculated at checkout"}
                </span>
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <div className="flex justify-between font-bold">
                  <span>Estimated total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-muted-text">
                  Taxes and shipping are confirmed during checkout.
                </p>
              </div>
              <Link
                to="/checkout"
                className="mt-6 flex h-12 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm font-bold uppercase text-white transition hover:bg-secondary/90"
              >
                Continue to checkout <ArrowRight size={16} />
              </Link>
              <Link
                to="/clubKits"
                className="mt-4 block text-center text-xs font-semibold text-muted-text hover:text-secondary"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default ShoppingCart;
