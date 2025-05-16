import React from "react";
import ProjectCarousel from "./project-carousel";

const FeaturedProjects = () => {
  return (
    <section className="w-full py-8">
      <div className="">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Check out some of my best work showcased in this interactive carousel.
        </p>
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default FeaturedProjects;
