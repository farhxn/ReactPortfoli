import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class="bx bx-award about__icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about__subtitle">3 Month</span>
      </div>
      <div className="about__box ">
      <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about_title">Projects</h3>
        <span className="about__subtitle">20+ Projects</span>
      </div>
      <div className="about__box">
      <i class="bx bx-support about__icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
