import React from "react";
import MostSavedLessonsCards from "./MostSavedLessonsCards";
import SectionTitle from "../../../components/SectionTitle";

const MostSavedLessons = () => {
  return (
    <div>
      <SectionTitle
        title="Most Saved Lessons"
        sub_title="Discover the lessons that our users loved the most"
      />
      <MostSavedLessonsCards />
    </div>
  );
};

export default MostSavedLessons;
