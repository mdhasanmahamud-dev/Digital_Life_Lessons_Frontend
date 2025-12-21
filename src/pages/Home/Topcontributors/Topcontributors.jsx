import SectionTitle from "../../../components/SectionTitle";
import TopContributorsCards from "./TopContributorsCards";

const TopContributors = () => {
  return (
    <div className="my-10">
      <SectionTitle
        title="Top Contributors of the Week"
        sub_title="Meet the most active creators of this week"
      />
      <TopContributorsCards/>
    </div>
  );
};

export default TopContributors;
