import React from "react";
import UpgradeCard from "../UpgradeCard/UpgradeCard";
import PageTitle from "../../../components/PageTitle";

const Upgrade = () => {
  return (
    <div>
      <PageTitle
        title="Upgrade Your Plan"
        sub_title="
          Choose the perfect plan for your learning needs."
      />
      <UpgradeCard />
    </div>
  );
};

export default Upgrade;
