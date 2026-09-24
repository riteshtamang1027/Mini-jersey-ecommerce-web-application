
export default function NewsLetter() {
  return (
    <main className=" flex  items-center justify-center p-16 w-full">
      <section className="font-archivo flex flex-col items-center gap-4 max-w-lg text-center">
        <h3 className="text-3xl font-extrabold">JOIN THE KITHAUS ALLIANCE</h3>
        <p className="text-sm text-muted-text font-semibold">
          Unlock first access to limited capsule collections, retro vault drops,
          and receive <span className="text-secondary">10% OFF</span> your first
          purchase.
        </p>
        <div className="flex items-center gap-2 justify-between w-full ">
            <input className="border border-gray-200  rounded-lg focus:outline-none py-2 px-4 text-sm w-92" type="text" placeholder="Enter your email address" />
            <button className="px-4 py-2 rounded-lg bg-secondary text-white text-sm cursor-pointer font-semibold">SUBSCRIBE</button>
        </div>
      </section>
    </main>
  );
}
