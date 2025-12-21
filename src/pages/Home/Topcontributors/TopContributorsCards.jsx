import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TopContributorsCards = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["top-contributors-week"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/lessons/analytics/top-contributors-week"
      );
      return res.data.contributors;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <p className="text-red-500 text-center mt-6">
        Failed to load contributors.
      </p>
    );

  if (!data || data.length === 0)
    return (
      <p className="text-gray-400 text-center mt-6">
        No contributors found this week.
      </p>
    );

  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={15}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((contributor) => (
          <SwiperSlide key={contributor._id}>
            <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <img
                src={contributor.photo}
                alt={contributor.name}
                className="w-24 h-24 rounded-full border-2 border-emerald-500 mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-white mb-1">
                {contributor.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2 truncate w-full">
                {contributor._id}
              </p>
              <span className="bg-emerald-500 text-black text-sm font-medium px-3 py-1 rounded-full">
                {contributor.totalLessons} Lessons
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopContributorsCards;
