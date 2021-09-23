import React from "react";

const Background = () => {
  return (
    <div className="flex flex-wrap md:-mx-8">
      <div className="w-full md:w-1/3 md:px-8">
        <h5 className="font-bold text-primary text-base uppercase md:text-right mb-10 md:mb-0">
          Background
        </h5>
      </div>
      <div className="w-full md:w-2/3 md:px-8 pl-6 md:pl-12">
        <p className="text-base text-textLight font-light">
          I'm currently a Developer at{" "}
          <span className="text-text">Diagonal Technologies</span>, a
          service-based company based on Sankhamul, Lalitpur building for the
          web with some awesome people. I graduated with{" "}
          <span className="text-text">
            Bachelors in Electronics and Communication Engineering
          </span>{" "}
          after completing four awesome years at{" "}
          <span className="text-text">Pulchowk Campus</span>.
          <br />
          <br />
          As a software developer, I enjoy bridging the gap between engineering
          and design — combining my technical knowledge with my keen eye for
          design to create a beautiful product. My goal is to always build
          applications that are scalable and efficient under the hood while
          providing engaging, pixel-perfect user experiences.
        </p>
      </div>
    </div>
  );
};

export default Background;
