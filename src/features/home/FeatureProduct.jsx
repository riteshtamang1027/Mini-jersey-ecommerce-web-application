import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

export default function FeatureProduct() {
  return (
    <>
      <section className="px-16 py-4">
        {/* head or title */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-archivo text-secondary">
              STREET & STADIUM FAVORITES
            </p>
            <h2 className="text-3xl font-archivo font-bold">TRENDING NOW</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-gray-100 cursor-pointer">
              <ArrowLeft size={16} />
            </div>
            <div className="p-2 rounded-full bg-secondary cursor-pointer text-white">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* cards  */}
        <div>
          {product.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl w-max  p-2 flex flex-col gap-4 ">
              {/* image */}
              <img
                className="h-84 object-cover rounded-xl"
                src={item.image}
                alt=""
              />

              {/* about product */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 font-archivo">
                  <h3 className="text-2xl  font-bold">{item.kitsName.toUpperCase()}</h3>
                  <p className="text-xs text-muted-text">{item.arrivalDate} <span>{item.type}</span></p>
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
        </div>
      </section>
    </>
  );
}

const product = [
  {
    image: "https://imgs.search.brave.com/exij5_T8EKtqIqBdWxPTZkcPDnch7i6TRw-zXt9DFpM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pOC5h/bXBsaWVuY2UubmV0/L3QvanBsL2pkX3By/b2R1Y3RfbGlzdD9w/bHU9amRfNzk0OTM2/X2FsJnFsdD04NSZx/bHQ9OTImdz0zNjMm/aD0zNjMmdj0xJmZt/dD1hdXRv",
    kitsName: "Real Madrid",
    arrivalDate: "2026/27",
    type:"Home Jersey",
    price: "110.0",
  },
];
