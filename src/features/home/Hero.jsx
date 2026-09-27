import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-4 py-6 sm:gap-10 sm:px-8 sm:py-10 md:grid-cols-2 lg:gap-16 lg:px-16 lg:py-12">
        <div className="flex min-w-0 flex-col gap-5 sm:gap-7 lg:gap-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rotate-45 bg-secondary" />
            <p className="font-archivo text-xs font-bold text-secondary sm:text-sm">
              KITHAUS EXCLUSIVE PRE-ORDER
            </p>
          </div>
          <h1 className="font-archivo text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            WEAR THE <span className="text-secondary">GAME</span>
          </h1>
          <p className="max-w-xl font-archivo text-sm leading-6 tracking-wide text-muted-text sm:text-base sm:leading-7 lg:text-lg">
            Engineered mesh fabrics, retro collared re-issues, and
            limited-edition design collaborations. Experience the absolute peak
            of football culture.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/clubKits" className="flex min-h-11 items-center gap-2 rounded-lg border border-gray-200 bg-secondary px-4 py-2 font-archivo text-sm font-bold text-white sm:text-base">
              SHOP NOW <ArrowRight size={18} />
            </Link>
            <Link to="/nationalTeam" className="flex min-h-11 items-center rounded-lg border border-gray-200 px-4 py-2 font-archivo text-sm font-bold sm:text-base">
              THE VAULT ARCHIVE
            </Link>
          </div>
        </div>

        <div className="aspect-[4/3] min-w-0 overflow-hidden rounded-xl md:aspect-[4/5]">
          <img
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1665673313491-22509937fc9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVyc2V5fGVufDB8fDB8fHww"
            alt="Football jersey featured in the KITHAUS collection"
          />
        </div>
    </section>
  );
}
