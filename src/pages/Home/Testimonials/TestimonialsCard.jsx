import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Hasan Mahamud",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review:
      "This platform helped me understand complex topics easily. The lessons are well-structured and practical.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "CSE Student",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    review:
      "I really like the clean UI and smooth learning experience. Saving lessons is super helpful.",
  },
  {
    id: 3,
    name: "Rahim Uddin",
    role: "Junior Developer",
    image: "https://i.pravatar.cc/150?img=56",
    rating: 5,
    review:
      "High-quality content with real-world examples. Perfect for beginners and intermediate learners.",
  },
  {
    id: 4,
    name: "Jannatul Ferdous",
    role: "Web Design Learner",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 4,
    review:
      "Dark mode design looks premium. Lessons are easy to follow and very engaging.",
  },
  {
    id: 5,
    name: "Sabbir Hossain",
    role: "React Learner",
    image: "https://i.pravatar.cc/150?img=22",
    rating: 5,
    review:
      "One of the best learning platforms I have used so far. Highly recommended!",
  },
];

const TestimonialsCard = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper"
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="
              h-full rounded-lg p-6 shadow-lg border
              bg-white border-gray-200
              dark:bg-zinc-950 dark:border-zinc-800
              transition-colors duration-300
            "
          >
            <p
              className="
                text-sm leading-relaxed
                text-gray-600
                dark:text-zinc-400
              "
            >
              “{item.review}”
            </p>

            <div className="mt-6 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="
                  h-12 w-12 rounded-full object-cover border
                  border-gray-300
                  dark:border-zinc-700
                "
              />

              <div>
                <h4
                  className="
                    text-sm font-medium
                    text-gray-900
                    dark:text-white
                  "
                >
                  {item.name}
                </h4>

                <p
                  className="
                    text-xs
                    text-gray-500
                    dark:text-zinc-500
                  "
                >
                  {item.role}
                </p>

                <div className="mt-1 flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsCard;
