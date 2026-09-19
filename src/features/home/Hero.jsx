import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <main className="px-16">
      {/* Hero Section */}
      <section className="flex items-center justify-center gap-16">
        {/* Text section */}
        <div className="w-1/2 flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rotate-45 bg-secondary w-1"></div>
            <p className="text-sm font-bold text-secondary font-archivo">
              KITHAUS EXCLUSIVE PRE-ORDER
            </p>
          </div>
          <h1 className="text-7xl font-extrabold font-archivo p-0 leading-16 scale-y-136">
            WEAR THE <span className="text-secondary ">GAME</span>
          </h1>
          <p className="text-muted-text text-lg font-archivo tracking-wide">
            Engineered mesh fabrics, retro collared re-issues, and
            limited-edition design collaborations. Experience the absolute peak
            of football culture.
          </p>

          {/* Button section */}
          <div className="flex gap-4">
            <button className="text-base font-archivo font-bold border border-gray-200 px-4 py-2 rounded-lg bg-secondary flex items-center gap-2 cursor-pointer text-white">
              SHOP NOW <ArrowRight size={18} />
            </button>
            <button className="text-base font-archivo font-bold border border-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              THE VAULT ARCHIVE
            </button>
          </div>
        </div>

        <div className="w-1/2 h-160 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1665673313491-22509937fc9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVyc2V5fGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
