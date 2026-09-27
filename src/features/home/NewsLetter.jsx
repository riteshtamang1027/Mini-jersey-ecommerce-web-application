
export default function NewsLetter() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
      <div className="flex w-full max-w-2xl flex-col items-center gap-4 text-center font-archivo">
        <h3 className="text-2xl font-extrabold sm:text-3xl">JOIN THE KITHAUS ALLIANCE</h3>
        <p className="text-sm text-muted-text font-semibold">
          Unlock first access to limited capsule collections, retro vault drops,
          and receive <span className="text-secondary">10% OFF</span> your first
          purchase.
        </p>
        <form onSubmit={(event) => event.preventDefault()} className="flex w-full flex-col gap-2 sm:flex-row">
          <input className="h-11 min-w-0 flex-1 rounded-lg border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" type="email" required aria-label="Email address" placeholder="Enter your email address" />
          <button type="submit" className="h-11 shrink-0 rounded-lg bg-secondary px-5 text-sm font-semibold text-white">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
}
