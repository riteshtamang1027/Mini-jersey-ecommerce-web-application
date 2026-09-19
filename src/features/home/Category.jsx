export default function Category() {
  return (
    <main className="px-16 py-4">
      <section className="flex flex-col gap-8">
        {/* Title */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-archivo text-secondary">
              EXPLORE OUR RANGE
            </p>
            <h2 className="text-4xl font-archivo font-bold">
              FEATU RED DISCIPLINES
            </h2>
          </div>
          <p className="text-xs font-archivo text-muted-text">
            From champions of Europe to long-lost retro gems, pick your pitch.
          </p>
        </div>

        {/* Category card */}

        <div className="overflow-hidden w-72 border border-gray-300 rounded-lg flex flex-col gap-2">
          <img
            className=" h-84 w-full object-cover"
            src="https://images.unsplash.com/photo-1778454288878-9b3c0c975589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdGlvbmFsJTIwdGVhbSUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="p-2">
            <h3 className="text-2xl font-archivo font-bold">NATIONAL TEAMS</h3>
            <p className="text-base font-archivo text-secondary font-semibold">
              Global Heavyweights
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
