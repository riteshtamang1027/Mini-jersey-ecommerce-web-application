import { useState } from "react";

export default function NewsLetter() {
  const [status, setStatus] = useState("");

  const subscribe = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email")?.toString().trim().toLowerCase();

    if (!email) return;

    try {
      const subscribers = JSON.parse(localStorage.getItem("kithaus-newsletter") ?? "[]");
      const nextSubscribers = Array.isArray(subscribers) ? subscribers : [];
      if (nextSubscribers.includes(email)) {
        setStatus("This email is already on the list.");
        return;
      }
      localStorage.setItem("kithaus-newsletter", JSON.stringify([...nextSubscribers, email]));
      setStatus("You're on the list. This demo stores signups on this device only.");
      form.reset();
    } catch (error) {
      console.error("Could not save newsletter subscription.", error);
      setStatus("We couldn't save your signup. Please try again.");
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
      <div className="flex w-full max-w-2xl flex-col items-center gap-4 text-center font-archivo">
        <h3 className="text-2xl font-extrabold sm:text-3xl">JOIN THE KITHAUS ALLIANCE</h3>
        <p className="text-sm text-muted-text font-semibold">
          Get local updates on the latest demo collection and retro-inspired
          drops. Subscriptions are stored on this device only.
        </p>
        <form onSubmit={subscribe} className="flex w-full flex-col gap-2 sm:flex-row">
          <input name="email" autoComplete="email" className="h-11 min-w-0 flex-1 rounded-lg border border-border bg-surface px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" type="email" required aria-label="Email address" placeholder="Enter your email address" />
          <button type="submit" className="h-11 shrink-0 rounded-lg bg-secondary px-5 text-sm font-semibold text-white">SUBSCRIBE</button>
        </form>
        <p aria-live="polite" className="min-h-5 text-xs font-semibold text-secondary">{status}</p>
      </div>
    </section>
  );
}
