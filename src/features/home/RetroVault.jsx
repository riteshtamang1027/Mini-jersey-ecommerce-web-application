const vintageImg = [
  "https://imgs.search.brave.com/jHkiA1nzvkCtAXscu3SuBnSlzS0mChopKjrImZ37Lbo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0NMY0FB/T1N3UnlGa1BzcHov/cy1sNDAwLndlYnA",
  "https://imgs.search.brave.com/_upURU4bgaNX73VfF1j3Ayes59Xyu88yEgWvCHtaG1c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/ODkwZjU0YzYwODA0/NDBmYWYzMjdhNjEv/NjhmNzVmZGQ2Zjgx/Y2E3ZWYyYmI0ZTY4/X1VLLUZvb3RiYWxs/LUNsdWItQnJhbmRz/LndlYnA",
  "https://imgs.search.brave.com/D0frQUs4tkvKeX7DHDyfbyoRsfNJAQPw8QMK_XTAmAo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/NDExMDQxMi9waG90/by9waWN0dXJlLXNo/b3dzLXdvbWVucy1m/b290YmFsbC1wbGF5/ZXJzLWR1cmluZy1h/LXRvdXJuYW1lbnQt/YmV0d2Vlbi1iZWxn/aXVtLWFuZC10aGUt/ZW5nbGFuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c3kt/VjB4VU42a3h2V2dp/OHlsbGp2RU9WOVh1/cEViUjR4TXFkN3RL/aHBWST0",
];

export default function RetroVault() {
  return (
    <section className="mx-auto mt-8 grid w-full max-w-[1440px] grid-cols-1 gap-6 px-4 font-archivo sm:mt-12 sm:gap-8 sm:px-8 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_2fr] lg:items-center lg:gap-10 lg:px-16">
        <div className="flex min-w-0 flex-col items-start gap-4">
          <p className="w-max rounded-sm border border-secondary px-2 py-1 text-xs text-secondary">
            EST.1970-1999
          </p>
          <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            THE RETRO <span className="text-secondary">VAULT</span>
          </h3>
          <p className="max-w-xl text-sm leading-6 text-muted-text">
            Explore retro-inspired shirts and vintage-style club jerseys.
            Browse classic eras, archive favorites, and supporter staples in
            the curated catalog.
          </p>
          <Link to="/clubKits?jerseyType=Retro%20Jersey" className="rounded-lg border border-gray-200 px-4 py-3 text-left text-xs font-semibold transition-colors hover:border-secondary hover:text-secondary">
            BROWSE VAULT DIRECTORY
          </Link>
        </div>
        <div className="grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
          {vintageImg.map((img, index) => (
            <StoreImage key={img} className="aspect-[3/4] w-full rounded-lg object-cover" src={img} alt={`Retro football archive ${index + 1}`} />
          ))}
        </div>
    </section>
  );
}
import { Link } from "react-router";
import StoreImage from "../../components/StoreImage";
