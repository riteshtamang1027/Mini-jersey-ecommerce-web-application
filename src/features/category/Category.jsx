import { Link } from "react-router";

export default function Category() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Title */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-archivo text-secondary">
              EXPLORE OUR RANGE
            </p>
            <h2 className="text-2xl font-archivo font-bold sm:text-3xl">
              FEATURED DISCIPLINES
            </h2>
          </div>
          <p className="max-w-lg text-xs leading-5 font-archivo text-muted-text sm:text-right sm:text-sm">
            From champions of Europe to long-lost retro gems, pick your pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
         {category.map((item) => (
          <div
            key={item.title}
            className="group flex min-w-0 flex-col gap-2 overflow-hidden rounded-lg border border-gray-300"
          >
            <Link
              to={item.href}
              className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <img
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                src={item.image}
                alt={`${item.title} football collection`}
              />
              <div className="flex flex-1 flex-col gap-2 px-3 pb-5 pt-2 sm:pb-6">
                <h3 className="text-xl font-archivo font-bold sm:text-2xl">{item.title.toUpperCase()}</h3>
                <p className="text-xs font-archivo font-semibold text-secondary sm:text-sm">
                  {item.type.toUpperCase()}
                </p>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

const category = [
  {
    image:
      "https://images.unsplash.com/photo-1778454288878-9b3c0c975589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdGlvbmFsJTIwdGVhbSUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D",
    title: "NATIONAL TEAMS",
    href: "/nationalTeam",
    type: " Global Heavyweights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1772474659559-7d009fef11df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMHVuaXRlZCUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D",
    title: "CLUB KITS",
    href: "/clubKits",
    type: "Europe's Elite Leagues",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578434479660-7dbfe9b50f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFZpbnRhZ2UlMjBBcmNoaXZlcyUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D",
    title: "RETRO / VINTAGE",
    href: "/clubKits",
    type: "Vintage Archives",
  },
  {
    image:
      "https://media.istockphoto.com/id/2272141140/photo/creative-fashion-designers-collaborating-with-fabric-and-color-palette-using-digital-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y0wvYX_UYpN7614U3W8Q94BeBD4g9ngKJvl1yPeYlqQ=",
    title: "CUSTOM LAB",
    href: "/clubKits",
    type: "One-of-One Creation",
  },
];
