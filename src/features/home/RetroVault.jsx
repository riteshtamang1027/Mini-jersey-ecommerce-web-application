const vintageImg = [
  "https://imgs.search.brave.com/jHkiA1nzvkCtAXscu3SuBnSlzS0mChopKjrImZ37Lbo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0NMY0FB/T1N3UnlGa1BzcHov/cy1sNDAwLndlYnA",
  "https://imgs.search.brave.com/_upURU4bgaNX73VfF1j3Ayes59Xyu88yEgWvCHtaG1c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/ODkwZjU0YzYwODA0/NDBmYWYzMjdhNjEv/NjhmNzVmZGQ2Zjgx/Y2E3ZWYyYmI0ZTY4/X1VLLUZvb3RiYWxs/LUNsdWItQnJhbmRz/LndlYnA",
  "https://imgs.search.brave.com/D0frQUs4tkvKeX7DHDyfbyoRsfNJAQPw8QMK_XTAmAo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/NDExMDQxMi9waG90/by9waWN0dXJlLXNo/b3dzLXdvbWVucy1m/b290YmFsbC1wbGF5/ZXJzLWR1cmluZy1h/LXRvdXJuYW1lbnQt/YmV0d2Vlbi1iZWxn/aXVtLWFuZC10aGUt/ZW5nbGFuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c3kt/VjB4VU42a3h2V2dp/OHlsbGp2RU9WOVh1/cEViUjR4TXFkN3RL/aHBWST0",
];

export default function RetroVault() {
  return (
    <main className="px-16 mt-16">
      <section className="flex items-center w-full gap-4 h-92 overflow-hidden  font-archivo">
        <div className="w-1/3 flex flex-col gap-4">
          <p className="px-2 py-1 border border-secondary rounded-sm text-xs text-secondary w-max">
            EST.1970-1999
          </p>
          <h3 className="text-4xl font-extrabold scale-y-120">
            THE RETRO <span className="text-secondary">VAULT</span>
          </h3>
          <p className="text-sm text-muted-text">
            Own verified originals and legendary club re-issues. From iconic
            sponsor block lettering to vintage satin embroidery, explore the
            grails of international terrace wear.
          </p>
          <button className="text-xs font-semibold border border-gray-200 rounded-lg px-4 py-2">
            BROWSE VAULT DIRECTORY
          </button>
        </div>
        <div className="flex items-center ">
          {vintageImg.map((img) => (
            <img className="w-full h-92 object-cover" src={img} alt="" />
          ))}
        </div>
      </section>
    </main>
  );
}
