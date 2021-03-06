const productData = {
  products: [
    {
      id: "001",
      slug: "p001",
      name: "Product One",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Amet risus nullam eget felis eget nunc lobortis.",
      img: "https://images.unsplash.com/photo-1580991584164-a4e12c31521d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      catgeory: "Tops",
      popular: true,
      price: 39.99,
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["lilac", "white", "grey", "pink"],
    },
    {
      id: "002",
      slug: "p002",
      name: "Product Two",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Amet risus nullam eget felis eget nunc lobortis.",
      img: "https://images.unsplash.com/photo-1602370463198-086436840055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwamFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      catgeory: "Jackets",
      popular: true,
      price: 89.99,
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["darkblue", "white", "grey", "black", "red"],
    },
    {
      id: "003",
      slug: "P003",
      name: "Product Three",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Amet risus nullam eget felis eget nunc lobortis.",
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBwYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      catgeory: "Pants",
      popular: false,
      price: 59.99,
      size: ["S", "M", "L", "XL"],
      color: ["darkblue", "green", "grey", "black", "olive"],
    },
    {
      id: "004",
      slug: "p004",
      name: "Product Four",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Amet risus nullam eget felis eget nunc lobortis.",
      img: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      catgeory: "Pants",
      popular: true,
      price: 99.99,
      size: ["S", "M", "L", "XL"],
      color: ["darkblue", "green", "grey", "black", "olive"],
    },
    {
      id: "005",
      slug: "p005",
      name: "Product Five",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Amet risus nullam eget felis eget nunc lobortis.",
      img: "https://images.unsplash.com/photo-1519076381129-b4234ae7e573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwc3dlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      catgeory: "Sweater",
      popular: false,
      price: 79.99,
      size: ["S", "M", "L", "XL"],
      color: ["darkblue", "green", "grey", "black", "olive"],
    },
    {
      id: "006",
      slug: "p006",
      name: "Product Six",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Amet risus nullam eget felis eget nunc lobortis.",
      img: "https://images.unsplash.com/photo-1588011025378-15f4778d2558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdpbnRlciUyMGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      catgeory: "Jackets",
      popular: true,
      price: 159.99,
      size: ["S", "M", "L", "XL"],
      color: ["darkblue", "green", "grey", "black", "olive"],
    },
  ],

  styles: [
    {
      styleID: "style001",
      styleName: "Chic",
      styleImage:
        "https://images.unsplash.com/photo-1613800812511-f094b509f9fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmVtYWxlJTIwdXJiYW4lMjBjbG90aGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
      styleCTA: "Shop Outfit",
    },

    {
      styleID: "style002",
      styleName: "Urban",
      styleImage:
        "https://images.unsplash.com/photo-1542299851831-c7b5611b8563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZlbWFsZSUyMHVyYmFuJTIwY2xvdGhpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      styleCTA: "Shop Outfit",
    },

    {
      styleID: "style004",
      styleName: "Xtra",
      styleImage:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwY2FzdWFsJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      styleCTA: "Shop Outfit",
    },
  ],
};
// export default () => {
//   productData;
// };

module.exports = productData;
