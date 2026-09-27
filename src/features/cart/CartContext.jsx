import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "./CartStore.js";

const CART_STORAGE_KEY = "kithaus-cart";
const ACCOUNT_STORAGE_KEY = "kithaus-account";
const ORDERS_STORAGE_KEY = "kithaus-orders";

function readStorage(key, fallback, isValid) {
  try {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue === null) return fallback;

    const parsedValue = JSON.parse(storedValue);
    if (isValid(parsedValue)) return parsedValue;

    console.error(`Ignoring invalid saved data for "${key}".`);
  } catch (error) {
    console.error(`Could not read "${key}" from local storage.`, error);
  }

  return fallback;
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Could not save "${key}" to local storage.`, error);
  }
}

function isCart(value) {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        Number.isFinite(item.price) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
    )
  );
}

function isProfile(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof value.name === "string" &&
    typeof value.email === "string" &&
    typeof value.phone === "string"
  );
}

function isOrders(value) {
  return (
    Array.isArray(value) &&
    value.every(
      (order) =>
        typeof order.id === "string" &&
        typeof order.createdAt === "string" &&
        Array.isArray(order.items) &&
        Number.isFinite(order.total)
    )
  );
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() =>
    readStorage(CART_STORAGE_KEY, [], isCart)
  );
  const [profile, setProfile] = useState(() =>
    readStorage(
      ACCOUNT_STORAGE_KEY,
      { name: "", email: "", phone: "" },
      isProfile
    )
  );
  const [orders, setOrders] = useState(() =>
    readStorage(ORDERS_STORAGE_KEY, [], isOrders)
  );

  useEffect(() => writeStorage(CART_STORAGE_KEY, items), [items]);
  useEffect(() => writeStorage(ACCOUNT_STORAGE_KEY, profile), [profile]);
  useEffect(() => writeStorage(ORDERS_STORAGE_KEY, orders), [orders]);

  const value = useMemo(() => {
    const addItem = (product, quantity = 1) => {
      if (
        typeof product.id !== "string" ||
        typeof product.name !== "string" ||
        !Number.isFinite(product.price) ||
        !Number.isInteger(quantity) ||
        quantity < 1
      ) {
        throw new Error("A valid product and quantity are required.");
      }

      setItems((currentItems) => {
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (!existingItem) {
          return [...currentItems, { ...product, quantity }];
        }

        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      });
    };

    const updateQuantity = (id, quantity) => {
      if (!Number.isInteger(quantity)) {
        throw new Error("Cart quantity must be a whole number.");
      }

      setItems((currentItems) =>
        quantity < 1
          ? currentItems.filter((item) => item.id !== id)
          : currentItems.map((item) =>
              item.id === id ? { ...item, quantity } : item
            )
      );
    };

    const removeItem = (id) => {
      setItems((currentItems) =>
        currentItems.filter((item) => item.id !== id)
      );
    };

    const updateProfile = (nextProfile) => {
      setProfile({
        name: nextProfile.name.trim(),
        email: nextProfile.email.trim(),
        phone: nextProfile.phone.trim(),
      });
    };

    const placeOrder = ({ customer, paymentMethod }) => {
      if (items.length === 0) {
        throw new Error("Add an item to your bag before checking out.");
      }

      const order = {
        id: `KH-${Date.now().toString(36).toUpperCase()}`,
        createdAt: new Date().toISOString(),
        status: "Processing",
        paymentMethod,
        customer: { ...customer },
        items: items.map((item) => ({ ...item })),
        total: items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };

      setOrders((currentOrders) => [order, ...currentOrders]);
      setProfile({
        name: customer.name.trim(),
        email: customer.email.trim(),
        phone: customer.phone.trim(),
      });
      setItems([]);

      return order;
    };

    return {
      items,
      profile,
      orders,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      subtotal: items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      addItem,
      updateQuantity,
      removeItem,
      updateProfile,
      placeOrder,
    };
  }, [items, orders, profile]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
