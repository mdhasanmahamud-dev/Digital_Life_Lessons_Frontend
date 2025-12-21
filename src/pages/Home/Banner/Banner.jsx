import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const bannerSlides = [
    {
      id: 1,
      title: "Learn From Experience",
      description: "Discover valuable life lessons and insights shared by our community.",
      image: "https://i.ibb.co.com/jPN8RPP3/Slide-img-1.jpg",
    },
    {
      id: 2,
      title: "Grow Your Knowledge",
      description: "Track your learning progress and explore lessons across various categories.",
      image: "https://i.ibb.co.com/KjfsPfYx/Slide-img-2.jpg",
    },
    {
      id: 3,
      title: "Share Your Wisdom",
      description: "Contribute your personal experiences to help others grow and learn.",
      image: "https://i.ibb.co.com/fV2wKWxW/Slide-img-3.jpg",
    },
    {
      id: 4,
      title: "Unlock Premium Content",
      description: "Upgrade to Premium to access exclusive lessons and advanced insights.",
      image: "https://i.ibb.co.com/VW1ksg4r/Slide-img-4.jpg",
    },
  ];

  return (
    <Swiper
      navigation={true}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {bannerSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/50"></div>

            {/* Text Content */}
            <div className="absolute bottom-20 left-5 md:left-20 max-w-md md:max-w-lg bg-black/30 backdrop-blur-md p-6 rounded-lg">
              <h3 className="text-white text-xl md:text-3xl font-extrabold mb-2">
                {slide.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;


