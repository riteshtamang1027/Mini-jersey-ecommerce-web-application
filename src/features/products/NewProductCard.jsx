import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

export default function NewProductCard() {
  return (
    <>
      <section className="px-16 py-4 flex flex-col gap-8">
        {/* head or title */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-archivo text-secondary">
              THE LATEST SELECTIONS
            </p>
            <h2 className="text-3xl font-archivo font-bold">
              NEW DROPS // SPRING '26
            </h2>
          </div>
          <div className="flex items-center gap-4">
           <p className="text-sm font-semibold text-muted-text">VIEW ALL RELEASES</p>
            <div className="p-2 rounded-full bg-secondary/60 cursor-pointer text-white">
             <ArrowRight size={12}/>
            </div>
          </div>
        </div>

        {/* cards  */}
        <section className="flex items-center gap-8">
          {product.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl w-max  p-2 flex flex-col gap-4 "
            >
              {/* image */}
              <img
                className="h-84 object-cover rounded-xl"
                src={item.image}
                alt=""
              />

              {/* about product */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 font-archivo">
                  <h3 className="text-xl  font-bold">
                    {item.kitsName.toUpperCase()}
                  </h3>
                  <p className="text-xs text-muted-text">
                    {item.arrivalDate} <span>{item.type}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  {/* Declear pricing */}
                  <p className="text-xl font-bold font-archivo text-secondary">
                    ${item.price}
                  </p>

                  {/* add cart button */}
                  <button className="bg-secondary rounded-lg px-4 py-2 flex items-center gap-2 text-white cursor-pointer">
                    <Plus size={16} />{" "}
                    <span className="text-sm font-semibold font-archivo">
                      ADD
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

const product = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62ywxTlwqmWNEGrQGcm8LBK5HP2jJ4Vo1ckBDq4_m7Q&s=10",
    kitsName: "Portugal National Team",
    arrivalDate: "2026/27",
    type: "CR7 N0.7",
    price: "150.0",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qEMFKaB8A5c_xzihGKLMMzIhDPvPIeh3Mko5Sj3ksQ&s=10",
    kitsName: "Spain National Team",
    arrivalDate: "2026/27",
    type: "Home Jersey",
    price: "120.0",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYwhuYByomBErPnqrHp6n7lspi96EJ3dbzFwsCzFYcw&s=10",
    kitsName: "USA",
    arrivalDate: "2026/27",
    type: "Home Jersey",
    price: "126.0",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwW-Sx3N6Q-x85NvG3w9XyncjGy69HPGvfMSQFBqO82Q&s=10",
    kitsName: "Lamine Yamal",
    arrivalDate: "2026/27",
    type: "Barca L19",
    price: "130.0",
  },
];
