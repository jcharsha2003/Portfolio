//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// service data
export const serviceDate = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "loream ipsum delor sit amet,consectetur",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "loream ipsum delor sit amet,consectetur",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "loream ipsum delor sit amet,consectetur",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "loream ipsum delor sit amet,consectetur",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "loream ipsum delor sit amet,consectetur",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      modules={[FreeMode, Pagination]}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className="h-[240px] sm:h-[340px] "
    >
      {serviceDate.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(64,47,123,0.15)] h-max rounde-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
