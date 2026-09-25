import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

const product = [
  {
    image: "https://imgs.search.brave.com/oY3Ya_kZhDOYwsDcf0w5ViitLoVVwbVPhuOoAKR9f2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy82QWtBQWVTdzlK/Rm9HS3NML3MtbDUw/MC5qcGc",
    kitsName: "Real Madrid",
    arrivalDate: "2017/18",
    type:"MR. Champion",
    price: "130.0",
  },
  {
    image: "https://imgs.search.brave.com/vo-tjgI6Bf612ccZuhCljGDDa8O2SbGjram5XyQYYA0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bWVkaWEuYW1wbGll/bmNlLm5ldC9pL2Zy/YXNlcnNkZXYvMzc4/MzUyMDNfbz9mbXQ9/YXV0byZ1cHNjYWxl/PWZhbHNlJnc9MzQ1/Jmg9MzQ1JnY9MSZz/bT1jJiRoLXR0bCQ",
    kitsName: "Liverpool",
    arrivalDate: "2026/27",
    type:"Away Jersey",
    price: "110.0",
  },
  {
    image: "https://imgs.search.brave.com/1sUr7L0IMaM0L0ePCzMkP_3CF5Yqzjr4z3KP89MtXVQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jdWx0/dXJraXRzLmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9pbWFnZV8y/MDUxYmM2ZS0zZmJk/LTQ2NWYtOWJjNC0x/N2E5OTRiODc2OGUu/cG5nP3Y9MTY3MDU2/NDQ2MiZ3aWR0aD0x/NDQ1",
    kitsName: "Sporting CP",
    arrivalDate: "2001/02",
    type:"Home Jersey",
    price: "126.0",
  },
  {
    image: "https://imgs.search.brave.com/b5tZAZ_6C1BXe0tHmp50Q-AjbgR4qiI4Ziipl_VPxDQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhc3NpY2Zvb3Ri/YWxsc2hpcnRzLmNv/LnVrL2Nkbi1jZ2kv/aW1hZ2Uvdz0zNjAs/aD0zNjAscT0xMDAs/Zml0PXBhZCxmPXdl/YnAvcHViL21lZGlh/L2NhdGFsb2cvcHJv/ZHVjdC8vNC8wLzQw/NzAwMzMyMjE3MTYt/MV9kcHF4ZXFrbHRo/M2ZtaHRhLmpwZw",
    kitsName: "AC Milan",
    arrivalDate: "2026/27",
    type:"Home Jersey",
    price: "116.0",
  },
];


export default function FeatureProduct() {
  return (
    <>
      <section className="px-16 py-4 flex flex-col gap-8">
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
        <section className="flex items-center gap-8">
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
        </section>
      </section>
    </>
  );
}

