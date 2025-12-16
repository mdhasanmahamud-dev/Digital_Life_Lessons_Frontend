import SectionTitle from "../../../components/SectionTitle";
import FeaturedCards from "./FeaturedCards";

const Featured = () => {
  return (
    <div>
      <SectionTitle
        title="Featured Lessons"
        sub_title="Handpicked life lessons to inspire your journey"
      />
      <FeaturedCards />
    </div>
  );
};

export default Featured;
