import React from "react";
import { useParams } from "react-router";
import CreatorProfileCards from "./CreatorProfileCards";
import PageTitle from "../../../components/PageTitle";

const CreatorProfilePage = () => {
  const { email } = useParams();

  return (
    <div>
      <PageTitle
        title="Creator Profile"
        sub_title="All life lessons created by this author, for you to learn and grow"
      />
      <CreatorProfileCards email={email} />
    </div>
  );
};

export default CreatorProfilePage;
