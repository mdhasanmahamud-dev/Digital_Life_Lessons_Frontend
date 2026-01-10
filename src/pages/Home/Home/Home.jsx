import Banner from "../Banner/Banner";
import WhyLearning from "../WhyLearning/WhyLearning";
import Featured from "../Featured/Featured";
import MostSavedLessons from "../MostSavedLessons/MostSavedLessons";
import TopContributors from "../Topcontributors/Topcontributors";
import Testimonials from "../Testimonials/Testimonials";
import Subscription from "../Subscription/Subscription";
import HowItWorks from "../HowItWorks/HowItWorks";
import Achievements from "../Achievements/Achievements";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyLearning />
      <Featured />
      <MostSavedLessons />
      <TopContributors />
      <Testimonials/>
      <Subscription/>
      <HowItWorks/>
      <Achievements/>
    </div>
  );
};

export default Home;
