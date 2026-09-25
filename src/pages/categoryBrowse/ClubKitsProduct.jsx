import { Plus } from "lucide-react";

const product = [
  {
    image:
      "https://imgs.search.brave.com/LNS0Mdgl_F5Hd22fNGNU162Psp3QvunDcbVzC6aNAy8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1BsUUFB/ZVN3ZmNCbzJ6SWcv/cy1sNTAwLmpwZw",
    kitsName: "Real Oviedo",
    arrivalDate: "2026/27",
    type: "Home Jersey",
    price: "110.0",
  },
  {
    image:
      "https://imgs.search.brave.com/WQ5qIgPfc-8iCoac0tiqiOgM5qDb4H2Me4zHLuu_1_4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nb2Fs/a2l0cy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDYv/M2Q2ZDc4YTYzN2Ex/M2Q3NzVlYzU2ZDAx/NTU2OWUxMGYtNjAw/eDYwMC5wbmcud2Vi/cA",
    kitsName: "Bayern",
    arrivalDate: "2026/27",
    type: "Home Jersey",
    price: "120.0",
  },
  {
    image:
      "https://imgs.search.brave.com/qC-G58vxazqYNT_bYT9yfK-bCq7xUIJcFxhI4fO1PkE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmVzdGJ1eXNvY2Nl/ci5jb20vY2RuL3No/b3AvZmlsZXMvYWRp/ZGFzLWp1dmVudHVz/LXRoaXJkLW1lbnMt/c29jY2VyLWplcnNl/eS0yNjI3LWJsYWNr/LTc2NDI2OTkuanBn/P3Y9MTc4NjEzMjA5/MiZ3aWR0aD00NjA",
    kitsName: "Juventus ",
    arrivalDate: "2026/27",
    type: "Away Jersey",
    price: "126.0",
  },
  {
    image:
      "https://imgs.search.brave.com/P7e1uUSGPUuDRDxR_uJuOzj_vCkxMegAi5fEnsvYo-4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZm9vdGJhbGxm/YW5hdGljcy5jb20v/bGl2ZXJwb29sL21l/bnMtYWRpZGFzLXZp/cmdpbC12YW4tZGlq/ay1ibGFjay1saXZl/cnBvb2wtMjAyNi8y/Ny10aGlyZC1yZXBs/aWNhLWplcnNleV9z/czVfcC0yMDQ2ODg1/MjArdS03MzFtMmJk/ZWZwZW5zZmx4OGV4/ait2LW1xOGZpZ2Q2/YXBubDA5cGVqa3Y4/LnBuZz9faHY9MiZ3/PTQwMA",
    kitsName: "Liverpool",
    arrivalDate: "2026/27",
    type: "Away Jersey",
    price: "130.0",
  },
  {
    image:
      "https://imgs.search.brave.com/-RsoXqPWqr9HQGUlv0Sn9I1acEZV_04cPOABjXwxLJc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy9ERzRBQWVTd3Vo/WnBId0VwL3MtbDQw/MC53ZWJw",
    kitsName: "Italy",
    arrivalDate: "2026/27",
    type: "International team jersey",
    price: "130.0",
  },
];

export default function ClubKitsProduct() {
  return (
    <section className="grid w-full grid-cols-3 gap-4">
      {product.map((item, i) => (
        <div
          key={i}
          className="flex w-full flex-col gap-4 rounded-xl border border-gray-200 p-2"
        >
          {/* image */}
          <img
            className="h-76 w-full rounded-xl object-cover"
            src={item.image}
            alt={item.kitsName}
          />

          {/* about product */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 font-archivo">
              <h3 className="text-2xl font-bold">
                {item.kitsName.toUpperCase()}
              </h3>

              <p className="text-xs text-muted-text">
                {item.arrivalDate}{" "}
                <span>{item.type}</span>
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-2">
              <p className="font-archivo text-xl font-bold text-secondary">
                ${item.price}
              </p>

              <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-white">
                <Plus size={16} />

                <span className="font-archivo text-sm font-semibold">
                  ADD
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

