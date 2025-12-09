import React from "react";
import PageTitle from "../../../components/PageTitle";
import PublicLessonsCards from "../PublicLessonsCards/PublicLessonsCards";

const PublicLessons = () => {
  return (
    <div>
      <PageTitle
        title="Public Life Lessons"
        sub_title="Explore valuable lessons shared by people around the world"
      />
      <PublicLessonsCards />
    </div>
  );
};

export default PublicLessons;
