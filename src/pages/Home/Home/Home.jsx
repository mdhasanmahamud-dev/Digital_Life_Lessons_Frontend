import Banner from "../Banner/Banner";
import WhyLearning from "../WhyLearning/WhyLearning";
import Featured from "../Featured/Featured";
import MostSavedLessons from "../MostSavedLessons/MostSavedLessons";
import TopContributors from "../Topcontributors/Topcontributors";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyLearning />
      <Featured />
      <MostSavedLessons />
      <TopContributors />
      <Testimonials/>
    </div>
  );
};

export default Home;
