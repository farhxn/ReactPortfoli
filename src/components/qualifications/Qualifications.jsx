import React, { useState } from "react";
import "./qualification.css";

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
    <section className="qualifications section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i class="uil uil-graduation-cap qualification__icon"></i>Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i class="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>

        <div className="qualification__section">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelors of Science in Computer Science </h3>
                <span className="qualification__subtitle">Muhammad Ali Jinnah University - Karachi</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Diploma in Software Engineering</h3>
                <span className="qualification__subtitle">Aptech - Karachi</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
              <h3 className="qualification__title">Intermediate</h3>
              <span className="qualification__subtitle">Kent College of Science and Commerce - KHI</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">The Educator School -KHI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2006 - 2020
                </div>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">PHP Coure Internship</h3>
              <span className="qualification__subtitle">New Tech Era - Karachi</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2022 - June
              </div>
            </div>

            <div>
              <span className="qualification__rounder"> </span>
              <span className="qualification__line"></span>
            </div>
          </div>

    {/*      <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"> </span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">inter</h3>
              <span className="qualification__subtitle">Karachi - MAJU</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2022 - Present
              </div>
            </div>
          </div>
    */}

        </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
