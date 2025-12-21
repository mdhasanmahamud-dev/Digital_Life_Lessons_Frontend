import Banner from "../Banner/Banner";
import WhyLearning from "../WhyLearning/WhyLearning";
import Featured from "../Featured/Featured";
import MostSavedLessons from "../MostSavedLessons/MostSavedLessons";
import TopContributors from "../Topcontributors/Topcontributors";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyLearning />
      <Featured />
      <MostSavedLessons />
      <TopContributors />
    </div>
  );
};

export default Home;
