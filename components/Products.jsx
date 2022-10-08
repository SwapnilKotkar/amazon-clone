import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Products = () => {
  const mobileList = [
    {
      discount: "Up to 30% off",
      heading: "Great Indian Festival",
      title: "Dareme 31 | Starting from 4999",
      image: "/mobile/mobile-one.jpg",
    },
    {
      discount: "Up to 36% off",
      heading: "Great Indian Festival",
      title: "Simsang B31 | Starting from 11999",
      image: "/mobile/mobile-two.jpg",
    },
    {
      discount: "Up to 5% off",
      heading: "Great Indian Festival",
      title: "One minus 50 Pro | Starting from 14999",
      image: "/mobile/mobile-three.jpg",
    },
    {
      discount: "Up to 28% off",
      heading: "Great Indian Festival",
      title: "Dareme 50 | Starting from 10999",
      image: "/mobile/mobile-four.jpg",
    },
    {
      discount: "Up to 15% off",
      heading: "Great Indian Festival",
      title: "One minus prime R | Starting from 29999",
      image: "/mobile/mobile-five.jpg",
    },
    {
      discount: "Up to 31% off",
      heading: "Great Indian Festival",
      title: "Dealme Nazro 50 Pro | Starting from 14999",
      image: "/mobile/mobile-six.jpg",
    },
    {
      discount: "Up to 15% off",
      heading: "Great Indian Festival",
      title: "Simsang Galaxy M31 | Starting from 17999",
      image: "/mobile/mobile-seven.jpg",
    },
    {
      discount: "Up to 60% off",
      heading: "Great Indian Festival",
      title: "Simsang FE20 | Starting from 19999",
      image: "/mobile/mobile-eight.jpg",
    },
    {
      discount: "Up to 7% off",
      heading: "Great Indian Festival",
      title: "One minus 5| Starting from 24999",
      image: "/mobile/mobile-nine.jpg",
    },
    {
      discount: "Up to 31% off",
      heading: "Great Indian Festival",
      title: "Appale 13S | Starting from 60999",
      image: "/mobile/mobile-ten.jpg",
    },
  ];

  const kitchenList = [
    "/kitchen/kitchen-one.jpg",
    "/kitchen/kitchen-two.jpg",
    "/kitchen/kitchen-three.jpg",
    "/kitchen/kitchen-four.jpg",
    "/kitchen/kitchen-five.jpg",
    "/kitchen/kitchen-six.jpg",
    "/kitchen/kitchen-seven.jpg",
    "/kitchen/kitchen-eight.jpg",
    "/kitchen/kitchen-nine.jpg",
    "/kitchen/kitchen-ten.jpg",
  ];

  const decorList = [
    "/decor/decor-one.jpg",
    "/decor/decor-two.jpg",
    "/decor/decor-three.jpg",
    "/decor/decor-four.jpg",
    "/decor/decor-five.jpg",
    "/decor/decor-six.jpg",
    "/decor/decor-seven.jpg",
    "/decor/decor-eight.jpg",
    "/decor/decor-nine.jpg",
    "/decor/decor-ten.jpg",
  ]



  const slideLeft = (value) => {
    let slider = document.getElementById(value);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = (value) => {
    let slider = document.getElementById(value);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="max-w-[1500px] mx-auto my-5">
        <div className="mx-4 bg-white">
          <p className="px-2 py-4 text-lg md:text-2xl text-[#414141] font-bold">
            Blockbuster Deals
          </p>
          <div className="relative">
            <MdChevronLeft
              className="absolute left-0 top-[30%] text-6xl bg-white md:h-32 cursor-pointer"
              onClick={()=>slideLeft('products_list')}
            />
            <div
              id="products_list"
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-5"
            >
              {mobileList.map((product, index) => (
                <div
                  key={index}
                  className="inline-block w-[300px] bg-[#eaededd9] mx-2 p-2"
                >
                  <div className="flex justify-center">
                    <img
                      src={product.image}
                      alt="mobile"
                      className="h-[250px] object-contain"
                    />
                  </div>
                  <div className="w-full flex items-center space-x-1 my-2">
                    <p className="bg-[#CC0C39] text-sm p-1 text-white">
                      {product.discount}
                    </p>
                    <strong className="text-sm text-[#717272]">
                      {product.heading}
                    </strong>
                  </div>
                  <p className="my-3 text-sm">{product.title}</p>
                  <button className="w-full bg-[#f0c14b] border border-[#a88734] border-solid mt-[10px] text-black text-sm px-2 py-1">Add to Basket</button>
                </div>
                
              ))}
            </div>
            <MdChevronRight
              className="absolute right-0 top-[30%] text-6xl bg-white md:h-32 cursor-pointer"
              onClick={()=>slideRight('products_list')}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto my-5">
        <div className="mx-4 bg-white group">
          <p className="px-2 py-4 text-lg md:text-2xl text-[#414141] font-bold">
          Up to 50% off | Kitchen & dining picks from women-led brands
          </p>
          <div className="relative">
            <MdChevronLeft
              className="absolute left-0 top-[30%] text-6xl bg-white md:h-32 cursor-pointer opacity-0 group-hover:opacity-100"
              onClick={()=>slideLeft('kitchen_list')}
            />
            <div
              id="kitchen_list"
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-5"
            >
              {kitchenList.map((kitchen, index) => (
                <div
                  key={index}
                  className="inline-block w-[200px] h-[200px] bg-[#eaededd9] mx-2"
                >
                    <img
                      src={kitchen}
                      alt="kitchen"
                      className="w-full h-full"
                    />
                </div>
              ))}
            </div>
            <MdChevronRight
              className="absolute right-0 top-[30%] text-6xl bg-white md:h-32 cursor-pointer opacity-0 group-hover:opacity-100"
              onClick={()=>slideRight('kitchen_list')}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto my-5">
        <div className="mx-4 bg-white group">
          <p className="px-2 py-4 text-lg md:text-2xl text-[#414141] font-bold">
          Up to 75% off | Unique and latest home décor products
          </p>
          <div className="relative">
            <MdChevronLeft
              className="absolute left-0 top-[30%] text-6xl bg-white md:h-32 cursor-pointer opacity-0 group-hover:opacity-100"
              onClick={()=>slideLeft('decor_list')}
            />
            <div
              id="decor_list"
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-5"
            >
              {decorList.map((decor, index) => (
                <div
                  key={index}
                  className="inline-block w-[200px] h-[200px] bg-[#eaededd9] mx-2"
                >
                    <img
                      src={decor}
                      alt="decor"
                      className="w-full h-full"
                    />
                </div>
              ))}
            </div>
            <MdChevronRight
              className="absolute right-0 top-[30%] text-6xl bg-white md:h-32 cursor-pointer opacity-0 group-hover:opacity-100"
              onClick={()=>slideRight('decor_list')}
            />
          </div>
        </div>
      </div>    
    </>
  );
};

export default Products;
