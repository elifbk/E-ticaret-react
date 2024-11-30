import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit
              eius voluptas id rerum corrupti repudiandae excepturi ullam quasi
              harum?
            </div>
            <div className="flex items-center justify-center border rounded-full cursor-pointer text-2xl w-[200px] h-16 bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://akn-fashfed.a-cdn.akinoncloud.com/products/2023/10/26/61568345/d836300d-1c94-4376-bdd3-202f5afbc288_size650_cropTop.jpg"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit
              eius voluptas id rerum corrupti repudiandae excepturi ullam quasi
              harum?
            </div>
            <div className="flex items-center justify-center border rounded-full cursor-pointer text-2xl w-[200px] h-16 bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://akn-fashfed.a-cdn.akinoncloud.com/products/2024/08/15/94788949/62d521bd-fb81-4ef1-9e2c-8bbf40fbd196_size650_cropTop.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
