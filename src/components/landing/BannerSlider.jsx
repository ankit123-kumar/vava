import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useTheme from "../../hooks/useTheme";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = [
  "/banners/banner_9.jpeg",
  "/banners/banner_1.jpeg",
  "/banners/banner_2.jpeg",
  "/banners/banner_3.jpeg",
  "/banners/banner_4.jpeg",
  "/banners/banner_5.jpeg",
  "/banners/banner_6.jpeg",
  "/banners/banner_7.jpeg",
  "/banners/banner_8.jpeg",
];

export default function BannerSlider() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full py-10 px-4 md:px-10 
      ${
        theme === "dark"
          ? "bg-gradient-to-r from-slate-900 to-slate-950"
          : "bg-gradient-to-r from-slate-50 to-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-2xl shadow-xl"
        >
          {banners.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-2xl overflow-hidden">

                {/* 🔥 Background Blur */}
                <img
                  src={img}
                  alt="bg"
                  className={`absolute inset-0 w-full h-full object-cover scale-110 
                    ${theme === "dark" ? "blur-md" : "blur-lg"}`}
                />

                {/* 🔥 Gradient Overlay */}
                <div
                  className={`absolute inset-0 
                  ${
                    theme === "dark"
                      ? "bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                      : "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  }`}
                ></div>

                {/* 🔥 Main Image */}
                <div className="relative flex items-center justify-center 
                                h-[240px] md:h-[340px] lg:h-[400px]">
                  <img
                    src={img}
                    alt="banner"
                    className="h-full object-contain rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* 🔥 Text (Desktop Overlay) */}
<div
  className={`hidden md:block absolute bottom-6 left-6 z-10 max-w-[80%]
  ${theme === "dark" ? "text-gray-100" : "text-white"}`}
>
  <h2 className="text-2xl md:text-4xl font-extrabold drop-shadow-lg leading-tight">
    Admission Open 🎓
  </h2>

  <p
    className={`text-sm md:text-lg mt-2 drop-shadow-md
    ${theme === "dark" ? "text-gray-300" : "text-gray-200"}`}
  >
    Play Group to 12th | Limited Seats Available
  </p>

  <button
    onClick={() => (window.location.href = "/contact")}
    className="mt-4 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
  >
    Enroll Now
  </button>
</div>

{/* 🔥 Mobile Text (Below Image) */}
<div
  className={`block md:hidden p-4 text-center
  ${theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"}`}
>
  <h2 className="text-lg font-bold">
    Admission Open 🎓
  </h2>

  <p className="text-sm mt-1">
    Play Group to 12th | Limited Seats Available
  </p>

  <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 md:hidden">
  <button className="bg-yellow-400 px-6 py-3 rounded-full shadow-lg">
    Enroll Now
  </button>
</div>
</div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}