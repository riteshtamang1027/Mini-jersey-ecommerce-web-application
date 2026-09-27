const makeProduct = ({
  id,
  name,
  season,
  category,
  price,
  image,
  description,
  popularity = 0,
  releaseRank = 0,
  isNewDrop = false,
}) => ({
  id,
  name,
  season,
  category,
  price,
  image,
  popularity,
  releaseRank,
  isNewDrop,
  images: [{ src: image, alt: `${name} ${season} jersey` }],
  description:
    description ??
    `A ${season} ${name} jersey made for supporters, with comfortable performance fabric and authentic team details.`,
  colors: [
    { name: "Home", value: "#1255a4" },
    { name: "Away", value: "#181818" },
    { name: "Special", value: "#d7a92e" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
});

export const products = [
  makeProduct({
    id: "real-madrid-retro",
    name: "Real Madrid MR. Champion",
    season: "2017/18",
    category: "Retro club jersey",
    price: 130,
    popularity: 94,
    releaseRank: 1,
    isNewDrop: false,
    image:
      "https://imgs.search.brave.com/oY3Ya_kZhDOYwsDcf0w5ViitLoVVwbVPhuOoAKR9f2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy82QWtBQWVTdzlK/Rm9HS3NML3MtbDUw/MC5qcGc",
  }),
  makeProduct({
    id: "liverpool-away",
    name: "Liverpool Away Jersey",
    season: "2026/27",
    category: "Club jersey",
    price: 110,
    popularity: 98,
    releaseRank: 8,
    isNewDrop: true,
    image:
      "https://imgs.search.brave.com/vo-tjgI6Bf612ccZuhCljGDDa8O2SbGjram5XyQYYA0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bWVkaWEuYW1wbGll/bmNlLm5ldC9pL2Zy/YXNlcnNkZXYvMzc4/MzUyMDNfbz9mbXQ9/YXV0byZ1cHNjYWxl/PWZhbHNlJnc9MzQ1/Jmg9MzQ1JnY9MSZz/bT1jJiRoLXR0bCQ",
  }),
  makeProduct({
    id: "sporting-cp-home",
    name: "Sporting CP Home Jersey",
    season: "2001/02",
    category: "Retro club jersey",
    price: 126,
    popularity: 82,
    releaseRank: 2,
    isNewDrop: false,
    image:
      "https://imgs.search.brave.com/1sUr7L0IMaM0L0ePCzMkP_3CF5Yqzjr4z3KP89MtXVQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jdWx0/dXJraXRzLmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9pbWFnZV8y/MDUxYmM2ZS0zZmJk/LTQ2NWYtOWJjNC0x/N2E5OTRiODc2OGUu/cG5nP3Y9MTY3MDU2/NDQ2MiZ3aWR0aD0xNDQ1",
  }),
  makeProduct({
    id: "ac-milan-home",
    name: "AC Milan Home Kit",
    season: "2026/27",
    category: "Serie A · Club jersey",
    price: 110,
    popularity: 96,
    releaseRank: 10,
    isNewDrop: true,
    image:
      "https://imgs.search.brave.com/b5tZAZ_6C1BXe0tHmp50Q-AjbgR4qiI4Ziipl_VPxDQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhc3NpY2Zvb3Ri/YWxsc2hpcnRzLmNvLnVrL2Nkbi1jZ2kv/aW1hZ2Uvdz0zNjAsaD0zNjAscT0xMDAsZml0PXBhZCxmPXdlYnAvcHViL21lZGlh/L2NhdGFsb2cvcHJv/ZHVjdC8vNC8wLzQw/NzAwMzMyMjE3MTYt/MV9kcHF4ZXFrbHRoM2ZtaHRhLmpwZw",
    description:
      "Engineered with breathable performance fabric, a woven team crest, and classic Rossoneri details for the 2026/27 season.",
  }),
  makeProduct({
    id: "portugal-home",
    name: "Portugal National Team Jersey",
    season: "2026/27",
    category: "National team · CR7 No. 7",
    price: 150,
    popularity: 100,
    releaseRank: 12,
    isNewDrop: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62ywxTlwqmWNEGrQGcm8LBK5HP2jJ4Vo1ckBDq4_m7Q&s=10",
  }),
  makeProduct({
    id: "spain-home",
    name: "Spain National Team Home Jersey",
    season: "2026/27",
    category: "National team",
    price: 120,
    popularity: 88,
    releaseRank: 11,
    isNewDrop: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qEMFKaB8A5c_xzihGKLMMzIhDPvPIeh3Mko5Sj3ksQ&s=10",
  }),
  makeProduct({
    id: "usa-home",
    name: "USA National Team Home Jersey",
    season: "2026/27",
    category: "National team",
    price: 126,
    popularity: 85,
    releaseRank: 9,
    isNewDrop: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYwhuYByomBErPnqrHp6n7lspi96EJ3dbzFwsCzFYcw&s=10",
  }),
  makeProduct({
    id: "barcelona-lamine-yamal",
    name: "Barcelona Lamine Yamal Jersey",
    season: "2026/27",
    category: "Club jersey · Lamine Yamal No. 19",
    price: 130,
    popularity: 97,
    releaseRank: 13,
    isNewDrop: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwW-Sx3N6Q-x85NvG3w9XyncjGy69HPGvfMSQFBqO82Q&s=10",
  }),
  makeProduct({
    id: "real-oviedo-home",
    name: "Real Oviedo Home Jersey",
    season: "2026/27",
    category: "Club jersey",
    price: 110,
    popularity: 78,
    releaseRank: 7,
    isNewDrop: true,
    image:
      "https://imgs.search.brave.com/LNS0Mdgl_F5Hd22fNGNU162Psp3QvunDcbVzC6aNAy8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1BsUUFB/ZVN3ZmNCbzJ6SWcv/cy1sNTAwLmpwZw",
  }),
  makeProduct({
    id: "bayern-home",
    name: "Bayern Home Jersey",
    season: "2026/27",
    category: "Bundesliga · Club jersey",
    price: 120,
    popularity: 91,
    releaseRank: 6,
    isNewDrop: true,
    image:
      "https://imgs.search.brave.com/WQ5qIgPfc-8iCoac0tiqiOgM5qDb4H2Me4zHLuu_1_4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nb2Fs/a2l0cy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMDYv/M2Q2ZDc4YTYzN2ExM2Q3NzVlYzU2ZDAxNTU2OWUxMGYtNjAweDYwMC5wbmcud2VicA",
  }),
  makeProduct({
    id: "juventus-away",
    name: "Juventus Away Jersey",
    season: "2026/27",
    category: "Serie A · Club jersey",
    price: 126,
    popularity: 93,
    releaseRank: 5,
    isNewDrop: true,
    image:
      "https://imgs.search.brave.com/qC-G58vxazqYNT_bYT9yfK-bCq7xUIJcFxhI4fO1PkE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cuYmVzdGJ1eXNvY2Nlci5jb20vY2RuL3Nob3AvZmlsZXMvYWRpZGFzLWp1dmVudHVzLXRoaXJkLW1lbnMtc29jY2VyLWplcnNleS0yNjI3LWJsYWNrLTc2NDI2OTkuanBn",
  }),
  makeProduct({
    id: "liverpool-third",
    name: "Liverpool Third Jersey",
    season: "2026/27",
    category: "Premier League · Club jersey",
    price: 130,
    popularity: 90,
    releaseRank: 4,
    isNewDrop: true,
    image:
      "https://imgs.search.brave.com/P7e1uUSGPUuDRDxR_uJuOzj_vCkxMegAi5fEnsvYo-4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFnZXMuZm9vdGJhbGxmYW5hdGljcy5jb20vbGl2ZXJwb29sL21lbnMtYWRpZGFzLXZpcmdpbC12YW4tZGlqay1ibGFjay1saXZlcnBvb2wtMjAyNi8yNy10aGlyZC1yZXBsaWNhLWplcnNleQ",
  }),
  makeProduct({
    id: "italy-home",
    name: "Italy National Team Jersey",
    season: "2026/27",
    category: "National team",
    price: 130,
    popularity: 92,
    releaseRank: 3,
    isNewDrop: true,
    image:
      "https://imgs.search.brave.com/-RsoXqPWqr9HQGUlv0Sn9I1acEZV_04cPOABjXwxLJc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy9ERzRBQWVTd3VoWnBId0VwL3MtbDQwMC53ZWJw",
  }),
];

const byId = new Map(products.map((product) => [product.id, product]));

export const getProduct = (productId) => byId.get(productId);
export const trendingProducts = products.slice(0, 4);
export const newDropProducts = products.slice(4, 8);
export const clubProducts = products.filter((product) =>
  ["real-madrid-retro", "liverpool-away", "sporting-cp-home", "ac-milan-home", "real-oviedo-home", "bayern-home", "juventus-away", "liverpool-third"].includes(product.id)
);
export const nationalProducts = products.filter((product) =>
  ["portugal-home", "spain-home", "usa-home", "italy-home"].includes(product.id)
);
