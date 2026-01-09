import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import SectionTitle from "../../../components/SectionTitle";

const Testimonials = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-24">
      <SectionTitle
        title="What Our Learners Say"
        sub_title="Real feedback from learners who improved their skills using our platform"
      />
      <TestimonialsCard />
    </div>
  );
};

export default Testimonials;
