/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills_title">Frontend Development</h3>
      <div className="skills__box">

        <div className="skills__group">
          <div className="skills__data">
          <i class='bx bxl-html5'></i>
            <div>
              <h3 className="skills__name">Html 5</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-css3'></i>
            <div>
              <h3 className="skills__name">CSS 3</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-javascript'></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-bootstrap'></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-react'></i>
            <div>
              <h3 className="skills__name">React JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-git'></i>
            <div>
              <h3 className="skills__name">GIT</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
