import React from "react";

const Hero = () => {
  const dealData = [
    {
      title: "Upto 60% off | Upgrade to smart TVs",
      image: "/deal-one.jpg",
      alt: "deal one",
    },
    {
      title: "Upto 55% off | Upgrade to doubledoor...",
      image: "/deal-three.jpg",
      alt: "deal three",
    },
    {
      title: "Upto 50% off | Upgrade to laptops",
      image: "/deal-two.jpg",
      alt: "deal two",
    },
    {
      title: "Upto 55% off | Upgrade to doubledoor...",
      image: "/deal-three.jpg",
      alt: "deal three",
    }
    
  ];

  return (
   <div className="home flex justify-center ml-auto mr-auto max-w-[1500px]">
    <div className="home_container">
      <img src="/hero-img.jpg" alt="hero-image" className="hero-image w-full z-[-1] mb-[-80px] md:mb-[-150px]" />
      <div className="home-row flex flex-wrap lg:flex-nowrap justify-center lg:justify-center z-[1] mx-[5px]">
        {
          dealData.map((deal, index) => (
            <div key={index} className="product flex flex-col items-start justify-between m-[10px] p-[20px] w-full sm:min-w-[290px] sm:max-w-[310px] md:min-w-[200px] md:max-w-[400px] lg:w-full z-[1] bg-white">
          <p className="product_info h-[50px] ">{deal.title}</p>
          <p className=" product_price mt-[5px]">
            <small>$</small>
            <strong>19.99</strong>
          </p>
          <div className="flex product_rating mb-[10px]">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
          <img src={deal.image} alt={deal.alt} className="max-h-[200px] w-full object-contain mb-5" />
        </div>
          ))
        }
      </div>
    </div>
   </div>
  );
};

export default Hero;
