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
            <h2 className="text-3xl font-archivo font-bold">
              FEATU RED DISCIPLINES
            </h2>
          </div>
          <p className="text-xs font-archivo text-muted-text">
            From champions of Europe to long-lost retro gems, pick your pitch.
          </p>
        </div>

        {/* Category card */}

       <section className="flex items-center gap-8 justify-between">
         {category.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden w-full border border-gray-300 rounded-lg flex flex-col gap-2"
          >
            <img
              className=" h-84 w-full object-cover"
              src={item.image}
              alt=""
            />
            <div className="px-3 pb-8 flex flex-col gap-2">
              <h3 className="text-2xl font-archivo font-bold">{item.title.toUpperCase()}</h3>
              <p className="text-sm font-archivo text-secondary font-semibold">
                {item.type.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
       </section>
      </section>
    </main>
  );
}

const category = [
  {
    image:
      "https://images.unsplash.com/photo-1778454288878-9b3c0c975589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdGlvbmFsJTIwdGVhbSUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D",
    title: "NATIONAL TEAMS",
    type: " Global Heavyweights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1772474659559-7d009fef11df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMHVuaXRlZCUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D",
    title: "CLUB KITS",
    type: "Europe's Elite Leagues",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578434479660-7dbfe9b50f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFZpbnRhZ2UlMjBBcmNoaXZlcyUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D",
    title: "RETRO / VINTAGE",
    type: "Vintage Archives",
  },
  {
    image:
      "https://media.istockphoto.com/id/2272141140/photo/creative-fashion-designers-collaborating-with-fabric-and-color-palette-using-digital-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y0wvYX_UYpN7614U3W8Q94BeBD4g9ngKJvl1yPeYlqQ=",
    title: "CUSTOM LAB",
    type: "One-of-One Creation",
  },
];
